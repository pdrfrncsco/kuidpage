
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin, User, LogOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../hooks/useAuth';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'O Problema', to: '/#problema' },
    { name: 'Solução', to: '/#solucao' },
    { name: 'Como Funciona', to: '/#como-funciona' },
    { name: 'Para Quem?', to: '/#para-quem' },
    { name: 'Docs', to: '/docs' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 dark:bg-deep-navy/80 backdrop-blur-xl py-3 shadow-2xl border-b border-gray-200 dark:border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/kuidapp.png" alt="KUID Logo" className="w-10 h-10" />
          <span className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white transition-colors">KUID</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.to} 
              className="text-sm font-semibold text-gray-600 dark:text-slate-400 hover:text-kuid-cyan dark:hover:text-kuid-cyan transition-colors"
            >
              {item.name}
            </Link>
          ))}
          {isAuthenticated ? (
            <>
              <Link to="/settings" className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-slate-400 hover:text-kuid-cyan">
                <User className="w-4 h-4" />
                {user?.first_name || user?.username}
              </Link>
              <button
                onClick={logout}
                className="p-2 text-gray-600 dark:text-slate-400 hover:text-red-600 transition-colors"
                title="Sair"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-semibold text-gray-600 dark:text-slate-400 hover:text-kuid-cyan">
                Entrar
              </Link>
              <Link to="/register" className="bg-kuid-gradient hover:opacity-90 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-kuid-cyan/20">
                Criar Conta
              </Link>
            </>
          )}
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button className="text-gray-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-deep-navy border-t border-gray-200 dark:border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300 shadow-xl">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.to} 
              className="text-lg font-medium text-gray-700 dark:text-slate-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          {isAuthenticated ? (
            <>
              <Link 
                to="/settings" 
                className="text-lg font-medium text-gray-700 dark:text-slate-300"
                onClick={() => setIsOpen(false)}
              >
                <User className="w-5 h-5 inline mr-2" />
                {user?.first_name || user?.username}
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="text-lg font-medium text-red-600"
              >
                <LogOut className="w-5 h-5 inline mr-2" />
                Sair
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="text-lg font-medium text-gray-700 dark:text-slate-300"
                onClick={() => setIsOpen(false)}
              >
                Entrar
              </Link>
              <Link 
                to="/register" 
                className="bg-kuid-gradient text-white px-6 py-4 rounded-xl text-lg font-bold text-center"
                onClick={() => setIsOpen(false)}
              >
                Criar Conta
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
