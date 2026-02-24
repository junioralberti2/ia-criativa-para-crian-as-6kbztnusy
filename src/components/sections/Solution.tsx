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
          <span className="text-brand-gold font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
            Apresentação do Curso
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mb-6">
            Conheça o método <br className="hidden sm:block" />{' '}
            <span className="text-brand-indigo bg-white px-3 py-1 rounded-lg inline-block mt-2">
              IA Criativa para Crianças
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Uma metodologia online, validada e projetada especificamente para
            transformar a curiosidade natural das crianças em habilidades
            tecnológicas tangíveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-brand-indigo/20 p-2 rounded-lg shrink-0">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Linguagem 100% Adaptada
                </h3>
                <p className="text-sm md:text-base text-slate-400">
                  Sem termos técnicos chatos. Usamos o universo das crianças
                  (jogos, histórias, desenhos) para ensinar os conceitos mais
                  avançados de IA de forma divertida.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 bg-brand-indigo/20 p-2 rounded-lg shrink-0">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Prática desde a Primeira Aula
                </h3>
                <p className="text-sm md:text-base text-slate-400">
                  Nada de teoria maçante. A criança já sai do primeiro módulo
                  criando projetos visuais incríveis e vendo o resultado do
                  próprio esforço na tela.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 bg-brand-indigo/20 p-2 rounded-lg shrink-0">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Autonomia com Segurança
                </h3>
                <p className="text-sm md:text-base text-slate-400">
                  Desenhado para que eles possam assistir e executar sozinhos,
                  mas em um ambiente focado em ética e ferramentas seguras.
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-md mx-auto md:max-w-none mt-8 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo to-brand-purple rounded-2xl rotate-3 opacity-50 blur-lg" />
            <img
              src="https://i.ibb.co/sJ5kMFc0/Chat-GPT-Image-23-de-fev-de-2026-08-17-19.png"
              alt="Crianças aprendendo juntas"
              className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
