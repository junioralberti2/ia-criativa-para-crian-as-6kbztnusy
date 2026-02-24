import { Button } from '@/components/ui/button'
import { Rocket, Star, Sparkles, ShieldCheck } from 'lucide-react'
import { trackEvent } from '@/lib/facebook'

export const Hero = () => {
  const handlePurchase = () => {
    trackEvent('InitiateCheckout')
    window.location.href = 'https://pay.hotmart.com/E103583426A'
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-[70px] overflow-hidden hero-gradient flex items-center"
    >
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-brand-indigo/30 rounded-full border border-brand-indigo/50 animate-fade-in-down">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-brand-gold shrink-0" />
            <span className="text-brand-gold text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider">
              A Revolução na Educação
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white leading-tight animate-fade-in text-shadow break-words">
            Seu filho pronto para a era da Inteligência Artificial —{' '}
            <span className="text-brand-gold">
              mesmo que hoje ele só use o tablet para vídeos.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-lg mx-auto md:mx-0 animate-fade-in-up delay-100">
            Transforme o tempo de tela em aprendizado criativo e prepare
            crianças a partir de 7 anos para dominar a tecnologia que vai
            definir o futuro.
          </p>

          <div className="flex flex-col gap-3 justify-center md:justify-start pt-4 animate-fade-in-up delay-200">
            <Button
              onClick={handlePurchase}
              size="lg"
              className="w-full sm:w-auto h-auto min-h-[64px] py-3 rounded-full bg-brand-gold text-brand-dark hover:bg-brand-gold/90 font-bold text-sm sm:text-base md:text-lg px-4 md:px-8 shadow-xl shadow-brand-gold/20 animate-pulse-slow border-0 whitespace-normal text-center leading-tight"
            >
              👉 Quero preparar meu filho para o futuro agora
            </Button>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs sm:text-sm text-slate-400 font-medium mt-2">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0" />
              <span className="text-center sm:text-left">
                Acesso imediato • 7 dias de garantia incondicional
              </span>
            </div>
          </div>
        </div>

        <div className="relative animate-float mt-8 md:mt-0 w-full max-w-[280px] sm:max-w-md mx-auto md:max-w-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-purple/20 blur-[100px] rounded-full" />
          <img
            src="https://i.ibb.co/HTCC4MyQ/Chat-GPT-Image-24-de-fev-de-2026-16-16-51.png"
            alt="Criança aprendendo com IA"
            className="relative z-10 w-full h-auto drop-shadow-2xl rounded-3xl border-4 border-white/10 object-cover"
          />

          {/* Floating Icons */}
          <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-white p-3 md:p-4 rounded-2xl shadow-xl animate-bounce delay-700">
            <Rocket className="w-6 h-6 md:w-8 md:h-8 text-brand-indigo" />
          </div>
          <div className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-5 bg-white p-3 md:p-4 rounded-2xl shadow-xl animate-bounce delay-300">
            <Star className="w-6 h-6 md:w-8 md:h-8 text-brand-gold" />
          </div>
        </div>
      </div>
    </section>
  )
}
