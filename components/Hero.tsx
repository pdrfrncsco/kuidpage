
import React from 'react';
import { Smartphone, ChevronRight, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-48 overflow-hidden">
      {/* Background blobs aligned with logo colors */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-kuid-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-kuid-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kuid-cyan/10 border border-kuid-cyan/20 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-kuid-green animate-ping"></span>
              <span className="text-[10px] font-black text-kuid-cyan uppercase tracking-[0.2em]">O Futuro é agora</span>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-black text-gray-900 dark:text-white leading-[0.95] mb-8 tracking-tighter">
              A Identidade <br />
              <span className="text-gradient">Do Seu Lugar</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 dark:text-slate-400 max-w-xl mb-12 leading-relaxed">
              Crie, partilhe e localize qualquer lugar com um código simples, permanente e georreferenciado. Mais que um endereço, é a sua presença digital no mapa.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <button className="w-full sm:w-auto px-10 py-5 bg-kuid-gradient hover:opacity-90 text-white rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-2xl shadow-kuid-cyan/30 transform hover:-translate-y-1">
                Criar meu KUID <ChevronRight size={22} />
              </button>
              <a 
                href="#" 
                className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 backdrop-blur-sm transform hover:-translate-y-1"
              >
                <Smartphone size={22} /> Baixar App
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-none relative animate-float">
            <div className="relative z-10 bg-white/80 dark:bg-white/5 backdrop-blur-3xl border border-gray-200 dark:border-white/10 rounded-[40px] p-2 shadow-2xl overflow-hidden">
              <div className="bg-gray-100 dark:bg-deep-navy rounded-[32px] overflow-hidden aspect-square flex flex-col items-center justify-center relative group">
                <img 
                  src="/kuidsuccess.png" 
                  alt="KUID Sucesso" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Logo-inspired decorative ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-kuid-gradient opacity-[0.03] rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
