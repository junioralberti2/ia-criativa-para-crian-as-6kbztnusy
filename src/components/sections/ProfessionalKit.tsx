import { Palette, FileText, Globe, PenTool, LayoutTemplate } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const kitItems = [
  {
    icon: Palette,
    title: 'Criação de Logotipo',
    desc: 'Artes profissionais e únicas para marcas.',
  },
  {
    icon: FileText,
    title: 'Panfletos',
    desc: 'Design rápido de material de divulgação.',
  },
  {
    icon: LayoutTemplate,
    title: 'Cartão de Visitas',
    desc: 'Identidade visual pronta para impressão.',
  },
  {
    icon: PenTool,
    title: 'Copy de Vendas',
    desc: 'Textos persuasivos gerados de forma automática.',
  },
  {
    icon: Globe,
    title: 'Criação de Sites',
    desc: 'Estruturação de presença digital com ferramentas IA.',
  },
]

export const ProfessionalKit = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-brand-gold text-brand-dark font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-6 shadow-lg shadow-brand-gold/20">
            Bônus Exclusivo
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white">
            Kit Profissional com IA
          </h2>
          <p className="text-lg text-slate-300">
            Além das criações lúdicas, você e seu filho terão acesso a um módulo
            especial ensinando habilidades profissionais altamente valorizadas.
            Ele poderá criar sua própria mini-agência em casa!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {kitItems.map((item, idx) => (
            <Card
              key={idx}
              className="bg-slate-800 border-slate-700 hover:border-brand-gold/50 transition-colors"
            >
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-4 text-brand-gold">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
