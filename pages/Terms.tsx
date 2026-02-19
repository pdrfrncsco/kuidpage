import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    document.title = 'Termos de Uso | KUID';
    
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
              <a href="#aceitacao" className="sidebar-link px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent">Aceitação</a>
              <a href="#uso-licenca" className="sidebar-link px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent">Uso e Licença</a>
              <a href="#responsabilidades" className="sidebar-link px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent">Responsabilidades</a>
              <a href="#propriedade" className="sidebar-link px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent">Propriedade Intelectual</a>
              <a href="#limitacao" className="sidebar-link px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent">Limitação de Responsabilidade</a>
              <a href="#alteracoes" className="sidebar-link px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent">Alterações</a>
              <a href="#lei" className="sidebar-link px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent">Lei Aplicável</a>
            </nav>
          </div>
        </aside>

        {/* Document Content */}
        <article className="lg:w-3/4">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Termos de Uso</h1>
            <p className="text-slate-400">Última atualização: <span className="text-kuid-cyan">19 de Fevereiro de 2026</span></p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-12">
            
            <section id="aceitacao" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-white/10 p-2 rounded-lg text-kuid-cyan">01</span>
                Aceitação dos Termos
              </h2>
              <p className="leading-relaxed">
                Ao aceder e utilizar o KUID (website e aplicação móvel), concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis, e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se não concordar com algum destes termos, está proibido de usar ou aceder a este site.
              </p>
            </section>

            <section id="uso-licenca" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-white/10 p-2 rounded-lg text-kuid-cyan">02</span>
                Licença de Uso
              </h2>
              <p className="mb-4">É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site KUID, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título, e sob esta licença você não pode:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-kuid-green">
                <li>Modificar ou copiar os materiais;</li>
                <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública;</li>
                <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no KUID;</li>
                <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais.</li>
              </ul>
            </section>

            <section id="responsabilidades" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-white/10 p-2 rounded-lg text-kuid-cyan">03</span>
                Responsabilidades do Utilizador
              </h2>
              <p className="mb-4">Como utilizador do KUID, compromete-se a:</p>
              <div className="grid gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h3 className="font-bold text-white mb-2">Veracidade</h3>
                  <p className="text-sm">Fornecer informações verdadeiras e precisas ao criar o seu endereço digital.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h3 className="font-bold text-white mb-2">Segurança da Conta</h3>
                  <p className="text-sm">Manter a confidencialidade das suas credenciais de acesso.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h3 className="font-bold text-white mb-2">Uso Ético</h3>
                  <p className="text-sm">Não utilizar o serviço para fins ilegais ou não autorizados.</p>
                </div>
              </div>
            </section>

            <section id="propriedade" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-white/10 p-2 rounded-lg text-kuid-cyan">04</span>
                Propriedade Intelectual
              </h2>
              <p>
                O Serviço e o seu conteúdo original (excluindo Conteúdo fornecido por utilizadores), características e funcionalidade são e permanecerão propriedade exclusiva da NdeasCloud e dos seus licenciadores. O Serviço é protegido por direitos de autor, marcas registadas e outras leis de Angola e de países estrangeiros.
              </p>
            </section>

            <section id="limitacao" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-white/10 p-2 rounded-lg text-kuid-cyan">05</span>
                Limitação de Responsabilidade
              </h2>
              <p className="leading-relaxed">
                Em nenhum caso a NdeasCloud ou os seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em KUID, mesmo que a NdeasCloud ou um representante autorizado da NdeasCloud tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
              </p>
            </section>

            <section id="alteracoes" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-white/10 p-2 rounded-lg text-kuid-cyan">06</span>
                Alterações
              </h2>
              <p className="mb-4">
                A NdeasCloud pode rever estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
              </p>
            </section>

            <section id="lei" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-white/10 p-2 rounded-lg text-kuid-cyan">07</span>
                Lei Aplicável
              </h2>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <p className="mb-4">Estes termos e condições são regidos e interpretados de acordo com as leis de Angola e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
                <p className="text-sm text-slate-400">
                  Para questões legais, contacte: <a href="mailto:ndeasdigital@gmail.com" className="text-kuid-cyan hover:underline">ndeasdigital@gmail.com</a>
                </p>
              </div>
            </section>

          </div>
        </article>
      </div>
    </div>
  );
};

export default Terms;
