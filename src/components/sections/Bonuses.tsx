import { BookOpen, ShieldCheck, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const bonuses = [
  {
    icon: BookOpen,
    title: 'Guia para pais acompanharem evolução',
    description:
      'Um passo a passo simples para você incentivar e acompanhar as criações do seu filho, mesmo sem entender de tecnologia.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-100',
  },
  {
    icon: ShieldCheck,
    title: 'Aula sobre segurança digital',
    description:
      'Módulo especial ensinando as crianças a navegarem com segurança e ética nas ferramentas de Inteligência Artificial.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-100',
  },
  {
    icon: Users,
    title: 'Comunidade exclusiva',
    description:
      'Acesso a um grupo seguro onde os alunos podem compartilhar suas criações e trocar ideias sob total supervisão.',
    color: 'text-green-500',
    bgColor: 'bg-green-100',
  },
]

export const Bonuses = () => {
  return (
    <section id="bonuses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
            Bônus Exclusivos
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ao se inscrever hoje, você leva gratuitamente esses materiais
            aceleradores.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
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
                <CardTitle className="text-lg font-bold text-brand-dark leading-tight">
                  {bonus.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {bonus.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Total Value Summary Box */}
        <div className="max-w-2xl mx-auto text-center bg-brand-light p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-slate-600 uppercase tracking-widest">
            Valor Total dos Bônus
          </h3>
          <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <div className="text-3xl md:text-4xl font-bold text-red-500 line-through decoration-red-500/50 decoration-[3px]">
              R$ 145
            </div>
            <div className="text-5xl md:text-7xl font-extrabold text-green-500 uppercase tracking-tight drop-shadow-sm mt-2">
              GRÁTIS
            </div>
          </div>
          <p className="text-slate-600 text-base mt-6">
            Você não paga absolutamente nada por esses 3 bônus ao garantir a
            vaga agora.
          </p>
        </div>
      </div>
    </section>
  )
}
