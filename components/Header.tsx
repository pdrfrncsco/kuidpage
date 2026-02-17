
import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'O Problema', href: '#problema' },
    { name: 'Solução', href: '#solucao' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Para Quem?', href: '#para-quem' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-deep-navy/80 backdrop-blur-xl py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <img src="/kuidapp.png" alt="KUID Logo" className="w-10 h-10" />
          <span className="text-2xl font-black tracking-tighter text-white">KUID</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-sm font-semibold text-slate-400 hover:text-kuid-cyan transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button className="bg-kuid-gradient hover:opacity-90 text-white px-7 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-kuid-cyan/20">
            Criar meu KUID
          </button>
        </nav>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-deep-navy border-t border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-lg font-medium text-slate-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button className="bg-kuid-gradient text-white px-6 py-4 rounded-xl text-lg font-bold">
            Criar meu KUID
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
