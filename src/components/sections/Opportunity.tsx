import { Lightbulb, Rocket, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const Opportunity = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://img.usecurling.com/p/800/600?q=child%20having%20an%20idea%20lightbulb%20concept&color=yellow&dpr=2"
              alt="A Grande Oportunidade"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover border border-slate-100"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <span className="text-brand-indigo font-bold tracking-wider uppercase text-sm mb-2 block">
                A Grande Oportunidade
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
                A Nova Alfabetização Digital
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A Inteligência Artificial não é uma ameaça, é uma{' '}
                <strong>ferramenta de empoderamento</strong>. Assim como
                aprender a ler e escrever foi essencial no passado, saber
                interagir com a IA é a habilidade mais importante do presente.
              </p>
            </div>

            <div className="grid gap-4">
              <Card className="bg-brand-light border-none shadow-sm">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="p-2 bg-yellow-100 rounded-lg shrink-0">
                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">
                      Potencializa a Imaginação
                    </h4>
                    <p className="text-sm text-slate-600">
                      A IA permite que a criança dê vida a qualquer ideia que
                      tenha na mente, sem barreiras técnicas.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-brand-light border-none shadow-sm">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">
                      Aprendizado Ativo
                    </h4>
                    <p className="text-sm text-slate-600">
                      Transforma o tempo de tela em uma jornada de descobertas e
                      criação de projetos reais.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-brand-light border-none shadow-sm">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg shrink-0">
                    <Rocket className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">
                      Preparo Insuperável
                    </h4>
                    <p className="text-sm text-slate-600">
                      Garante que seu filho cresça dominando a tecnologia que
                      moldará todas as profissões do futuro.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
