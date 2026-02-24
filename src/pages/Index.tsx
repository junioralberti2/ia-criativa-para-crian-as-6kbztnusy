import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Opportunity } from '@/components/sections/Opportunity'
import { Solution } from '@/components/sections/Solution'
import { Modules } from '@/components/sections/Modules'
import { Transformation } from '@/components/sections/Transformation'
import { Testimonials } from '@/components/sections/Testimonials'
import { Author } from '@/components/sections/Author'
import { Includes } from '@/components/sections/Includes'
import { Bonuses } from '@/components/sections/Bonuses'
import { GuaranteeSection } from '@/components/sections/GuaranteeSection'
import { FAQ } from '@/components/sections/FAQ'
import { PriceJustification } from '@/components/sections/PriceJustification'
import { Pricing } from '@/components/sections/Pricing'
import { EmotionalClosing } from '@/components/sections/EmotionalClosing'

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Problem />
      <Opportunity />
      <Solution />
      <Modules />
      <Transformation />
      <Testimonials />
      <Author />
      <Includes />
      <Bonuses />
      <GuaranteeSection />
      <FAQ />
      <PriceJustification />
      <Pricing />
      <EmotionalClosing />
    </div>
  )
}

export default Index
