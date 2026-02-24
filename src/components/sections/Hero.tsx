import { Button } from '@/components/ui/button'
import { Rocket, Star, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react'
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-indigo/30 rounded-full border border-brand-indigo/50 animate-fade-in-down">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span className="text-brand-gold text-xs md:text-sm font-bold uppercase tracking-wider">
              A Revolução na Educação
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white leading-tight animate-fade-in text-shadow">
            Transforme o tempo de tela do seu filho em uma{' '}
            <span className="text-brand-gold">vantagem competitiva</span> para o
            futuro.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-lg mx-auto md:mx-0 animate-fade-in-up delay-100">
            O curso prático de IA que desperta a criatividade e prepara crianças
            de 7 a 14 anos para a nova alfabetização digital.
          </p>

          <div className="flex flex-col gap-3 justify-center md:justify-start pt-4 animate-fade-in-up delay-200">
            <Button
              onClick={handlePurchase}
              size="lg"
              className="w-full sm:w-auto h-16 rounded-full bg-brand-gold text-brand-dark hover:bg-brand-gold/90 font-bold text-base md:text-lg px-8 shadow-xl shadow-brand-gold/20 animate-pulse-slow border-0"
            >
              Quero garantir a vaga do meu filho
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>

            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-400 font-medium">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span>Acesso imediato e 7 dias de garantia incondicional.</span>
            </div>
          </div>
        </div>

        <div className="relative animate-float hidden md:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-purple/20 blur-[100px] rounded-full" />
          <img
            src="https://img.usecurling.com/p/800/800?q=child%20using%20tablet%20learning%20future%20technology&color=blue&dpr=2"
            alt="Criança aprendendo com IA"
            className="relative z-10 w-full h-auto drop-shadow-2xl rounded-3xl border-4 border-white/10 object-cover"
          />

          {/* Floating Icons */}
          <div className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl animate-bounce delay-700">
            <Rocket className="w-8 h-8 text-brand-indigo" />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-xl animate-bounce delay-300">
            <Star className="w-8 h-8 text-brand-gold" />
          </div>
        </div>
      </div>
    </section>
  )
}
