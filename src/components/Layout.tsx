import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { StickyCTA } from '@/components/StickyCTA'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
      <WhatsAppButton />
    </div>
  )
}
