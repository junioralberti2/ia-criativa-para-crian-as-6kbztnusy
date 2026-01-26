import { ArrowRight } from 'lucide-react'

export const Future = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://i.ibb.co/GQWCVqhM/04.jpg"
              alt="O Futuro da Educação"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark">
              O Futuro Já Chegou (e exige novas habilidades)
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              A Inteligência Artificial não vai substituir os humanos, mas os
              humanos que usam IA vão substituir os que não usam. As crianças de
              hoje precisam ser <strong>pilotos da tecnologia</strong>, não
              passageiros.
            </p>

            <div className="bg-brand-light p-6 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between text-sm md:text-base font-medium text-slate-500 mb-4">
                <span>Criança Comum</span>
                <span>Aluno IA Criativa</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-red-500 font-bold">
                    Consumidor Passivo
                  </span>
                  <ArrowRight className="w-5 h-5 text-slate-300" />
                  <span className="text-green-600 font-bold">
                    Criador Ativo
                  </span>
                </div>
                <div className="w-full h-px bg-slate-200" />
                <div className="flex items-center justify-between">
                  <span className="text-red-500 font-bold">
                    Viciado em Dopamina
                  </span>
                  <ArrowRight className="w-5 h-5 text-slate-300" />
                  <span className="text-green-600 font-bold">
                    Focado em Projetos
                  </span>
                </div>
                <div className="w-full h-px bg-slate-200" />
                <div className="flex items-center justify-between">
                  <span className="text-red-500 font-bold">Medo do Futuro</span>
                  <ArrowRight className="w-5 h-5 text-slate-300" />
                  <span className="text-green-600 font-bold">
                    Preparado para Liderar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
