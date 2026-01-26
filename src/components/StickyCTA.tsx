import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'

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
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
    toast({
      title: 'Ótima escolha!',
      description: 'Aproveite o preço promocional.',
    })
  }

  if (!isVisible) return null

  return (
    <div
      className={cn(
        'fixed bottom-4 left-4 right-4 z-50 md:hidden transition-all duration-500 transform',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0',
      )}
    >
      <Button
        onClick={handleClick}
        className="w-full rounded-full bg-gradient-to-r from-brand-orange to-brand-orangeDark text-white font-bold uppercase shadow-2xl py-6 text-lg border-2 border-white/20"
      >
        Garanta sua vaga
      </Button>
    </div>
  )
}
