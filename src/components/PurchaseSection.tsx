import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const PurchaseSection = () => {
  const handlePurchase = () => {
    window.location.href = 'https://pay.hotmart.com/E103583426A'
  }

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 text-center">
        <Button
          onClick={handlePurchase}
          size="lg"
          className="w-full sm:w-auto h-16 text-lg md:text-xl font-bold uppercase bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 shadow-xl shadow-green-500/30 rounded-xl animate-pulse px-8 md:px-12"
        >
          Quero garantir por R$ 27
          <ArrowRight className="w-6 h-6 ml-2" />
        </Button>
      </div>
    </section>
  )
}
