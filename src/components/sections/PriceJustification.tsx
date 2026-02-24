import { Target, TrendingUp, Users, AlertCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const PriceJustification = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-6">
            Por que estamos oferecendo por apenas R$ 27?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
            Este é um projeto de expansão educacional. Estamos abrindo novas
            turmas para formar os primeiros alunos da metodologia IA Criativa no
            Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          <Card className="border-none shadow-md bg-brand-light">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Nosso Objetivo</h3>
              <p className="text-slate-600 text-sm">
                Formar casos reais, coletar resultados e ampliar o impacto do
                uso da IA na educação infantil.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-brand-light">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">
                Primeiros Alunos
              </h3>
              <p className="text-slate-600 text-sm">
                Queremos uma turma pioneira engajada para validar e aprimorar a
                metodologia de forma contínua.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-brand-light sm:col-span-2 md:col-span-1">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-amber-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">
                Valor Simbólico
              </h3>
              <p className="text-slate-600 text-sm">
                Por isso, temporariamente, o acesso está quase de graça para
                remover qualquer barreira financeira.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 shadow-sm">
          <AlertCircle className="w-8 h-8 text-amber-500 shrink-0" />
          <p className="text-amber-800 font-medium text-sm md:text-base">
            <strong className="block mb-1">Aviso Importante:</strong>
            Em breve, o valor volta para R$ 497. Aproveite essa janela de
            oportunidade para garantir o acesso vitalício do seu filho com
            desconto máximo.
          </p>
        </div>
      </div>
    </section>
  )
}
