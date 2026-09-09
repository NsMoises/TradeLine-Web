import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { Coverage } from "@/components/sections/coverage"
import { Benefits } from "@/components/sections/benefits"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

export default function App() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <main>
          <Services />
          <Process />
          <Coverage />
          <Benefits />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  )
}
