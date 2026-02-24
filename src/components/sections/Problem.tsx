import { Ban, Smartphone, Brain } from 'lucide-react'
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
            Em um mundo dominado pela IA, seu filho será passageiro ou piloto?
          </h2>
          <p className="text-lg text-slate-600">
            A maioria das crianças está usando a tecnologia apenas para
            entretenimento raso. O excesso de consumo passivo está limitando o
            potencial delas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-elevation hover:-translate-y-1 transition-transform duration-300">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                Consumo Passivo
              </h3>
              <p className="text-slate-600">
                Horas deslizando o dedo na tela consumindo vídeos curtos que
                viciam e não agregam habilidades reais.
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
                O cérebro se acostuma a receber tudo pronto, diminuindo a
                capacidade de imaginar e resolver problemas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-elevation hover:-translate-y-1 transition-transform duration-300">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Ban className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                Risco de Desatualização
              </h3>
              <p className="text-slate-600">
                O futuro exigirá domínio da Inteligência Artificial. Quem não
                souber utilizá-la ficará para trás no mercado.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
