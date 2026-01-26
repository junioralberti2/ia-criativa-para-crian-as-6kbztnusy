import {
  PenTool,
  Printer,
  ShoppingBag,
  Sparkles,
  BookOpen,
  Gift,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const bonuses = [
  {
    icon: PenTool,
    title: 'Bônus 1 – Como Criar uma Logomarca com ChatGPT',
    description:
      'Uma atividade incrível para pais e filhos criarem juntos a identidade visual de canais, times ou projetos escolares, usando IA para gerar logos profissionais.',
    price: 'R$ 37,00',
    color: 'text-blue-500',
    bgColor: 'bg-blue-100',
  },
  {
    icon: Printer,
    title: 'Bônus 2 – Como Criar um Panfleto para Impressão',
    description:
      'Aprenda a diagramar e criar panfletos reais para trabalhos escolares, festas ou para ajudar na divulgação de pequenos negócios da família.',
    price: 'R$ 27,00',
    color: 'text-purple-500',
    bgColor: 'bg-purple-100',
  },
  {
    icon: ShoppingBag,
    title: 'Bônus 3 – Criação de Descrição e Imagem para Vender Produtos',
    description:
      'Desenvolva habilidades de marketing e empreendedorismo criando anúncios persuasivos e fotos atraentes para vender produtos reais ou fictícios.',
    price: 'R$ 27,00',
    color: 'text-green-500',
    bgColor: 'bg-green-100',
  },
  {
    icon: Sparkles,
    title: 'Bônus 4 – Pack Mestre dos Prompts',
    description:
      'Uma biblioteca completa com mais de 500 comandos prontos (prompts) para criar dragões, heróis, cenários de RPG, castelos e muito mais.',
    price: 'R$ 37,00',
    color: 'text-brand-gold',
    bgColor: 'bg-orange-100',
  },
  {
    icon: BookOpen,
    title: '🎁 Bônus Extra – Biblioteca Criativa de Prompts',
    description:
      'Uma coleção curada de comandos simples e eficazes para iniciantes gerarem imagens e vídeos incríveis sem frustração.',
    price: 'R$ 17,00',
    color: 'text-pink-500',
    bgColor: 'bg-pink-100',
  },
]

export const Bonuses = () => {
  return (
    <section id="bonuses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 py-1 px-4 border-brand-indigo/30 text-brand-indigo font-bold tracking-wider uppercase bg-brand-indigo/5"
          >
            Presentes Exclusivos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
            Bônus Especiais para Pais e Crianças
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ao garantir sua vaga hoje, você recebe gratuitamente este pacote de
            aceleradores para potencializar o aprendizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <Card
              key={index}
              className="border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div
                className={`absolute top-0 left-0 w-1 h-full ${bonus.color.replace('text-', 'bg-')}`}
              />
              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 ${bonus.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <bonus.icon className={`w-6 h-6 ${bonus.color}`} />
                </div>
                <CardTitle className="text-lg font-bold text-brand-dark min-h-[3.5rem] flex items-center">
                  {bonus.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-[180px] justify-between">
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {bonus.description}
                </p>
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs text-slate-400 font-medium">
                      Valor: <span className="line-through">{bonus.price}</span>
                    </span>
                    <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100 inline-block text-center">
                      Grátis hoje
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Total Value Summary Card */}
          <div className="md:col-span-2 lg:col-span-1 flex items-center">
            <Card className="w-full bg-brand-dark text-white border-none shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold opacity-10 rounded-full translate-x-10 -translate-y-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-indigo opacity-20 rounded-full -translate-x-10 translate-y-10" />

              <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
                  <Gift className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Valor Total dos Bônus
                </h3>
                <div className="text-4xl font-extrabold text-brand-gold mb-2">
                  R$ 145,00
                </div>
                <p className="text-slate-300 text-sm">
                  Você leva tudo isso{' '}
                  <strong className="text-white">de graça</strong> ao se
                  inscrever agora.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
