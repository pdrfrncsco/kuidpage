
import React from 'react';
import { Download as DownloadIcon, Apple, Play } from 'lucide-react';

const Download: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-deep-navy dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto bg-white dark:bg-kuid-green/5 border border-gray-200 dark:border-kuid-green/20 rounded-[48px] p-12 lg:p-20 relative overflow-hidden shadow-2xl dark:shadow-none">
          {/* Background Decorative Element */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-kuid-green opacity-5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          
          <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-8">Baixe agora a KUID</h2>
          <p className="text-xl text-gray-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Comece hoje mesmo a usar o seu endereço digital. Disponível para todas as plataformas móveis.
          </p>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            <a href="https://github.com/pdrfrncsco/kuid-app/releases/download/v1.0.2/kuidapp-beta-v1-0-2.apk" className="w-full lg:w-auto flex items-center justify-center gap-4 bg-gray-900 text-white dark:bg-white dark:text-slate-900 px-8 py-5 rounded-2xl font-black text-lg hover:bg-gray-800 dark:hover:bg-slate-200 transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg dark:shadow-none">
              <DownloadIcon size={24} /> 
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-gray-400 dark:text-slate-500 leading-none mb-1">Download Manual</p>
                <p className="leading-none">Baixar APK</p>
              </div>
            </a>
            
            <a href="#" className="w-full lg:w-auto flex items-center justify-center gap-4 bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-white px-8 py-5 rounded-2xl font-black text-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-all border border-gray-200 dark:border-white/10 transform hover:-translate-y-1 active:translate-y-0">
              <Play size={24} className="fill-current" /> 
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-gray-500 dark:text-slate-500 leading-none mb-1">GET IT ON</p>
                <p className="leading-none">Google Play</p>
              </div>
            </a>
            
            <a href="#" className="w-full lg:w-auto flex items-center justify-center gap-4 bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-white px-8 py-5 rounded-2xl font-black text-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-all border border-gray-200 dark:border-white/10 transform hover:-translate-y-1 active:translate-y-0">
              <Apple size={24} className="fill-current" /> 
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-gray-500 dark:text-slate-500 leading-none mb-1">Download on the</p>
                <p className="leading-none">App Store</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
