import { Smartphone, Brain, EyeOff } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-2 block">
            A Realidade Atual
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
            Em um mundo dominado pelas telas, seu filho está sendo programado ou
            aprendendo a programar?
          </h2>
          <p className="text-lg text-slate-600">
            A maioria das crianças está usando a tecnologia apenas para
            entretenimento raso, ativando o perigoso "modo zumbi".
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-elevation hover:-translate-y-1 transition-transform duration-300">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                Rolagem Infinita
              </h3>
              <p className="text-slate-600">
                Horas deslizando o dedo na tela consumindo vídeos curtos que
                viciam instantaneamente e não agregam habilidades reais ou
                cognitivas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-elevation hover:-translate-y-1 transition-transform duration-300">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                Estagnação Criativa
              </h3>
              <p className="text-slate-600">
                O cérebro se acostuma a receber tudo mastigado e pronto,
                diminuindo severamente a capacidade de imaginar e resolver
                problemas de forma autônoma.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-elevation hover:-translate-y-1 transition-transform duration-300">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <EyeOff className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                Perda de Foco
              </h3>
              <p className="text-slate-600">
                A superestimulação digital ininterrupta prejudica a concentração
                nos estudos, nas leituras e nas atividades valiosas do mundo
                real.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
