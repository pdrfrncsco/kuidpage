import { API_CONFIG } from './api';

const API_BASE_URL = API_CONFIG.addressesBase;

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

interface KUIDApiAddress {
  kuid: string;
  label: string;
  type?: string;
  visibility?: string;
  description?: string;
  created_at?: string;
  latitude?: number;
  longitude?: number;
  latest_location?: {
    latitude: number;
    longitude: number;
    accuracy?: number;
  };
}

class KUIDService {
  private async parseJsonResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('content-type') || '';

    if (!contentType.includes('application/json')) {
      const body = await response.text();
      if (body.trim().startsWith('<!doctype') || body.trim().startsWith('<html')) {
        throw new Error('A app recebeu HTML em vez de JSON. Verifique a URL da API no ambiente de desenvolvimento.');
      }
      throw new Error('Resposta inválida da API.');
    }

    return response.json() as Promise<T>;
  }

  private normalizeAddress(data: KUIDApiAddress): KUIDAddress {
    return {
      kuid: data.kuid,
      label: data.label,
      type: data.type,
      visibility: data.visibility,
      description: data.description,
      created_at: data.created_at,
      latitude: data.latitude ?? data.latest_location?.latitude ?? 0,
      longitude: data.longitude ?? data.latest_location?.longitude ?? 0,
    };
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    
    const apiKey = localStorage.getItem('kuid_api_key');
    if (apiKey) {
      headers['Authorization'] = `ApiKey ${apiKey}`;
    }
    
    return headers;
  }

  async lookupKUID(kuid: string): Promise<KUIDAddress> {
    const response = await fetch(`${API_BASE_URL}/${kuid}/`, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      const error = await this.parseJsonResponse<{ error?: string }>(response).catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || `Error: ${response.status}`);
    }

    const data = await this.parseJsonResponse<KUIDApiAddress>(response);
    return this.normalizeAddress(data);
  }

  async createKUID(data: CreateKUIDRequest): Promise<KUIDAddress> {
    const response = await fetch(`${API_BASE_URL}/`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await this.parseJsonResponse<{ error?: string }>(response).catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || `Error: ${response.status}`);
    }

    const responseData = await this.parseJsonResponse<KUIDApiAddress>(response);
    return this.normalizeAddress(responseData);
  }

  async listAddresses(page: number = 1, pageSize: number = 25): Promise<{ results: KUIDAddress[]; count: number }> {
    const response = await fetch(`${API_BASE_URL}/me/?page=${page}&page_size=${pageSize}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      const error = await this.parseJsonResponse<{ error?: string }>(response).catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || `Error: ${response.status}`);
    }

    const data = await this.parseJsonResponse<KUIDApiAddress[]>(response);
    return {
      count: data.length,
      results: data.map((item) => this.normalizeAddress(item)),
    };
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
