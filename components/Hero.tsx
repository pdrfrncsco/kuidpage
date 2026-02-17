
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
            
            <h1 className="text-5xl lg:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tighter">
              A Identidade <br />
              <span className="text-gradient">Do Seu Lugar</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-400 max-w-xl mb-12 leading-relaxed">
              Crie, partilhe e localize qualquer lugar com um código simples, permanente e georreferenciado. Mais que um endereço, é a sua presença digital no mapa.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <button className="w-full sm:w-auto px-10 py-5 bg-kuid-gradient hover:opacity-90 text-white rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-2xl shadow-kuid-cyan/30 transform hover:-translate-y-1">
                Criar meu KUID <ChevronRight size={22} />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 backdrop-blur-sm">
                <Smartphone size={22} /> Baixar App
              </button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-none relative animate-float">
            <div className="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] p-2 shadow-2xl overflow-hidden">
              <div className="bg-deep-navy rounded-[32px] overflow-hidden aspect-square flex flex-col items-center justify-center p-12 relative group">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                  <div className="relative mb-12">
                    <div className="absolute inset-0 bg-kuid-gradient blur-3xl opacity-30 animate-pulse"></div>
                    <MapPin className="w-24 h-24 text-white p-6 bg-kuid-gradient rounded-3xl drop-shadow-[0_0_20px_rgba(0,209,255,0.6)]" />
                  </div>
                  
                  <div className="w-full space-y-4">
                    <p className="text-kuid-cyan text-xs font-black uppercase tracking-[0.3em]">Endereço Digital Único</p>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all group-hover:border-kuid-green/50">
                      {/* <span className="text-3xl lg:text-4xl font-mono font-black text-white tracking-[0.2em]">
                        AO-LUA-LUA
                      </span> */}
                      <span className="block text-2xl lg:text-3xl font-mono font-black text-kuid-green tracking-[0.2em] mt-1">
                        AO-LUA-LUA-QJLK
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-slate-500 font-medium">
                      <div className="w-2 h-2 rounded-full bg-kuid-green"></div>
                      <p className="text-xs uppercase tracking-widest">Localização Verificada</p>
                    </div>
                  </div>
                </div>
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
