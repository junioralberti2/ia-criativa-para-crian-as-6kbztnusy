import { ShieldCheck, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const GuaranteeSection = () => {
  return (
    <section className="py-12 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-brand-gold bg-white shadow-xl relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            {/* Decorative background element */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />

            <CardContent className="p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 relative z-10">
              <div className="shrink-0 relative mb-4 md:mb-0">
                {/* Visual Seal Representation */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mx-auto">
                  <div className="absolute inset-0 bg-brand-gold/10 rounded-full animate-pulse-slow"></div>
                  <img
                    src="https://img.usecurling.com/i?q=shield-check&color=yellow&shape=fill"
                    alt="Selo de Garantia de 7 Dias"
                    className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-md relative z-10"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-brand-dark text-brand-gold text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 rounded-full shadow-lg whitespace-nowrap border border-brand-gold/30">
                    Risco Zero
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left space-y-4 md:space-y-5 flex-1">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-brand-dark mb-2">
                    Garantia Incondicional de 7 Dias
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                    Você tem 7 dias para acessar todo o conteúdo, conhecer a
                    metodologia e ver seu filho criando. Se por qualquer motivo
                    você não ficar 100% satisfeito, nós devolvemos{' '}
                    <strong className="text-brand-indigo">
                      todo o seu dinheiro
                    </strong>
                    .
                  </p>
                </div>

                <div className="flex flex-col gap-2 md:gap-3">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Sem letras miúdas</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Reembolso automático via Hotmart</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-brand-dark bg-brand-gold/20 px-3 sm:px-4 py-2 rounded-lg border border-brand-gold/30 text-center w-full sm:w-auto">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-brand-dark shrink-0" />
                    <span>Sua compra está totalmente protegida</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
