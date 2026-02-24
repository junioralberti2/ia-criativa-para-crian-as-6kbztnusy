import { PlayCircle, FileText, Download, Award } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const Includes = () => {
  return (
    <section className="py-20 bg-brand-light border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
            O que está incluso na inscrição?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tudo o que seu filho precisa para ter sucesso na jornada criativa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                <PlayCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">
                Aulas em Vídeo
              </h3>
              <p className="text-slate-600 text-sm">
                Acesso a todos os módulos gravados em alta qualidade, passo a
                passo.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">
                Exercícios Práticos
              </h3>
              <p className="text-slate-600 text-sm">
                Desafios visuais e de prompts ao final de cada etapa para fixar
                o aprendizado.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-600">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">
                Material Digital
              </h3>
              <p className="text-slate-600 text-sm">
                Checklists, resumos de comandos e materiais de apoio para
                baixar.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">
                Certificado
              </h3>
              <p className="text-slate-600 text-sm">
                Certificado de conclusão de "Criador com Inteligência
                Artificial".
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
