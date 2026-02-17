
import React from 'react';
import { Zap, Search, MapPin, Lock, Globe, Building } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    "KUID Dinâmico & Estático",
    "Busca Geográfica Reversa",
    "Precisão Submétrica",
    "Protocolo Block-Address",
    "SDK para Aplicações",
    "Dashboards de Gestão"
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
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 tracking-tighter leading-none">
              Poderosa por dentro, <br />
              <span className="text-gradient">Simples por fora.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-kuid-green/20 transition-all">
                  <div className="text-kuid-green bg-kuid-green/10 p-3 rounded-xl">
                    {icons[i]}
                  </div>
                  <span className="text-slate-300 font-bold text-sm tracking-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 p-1 bg-kuid-gradient rounded-[48px] shadow-2xl shadow-kuid-blue/20">
            <div className="bg-deep-navy rounded-[47px] p-12 h-full flex flex-col justify-center relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-kuid-cyan/20 blur-[80px] rounded-full"></div>
               <p className="text-kuid-green font-black text-xs uppercase tracking-[0.3em] mb-6">Built for scale</p>
               <h3 className="text-3xl font-black text-white mb-8 leading-tight tracking-tight">API Enterprise para integração em massa.</h3>
               <p className="text-slate-400 mb-10 leading-relaxed text-lg font-medium">
                 Desenvolvemos uma infraestrutura pronta para suportar milhões de requisições, ideal para governos e gigantes da logística.
               </p>
               <a href="#" className="inline-flex items-center gap-3 text-kuid-cyan font-black text-sm uppercase tracking-widest hover:gap-5 transition-all">
                 Ver Documentação Tech <span>&rarr;</span>
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
