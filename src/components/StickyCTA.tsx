import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'
import { trackEvent } from '@/lib/facebook'

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 600px)
      const show = window.scrollY > 600
      setIsVisible(show)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    trackEvent('InitiateCheckout')
    window.location.href = 'https://pay.hotmart.com/E103583426A'
    toast({
      title: 'Ótima escolha!',
      description: 'Você será redirecionado para o pagamento seguro.',
    })
  }

  if (!isVisible) return null

  return (
    <div
      className={cn(
        'fixed bottom-4 left-4 right-4 z-50 md:hidden transition-all duration-500 transform',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0',
      )}
    >
      <Button
        onClick={handleClick}
        className="w-full rounded-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold uppercase shadow-2xl py-4 h-auto min-h-[56px] text-sm sm:text-base border-2 border-white/20 whitespace-normal text-center"
      >
        <span className="flex items-center justify-center">
          👉 Quero tirar meu filho do modo zumbi agora
        </span>
      </Button>
    </div>
  )
}
