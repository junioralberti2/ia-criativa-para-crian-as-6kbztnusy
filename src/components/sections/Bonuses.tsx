import { Gift, Lock, DollarSign } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const Bonuses = () => {
  return (
    <section
      id="bonuses"
      className="py-20 bg-gradient-to-b from-white to-brand-light"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-purple font-bold tracking-wider uppercase text-sm mb-2 block">
            Presentes Exclusivos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark">
            Bônus Especiais
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Kids Bonus */}
          <Card className="border-2 border-brand-orange/20 overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              PARA AS CRIANÇAS
            </div>
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Gift className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-2">
                Pack Mestre dos Prompts
              </h3>
              <p className="text-slate-600 mb-4">
                Uma biblioteca com mais de 500 comandos prontos (prompts) para
                criar dragões, heróis, castelos e muito mais, só copiando e
                colando.
              </p>
              <div className="text-sm font-bold text-brand-orange">
                Valor: R$ 97,00 (Grátis hoje)
              </div>
            </CardContent>
          </Card>

          {/* Parents Bonus */}
          <Card className="border-2 border-brand-indigo/20 overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-brand-indigo text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              PARA OS PAIS
            </div>
            <CardContent className="p-8">
              <div className="flex gap-4 mb-6">
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-7 h-7 text-brand-indigo" />
                </div>
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Lock className="w-7 h-7 text-brand-indigo" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-brand-dark mb-2">
                Guia Pais no Controle
              </h3>
              <p className="text-slate-600 mb-4">
                Manual completo de controle parental e um mini-curso sobre como
                você pode usar o conhecimento do seu filho para gerar renda
                extra para a família.
              </p>
              <div className="text-sm font-bold text-brand-indigo">
                Valor: R$ 147,00 (Grátis hoje)
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
