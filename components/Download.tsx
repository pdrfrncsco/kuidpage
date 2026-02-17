
import React from 'react';
import { Download as DownloadIcon, Apple, Play } from 'lucide-react';

const Download: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-deep-blue to-slate-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto bg-tech-green/5 border border-tech-green/20 rounded-[48px] p-12 lg:p-20 relative overflow-hidden">
          {/* Background Decorative Element */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-tech-green opacity-5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8">Baixe agora a KUID</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Comece hoje mesmo a usar o seu endereço digital. Disponível para todas as plataformas móveis.
          </p>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            <a href="https://github.com/pdrfrncsco/kuid-app/releases/download/v1.0.2/kuidapp-beta-v1-0-2.apk" className="w-full lg:w-auto flex items-center justify-center gap-4 bg-white text-slate-900 px-8 py-5 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all transform hover:-translate-y-1 active:translate-y-0">
              <DownloadIcon size={24} /> 
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-slate-500 leading-none mb-1">Download Manual</p>
                <p className="leading-none">Baixar APK</p>
              </div>
            </a>
            
            <a href="#" className="w-full lg:w-auto flex items-center justify-center gap-4 bg-slate-800 text-white px-8 py-5 rounded-2xl font-black text-lg hover:bg-slate-700 transition-all border border-white/10 transform hover:-translate-y-1 active:translate-y-0">
              <Play size={24} className="fill-current" /> 
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-slate-500 leading-none mb-1">GET IT ON</p>
                <p className="leading-none">Google Play</p>
              </div>
            </a>
            
            <a href="#" className="w-full lg:w-auto flex items-center justify-center gap-4 bg-slate-800 text-white px-8 py-5 rounded-2xl font-black text-lg hover:bg-slate-700 transition-all border border-white/10 transform hover:-translate-y-1 active:translate-y-0">
              <Apple size={24} className="fill-current" /> 
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-slate-500 leading-none mb-1">Download on the</p>
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
