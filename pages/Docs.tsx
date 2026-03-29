import React, { useState } from 'react';
import { Copy, Check, Code, BookOpen, Zap, Shield, ExternalLink } from 'lucide-react';
import KUIDDisplay from '../components/kuid/KUIDDisplay';
import { useKUID } from '../hooks/useKuid';

const CodeBlock: React.FC<{ code: string; language?: string }> = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
        <code>{code}</code>
      </pre>
      <button
        onClick={copyCode}
        className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-300" />}
      </button>
    </div>
  );
};

const Docs: React.FC = () => {
  const { address, loading, error, lookupKUID } = useKUID();
  const [testKuid, setTestKuid] = useState('AO-LUA-LUA-EEJT');

  const snippets = {
    curl: `# Lookup KUID
curl -X GET "https://kuidapi.ndeas.cloud/api/v1/addresses/AO-LUA-LUA-EEJT/" \\
  -H "Authorization: ApiKey YOUR_API_KEY"

# Create KUID
curl -X POST "https://kuidapi.ndeas.cloud/api/v1/addresses/" \\
  -H "Authorization: ApiKey YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"latitude": -8.9035, "longitude": 13.2017, "label": "My Home", "type": "residential"}'`,
    
    javascript: `// Using fetch
const response = await fetch('https://kuidapi.ndeas.cloud/api/v1/addresses/AO-LUA-LUA-EEJT/', {
  headers: {
    'Authorization': 'ApiKey YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});
const data = await response.json();
console.log(data);`,

    python: `import requests

# Lookup KUID
response = requests.get(
    'https://kuidapi.ndeas.cloud/api/v1/addresses/AO-LUA-LUA-EEJT/',
    headers={'Authorization': 'ApiKey YOUR_API_KEY'}
)
print(response.json())

# Create KUID
response = requests.post(
    'https://kuidapi.ndeas.cloud/api/v1/addresses/',
    headers={'Authorization': 'ApiKey YOUR_API_KEY'},
    json={
        'latitude': -8.9035,
        'longitude': 13.2017,
        'label': 'My Home',
        'type': 'residential'
    }
)`,

    react: `import { useKUID } from '@kuid/react';

function App() {
  const { address, loading, error, lookupKUID } = useKUID();
  
  return (
    <div>
      <button onClick={() => lookupKUID('AO-LUA-LUA-EEJT')}>
        Buscar Endereço
      </button>
      {address && <KUIDDisplay address={address} />}
    </div>
  );
}`,
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-deep-navy">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            KUID Developer Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Integre o sistema de endereçamento digital de Angola na sua aplicação
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section id="quickstart" className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-tech-green" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Início Rápido</h2>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">1. Autenticação</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Obtain your API key from the KUID dashboard and include it in the Authorization header.
                </p>
                <CodeBlock code={snippets.curl.split('\n\n')[0]} />

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">2. Lookup de KUID</h3>
                <CodeBlock code={snippets.curl.split('\n\n')[0]} />

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">3. Criar KUID</h3>
                <CodeBlock code={snippets.curl.split('\n\n')[1]} />
              </div>
            </section>

            <section id="snippets" className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-tech-green" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Code Snippets</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">JavaScript</h3>
                  <CodeBlock code={snippets.javascript} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Python</h3>
                  <CodeBlock code={snippets.python} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">React</h3>
                  <CodeBlock code={snippets.react} />
                </div>
              </div>
            </section>

            <section id="api-reference" className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-tech-green" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">API Reference</h2>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-tech-green pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">GET /addresses/{'{kuid}'}/</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">Retrieve address information by KUID code.</p>
                  <div className="mt-3 space-y-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-mono">401</span> - Invalid API Key</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-mono">404</span> - KUID not found</p>
                  </div>
                </div>

                <div className="border-l-4 border-tech-green pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">POST /addresses/</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">Create a new KUID address.</p>
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Request Body:</p>
                    <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-sm font-mono">
{`{
  "latitude": -8.9035,
  "longitude": 13.2017,
  "accuracy": 10.0,
  "type": "residential",
  "label": "My Home",
  "visibility": "public"
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            <section id="security" className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-tech-green" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Security</h2>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  Never expose API keys in frontend code
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  Use backend proxy for sensitive operations
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  Rotate API keys periodically
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  Always validate user inputs
                </li>
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg sticky top-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Teste a API</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  value={testKuid}
                  onChange={(e) => setTestKuid(e.target.value)}
                  placeholder="Digite o KUID"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-tech-green focus:border-transparent"
                />
                <button
                  onClick={() => lookupKUID(testKuid)}
                  disabled={loading}
                  className="w-full px-4 py-2 bg-tech-green text-white rounded-lg hover:bg-tech-green/90 disabled:opacity-50 transition-colors"
                >
                  {loading ? 'Buscando...' : 'Buscar'}
                </button>
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {address && (
                <div className="mt-4">
                  <KUIDDisplay address={address} />
                </div>
              )}
            </section>

            <section className="bg-gradient-to-br from-tech-green to-green-600 rounded-xl p-6 shadow-lg text-white">
              <h3 className="text-lg font-bold mb-3">Precisa de ajuda?</h3>
              <p className="text-sm mb-4 opacity-90">
                Join our developer community and get support.
              </p>
              <a
                href="https://discord.gg/kuid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-white text-tech-green rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Join Discord
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
