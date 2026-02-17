
import React from 'react';
import { PackageX, Siren, UserMinus, Construction } from 'lucide-react';

const Problem: React.FC = () => {
  const problems = [
    {
      icon: <PackageX className="text-white w-8 h-8" />,
      title: "Caos nas Entregas",
      desc: "E-commerce perde milhões anualmente por endereços imprecisos."
    },
    {
      icon: <Siren className="text-white w-8 h-8" />,
      title: "Vidas em Risco",
      desc: "Emergências demoram até 40% mais para localizar vítimas em zonas rurais."
    },
    {
      icon: <UserMinus className="text-white w-8 h-8" />,
      title: "Invisibilidade Social",
      desc: "Sem endereço, o cidadão não existe para o sistema bancário."
    },
    {
      icon: <Construction className="text-white w-8 h-8" />,
      title: "Expansão Desordenada",
      desc: "Novos bairros surgem sem planeamento de endereçamento formal."
    }
  ];

  return (
    <section id="problema" className="py-24 bg-deep-navy/40 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tighter">
            O invisível torna-se <br />
            <span className="opacity-50">um entrave real.</span>
          </h2>
          <div className="w-24 h-2 bg-kuid-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="glass-card p-10 rounded-[40px] hover:border-kuid-blue/50 transition-all">
              <div className="mb-8 p-4 bg-kuid-blue/20 rounded-2xl inline-block text-kuid-cyan">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{p.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
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
