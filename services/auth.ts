const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface AuthTokens {
  refresh: string;
  access: string;
}

export interface ApiKey {
  id: number;
  name: string;
  key: string;
  key_prefix: string;
  scope: string;
}

export interface AuthResponse {
  user: User;
  tokens: AuthTokens;
  api_key?: ApiKey;
  api_keys?: ApiKey[];
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

class AuthService {
  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    return headers;
  }

  private handleResponse<T>(response: Response): Promise<T> {
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

  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/register/`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });
    const result = await this.handleResponse<AuthResponse>(response);
    
    if (result.tokens) {
      localStorage.setItem('access_token', result.tokens.access);
      localStorage.setItem('refresh_token', result.tokens.refresh);
      localStorage.setItem('user', JSON.stringify(result.user));
    }
    
    return result;
  }

  async login(data: LoginData): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/login/`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });
    const result = await this.handleResponse<AuthResponse>(response);
    
    if (result.tokens) {
      localStorage.setItem('access_token', result.tokens.access);
      localStorage.setItem('refresh_token', result.tokens.refresh);
      localStorage.setItem('user', JSON.stringify(result.user));
    }
    
    return result;
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    localStorage.removeItem('kuid_api_key');
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }

  getUser(): User | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

  async refreshToken(): Promise<AuthTokens | null> {
    const refresh = this.getRefreshToken();
    if (!refresh) return null;

    try {
      const response = await fetch(`${API_BASE_URL}/api/token/refresh/`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({ refresh }),
      });
      
      if (!response.ok) {
        this.logout();
        return null;
      }

      const tokens = await response.json();
      localStorage.setItem('access_token', tokens.access);
      return tokens;
    } catch {
      this.logout();
      return null;
    }
  }
}

export const authService = new AuthService();
export default authService;
