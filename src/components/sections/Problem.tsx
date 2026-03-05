import { Smartphone, Brain, EyeOff } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-brand-light overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-2 block">
              A Realidade Atual
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
              Em um mundo dominado pelas telas, seu filho está sendo programado
              ou aprendendo a programar?
            </h2>
            <p className="text-lg text-slate-600">
              A maioria das crianças está usando a tecnologia apenas para
              entretenimento raso, ativando o perigoso "modo zumbi".
            </p>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-500/10 blur-[80px] rounded-full pointer-events-none" />
            <img
              src="https://i.ibb.co/HTCC4MyQ/Chat-GPT-Image-24-de-fev-de-2026-16-16-51.png"
              alt="Criança usando o celular no modo zumbi"
              className="relative z-10 rounded-3xl shadow-xl w-full max-w-md mx-auto lg:mx-0 lg:ml-auto h-auto object-cover border-4 border-white"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
