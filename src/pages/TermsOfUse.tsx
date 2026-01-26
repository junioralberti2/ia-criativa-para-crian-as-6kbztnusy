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
          Ao acessar este site, você concorda em cumprir estes termos de
          serviço, todas as leis e regulamentos aplicáveis e concorda que é
          responsável pelo cumprimento de todas as leis locais aplicáveis. Se
          você não concordar com algum desses termos, está proibido de usar ou
          acessar este site. Os materiais contidos neste site são protegidos
          pelas leis de direitos autorais e marcas comerciais aplicáveis.
        </p>

        <h3 className="text-xl font-bold text-brand-dark">1. Licença de Uso</h3>
        <p>
          É concedida permissão para baixar temporariamente uma cópia dos
          materiais (informações ou software) no site IA Criativa para Crianças,
          apenas para visualização transitória pessoal e não comercial. Esta é a
          concessão de uma licença, não uma transferência de título e, sob esta
          licença, você não pode:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Modificar ou copiar os materiais;</li>
          <li>
            Usar os materiais para qualquer finalidade comercial ou para
            exibição pública (comercial ou não comercial);
          </li>
          <li>
            Tentar descompilar ou fazer engenharia reversa de qualquer software
            contido no site IA Criativa para Crianças;
          </li>
          <li>
            Remover quaisquer direitos autorais ou outras notações de
            propriedade dos materiais; ou
          </li>
          <li>
            Transferir os materiais para outra pessoa ou 'espelhe' os materiais
            em qualquer outro servidor.
          </li>
        </ul>
        <p>
          Esta licença será automaticamente rescindida se você violar alguma
          dessas restrições e poderá ser rescindida por IA Criativa para
          Crianças a qualquer momento. Ao encerrar a visualização desses
          materiais ou após o término desta licença, você deve apagar todos os
          materiais baixados em sua posse, seja em formato eletrônico ou
          impresso.
        </p>

        <h3 className="text-xl font-bold text-brand-dark">
          2. Isenção de responsabilidade
        </h3>
        <p>
          Os materiais no site da IA Criativa para Crianças são fornecidos 'como
          estão'. IA Criativa para Crianças não oferece garantias, expressas ou
          implícitas, e, por este meio, isenta e nega todas as outras garantias,
          incluindo, sem limitação, garantias implícitas ou condições de
          comercialização, adequação a um fim específico ou não violação de
          propriedade intelectual ou outra violação de direitos.
        </p>
        <p>
          Além disso, o IA Criativa para Crianças não garante ou faz qualquer
          representação relativa à precisão, aos resultados prováveis ou à
          confiabilidade do uso dos materiais em seu site ou de outra forma
          relacionado a esses materiais ou em sites vinculados a este site.
        </p>

        <h3 className="text-xl font-bold text-brand-dark">3. Limitações</h3>
        <p>
          Em nenhum caso o IA Criativa para Crianças ou seus fornecedores serão
          responsáveis por quaisquer danos (incluindo, sem limitação, danos por
          perda de dados ou lucro ou devido a interrupção dos negócios)
          decorrentes do uso ou da incapacidade de usar os materiais em IA
          Criativa para Crianças, mesmo que IA Criativa para Crianças ou um
          representante autorizado da IA Criativa para Crianças tenha sido
          notificado oralmente ou por escrito da possibilidade de tais danos.
          Como algumas jurisdições não permitem limitações em garantias
          implícitas, ou limitações de responsabilidade por danos conseqüentes
          ou incidentais, essas limitações podem não se aplicar a você.
        </p>

        <h3 className="text-xl font-bold text-brand-dark">
          4. Precisão dos materiais
        </h3>
        <p>
          Os materiais exibidos no site da IA Criativa para Crianças podem
          incluir erros técnicos, tipográficos ou fotográficos. IA Criativa para
          Crianças não garante que qualquer material em seu site seja preciso,
          completo ou atual. IA Criativa para Crianças pode fazer alterações nos
          materiais contidos em seu site a qualquer momento, sem aviso prévio.
          No entanto, IA Criativa para Crianças não se compromete a atualizar os
          materiais.
        </p>

        <h3 className="text-xl font-bold text-brand-dark">5. Links</h3>
        <p>
          O IA Criativa para Crianças não analisou todos os sites vinculados ao
          seu site e não é responsável pelo conteúdo de nenhum site vinculado. A
          inclusão de qualquer link não implica endosso por IA Criativa para
          Crianças do site. O uso de qualquer site vinculado é por conta e risco
          do usuário.
        </p>

        <h3 className="text-xl font-bold text-brand-dark">Modificações</h3>
        <p>
          O IA Criativa para Crianças pode revisar estes termos de serviço do
          site a qualquer momento, sem aviso prévio. Ao usar este site, você
          concorda em ficar vinculado à versão atual desses termos de serviço.
        </p>

        <h3 className="text-xl font-bold text-brand-dark">Lei aplicável</h3>
        <p>
          Estes termos e condições são regidos e interpretados de acordo com as
          leis do IA Criativa para Crianças e você se submete irrevogavelmente à
          jurisdição exclusiva dos tribunais naquele estado ou localidade.
        </p>
      </div>
    </div>
  )
}

export default TermsOfUse
