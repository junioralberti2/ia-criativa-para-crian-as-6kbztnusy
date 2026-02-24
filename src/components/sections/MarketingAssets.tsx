import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Megaphone, MessageSquare, Target } from 'lucide-react'

export const MarketingAssets = () => {
  return (
    <section className="py-20 bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-heading text-white mb-4">
            Marketing Assets
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Coleção de copys, ganchos e headlines para produção de criativos e
            testes A/B.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Megaphone className="w-5 h-5 text-brand-gold" />
                <CardTitle className="text-lg text-white">
                  Headlines para Teste A/B
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-sm">
                <li className="bg-slate-700/50 p-3 rounded-lg border border-slate-600/50">
                  "Seu filho criativo e preparado para a nova era digital."
                </li>
                <li className="bg-slate-700/50 p-3 rounded-lg border border-slate-600/50">
                  "Não deixe seu filho para trás na revolução da Inteligência
                  Artificial."
                </li>
                <li className="bg-slate-700/50 p-3 rounded-lg border border-slate-600/50">
                  "O guia definitivo de IA para crianças: transformando
                  curiosidade em habilidade."
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-green-400" />
                <CardTitle className="text-lg text-white">
                  Variações de CTA
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-sm">
                <li className="bg-slate-700/50 p-3 rounded-lg border border-slate-600/50">
                  "Garantir vaga com desconto e bônus"
                </li>
                <li className="bg-slate-700/50 p-3 rounded-lg border border-slate-600/50">
                  "Sim! Quero preparar meu filho para o futuro"
                </li>
                <li className="bg-slate-700/50 p-3 rounded-lg border border-slate-600/50">
                  "Quero começar agora"
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <CardTitle className="text-lg text-white">
                  Hooks para Meta Ads
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600/50">
                  <span className="block text-brand-gold text-xs font-bold mb-1">
                    Gancho Principal:
                  </span>
                  "O mundo mudou. Seu filho está aprendendo a usar a tecnologia
                  ou apenas sendo consumido por ela?"
                </div>
                <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600/50">
                  <span className="block text-blue-400 text-xs font-bold mb-1">
                    Promessa Tráfego Frio:
                  </span>
                  "Dê ao seu filho a vantagem competitiva que as escolas
                  tradicionais ainda não oferecem através da Inteligência
                  Artificial Criativa."
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
