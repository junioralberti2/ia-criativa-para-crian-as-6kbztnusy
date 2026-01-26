import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { HelpCircle } from 'lucide-react'

const faqItems = [
  {
    question: 'Para qual idade o curso é recomendado?',
    answer:
      'O curso foi desenhado especificamente para crianças e adolescentes de 7 a 16 anos, com linguagem adaptada e segura.',
  },
  {
    question: 'Preciso de um computador potente?',
    answer:
      'Não! Todas as ferramentas de IA que usamos rodam na nuvem (internet). Um computador simples, tablet ou até celular funcionam.',
  },
  {
    question: 'As IAs ensinadas são pagas?',
    answer:
      'Focamos principalmente em ferramentas gratuitas ou que possuem planos gratuitos generosos, para que você não tenha custos extras.',
  },
  {
    question: 'Meu filho precisa saber programação?',
    answer:
      'Zero! A revolução da IA é justamente usar a linguagem natural (português) para criar. Não precisa saber código.',
  },
  {
    question: 'O acesso é vitalício?',
    answer:
      'Sim! Pagando a taxa única de matrícula, seu filho tem acesso para sempre ao conteúdo e futuras atualizações.',
  },
  {
    question: 'Tem certificado?',
    answer:
      "Sim, ao concluir todos os módulos, o aluno recebe um certificado digital de 'Criador com Inteligência Artificial'.",
  },
  {
    question: 'Como funciona a garantia?',
    answer:
      'Você tem 7 dias para testar. Se não gostar da metodologia, devolvemos 100% do seu dinheiro sem perguntas.',
  },
  {
    question: 'As aulas são ao vivo ou gravadas?',
    answer:
      'São gravadas em alta qualidade, permitindo que seu filho assista no próprio ritmo, quantas vezes quiser.',
  },
  {
    question: 'Os pais precisam acompanhar as aulas?',
    answer:
      'Para crianças menores de 10 anos, recomendamos o acompanhamento inicial. Para os maiores, o curso é totalmente autoexplicativo.',
  },
  {
    question: 'É seguro para crianças?',
    answer:
      'Absolutamente. Temos um módulo inteiro dedicado à segurança digital e ética, e curamos apenas ferramentas seguras.',
  },
  {
    question: 'Como tiro dúvidas?',
    answer:
      'Temos uma área de membros exclusiva onde nossa equipe pedagógica responde todas as dúvidas dos alunos.',
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
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tudo o que você precisa saber para tomar a melhor decisão para o
            futuro do seu filho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqItems.map((item, index) => (
            <Card
              key={index}
              className="border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-brand-dark leading-tight">
                  {item.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm leading-relaxed">
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
