
import React from 'react';
import { ShieldCheck, LocateFixed, Share2, Globe, Truck, Map } from 'lucide-react';

const Solution: React.FC = () => {
  const solutions = [
    {
      title: "Código Único KUID",
      desc: "Cada metro quadrado recebe uma identidade alfa-numérica única e permanente.",
      icon: <Map className="w-6 h-6" />
    },
    {
      title: "GPS de Precisão",
      desc: "Baseada em coordenadas de GPS reais, eliminando ambiguidades.",
      icon: <LocateFixed className="w-6 h-6" />
    },
    {
      title: "Partilha Instantânea",
      desc: "Envie por WhatsApp, SMS, e-mail ou QRCode para partilhar rapidamente.",
      icon: <Share2 className="w-6 h-6" />
    },
    {
      title: "Inclusão Territorial",
      desc: "Dá um endereço oficial a quem nunca teve um, em qualquer lugar.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Logística Moderna",
      desc: "Optimiza rotas de entregas e melhora a satisfaçao do cliente.",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: "Segurança de Dados",
      desc: "Criptografia de ponta para garantir a privacidade do utilizador.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <section id="solucao" className="py-24 relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20 text-center lg:text-left mx-auto lg:mx-0">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
            A infraestrutura que <br />
            <span className="text-gradient">muda o jogo.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            A KUID não é apenas uma aplicação de localização. É a base tecnológica para tranaformar coordenadas geográficas em endereços funcionais para todos os serviços da vida moderna.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <div key={i} className="group p-10 rounded-[32px] bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/[0.05] hover:border-kuid-cyan/30 transition-all duration-500 shadow-lg dark:shadow-none">
              <div className="w-14 h-14 rounded-2xl bg-kuid-gradient flex items-center justify-center mb-8 text-white shadow-xl shadow-kuid-blue/20 transition-transform group-hover:scale-110">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">{s.title}</h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
