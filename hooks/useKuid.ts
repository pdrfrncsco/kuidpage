import { useState, useCallback } from 'react';
import { kuidService, KUIDAddress, CreateKUIDRequest } from '../services/kuid';

interface UseKUIDResult {
  address: KUIDAddress | null;
  loading: boolean;
  error: string | null;
  lookupKUID: (kuid: string) => Promise<KUIDAddress | null>;
  createKUID: (data: CreateKUIDRequest) => Promise<KUIDAddress | null>;
  clearError: () => void;
}

export function useKUID(): UseKUIDResult {
  const [address, setAddress] = useState<KUIDAddress | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const lookupKUID = useCallback(async (kuid: string): Promise<KUIDAddress | null> => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await kuidService.lookupKUID(kuid);
      setAddress(result);
      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to lookup KUID';
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const createKUID = useCallback(async (data: CreateKUIDRequest): Promise<KUIDAddress | null> => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await kuidService.createKUID(data);
      setAddress(result);
      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create KUID';
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    address,
    loading,
    error,
    lookupKUID,
    createKUID,
    clearError,
  };
}

export function useKUIDApiKey() {
  const [apiKey, setApiKeyState] = useState<string>(() => kuidService.getApiKey() || '');

  const setApiKey = useCallback((key: string) => {
    kuidService.setApiKey(key);
    setApiKeyState(key);
  }, []);

  const clearApiKey = useCallback(() => {
    kuidService.clearApiKey();
    setApiKeyState('');
  }, []);

  const hasApiKey = apiKey.length > 0;

  return {
    apiKey,
    setApiKey,
    clearApiKey,
    hasApiKey,
  };
}
