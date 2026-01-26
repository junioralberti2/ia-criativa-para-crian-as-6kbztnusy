import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading text-brand-dark mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600">
            Tire suas dúvidas e faça a matrícula com tranquilidade.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-slate-100"
            >
              <AccordionTrigger className="text-left font-semibold text-brand-dark hover:text-brand-indigo hover:no-underline py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
