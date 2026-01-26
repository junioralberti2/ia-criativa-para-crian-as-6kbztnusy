import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Future } from '@/components/sections/Future'
import { Solution } from '@/components/sections/Solution'
import { Modules } from '@/components/sections/Modules'
import { Benefits } from '@/components/sections/Benefits'
import { Bonuses } from '@/components/sections/Bonuses'
import { Author } from '@/components/sections/Author'
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { Testimonials } from '@/components/sections/Testimonials'

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Problem />
      <Future />
      <Solution />
      <Modules />
      <Benefits />
      <Bonuses />
      <Author />
      <Pricing />
      <FAQ />
      <Testimonials />
    </div>
  )
}

export default Index
