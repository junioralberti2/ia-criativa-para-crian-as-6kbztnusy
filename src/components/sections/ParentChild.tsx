import { Heart, Users, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const ParentChild = () => {
  return (
    <section className="py-20 bg-brand-indigo text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/800/600?q=parent%20and%20child%20computer&color=blue')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-2 block">
            Sinergia Familiar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Aprenda Junto e Crie Memórias
          </h2>
          <p className="text-lg text-slate-300">
            Transforme o tempo de tela que antes afastava vocês em um momento de
            conexão, colaboração e descobertas em família.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/10 border-none backdrop-blur-sm hover:bg-white/20 transition-colors">
            <CardContent className="p-8 text-center flex flex-col items-center text-white">
              <div className="w-14 h-14 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tempo de Qualidade</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Sentar lado a lado para dar vida às ideias fortalece o vínculo e
                gera histórias inesquecíveis que ficarão para sempre.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-none backdrop-blur-sm hover:bg-white/20 transition-colors">
            <CardContent className="p-8 text-center flex flex-col items-center text-white">
              <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Colaboração e Parceria</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Você e seu filho se tornam uma equipe criativa, superando
                desafios, alinhando ideias e aprendendo a tecnologia juntos.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-none backdrop-blur-sm hover:bg-white/20 transition-colors">
            <CardContent className="p-8 text-center flex flex-col items-center text-white">
              <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Incentivo Positivo</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Sua participação valida o esforço dele, incentivando o interesse
                contínuo por aprender mais e sair do consumo passivo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
