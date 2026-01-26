import { Ban, Smartphone, Tablet, AlertTriangle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
            A Batalha Diária das Telas
          </h2>
          <p className="text-lg text-slate-600">
            Você sente que está perdendo seu filho para o tablet e o celular? A
            proibição gera conflitos e não resolve o problema real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-elevation hover:-translate-y-1 transition-transform duration-300">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Ban className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                Consumo Passivo
              </h3>
              <p className="text-slate-600">
                Horas assistindo vídeos curtos que viciam o cérebro e não
                ensinam absolutamente nada de útil.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-elevation hover:-translate-y-1 transition-transform duration-300">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                Isolamento
              </h3>
              <p className="text-slate-600">
                A criança prefere o mundo virtual ao real, perdendo o interesse
                em interagir com a família e amigos.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-elevation hover:-translate-y-1 transition-transform duration-300">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                Falta de Preparo
              </h3>
              <p className="text-slate-600">
                Apenas saber "mexer" no celular não garante futuro. O mercado
                exigirá criatividade aliada à tecnologia.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
