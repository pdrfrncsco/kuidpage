import { API_CONFIG } from './api';

const API_BASE_URL = API_CONFIG.authBase;

export interface ApiKey {
  id: number;
  name: string;
  key_prefix: string;
  scope: 'read' | 'write' | 'full';
  scope_display: string;
  is_active: boolean;
  last_used_at: string | null;
  requests_count: number;
  created_at: string;
  expires_at: string | null;
  key?: string;
}

interface ApiKeyCreateRequest {
  name: string;
  scope?: 'read' | 'write' | 'full';
}

class ApiKeyService {
  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    
    const token = localStorage.getItem('access_token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    return headers;
  }

  private handleResponse<T>(response: Response): Promise<T> {
    if (response.status === 401) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      window.location.href = '/login';
      throw new Error('Sessão expirada. Faça login novamente.');
    }
    if (!response.ok) {
      return response.json().then(err => {
        throw new Error(err.error || err.message || `Error: ${response.status}`);
      });
    }
    if (response.status === 204) {
      return Promise.resolve({} as T);
    }
    return response.json();
  }

  async getApiKeys(): Promise<ApiKey[]> {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('Não autenticado');
    }
    
    const response = await fetch(`${API_BASE_URL}/api-keys/`, {
      method: 'GET',
      headers: this.getHeaders(),
    });
    return this.handleResponse<ApiKey[]>(response);
  }

  async createApiKey(data: ApiKeyCreateRequest): Promise<ApiKey> {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('Não autenticado');
    }
    
    const response = await fetch(`${API_BASE_URL}/api-keys/`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });
    return this.handleResponse<ApiKey>(response);
  }

  async revokeApiKey(id: number): Promise<void> {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('Não autenticado');
    }
    
    const response = await fetch(`${API_BASE_URL}/api-keys/${id}/revoke/`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });
    return this.handleResponse<void>(response);
  }
}

export const apiKeyService = new ApiKeyService();
export default apiKeyService;
