
import React from 'react';
import { Target, Send, Locate } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Gerar",
      desc: "O sistema cria automaticamente o seu KUID com base na sua localização atual via GPS.",
      icon: <Target className="w-10 h-10 text-tech-green" />,
      color: "from-tech-green/20 to-transparent"
    },
    {
      number: "02",
      title: "Partilhar",
      desc: "Envie o seu código KUID facilmente para qualquer pessoa, empresa ou serviço público.",
      icon: <Send className="w-10 h-10 text-tech-green" />,
      color: "from-blue-500/20 to-transparent"
    },
    {
      number: "03",
      title: "Localizar",
      desc: "Quem recebe pode encontrar o local exato com precisão milimétrica usando qualquer dispositivo.",
      icon: <Locate className="w-10 h-10 text-tech-green" />,
      color: "from-emerald-500/20 to-transparent"
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-deep-blue relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">Como Funciona</h2>
          <p className="text-slate-400">Simplicidade extrema para uma infraestrutura complexa.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-24 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-tech-green/20 to-transparent -z-10"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="text-center relative">
              <div className={`w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-b ${step.color} border border-white/10 flex items-center justify-center relative shadow-inner shadow-white/5`}>
                <span className="absolute -top-4 -left-4 text-4xl font-black text-white/5">{step.number}</span>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Passo {i+1} – {step.title}</h3>
              <p className="text-slate-400 leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
