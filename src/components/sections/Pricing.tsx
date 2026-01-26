import { Check, ShieldCheck, Clock, Award, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

export const Pricing = () => {
  const { toast } = useToast()

  const handlePurchase = () => {
    toast({
      title: 'Redirecionando...',
      description: 'Você está sendo levado para o checkout seguro.',
      duration: 3000,
    })
  }

  return (
    <section id="pricing" className="py-20 bg-brand-light relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-brand-dark mb-4">
              Investimento no Futuro
            </h2>
            <p className="text-slate-600">
              Quanto vale preparar seu filho para uma nova era?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Comparison Anchor */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 opacity-70 scale-95">
              <h3 className="text-xl font-bold text-slate-500 mb-6">
                Cursos Tradicionais de TI
              </h3>
              <ul className="space-y-4 mb-8 text-slate-500">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />{' '}
                  Mensalidades caras
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full" /> Conteúdo
                  técnico e chato
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full" /> Exige
                  computadores potentes
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full" /> Transporte
                  presencial
                </li>
              </ul>
              <div className="text-2xl font-bold text-slate-400 line-through">
                R$ 2.000,00 /ano
              </div>
            </div>

            {/* The Offer */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-brand-gold relative transform md:scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-dark px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                Oferta Limitada
              </div>

              <h3 className="text-2xl font-bold text-brand-dark mb-2">
                Acesso Vitalício IA Criativa
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Tudo o que seu filho precisa em um só lugar.
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-slate-400 text-lg line-through">
                  R$ 497,00
                </span>
                <span className="text-5xl font-extrabold text-brand-dark">
                  R$ 27,00
                </span>
                <span className="text-sm font-bold text-green-600 bg-green-100 px-2 py-1 rounded">
                  À vista
                </span>
              </div>

              <Button
                onClick={handlePurchase}
                className="w-full h-14 text-lg font-bold uppercase bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 shadow-lg shadow-green-500/30 rounded-xl mb-6 animate-pulse"
              >
                Quero garantir por R$ 27
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>

              <div className="space-y-3 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-indigo" />
                  <span className="text-sm text-slate-600">
                    Compra 100% Segura
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-brand-indigo" />
                  <span className="text-sm text-slate-600">
                    Acesso Imediato
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-brand-indigo" />
                  <span className="text-sm text-slate-600">
                    7 Dias de Garantia Incondicional
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
