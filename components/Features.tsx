
import React from 'react';
import { Zap, Search, MapPin, Lock, Globe, Building } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    "Geração automática de KUID",
    "Consulta rápida de KUID",
    "Busca Geográfica Reversa",
    "Precisão Submétrica",
    "Protocolo Block-Address",
    "SDK para Aplicações",
  ];

  const icons = [
    <Zap className="w-5 h-5" />,
    <Search className="w-5 h-5" />,
    <MapPin className="w-5 h-5" />,
    <Lock className="w-5 h-5" />,
    <Globe className="w-5 h-5" />,
    <Building className="w-5 h-5" />
  ];

  return (
    <section className="py-32 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white mb-10 tracking-tighter leading-none">
              Poderosa por dentro, <br />
              <span className="text-gradient">Simples por fora.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 hover:border-kuid-green/20 transition-all shadow-sm dark:shadow-none">
                  <div className="text-kuid-green bg-kuid-green/10 p-3 rounded-xl">
                    {icons[i]}
                  </div>
                  <span className="text-gray-700 dark:text-slate-300 font-bold text-sm tracking-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 p-1 bg-kuid-gradient rounded-[48px] shadow-2xl shadow-kuid-blue/20">
            <div className="bg-deep-navy rounded-[47px] p-12 h-full flex flex-col justify-center relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-kuid-cyan/20 blur-[80px] rounded-full"></div>
               <p className="text-kuid-green font-black text-xs uppercase tracking-[0.3em] mb-6">Pronto para o futuro</p>
               <h3 className="text-3xl font-black text-white mb-8 leading-tight tracking-tight">Infraestutura preparada para integrações institucional.</h3>
               <p className="text-slate-400 mb-10 leading-relaxed text-lg font-medium">
                 Nossa API, permitirá que governos, correios e empresas privadas integrem o sistema KUID em seus fluxos de trabalho existentes sem preocupações.
               </p>
               <a href="#" className="inline-flex items-center gap-3 text-kuid-cyan font-black text-sm uppercase tracking-widest hover:gap-5 transition-all">
                 Documentação da API <span>&rarr;</span>
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
