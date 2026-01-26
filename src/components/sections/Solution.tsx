import { CheckCircle2 } from 'lucide-react'

export const Solution = () => {
  return (
    <section
      id="solution"
      className="py-20 bg-gradient-to-br from-slate-900 to-brand-dark text-white relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-indigo/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/20 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-2 block">
            A Solução Definitiva
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Conheça a Metodologia <br />{' '}
            <span className="text-brand-indigo bg-white px-2 rounded-lg inline-block mt-2">
              IA Criativa
            </span>
          </h2>
          <p className="text-lg text-slate-300">
            Um curso passo-a-passo, projetado para crianças de 7 a 16 anos, que
            transforma a curiosidade natural delas em projetos reais
            impressionantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-brand-indigo/20 p-2 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Linguagem Simples e Divertida
                </h3>
                <p className="text-slate-400">
                  Aulas curtas, diretas e com uma didática que prende a atenção,
                  usando exemplos do universo deles.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-brand-indigo/20 p-2 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Ferramentas Gratuitas
                </h3>
                <p className="text-slate-400">
                  Ensinamos a usar as melhores IAs gratuitas do mercado. Você
                  não precisa gastar com assinaturas caras.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-brand-indigo/20 p-2 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Segurança em Primeiro Lugar
                </h3>
                <p className="text-slate-400">
                  Módulos dedicados a ensinar como navegar com segurança e ética
                  no mundo da Inteligência Artificial.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo to-brand-purple rounded-2xl rotate-3 opacity-50 blur-lg" />
            <img
              src="https://img.usecurling.com/p/800/600?q=family%20looking%20at%20tablet%20happy%20learning%20together&dpr=2"
              alt="Família aprendendo junta"
              className="relative rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
