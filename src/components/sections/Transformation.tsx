import { ArrowRight, XCircle, CheckCircle2 } from 'lucide-react'

export const Transformation = () => {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
            A Transformação que Você Verá em Casa
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Acompanhe a mudança de comportamento do seu filho desde as primeiras
            aulas.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* ANTES */}
          <div className="bg-red-50/50 border border-red-100 p-8 rounded-2xl w-full md:w-1/2 shadow-sm relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-100 text-red-600 font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider border border-red-200">
              Antes do Curso
            </div>
            <ul className="space-y-6 mt-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">
                  Consumidor passivo de vídeos curtos.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">
                  Tempo ocioso e não produtivo no tablet.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">
                  Viciado em dopamina rápida de redes sociais.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">
                  Desinteressado em aprender novas tecnologias.
                </span>
              </li>
            </ul>
          </div>

          {/* ARROW */}
          <div className="hidden md:flex items-center justify-center w-16 h-16 bg-brand-light rounded-full border border-slate-200 shrink-0 shadow-sm z-10">
            <ArrowRight className="w-8 h-8 text-brand-indigo" />
          </div>
          <div className="md:hidden flex items-center justify-center h-16 w-16 bg-brand-light rounded-full border border-slate-200 shrink-0 shadow-sm z-10">
            <ArrowRight className="w-8 h-8 text-brand-indigo rotate-90" />
          </div>

          {/* DEPOIS */}
          <div className="bg-green-50/50 border border-green-200 p-8 rounded-2xl w-full md:w-1/2 shadow-lg relative transform md:scale-105">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white font-bold px-6 py-1 rounded-full text-sm uppercase tracking-wider shadow-md">
              Depois do Curso
            </div>
            <ul className="space-y-6 mt-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <span className="text-brand-dark font-bold">
                  Criador ativo com ferramentas de ponta.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <span className="text-brand-dark font-bold">
                  Desenvolvendo projetos criativos com propósito.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <span className="text-brand-dark font-bold">
                  Focado em aprender, inovar e realizar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <span className="text-brand-dark font-bold">
                  Orgulhoso de compartilhar o que construiu.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
