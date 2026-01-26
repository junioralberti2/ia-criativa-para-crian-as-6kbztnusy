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
          Sua privacidade é muito importante para nós. É política do IA Criativa
          para Crianças respeitar a sua privacidade em relação a qualquer
          informação que possamos coletar no site IA Criativa para Crianças, e
          outros sites que possuímos e operamos.
        </p>
        <p>
          Solicitamos informações pessoais apenas quando realmente precisamos
          delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
          legais, com o seu conhecimento e consentimento. Também informamos por
          que estamos coletando e como será usado.
        </p>
        <p>
          Apenas retemos as informações coletadas pelo tempo necessário para
          fornecer o serviço solicitado. Quando armazenamos dados, protegemos
          dentro de meios comercialmente aceitáveis para evitar perdas e roubos,
          bem como acesso, divulgação, cópia, uso ou modificação não
          autorizados.
        </p>
        <p>
          Não compartilhamos informações de identificação pessoal publicamente
          ou com terceiros, exceto quando exigido por lei.
        </p>
        <p>
          O nosso site pode ter links para sites externos que não são operados
          por nós. Esteja ciente de que não temos controle sobre o conteúdo e
          práticas desses sites e não podemos aceitar responsabilidade por suas
          respectivas políticas de privacidade.
        </p>
        <p>
          Você é livre para recusar a nossa solicitação de informações pessoais,
          entendendo que talvez não possamos fornecer alguns dos serviços
          desejados.
        </p>
        <p>
          O uso continuado de nosso site será considerado como aceitação de
          nossas práticas em torno de privacidade e informações pessoais. Se
          você tiver alguma dúvida sobre como lidamos com dados do usuário e
          informações pessoais, entre em contato conosco.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Os dados pessoais dos usuários são coletados para a prestação dos
            serviços e para melhorar a experiência do usuário.
          </li>
          <li>
            Para fins de segurança, não armazenamos dados sensíveis de cartões
            de crédito, sendo o processamento realizado por gateway de pagamento
            seguro (Hotmart).
          </li>
        </ul>
        <h3 className="text-xl font-bold text-brand-dark">
          Compromisso do Usuário
        </h3>
        <p>
          O usuário se compromete a fazer uso adequado dos conteúdos e da
          informação que o IA Criativa para Crianças oferece no site e com
          caráter enunciativo, mas não limitativo:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            A) Não se envolver em atividades que sejam ilegais ou contrárias à
            boa fé a à ordem pública;
          </li>
          <li>
            B) Não difundir propaganda ou conteúdo de natureza racista,
            xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia
            ilegal, de apologia ao terrorismo ou contra os direitos humanos;
          </li>
          <li>
            C) Não causar danos aos sistemas físicos (hardwares) e lógicos
            (softwares) do IA Criativa para Crianças, de seus fornecedores ou
            terceiros, para introduzir ou disseminar vírus informáticos ou
            quaisquer outros sistemas de hardware ou software que sejam capazes
            de causar danos anteriormente mencionados.
          </li>
        </ul>
        <h3 className="text-xl font-bold text-brand-dark">Mais informações</h3>
        <p>
          Esperemos que esteja esclarecido e, como mencionado anteriormente, se
          houver algo que você não tem certeza se precisa ou não, geralmente é
          mais seguro deixar os cookies ativados, caso interaja com um dos
          recursos que você usa em nosso site.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
