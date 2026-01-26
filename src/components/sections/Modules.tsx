import {
  BookOpen,
  Music,
  Video,
  Gamepad2,
  Palette,
  ShieldCheck,
  PenTool,
  Coins,
  Smile,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const modules = [
  {
    icon: BookOpen,
    title: 'Criação de Histórias e Gibis',
    description:
      'Seu filho vai escrever roteiros criativos e transformá-los em gibis profissionais.',
  },
  {
    icon: Palette,
    title: 'Desenhos e Colorir',
    description:
      'Gerar desenhos exclusivos para colorir ou ilustrações digitais fantásticas.',
  },
  {
    icon: Music,
    title: 'Músicas e Clipes',
    description:
      'Compor músicas originais (letra e melodia) e criar videoclipes animados.',
  },
  {
    icon: Video,
    title: 'Criação de Vídeos',
    description:
      'Produzir animações e vídeos para o YouTube/TikTok com conteúdo educativo.',
  },
  {
    icon: Gamepad2,
    title: 'Criação de Jogos',
    description:
      'Entender a lógica por trás dos jogos e criar assets para seus próprios games.',
  },
  {
    icon: PenTool,
    title: 'Artes Digitais',
    description:
      'Dominar estilos artísticos variados, do Pixel Art ao 3D realista.',
  },
  {
    icon: Smile,
    title: 'Livros Infantis',
    description:
      'Projeto final: criar, diagramar e publicar um livro infantil completo.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança Digital',
    description:
      'Como identificar Fake News, proteger dados e usar a IA com ética.',
  },
  {
    icon: Coins,
    title: 'Empreendedorismo',
    description:
      'Noções básicas de como monetizar suas criações (supervisionado).',
  },
]

export const Modules = () => {
  return (
    <section id="modules" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
            O Que Seu Filho Vai Aprender?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Uma jornada completa pelo universo da criatividade digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="group hover:-translate-y-2 transition-all duration-300 border-slate-100 shadow-subtle hover:shadow-xl hover:border-brand-indigo/30"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-brand-light group-hover:bg-brand-indigo group-hover:text-white rounded-xl flex items-center justify-center transition-colors mb-2">
                  <module.icon className="w-6 h-6 text-brand-indigo group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-dark">
                  {module.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm leading-relaxed">
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
