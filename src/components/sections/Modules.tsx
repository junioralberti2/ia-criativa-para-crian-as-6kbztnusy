import { BookOpen, Palette, MessageSquare, ShieldCheck } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const modules = [
  {
    icon: BookOpen,
    title: 'Criar histórias com IA',
    description:
      'Seu filho vai dar asas à imaginação estruturando narrativas fantásticas, contos e roteiros estruturados com o poder da Inteligência Artificial.',
  },
  {
    icon: Palette,
    title: 'Gerar artes digitais',
    description:
      'Aprender a transformar textos em imagens, ilustrações incríveis e até personagens de seus próprios mundos imaginários.',
  },
  {
    icon: MessageSquare,
    title: 'Lógica de prompts',
    description:
      'Dominar a habilidade do futuro: a arte de "conversar" com a máquina dando os comandos certos para extrair o melhor resultado.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança básica',
    description:
      'Princípios fundamentais de ética, como identificar fake news e manter-se protegido no ambiente digital.',
  },
]

export const Modules = () => {
  return (
    <section id="modules" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-indigo font-bold tracking-wider uppercase text-sm mb-2 block">
            Conteúdo Prático
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
            O que a criança vai aprender?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Habilidades essenciais destrinchadas em aulas dinâmicas e
            envolventes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="group hover:-translate-y-2 transition-all duration-300 border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-indigo/30 bg-white"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-brand-indigo/10 group-hover:bg-brand-indigo group-hover:text-white rounded-xl flex items-center justify-center transition-colors mb-4">
                  <module.icon className="w-6 h-6 text-brand-indigo group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-dark">
                  {module.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-base leading-relaxed">
                  {module.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
