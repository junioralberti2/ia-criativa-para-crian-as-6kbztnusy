import { useEffect } from 'react'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-8">
        Política de Privacidade
      </h1>
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        <p>
          A sua privacidade e a segurança dos dados da sua família são
          prioridades para o <strong>IA Criativa para Crianças</strong>. Esta
          política detalha como coletamos e protegemos suas informações.
        </p>

        <h3 className="text-xl font-bold text-brand-dark">
          1. Coleta de Dados
        </h3>
        <p>
          Coletamos apenas os dados necessários para a prestação do serviço
          educacional e processamento da compra:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Nome completo do responsável (comprador).</li>
          <li>E-mail para envio do acesso e comunicações.</li>
          <li>Telefone (WhatsApp) para suporte.</li>
          <li>
            Dados de pagamento (processados de forma segura pela Hotmart).
          </li>
        </ul>

        <h3 className="text-xl font-bold text-brand-dark">
          2. Proteção à Criança
        </h3>
        <p>
          Não coletamos dados pessoais sensíveis de crianças diretamente. O
          cadastro é realizado exclusivamente pelo pai, mãe ou responsável
          legal. Incentivamos que o uso da plataforma seja supervisionado.
        </p>

        <h3 className="text-xl font-bold text-brand-dark">
          3. Uso das Informações
        </h3>
        <p>Seus dados são utilizados para:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Liberar o acesso à área de membros.</li>
          <li>Enviar atualizações sobre o curso e novos materiais.</li>
          <li>Prestar suporte técnico ou pedagógico.</li>
          <li>
            Emitir o certificado de conclusão (no nome do aluno indicado).
          </li>
        </ul>

        <h3 className="text-xl font-bold text-brand-dark">
          4. Compartilhamento
        </h3>
        <p>
          Não vendemos nem compartilhamos seus dados com terceiros para fins de
          marketing. Seus dados são compartilhados apenas com a plataforma de
          hospedagem do curso (Hotmart) para viabilizar o acesso.
        </p>

        <h3 className="text-xl font-bold text-brand-dark">5. Segurança</h3>
        <p>
          Adotamos as melhores práticas de segurança digital e criptografia para
          proteger seus dados. Recomendamos o uso de senhas fortes para acessar
          a área de membros.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
