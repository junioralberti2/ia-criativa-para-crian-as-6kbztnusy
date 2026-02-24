import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'

const testimonials = [
  {
    name: 'Ana Paula Silva',
    role: 'Mãe do Pedro (9 anos)',
    text: 'Em 5 dias o Pedro criou um gibi de 12 páginas com personagens próprios usando IA. Ele nunca tinha demonstrado tanto interesse por aprender tecnologia.',
    rating: 5,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=10',
  },
  {
    name: 'Carlos Henrique',
    role: 'Pai da Sofia (13 anos)',
    text: 'Minha filha passou de horas rolando vídeos para criar artes digitais que ela mesma imprimiu para decorar o quarto.',
    rating: 5,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=12',
  },
  {
    name: 'Mariana Costa',
    role: 'Mãe de gêmeos (11 anos)',
    text: 'O melhor investimento que fiz. Eles pararam de rolar vídeos sem sentido e começaram a colaborar pra criar histórias ilustradas juntos. Incrível.',
    rating: 5,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=33',
  },
  {
    name: 'Roberto Almeida',
    role: 'Pai do Lucas (14 anos)',
    text: 'O Lucas estava muito ocioso nas telas. O formato das aulas curtas prendeu a atenção dele e ele finalizou as primeiras artes digitais na mesma semana.',
    rating: 5,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=55',
  },
]

export const Testimonials = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-indigo font-bold tracking-wider uppercase text-sm mb-2 block">
            Prova Social
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
            O que os pais estão dizendo
          </h2>
        </div>

        <Carousel
          plugins={[Autoplay({ delay: 5000 })]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((t, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 p-4"
              >
                <Card className="h-full border-none shadow-md bg-white">
                  <CardContent className="p-6 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-brand-gold text-brand-gold"
                          />
                        ))}
                      </div>
                      <p className="text-slate-600 text-sm italic mb-6 leading-relaxed">
                        "{t.text}"
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-10 h-10 rounded-full border border-slate-200"
                      />
                      <div>
                        <p className="font-bold text-sm text-brand-dark">
                          {t.name}
                        </p>
                        <p className="text-xs text-slate-500">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
