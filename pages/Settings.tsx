import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Key, Bell, Shield, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import ApiKeyManager from '../components/settings/ApiKeyManager';

type TabType = 'profile' | 'api-keys' | 'notifications' | 'security';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('api-keys');
  const { isAuthenticated, logout, isLoading } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-light-bg dark:bg-deep-navy flex items-center justify-center pt-24">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tech-green"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const tabs = [
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'api-keys', label: 'API Keys', icon: Key },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'security', label: 'Segurança', icon: Shield },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'api-keys':
        return <ApiKeyManager />;
      case 'profile':
        return (
          <div className="text-center py-12">
            <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Perfil
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Funcionalidade em breve...
            </p>
          </div>
        );
      case 'notifications':
        return (
          <div className="text-center py-12">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Notificações
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Funcionalidade em breve...
            </p>
          </div>
        );
      case 'security':
        return (
          <div className="space-y-6">
            <div className="text-center py-12">
              <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Segurança
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Funcionalidade em breve...
              </p>
            </div>
            <button 
              onClick={() => {
                logout();
                navigate('/');
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors font-semibold shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-800"
            >
              <LogOut className="w-4 h-4" />
              Terminar Sessão
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-deep-navy pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Configurações</h1>
          <p className="text-gray-600 dark:text-gray-300">Gerencie a sua conta e preferências</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-64 flex-shrink-0">
            <nav className="bg-white dark:bg-gray-800 rounded-xl p-2 shadow-lg">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all border font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuid-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-800 ${
                      isActive
                        ? 'bg-kuid-gradient text-slate-950 border-transparent shadow-lg shadow-kuid-cyan/10 dark:text-white'
                        : 'text-gray-700 dark:text-gray-300 border-transparent hover:bg-gray-100 hover:border-gray-200 dark:hover:bg-gray-700 dark:hover:border-gray-600'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-inherit' : 'text-kuid-blue dark:text-kuid-cyan'}`} />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
