
import React from 'react';
import { User, Store, Bike, Landmark } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const groups = [
    {
      title: "Pessoas sem endereço formal",
      desc: "Ganhe uma identidade geográfica para receber visitas e encomendas.",
      icon: <User className="w-10 h-10" />,
      tag: "Social"
    },
    {
      title: "Pequenos negócios",
      desc: "Seja encontrado por clientes mesmo em locais de difícil acesso.",
      icon: <Store className="w-10 h-10" />,
      tag: "Economia"
    },
    {
      title: "Entregadores e logística",
      desc: "Reduza o tempo de busca e aumente sua produtividade diária.",
      icon: <Bike className="w-10 h-10" />,
      tag: "Eficácia"
    },
    {
      title: "Instituições públicas",
      desc: "Ferramenta para planeamento territorial e serviços de emergência.",
      icon: <Landmark className="w-10 h-10" />,
      tag: "Infra"
    }
  ];

  return (
    <section id="para-quem" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">Para Quem é a KUID?</h2>
          <p className="text-slate-400">Uma solução transversal para toda a sociedade.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {groups.map((group, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-start gap-8 p-10 rounded-3xl bg-slate-900/50 border border-white/5 hover:bg-slate-900 transition-colors group">
              <div className="bg-tech-green/10 text-tech-green p-6 rounded-2xl group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <div>
                <span className="text-xs font-bold text-tech-green uppercase tracking-widest bg-tech-green/5 px-3 py-1 rounded-full mb-4 inline-block">
                  {group.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{group.title}</h3>
                <p className="text-slate-400 leading-relaxed italic">
                  "{group.desc}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
