import { useState } from 'react'
import { Menu, Bot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const NavItems = () => (
    <>
      <button
        onClick={() => scrollToSection('modules')}
        className="text-sm font-medium hover:text-brand-purple transition-colors"
      >
        O Curso
      </button>
      <button
        onClick={() => scrollToSection('benefits')}
        className="text-sm font-medium hover:text-brand-purple transition-colors"
      >
        Benefícios
      </button>
      <button
        onClick={() => scrollToSection('bonuses')}
        className="text-sm font-medium hover:text-brand-purple transition-colors"
      >
        Bônus
      </button>
      <button
        onClick={() => scrollToSection('faq')}
        className="text-sm font-medium hover:text-brand-purple transition-colors"
      >
        FAQ
      </button>
    </>
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[70px] glass-nav flex items-center transition-all duration-300">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="bg-gradient-to-br from-brand-indigo to-brand-purple p-2 rounded-lg">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-brand-indigo to-brand-purple">
            IA Criativa
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavItems />
          <Button
            onClick={() => scrollToSection('pricing')}
            className="rounded-full bg-gradient-to-r from-brand-orange to-brand-orangeDark hover:opacity-90 transition-opacity font-bold uppercase shadow-lg shadow-brand-orange/20 border-0"
          >
            Matricule-se Agora
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6 text-slate-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-10">
                <NavItems />
                <Button
                  onClick={() => scrollToSection('pricing')}
                  className="w-full rounded-full bg-gradient-to-r from-brand-orange to-brand-orangeDark font-bold uppercase"
                >
                  Matricule-se Agora
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
