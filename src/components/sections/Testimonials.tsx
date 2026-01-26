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
    text: 'Eu estava desesperada com o Pedro só no Minecraft. Depois do curso, ele criou um gibi da nossa família e imprimiu pra gente. Foi emocionante!',
    rating: 5,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=10',
  },
  {
    name: 'Carlos Henrique',
    role: 'Pai da Sofia (13 anos)',
    text: 'A Sofia sempre gostou de desenhar, mas estava frustrada. Com as IAs que o professor Junior ensinou, ela elevou o nível e tá até pensando em vender as artes.',
    rating: 5,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=12',
  },
  {
    name: 'Mariana Costa',
    role: 'Mãe de gêmeos (11 anos)',
    text: 'O melhor investimento que fiz. Eles pararam de brigar pelo tablet e começaram a colaborar pra criar um canal no YouTube juntos. Incrível.',
    rating: 5,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=33',
  },
  {
    name: 'Roberto Almeida',
    role: 'Pai do Lucas (15 anos)',
    text: 'O Lucas tem TDAH e dificilmente termina algo. O formato das aulas prendeu a atenção dele e ele finalizou o primeiro jogo semana passada.',
    rating: 5,
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=55',
  },
]

export const Testimonials = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading text-brand-dark mb-4">
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
                <Card className="h-full border-none shadow-md">
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
                      <p className="text-slate-600 text-sm italic mb-6">
                        "{t.text}"
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-10 h-10 rounded-full"
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
