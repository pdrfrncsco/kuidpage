
import React from 'react';
import { PackageX, Siren, UserMinus, Construction } from 'lucide-react';

const Problem: React.FC = () => {
  const problems = [
    {
      icon: <PackageX />,
      title: "Dificuldade em entregas",
      desc: "E-commerce e logística perdem eficiência por falta de coordenadas exactas."
    },
    {
      icon: <Siren />,
      title: "Serviços de Emergência",
      desc: "Ambulâncias e bombeiros demoram a chegar por descrições vagas de local."
    },
    {
      icon: <UserMinus />,
      title: "Exclusão Digital",
      desc: "Sem endereço formal, milhões ficam fora do sistema bancário e serviços públicos."
    },
    {
      icon: <Construction />,
      title: "Expansão Desordenada",
      desc: "Novos bairros surgem sem planeamento de endereçamento formal."
    }
  ];

  return (
    <section id="problema" className="py-24 bg-gray-50 dark:bg-deep-navy/40 relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
            Milhões de pessoas vivem <br />
            <span className="opacity-50">sem um endereço formal.</span>
          </h2>
          <div className="w-24 h-2 bg-kuid-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="glass-card p-10 rounded-[40px] border border-gray-200 dark:border-white/10 hover:border-kuid-blue/50 transition-all shadow-lg dark:shadow-none">
              <div className="mb-8 p-4 bg-kuid-blue/10 dark:bg-kuid-blue/20 rounded-2xl inline-block text-kuid-blue dark:text-kuid-cyan">
                {React.cloneElement(p.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{p.title}</h3>
              <p className="text-gray-600 dark:text-slate-500 leading-relaxed text-sm font-medium">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
