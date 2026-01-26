import { Check, Brain, HeartHandshake } from 'lucide-react'

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Cognitive Benefits */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-brand-dark">
                Benefícios Cognitivos
              </h2>
            </div>
            <p className="text-slate-600 mb-8">
              A interação com Inteligência Artificial estimula áreas do cérebro
              que o consumo passivo de vídeos adormece.
            </p>
            <ul className="space-y-4">
              {[
                'Desenvolvimento do Raciocínio Lógico e Estruturado',
                'Estímulo à Criatividade e Resolução de Problemas',
                'Melhora na Capacidade de Escrita e Interpretação',
                'Aumento da Autoestima ao ver seus projetos prontos',
                'Preparação para o mercado de trabalho do futuro',
              ].map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-medium text-brand-dark">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Neurodiversity */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <HeartHandshake className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-brand-dark">
                Apoio à Neurodiversidade
              </h2>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Sabemos que crianças com{' '}
              <strong>TDAH, Autismo ou Ansiedade</strong> muitas vezes encontram
              na tecnologia um refúgio. O curso foi desenhado pensando nelas:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="font-bold text-purple-600 text-lg">01.</span>
                <div>
                  <h4 className="font-bold text-brand-dark">
                    Aulas Curtas e Dinâmicas
                  </h4>
                  <p className="text-sm text-slate-500">
                    Conteúdo direto ao ponto para manter o hiperfoco produtivo.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-purple-600 text-lg">02.</span>
                <div>
                  <h4 className="font-bold text-brand-dark">
                    Feedback Visual Imediato
                  </h4>
                  <p className="text-sm text-slate-500">
                    A IA gera resultados instantâneos, reduzindo a frustração e
                    ansiedade.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-purple-600 text-lg">03.</span>
                <div>
                  <h4 className="font-bold text-brand-dark">
                    Expressão Sem Barreiras
                  </h4>
                  <p className="text-sm text-slate-500">
                    Permite que a criança expresse ideias complexas visualmente,
                    mesmo se tiver dificuldade motora ou de fala.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
