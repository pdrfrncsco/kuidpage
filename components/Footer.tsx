
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/kuid-white.png" alt="KUID Logo" className="w-10 h-10" />
              <span className="text-2xl font-extrabold tracking-tight text-white">KUID</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Identidade digital de endereçamento para um mundo sem barreiras geográficas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-tech-green transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-tech-green transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-tech-green transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-tech-green transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Plataforma</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-tech-green transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-tech-green transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-tech-green transition-colors">API para Integração</a></li>
              <li><a href="#" className="hover:text-tech-green transition-colors">Casos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-tech-green transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-tech-green transition-colors">Termos e Condições</a></li>
              <li><a href="#" className="hover:text-tech-green transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-tech-green transition-colors">Trabalhe Connosco</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-tech-green" />
                <span>ndeasdigital@gmail.com</span>
              </li>
              <li><a href="#" className="hover:text-tech-green transition-colors text-xs leading-relaxed italic">
                Luanda, Angola. <br />
                AO-LUA-LUA-EEJT
              </a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} KUID Endereçamento Digital. Todos os direitos reservados.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-2">
            Desenvolvido com <span className="text-tech-green">❤</span> em Angola
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
