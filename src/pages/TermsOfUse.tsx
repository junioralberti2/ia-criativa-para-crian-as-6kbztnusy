import { useEffect } from 'react'

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-8">
        Termos de Uso
      </h1>
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        <p>
          Bem-vindo ao curso <strong>IA Criativa para Crianças</strong>. Ao
          acessar e utilizar nosso conteúdo, você concorda com os termos
          descritos abaixo.
        </p>

        <h3 className="text-xl font-bold text-brand-dark">1. Sobre o Curso</h3>
        <p>
          O "IA Criativa para Crianças" é um programa educacional online
          destinado a ensinar conceitos de Inteligência Artificial e
          criatividade digital para crianças e adolescentes, sob a supervisão de
          seus pais ou responsáveis.
        </p>

        <h3 className="text-xl font-bold text-brand-dark">
          2. Uso do Conteúdo
        </h3>
        <p>
          Todo o material disponibilizado (vídeos, textos, exercícios e bônus) é
          de propriedade exclusiva do curso. A licença de uso é:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pessoal e intransferível.</li>
          <li>
            Válida para o núcleo familiar do comprador (pais e filhos que
            residem na mesma casa).
          </li>
          <li>
            É proibida a distribuição, revenda ou compartilhamento do login de
            acesso com terceiros.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-brand-dark">
          3. Responsabilidades
        </h3>
        <p>
          Embora ensinemos o uso seguro da tecnologia, o monitoramento do uso da
          internet pelas crianças é de responsabilidade dos pais. Recomendamos
          que os módulos sobre Segurança Digital sejam assistidos em conjunto.
        </p>
        <p>
          Não nos responsabilizamos pelo uso indevido das ferramentas de IA
          apresentadas, nem por atualizações ou mudanças nos termos de uso das
          próprias ferramentas (terceiros) mencionadas no curso.
        </p>

        <h3 className="text-xl font-bold text-brand-dark">
          4. Pagamento e Acesso
        </h3>
        <p>
          O acesso ao curso é liberado imediatamente após a confirmação do
          pagamento. O acesso é vitalício, garantindo que o aluno possa rever as
          aulas e receber atualizações futuras sem custo adicional.
        </p>

        <h3 className="text-xl font-bold text-brand-dark">
          5. Alterações nos Termos
        </h3>
        <p>
          Reservamo-nos o direito de alterar estes termos a qualquer momento,
          notificando os alunos através da plataforma do curso ou e-mail
          cadastrado.
        </p>
      </div>
    </div>
  )
}

export default TermsOfUse
