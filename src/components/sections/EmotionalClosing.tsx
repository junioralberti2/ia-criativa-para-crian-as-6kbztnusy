import { Button } from '@/components/ui/button'
import { ShieldCheck } from 'lucide-react'
import { trackEvent } from '@/lib/facebook'

export const EmotionalClosing = () => {
  const handlePurchase = () => {
    trackEvent('InitiateCheckout')
    window.location.href = 'https://pay.hotmart.com/E103583426A'
  }

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-brand-indigo to-brand-dark text-white text-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-purple/20 blur-[80px] md:blur-[120px] rounded-full mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-gold/10 blur-[80px] md:blur-[120px] rounded-full mix-blend-screen" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading leading-tight break-words">
            Daqui a alguns anos, haverá{' '}
            <span className="text-brand-gold block sm:inline">
              dois tipos de jovens:
            </span>
          </h2>

          <div className="space-y-3 md:space-y-4 text-lg sm:text-xl md:text-2xl font-medium text-slate-200 px-2">
            <p>Os que aprenderam a consumir tecnologia.</p>
            <p>E os que aprenderam a dominá-la.</p>
          </div>

          <div className="w-12 md:w-16 h-1 bg-brand-gold/30 mx-auto rounded-full my-6 md:my-8" />

          <div className="space-y-3 md:space-y-4 text-base sm:text-lg md:text-xl text-slate-300 mb-8 md:mb-10 px-2">
            <p>A decisão começa agora.</p>
            <p>Seu filho pode continuar apenas assistindo…</p>
            <p className="font-bold text-white text-xl md:text-2xl">
              Ou pode começar a criar.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 pt-4">
            <Button
              onClick={handlePurchase}
              size="lg"
              className="w-full sm:w-auto h-auto min-h-[64px] py-4 rounded-full bg-brand-gold text-brand-dark hover:bg-brand-gold/90 font-bold text-sm sm:text-base md:text-xl px-4 md:px-10 shadow-xl shadow-brand-gold/20 animate-pulse-slow border-0 whitespace-normal text-center leading-tight"
            >
              👉 Quero garantir a vaga do meu filho
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-slate-400 font-medium px-4 text-center">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0" />
                <span>Compra 100% segura</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span className="block sm:inline">
                Acesso imediato • Garantia de 7 dias
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
