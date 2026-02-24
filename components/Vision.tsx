
import React from 'react';

const Vision: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50 dark:bg-deep-navy overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 order-2 lg:order-1">
             <div className="relative">
                <div className="absolute inset-0 bg-kuid-green/10 blur-[100px] rounded-full"></div>
                <img 
                  src="/angolanpeople.png" 
                  alt="Visão de Futuro" 
                  className="rounded-[40px] shadow-2xl relative z-10 border border-gray-200 dark:border-white/10"
                />
             </div>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
              Construindo a infraestrutura <br />
              <span className="text-kuid-green">digital do território.</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400 mb-8 leading-relaxed">
              A KUID é mais do que uma aplicação móvel - é o pilar para a inclusão territorial e desenvolvimento económico sustentável.
            </p>
            <p className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed opacity-70">
              Nossa visão é garantir que nenhum cidadão seja invisível ao mapa, proporcionando as ferramentas necessárias para que comunidades inteiras possam prosperar na era digital, ligando-as a serviços, oportunidades e infraestruturas vitais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
