
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-slate-950 border-t border-gray-200 dark:border-white/5 pt-20 pb-10 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/kuidapp.png" alt="KUID Logo" className="w-10 h-10" />
              <span className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white transition-colors">KUID</span>
            </div>
            <p className="text-gray-600 dark:text-slate-500 text-sm leading-relaxed mb-6 transition-colors">
              Identidade digital de endereçamento para um mundo sem barreiras geográficas.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/kuid.app" className="text-gray-500 dark:text-slate-500 hover:text-kuid-green transition-colors"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/kuid.app" className="text-gray-500 dark:text-slate-500 hover:text-kuid-green transition-colors"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/showcase/kuidapp" className="text-gray-500 dark:text-slate-500 hover:text-kuid-green transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6 transition-colors">Plataforma</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-slate-500">
              <li><Link to="/#como-funciona" className="hover:text-kuid-green transition-colors">Como Funciona</Link></li>
              <li><Link to="/#funcionalidades" className="hover:text-kuid-green transition-colors">Funcionalidades</Link></li>
              <li><a href="#" className="hover:text-kuid-green transition-colors">API para Integração</a></li>
              <li><a href="#" className="hover:text-kuid-green transition-colors">Casos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6 transition-colors">Empresa</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-slate-500">
              <li><a href="#" className="hover:text-kuid-green transition-colors">Sobre Nós</a></li>
              <li><Link to="/terms" className="hover:text-kuid-green transition-colors">Termos e Condições</Link></li>
              <li><Link to="/privacy" className="hover:text-kuid-green transition-colors">Política de Privacidade</Link></li>
              <li><a href="#" className="hover:text-kuid-green transition-colors">Trabalhe Connosco</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6 transition-colors">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-slate-500">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-kuid-green" />
                <span>ndeasdigital@gmail.com</span>
              </li>
              <li><a href="#" className="hover:text-kuid-green transition-colors text-xs leading-relaxed italic">
                Luanda, Angola. <br />
                AO-LUA-LUA-EEJT
              </a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 transition-colors">
          <p className="text-gray-500 dark:text-slate-600 text-xs">
            © {new Date().getFullYear()} KUID Endereçamento Digital. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 dark:text-slate-600 text-xs flex items-center gap-2">
            Desenvolvido com <span className="text-kuid-green">❤</span> em Angola
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
