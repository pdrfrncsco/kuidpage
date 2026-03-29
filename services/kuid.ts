const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://kuidapi.ndeas.cloud/api/v1';

export interface KUIDAddress {
  kuid: string;
  latitude: number;
  longitude: number;
  label: string;
  type?: string;
  visibility?: string;
  description?: string;
  created_at?: string;
}

export interface CreateKUIDRequest {
  latitude: number;
  longitude: number;
  accuracy?: number;
  type?: string;
  label?: string;
  visibility?: 'public' | 'private';
}

export interface KUIDError {
  error: string;
  status?: number;
}

class KUIDService {
  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    
    const apiKey = localStorage.getItem('kuid_api_key');
    if (apiKey) {
      headers['Authorization'] = `ApiKey ${apiKey}`;
    }
    
    return headers;
  }

  async lookupKUID(kuid: string): Promise<KUIDAddress> {
    const response = await fetch(`${API_BASE_URL}/addresses/${kuid}/`, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || `Error: ${response.status}`);
    }

    return response.json();
  }

  async createKUID(data: CreateKUIDRequest): Promise<KUIDAddress> {
    const response = await fetch(`${API_BASE_URL}/addresses/`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || `Error: ${response.status}`);
    }

    return response.json();
  }

  async listAddresses(page: number = 1, pageSize: number = 25): Promise<{ results: KUIDAddress[]; count: number }> {
    const response = await fetch(`${API_BASE_URL}/addresses/?page=${page}&page_size=${pageSize}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || `Error: ${response.status}`);
    }

    return response.json();
  }

  setApiKey(apiKey: string): void {
    localStorage.setItem('kuid_api_key', apiKey);
  }

  clearApiKey(): void {
    localStorage.removeItem('kuid_api_key');
  }

  getApiKey(): string | null {
    return localStorage.getItem('kuid_api_key');
  }
}

export const kuidService = new KUIDService();
export default kuidService;
