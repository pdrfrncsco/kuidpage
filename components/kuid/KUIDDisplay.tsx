import React from 'react';
import { MapPin, Copy, ExternalLink } from 'lucide-react';
import { KUIDAddress } from '../../services/kuid';

interface KUIDDisplayProps {
  address: KUIDAddress;
  showMapLink?: boolean;
}

const KUIDDisplay: React.FC<KUIDDisplayProps> = ({ address, showMapLink = true }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const openInMaps = () => {
    const url = `https://www.google.com/maps?q=${address.latitude},${address.longitude}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-tech-green/10 p-3 rounded-full">
            <MapPin className="w-6 h-6 text-tech-green" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {address.kuid}
            </h3>
            {address.label && (
              <p className="text-gray-600 dark:text-gray-300">{address.label}</p>
            )}
          </div>
        </div>
        <button
          onClick={() => copyToClipboard(address.kuid)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          title="Copy KUID"
        >
          <Copy className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Latitude:</span>
          <span className="font-mono text-gray-900 dark:text-white">{address.latitude}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Longitude:</span>
          <span className="font-mono text-gray-900 dark:text-white">{address.longitude}</span>
        </div>
        {address.type && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Tipo:</span>
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs capitalize">
              {address.type}
            </span>
          </div>
        )}
        {address.visibility && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Visibilidade:</span>
            <span className={`px-2 py-1 rounded text-xs capitalize ${
              address.visibility === 'public' 
                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
            }`}>
              {address.visibility}
            </span>
          </div>
        )}
        {address.description && (
          <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-300">{address.description}</p>
          </div>
        )}
      </div>

      {showMapLink && (
        <button
          onClick={openInMaps}
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-tech-green text-white rounded-lg hover:bg-tech-green/90 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Ver no Mapa
        </button>
      )}
    </div>
  );
};

export default KUIDDisplay;
