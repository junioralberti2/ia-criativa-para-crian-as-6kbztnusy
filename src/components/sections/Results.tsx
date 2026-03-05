import { Card, CardContent } from '@/components/ui/card'
import { Music, Image as ImageIcon, PlayCircle } from 'lucide-react'

export const Results = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-indigo font-bold tracking-wider uppercase text-sm mb-2 block">
            Resultados Comprovados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark mb-4">
            Veja o que as crianças estão criando
          </h2>
          <p className="text-lg text-slate-600">
            Do consumo passivo à criação ativa e impressionante. Estas são artes
            e músicas reais geradas por alunos nas primeiras semanas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Art Result */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group">
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://img.usecurling.com/p/600/400?q=colorful%20fantasy%20digital%20art&color=purple"
                alt="Arte criada com IA"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-dark flex items-center gap-1 shadow-sm">
                <ImageIcon className="w-3 h-3" /> Arte Digital
              </div>
            </div>
            <CardContent className="p-6 bg-white">
              <h3 className="font-bold text-lg mb-2 text-brand-dark">
                "O Dragão Cibernético"
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Criado pelo Pedro, 9 anos. Ele imaginou o personagem e usou
                prompts precisos para dar vida a essa ilustração incrível sem
                nenhum clique técnico complicado.
              </p>
              <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100 italic">
                Prompt usado: "Um dragão robótico voando sobre uma cidade
                futurista com luzes neon, estilo 3D cartoon..."
              </div>
            </CardContent>
          </Card>

          {/* Music Result */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group">
            <div className="h-64 bg-slate-900 relative flex items-center justify-center overflow-hidden">
              <img
                src="https://img.usecurling.com/p/600/400?q=music%20notes%20abstract&color=blue"
                alt="Música criada com IA"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center relative z-10 cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-brand-gold/30">
                <PlayCircle className="w-8 h-8 text-brand-dark ml-1" />
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-dark flex items-center gap-1 z-10 shadow-sm">
                <Music className="w-3 h-3" /> Música
              </div>
            </div>
            <CardContent className="p-6 bg-white">
              <h3 className="font-bold text-lg mb-2 text-brand-dark">
                "A Canção do Espaço"
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Composta pela Sofia, 11 anos. Ela escreveu a letra completa
                sobre explorar planetas e a IA gerou a melodia pop eletrônica
                perfeitamente sincronizada.
              </p>
              <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100 italic">
                Estilo gerado: "Pop eletrônico, batida animada, vocal infantil
                feminino, sintetizadores..."
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
