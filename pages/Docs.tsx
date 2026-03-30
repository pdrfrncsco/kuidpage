import React, { useState } from 'react';
import { BookOpen, Check, Code, Copy, ExternalLink, KeyRound, Shield, Workflow, Zap } from 'lucide-react';
import KUIDDisplay from '../components/kuid/KUIDDisplay';
import { useKUID } from '../hooks/useKuid';

const API_BASE_URL = 'https://kuidapi.ndeas.cloud/api/v1';

const CodeBlock: React.FC<{ code: string; language?: string }> = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-gray-950 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm font-mono border border-gray-800">
        <code data-language={language}>{code}</code>
      </pre>
      <button
        onClick={copyCode}
        className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copiar código"
      >
        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-300" />}
      </button>
    </div>
  );
};

const snippets = {
  curlLookup: `curl -X GET "${API_BASE_URL}/addresses/AO-LUA-LUA-ZOLL/" \\
  -H "Authorization: ApiKey SUA_API_KEY" \\
  -H "Content-Type: application/json"`,

  curlCreate: `curl -X POST "${API_BASE_URL}/addresses/" \\
  -H "Authorization: ApiKey SUA_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "latitude": -8.9035,
    "longitude": 13.2017,
    "accuracy": 10,
    "label": "Escritório Central",
    "type": "commercial",
    "visibility": "public"
  }'`,

  frontendEnv: `VITE_API_URL=https://kuidapi.ndeas.cloud/api/v1`,

  javascript: `const API_KEY = 'SUA_API_KEY';
const KUID = 'AO-LUA-LUA-EEJT';

async function buscarEndereco() {
  const response = await fetch(\`${API_BASE_URL}/addresses/\${KUID}/\`, {
    method: 'GET',
    headers: {
      'Authorization': \`ApiKey \${API_KEY}\`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Falha na requisição' }));
    throw new Error(error.error || \`HTTP \${response.status}\`);
  }

  const data = await response.json();
  console.log(data);
}`,

  python: `import requests

API_KEY = "SUA_API_KEY"
BASE_URL = "${API_BASE_URL}"

headers = {
    "Authorization": f"ApiKey {API_KEY}",
    "Content-Type": "application/json",
}

response = requests.get(
    f"{API_BASE_URL}/addresses/AO-LUA-LUA-ZOLL/",
    headers=headers,
    timeout=30,
)

response.raise_for_status()
print(response.json())`,

  djangoProxy: `import requests
from django.conf import settings

class KUIDService:
    def __init__(self):
        self.base_url = settings.KUID_API_BASE_URL
        self.api_key = settings.KUID_API_KEY

    def get_headers(self):
        return {
            "Authorization": f"ApiKey {self.api_key}",
            "Content-Type": "application/json",
        }

    def lookup_kuid(self, kuid: str):
        response = requests.get(
            f"{self.base_url}/addresses/{kuid}/",
            headers=self.get_headers(),
            timeout=30,
        )
        response.raise_for_status()
        return response.json()`,

  responseLookup: `{
  "kuid": "AO-LUA-LUA-EEJT",
  "label": "Escritório Central",
  "type": "commercial",
  "visibility": "public",
  "is_active": true,
  "latest_location": {
    "latitude": -8.9035,
    "longitude": 13.2017,
    "accuracy": 10
  }
}`,

  responseList: `{
  "results": [
    {
      "kuid": "AO-LUA-LUA-EEJT",
      "label": "Escritório Central",
      "type": "commercial",
      "visibility": "public",
      "is_active": true,
      "latest_location": {
        "latitude": -8.9035,
        "longitude": 13.2017,
        "accuracy": 10
      }
    }
  ],
  "count": 1,
  "next": null,
  "previous": null
}`,
};

const integrationSteps = [
  'Gerar a API Key no painel da KUID e armazená-la de forma segura.',
  'Enviar a chave no header Authorization usando o formato ApiKey SUA_API_KEY.',
  'Consumir os endpoints para consultar, criar ou listar endereços digitais.',
  'Tratar erros de autenticação, limite de taxa e recursos inexistentes.',
];

const endpointCards = [
  {
    method: 'GET',
    path: '/addresses/{kuid}/',
    description: 'Consulta um endereço KUID específico a partir do código.',
    auth: 'Obrigatória',
    success: '200 OK',
    errors: ['401 API Key inválida', '404 KUID não encontrado'],
  },
  {
    method: 'POST',
    path: '/addresses/',
    description: 'Cria um novo endereço KUID com base em coordenadas geográficas.',
    auth: 'Obrigatória',
    success: '201 Created',
    errors: ['400 Dados inválidos', '401 API Key inválida', '429 Limite excedido'],
  },
  {
    method: 'GET',
    path: '/addresses/?page=1&page_size=25',
    description: 'Lista endereços cadastrados com paginação.',
    auth: 'Obrigatória',
    success: '200 OK',
    errors: ['401 API Key inválida', '429 Limite excedido'],
  },
];

const securityNotes = [
  'Nunca exponha a API Key em aplicações públicas de frontend sem controlo adicional.',
  'Para operações sensíveis, prefira um backend intermediário que injete a chave no servidor.',
  'Faça rotação periódica das chaves e revogue imediatamente qualquer chave exposta.',
  'Valide latitude, longitude, paginação e formatos de entrada antes de enviar à API.',
];

const errorTable = [
  { code: '401', meaning: 'API Key inválida, ausente ou expirada.' },
  { code: '403', meaning: 'A chave existe, mas não tem permissão para a operação.' },
  { code: '404', meaning: 'O KUID pedido não foi encontrado.' },
  { code: '429', meaning: 'Foi atingido o limite de requisições.' },
  { code: '5xx', meaning: 'Erro interno do serviço remoto. Faça retry com backoff.' },
];

const Docs: React.FC = () => {
  const { address, loading, error, lookupKUID } = useKUID();
  const [testKuid, setTestKuid] = useState('AO-LUA-LUA-EEJT');

  return (
    <div className="min-h-screen bg-light-bg dark:bg-deep-navy">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kuid-green/10 text-kuid-green text-sm font-bold uppercase tracking-[0.2em]">
            <BookOpen className="w-4 h-4" />
            Documentação da API
          </div>
          <h1 className="mt-5 text-4xl lg:text-5xl font-black text-gray-900 dark:text-white max-w-4xl leading-tight">
            Integração KUID para consulta, criação e gestão de endereços digitais
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Esta página explica com exemplos práticos, como autenticar a sua aplicação,
            consumir os endpoints principais da KUID e integrar a API com segurança.
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8">
          <div className="space-y-8">
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-5">
                <Zap className="w-6 h-6 text-tech-green" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Visão Geral</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-gray-50 dark:bg-gray-900/50 p-5 border border-gray-100 dark:border-gray-700">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-bold">Base URL</p>
                  <p className="mt-2 text-gray-900 dark:text-white font-mono break-all">{API_BASE_URL}</p>
                </div>
                <div className="rounded-2xl bg-gray-50 dark:bg-gray-900/50 p-5 border border-gray-100 dark:border-gray-700">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-bold">Autenticação</p>
                  <p className="mt-2 text-gray-900 dark:text-white font-mono">Authorization: ApiKey SUA_API_KEY</p>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {integrationSteps.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 p-4">
                    <div className="w-10 h-10 rounded-xl bg-tech-green/10 text-tech-green flex items-center justify-center font-black">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-5">
                <KeyRound className="w-6 h-6 text-tech-green" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Autenticação e Configuração</h2>
              </div>

              <div className="space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Toda requisição deve incluir a sua API Key no header <span className="font-mono text-gray-900 dark:text-white">Authorization</span>.
                  O formato esperado é <span className="font-mono text-gray-900 dark:text-white">ApiKey SUA_API_KEY</span>.
                </p>
                <p>
                  Em aplicações frontend controladas por si, pode configurar a URL base através da variável
                  <span className="font-mono text-gray-900 dark:text-white"> VITE_API_URL</span>. Em integrações sensíveis, o recomendado é usar um backend
                  intermediário para proteger a chave.
                </p>
                <CodeBlock code={snippets.frontendEnv} language="env" />
                <CodeBlock code={snippets.curlLookup} />
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-5">
                <Workflow className="w-6 h-6 text-tech-green" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Fluxo Recomendado de Integração</h2>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Frontend direto com a API</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Adequado para ambientes internos, protótipos ou apps controladas onde o risco de exposição é aceitável.
                    A aplicação lê a chave, monta o header e chama a API KUID diretamente.
                  </p>
                </div>
                <div className="rounded-2xl border border-tech-green/30 bg-tech-green/5 p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Backend proxy ou serviço intermediário</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-200">
                    Recomendado para produção. O frontend chama o seu backend, e o backend injeta a API Key ao comunicar com a KUID.
                    Isto reduz exposição de credenciais, centraliza logs e facilita controlo de permissões.
                  </p>
                </div>
                <CodeBlock code={snippets.djangoProxy} language="python" />
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-5">
                <BookOpen className="w-6 h-6 text-tech-green" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Referência dos Endpoints</h2>
              </div>

              <div className="space-y-5">
                {endpointCards.map((endpoint) => (
                  <div key={endpoint.path} className="rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-tech-green/10 text-tech-green font-black text-sm">
                        {endpoint.method}
                      </span>
                      <span className="font-mono text-gray-900 dark:text-white break-all">{endpoint.path}</span>
                    </div>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">{endpoint.description}</p>
                    <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
                      <div className="rounded-xl bg-gray-50 dark:bg-gray-900/50 p-4">
                        <p className="text-gray-500 dark:text-gray-400 font-bold">Autenticação</p>
                        <p className="mt-1 text-gray-900 dark:text-white">{endpoint.auth}</p>
                      </div>
                      <div className="rounded-xl bg-gray-50 dark:bg-gray-900/50 p-4">
                        <p className="text-gray-500 dark:text-gray-400 font-bold">Sucesso</p>
                        <p className="mt-1 text-gray-900 dark:text-white">{endpoint.success}</p>
                      </div>
                      <div className="rounded-xl bg-gray-50 dark:bg-gray-900/50 p-4">
                        <p className="text-gray-500 dark:text-gray-400 font-bold">Erros comuns</p>
                        <p className="mt-1 text-gray-900 dark:text-white">{endpoint.errors.join(' • ')}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-5">
                <Code className="w-6 h-6 text-tech-green" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Exemplos de Requisição</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Consultar um KUID com cURL</h3>
                  <CodeBlock code={snippets.curlLookup} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Criar um endereço com cURL</h3>
                  <CodeBlock code={snippets.curlCreate} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">JavaScript / Fetch</h3>
                  <CodeBlock code={snippets.javascript} language="javascript" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Python / Requests</h3>
                  <CodeBlock code={snippets.python} language="python" />
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-5">
                <BookOpen className="w-6 h-6 text-tech-green" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Exemplos de Resposta</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Resposta de consulta</h3>
                  <CodeBlock code={snippets.responseLookup} language="json" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Resposta de listagem paginada</h3>
                  <CodeBlock code={snippets.responseList} language="json" />
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-5">
                <Shield className="w-6 h-6 text-tech-green" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Erros e Segurança</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Códigos de erro</h3>
                  <div className="space-y-3">
                    {errorTable.map((item) => (
                      <div key={item.code} className="rounded-xl border border-gray-200 dark:border-gray-700 p-4">
                        <p className="font-mono text-tech-green font-bold">{item.code}</p>
                        <p className="mt-1 text-gray-600 dark:text-gray-300">{item.meaning}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Boas práticas</h3>
                  <ul className="space-y-3">
                    {securityNotes.map((note) => (
                      <li key={note} className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
                        <Check className="w-5 h-5 text-tech-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg sticky top-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Teste um KUID</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Use o exemplo abaixo para validar rapidamente uma consulta e ver o formato de resposta.
              </p>

              <div className="space-y-3">
                <input
                  type="text"
                  value={testKuid}
                  onChange={(e) => setTestKuid(e.target.value)}
                  placeholder="Digite o KUID"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-tech-green focus:border-transparent"
                />
                <button
                  onClick={() => lookupKUID(testKuid)}
                  disabled={loading}
                  className="w-full px-4 py-3 bg-tech-green text-white rounded-xl hover:bg-tech-green/90 disabled:opacity-50 transition-colors font-semibold"
                >
                  {loading ? 'Consultando...' : 'Consultar KUID'}
                </button>
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl text-sm">
                  {error}
                </div>
              )}

              {address && (
                <div className="mt-4">
                  <KUIDDisplay address={address} />
                </div>
              )}
            </section>

            <section className="bg-gradient-to-br from-kuid-blue via-kuid-cyan to-tech-green rounded-2xl p-6 shadow-lg text-white">
              <h3 className="text-lg font-bold mb-3">Suporte à integração</h3>
              <p className="text-sm mb-4 opacity-95 leading-relaxed">
                Se precisar de apoio para autenticação, consumo de endpoints ou integração no seu backend, a equipa pode ajudar.
              </p>
              <a
                href="mailto:ndeasdigital@gmail.com"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white text-kuid-blue rounded-xl hover:bg-gray-100 transition-colors font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                Contactar suporte
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
