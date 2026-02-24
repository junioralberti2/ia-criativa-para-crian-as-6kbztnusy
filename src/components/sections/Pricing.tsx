import { ShieldCheck, Clock, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/facebook'

export const Pricing = () => {
  const handlePurchase = () => {
    trackEvent('InitiateCheckout')
    window.location.href = 'https://pay.hotmart.com/E103583426A'
  }

  return (
    <section id="pricing" className="py-20 bg-brand-dark relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-brand-gold relative z-10 text-center">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-dark px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
              Vagas Abertas
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark mb-3 mt-4">
              Acesso Completo + Bônus
            </h3>
            <p className="text-sm sm:text-base text-slate-500 mb-8">
              O passaporte do seu filho para a nova alfabetização digital.
            </p>

            <div className="flex flex-col items-center justify-center gap-1 md:gap-2 mb-8">
              <span className="text-slate-400 text-lg md:text-xl line-through">
                De R$ 497,00
              </span>
              <div className="flex items-baseline gap-1 md:gap-2 flex-wrap justify-center">
                <span className="text-slate-600 text-xl md:text-2xl font-bold">
                  Por apenas
                </span>
                <span className="text-5xl md:text-6xl font-extrabold text-green-600 tracking-tight">
                  R$ 27
                </span>
                <span className="text-lg md:text-xl font-bold text-green-600">
                  ,00
                </span>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-left shadow-sm">
              <p className="font-bold text-amber-800 text-sm md:text-base mb-2">
                ⚠️ Atenção: condição especial por tempo limitado
              </p>
              <p className="text-amber-700 text-xs sm:text-sm leading-relaxed">
                As vagas com acesso aos 3 bônus gratuitos estão disponíveis
                apenas para os próximos alunos inscritos. Assim que atingirmos o
                limite da turma atual, o valor volta ao normal e os bônus deixam
                de ser oferecidos gratuitamente. 👉 Não deixe para depois.
              </p>
            </div>

            <Button
              onClick={handlePurchase}
              className="w-full h-auto min-h-[64px] py-4 text-sm sm:text-lg md:text-xl font-bold rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-500/30 mb-8 animate-pulse-slow border-0 whitespace-normal px-4 leading-tight"
            >
              Quero inscrever meu filho agora
            </Button>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-100 pt-8">
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-brand-indigo" />
                <span className="text-xs text-slate-600 font-medium">
                  Compra 100% Segura
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="w-6 h-6 text-brand-indigo" />
                <span className="text-xs text-slate-600 font-medium">
                  Acesso Imediato
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Award className="w-6 h-6 text-brand-indigo" />
                <span className="text-xs text-slate-600 font-medium">
                  7 Dias de Garantia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
