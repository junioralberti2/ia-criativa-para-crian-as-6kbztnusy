import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { HelpCircle } from 'lucide-react'

const faqItems = [
  {
    question: 'Para qual idade é o curso?',
    answer: 'Crianças de 7 a 14 anos.',
  },
  {
    question: 'Preciso de algum conhecimento prévio em IA?',
    answer: 'Não, partimos do zero.',
  },
  {
    question: 'Como funciona a garantia?',
    answer: 'Você tem 7 dias para testar; se não gostar, devolvemos 100%.',
  },
  {
    question: 'O curso é ao vivo ou gravado?',
    answer: 'Online e gravado para assistir no seu tempo.',
  },
  {
    question: 'A criança consegue fazer sozinha?',
    answer: 'Sim, a linguagem é adaptada para a autonomia deles.',
  },
  {
    question: 'Quais bônus eu recebo?',
    answer: 'Guia para pais, Aula de Segurança e Comunidade.',
  },
]

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-brand-indigo/10 rounded-full mb-4">
            <HelpCircle className="w-6 h-6 text-brand-indigo" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {faqItems.map((item, index) => (
            <Card
              key={index}
              className="border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-brand-dark leading-tight">
                  {item.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  {item.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
