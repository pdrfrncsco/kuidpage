import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => {
    document.title = 'Política de Privacidade | KUID';
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.sidebar-link');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href')?.includes(current)) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container mx-auto max-w-6xl pt-32 pb-20 px-6">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Sidebar Navigation */}
        <aside className="lg:w-1/4 hidden lg:block">
          <div className="sticky top-32 p-6 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-6">Nesta página</h3>
            <nav className="flex flex-col space-y-1" id="toc-nav">
              <a href="#intro" className="sidebar-link px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent">Introdução</a>
              <a href="#coleta" className="sidebar-link px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent">Recolha de Dados</a>
              <a href="#uso" className="sidebar-link px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent">Uso das Informações</a>
              <a href="#partilha" className="sidebar-link px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent">Partilha de Dados</a>
              <a href="#seguranca" className="sidebar-link px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent">Segurança</a>
              <a href="#direitos" className="sidebar-link px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent">Seus Direitos</a>
              <a href="#contato" className="sidebar-link px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent">Contacto</a>
            </nav>
          </div>
        </aside>

        {/* Document Content */}
        <article className="lg:w-3/4">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Política de Privacidade</h1>
            <p className="text-slate-400">Última atualização: <span className="text-kuid-cyan">19 de Fevereiro de 2026</span></p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-12">
            
            <section id="intro" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-white/10 p-2 rounded-lg text-kuid-cyan">01</span>
                Introdução
              </h2>
              <p className="leading-relaxed">
                Bem-vindo ao KUID. A sua privacidade é de extrema importância para nós. Esta Política de Privacidade explica como a NdeasCloud ("nós", "nosso") recolhe, usa, divulga e protege as suas informações quando utiliza a nossa aplicação móvel e website (coletivamente, o "Serviço").
              </p>
              <p className="leading-relaxed mt-4">
                Ao utilizar o KUID, concorda com a recolha e uso de informações de acordo com esta política. Se não concordar com os termos desta política, por favor não aceda nem utilize o nosso Serviço.
              </p>
            </section>

            <section id="coleta" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-white/10 p-2 rounded-lg text-kuid-cyan">02</span>
                Recolha de Dados
              </h2>
              <p className="mb-4">Recolhemos vários tipos de informações para fornecer e melhorar o nosso Serviço:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-kuid-green">
                <li><strong>Informações Pessoais:</strong> Nome, endereço de e-mail, número de telefone e dados de localização que nos fornece voluntariamente ao registar-se.</li>
                <li><strong>Dados de Localização:</strong> Coordenadas GPS precisas para gerar e validar o seu código KUID.</li>
                <li><strong>Dados de Uso:</strong> Informações sobre como acede e usa o Serviço, incluindo tipo de dispositivo, endereço IP e páginas visitadas.</li>
              </ul>
            </section>

            <section id="uso" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-white/10 p-2 rounded-lg text-kuid-cyan">03</span>
                Uso das Informações
              </h2>
              <p className="mb-4">Utilizamos os dados recolhidos para diversas finalidades:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h3 className="font-bold text-white mb-2">Fornecimento do Serviço</h3>
                  <p className="text-sm">Para criar, gerir e validar o seu endereço digital KUID.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h3 className="font-bold text-white mb-2">Comunicação</h3>
                  <p className="text-sm">Para enviar atualizações, alertas de segurança e suporte técnico.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h3 className="font-bold text-white mb-2">Melhoria Contínua</h3>
                  <p className="text-sm">Para analisar o uso e melhorar a funcionalidade e experiência do utilizador.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h3 className="font-bold text-white mb-2">Segurança</h3>
                  <p className="text-sm">Para detetar, prevenir e resolver problemas técnicos ou fraudes.</p>
                </div>
              </div>
            </section>

            <section id="partilha" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-white/10 p-2 rounded-lg text-kuid-cyan">04</span>
                Partilha de Dados
              </h2>
              <p>
                Não vendemos as suas informações pessoais a terceiros. Podemos partilhar os seus dados apenas nas seguintes circunstâncias:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-kuid-green">
                <li><strong>Com consentimento:</strong> Quando nos autoriza explicitamente a partilhar.</li>
                <li><strong>Obrigação Legal:</strong> Para cumprir leis, regulamentos ou ordens judiciais aplicáveis.</li>
                <li><strong>Prestadores de Serviço:</strong> Terceiros que nos ajudam a operar o Serviço (ex: alojamento, análise), sob rigorosos acordos de confidencialidade.</li>
              </ul>
            </section>

            <section id="seguranca" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-white/10 p-2 rounded-lg text-kuid-cyan">05</span>
                Segurança
              </h2>
              <p className="leading-relaxed">
                A segurança dos seus dados é importante para nós. Implementamos medidas técnicas e organizacionais adequadas para proteger as suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, lembre-se que nenhum método de transmissão pela Internet é 100% seguro.
              </p>
            </section>

            <section id="direitos" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-white/10 p-2 rounded-lg text-kuid-cyan">06</span>
                Seus Direitos
              </h2>
              <p className="mb-4">Como utilizador, tem o direito de:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-kuid-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Aceder aos seus dados pessoais que possuímos.</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-kuid-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Solicitar a correção de dados incorretos.</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-kuid-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Solicitar a eliminação dos seus dados ("Direito a ser esquecido").</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-kuid-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Retirar o consentimento a qualquer momento.</span>
                </div>
              </div>
            </section>

            <section id="contato" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-white/10 p-2 rounded-lg text-kuid-cyan">07</span>
                Contacto
              </h2>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <p className="mb-6">Se tiver dúvidas sobre esta Política de Privacidade, entre em contacto connosco:</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-kuid-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <a href="mailto:ndeasdigital@gmail.com" className="hover:text-white transition-colors">ndeasdigital@gmail.com</a>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-kuid-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span>Luanda, Angola (AO-LUA-LUA-EEJT)</span>
                  </li>
                </ul>
              </div>
            </section>

          </div>
        </article>
      </div>
    </div>
  );
};

export default Privacy;
