import React, { useState, useEffect } from 'react';
import { Key, Plus, Trash2, Copy, Check, AlertTriangle, X, Loader2 } from 'lucide-react';
import { apiKeyService, ApiKey } from '../../services/apiKeys';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  apiKey: ApiKey | null;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, apiKey }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !apiKey) return null;

  const copyKey = () => {
    if (apiKey.key) {
      navigator.clipboard.writeText(apiKey.key);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 max-w-lg w-full mx-4 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="text-center">
          <div className="mx-auto w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Guarde a sua API Key
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Esta chave não será mostrada novamente. Guarde-a num local seguro.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
          <code className="text-sm font-mono break-all text-gray-800 dark:text-gray-200">
            {apiKey.key}
          </code>
        </div>

        <button
          onClick={copyKey}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-tech-green text-white rounded-lg hover:bg-tech-green/90 transition-colors"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Copiado!' : 'Copiar para clipboard'}
        </button>
      </div>
    </div>
  );
};

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  loading?: boolean;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose, onConfirm, title, message, loading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{message}</p>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : 'Revogar'}
          </button>
        </div>
      </div>
    </div>
  );
};

const ApiKeyManager: React.FC = () => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [newApiKey, setNewApiKey] = useState<ApiKey | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [keyToDelete, setKeyToDelete] = useState<ApiKey | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    scope: 'read' as 'read' | 'write' | 'full',
  });

  useEffect(() => {
    fetchApiKeys();
  }, []);

  const fetchApiKeys = async () => {
    try {
      setLoading(true);
      const keys = await apiKeyService.getApiKeys();
      setApiKeys(keys);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar API Keys');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setCreateLoading(true);
      const key = await apiKeyService.createApiKey(formData);
      setNewApiKey(key);
      setShowModal(true);
      setShowCreateForm(false);
      setFormData({ name: '', scope: 'read' });
      fetchApiKeys();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao criar API Key');
    } finally {
      setCreateLoading(false);
    }
  };

  const handleRevoke = async () => {
    if (!keyToDelete) return;
    try {
      setDeleteLoading(true);
      await apiKeyService.revokeApiKey(keyToDelete.id);
      setShowDeleteModal(false);
      setKeyToDelete(null);
      fetchApiKeys();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao revogar API Key');
    } finally {
      setDeleteLoading(false);
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('pt-AO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const getScopeBadge = (scope: string) => {
    const colors = {
      read: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
      write: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
      full: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
    };
    return colors[scope as keyof typeof colors] || colors.read;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin text-tech-green" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">API Keys</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Gerencie as chaves de acesso à API
          </p>
        </div>
        {!showCreateForm && (
          <button
            onClick={() => setShowCreateForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-tech-green text-white rounded-lg hover:bg-tech-green/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Nova API Key
          </button>
        )}
      </div>

      {error && (
        <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
          {error}
        </div>
      )}

      {showCreateForm && (
        <form onSubmit={handleCreate} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">Criar Nova API Key</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nome
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="ex: Minha App"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-tech-green focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Permissões
            </label>
            <select
              value={formData.scope}
              onChange={(e) => setFormData({ ...formData, scope: e.target.value as 'read' | 'write' | 'full' })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-tech-green focus:border-transparent"
            >
              <option value="read">Leitura</option>
              <option value="write">Escrita</option>
              <option value="full">Completo</option>
            </select>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setShowCreateForm(false)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={createLoading}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-tech-green text-white rounded-lg hover:bg-tech-green/90 transition-colors disabled:opacity-50"
            >
              {createLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              Criar
            </button>
          </div>
        </form>
      )}

      {apiKeys.length === 0 && !showCreateForm ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <Key className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Nenhuma API Key
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Crie a sua primeira chave de API para começar
          </p>
          <button
            onClick={() => setShowCreateForm(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-tech-green text-white rounded-lg hover:bg-tech-green/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Criar API Key
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {apiKeys.map((key) => (
            <div
              key={key.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${key.is_active ? 'bg-tech-green/10' : 'bg-gray-100 dark:bg-gray-700'}`}>
                    <Key className={`w-5 h-5 ${key.is_active ? 'text-tech-green' : 'text-gray-400'}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{key.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                      {key.key_prefix}...
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getScopeBadge(key.scope)}`}>
                    {key.scope_display}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    key.is_active 
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    {key.is_active ? 'Ativa' : 'Inativa'}
                  </span>
                  {key.is_active && (
                    <button
                      onClick={() => {
                        setKeyToDelete(key);
                        setShowDeleteModal(true);
                      }}
                      className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Criada em {formatDate(key.created_at)}</span>
                <span>{key.requests_count} pedidos</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <ApiKeyModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setNewApiKey(null);
        }}
        apiKey={newApiKey}
      />

      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setKeyToDelete(null);
        }}
        onConfirm={handleRevoke}
        title="Revogar API Key"
        message={`Tem a certeza que deseja revogar a API Key "${keyToDelete?.name}"? Esta ação não pode ser desfeita.`}
        loading={deleteLoading}
      />
    </div>
  );
};

export default ApiKeyManager;
