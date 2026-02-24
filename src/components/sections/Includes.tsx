import { CheckCircle2 } from 'lucide-react'

const includesList = [
  '+20 aulas práticas passo a passo',
  'Metodologia validada para crianças de 7 a 14 anos',
  'Projetos reais desde a primeira semana',
  'Atualizações futuras sem custo adicional',
  'Certificado de Criador com IA',
  'Materiais para download',
  'Acesso imediato e vitalício',
]

export const Includes = () => {
  return (
    <section className="py-20 bg-brand-light border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
            O que está incluso na inscrição?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Tudo o que seu filho precisa para ter sucesso na jornada criativa.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {includesList.map((item, i) => (
            <li
              key={i}
              className="flex items-start md:items-center gap-3 md:gap-4 bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-brand-indigo/30"
            >
              <div className="bg-green-100 p-2 rounded-full shrink-0 mt-0.5 md:mt-0">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              </div>
              <span className="text-brand-dark font-medium text-sm sm:text-base md:text-lg leading-snug md:leading-normal">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
