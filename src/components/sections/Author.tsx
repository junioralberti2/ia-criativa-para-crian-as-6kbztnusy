import { BadgeCheck } from 'lucide-react'

export const Author = () => {
  return (
    <section id="author" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-brand-dark text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-indigo opacity-20 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-gold opacity-10 rounded-full -translate-x-1/2 translate-y-1/2" />

          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="w-full md:w-1/3 text-center">
              <div className="relative inline-block">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-brand-gold shadow-lg">
                  <img
                    src="https://img.usecurling.com/ppl/large?gender=male&seed=45"
                    alt="Junior Cristiano Alberti"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-4 right-4 bg-brand-gold text-brand-dark px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                  <BadgeCheck className="w-4 h-4" />
                  Especialista
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold font-heading mb-4">
                Quem é seu professor?
              </h2>
              <h3 className="text-xl text-brand-gold font-semibold mb-6">
                Junior Cristiano Alberti
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Pai, educador e entusiasta de tecnologia há mais de 20 anos.
                  Especialista em inovação digital desde 2004, Junior encontrou
                  na Inteligência Artificial uma forma de conectar gerações.
                </p>
                <p>
                  "Criei este curso porque via meu próprio filho hipnotizado
                  pelas telas. Decidi que não ia proibir, mas sim ensinar ele a
                  dominar a máquina. Hoje, ele cria seus próprios gibis e jogos,
                  e quero que seu filho tenha essa mesma oportunidade."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
