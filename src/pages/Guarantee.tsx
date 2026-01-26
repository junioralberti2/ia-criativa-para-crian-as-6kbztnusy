import { useEffect } from 'react'

const Guarantee = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-8">
        Garantia Incondicional de 7 Dias
      </h1>
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        <p>
          Acreditamos tanto na qualidade e no impacto do curso{' '}
          <strong>IA Criativa para Crianças</strong> que oferecemos uma garantia
          total de satisfação.
        </p>

        <h3 className="text-xl font-bold text-brand-dark">Como funciona?</h3>
        <p>
          A partir do momento da compra, você tem{' '}
          <strong>7 dias corridos</strong> para explorar todo o conteúdo do
          curso.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Assista às aulas.</li>
          <li>Teste as ferramentas de IA sugeridas.</li>
          <li>Mostre para seu filho e veja a reação dele.</li>
        </ul>

        <h3 className="text-xl font-bold text-brand-dark">Se eu não gostar?</h3>
        <p>
          Se, por qualquer motivo, você achar que o curso não é para sua
          família, ou se seu filho não se adaptar, nós devolveremos{' '}
          <strong>100% do seu investimento</strong>.
        </p>

        <h3 className="text-xl font-bold text-brand-dark">
          Como solicitar o reembolso?
        </h3>
        <p>O processo é simples e sem burocracia:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Envie um e-mail para{' '}
            <strong className="text-brand-indigo">
              cursoiacriativa2026@gmail.com
            </strong>{' '}
            ou entre em contato pelo nosso WhatsApp.
          </li>
          <li>Informe o e-mail utilizado na compra.</li>
          <li>Solicite o cancelamento.</li>
        </ol>
        <p>
          Nós processaremos o estorno imediatamente junto à plataforma de
          pagamento (Hotmart), e você receberá o valor integral de volta. Não
          faremos perguntas constrangedoras e continuaremos amigos.
        </p>
        <p className="font-bold">
          O risco é todo nosso. Seu filho merece essa oportunidade!
        </p>
      </div>
    </div>
  )
}

export default Guarantee
