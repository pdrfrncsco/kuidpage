import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService, User, ApiKey, AuthResponse } from '../services/auth';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: {
    username: string;
    email: string;
    password: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
  }) => Promise<AuthResponse>;
  logout: () => void;
  apiKey: ApiKey | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [apiKey, setApiKey] = useState<ApiKey | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = () => {
      const storedUser = authService.getUser();
      if (storedUser) {
        setUser(storedUser);
      }
      setIsLoading(false);
    };
    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await authService.login({ email, password });
    setUser(response.user);
    
    if (response.api_keys && response.api_keys.length > 0) {
      const firstKey = response.api_keys[0];
      setApiKey(firstKey);
      if (firstKey.key) {
        localStorage.setItem('kuid_api_key', firstKey.key);
      }
    }
  };

  const register = async (data: {
    username: string;
    email: string;
    password: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
  }) => {
    const response = await authService.register(data);
    setUser(response.user);
    
    if (response.api_key) {
      setApiKey(response.api_key);
      if (response.api_key.key) {
        localStorage.setItem('kuid_api_key', response.api_key.key);
      }
    }
    
    return response;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setApiKey(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        apiKey,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
