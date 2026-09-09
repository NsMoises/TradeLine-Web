import { Anchor, Building2, Mail, MapPin, MessageCircle } from "lucide-react"
import { company, getWhatsAppUrl } from "@/config/company"

const services = ["Transporte marítimo", "Transporte aéreo", "Transporte terrestre", "Despacho aduanero", "Almacenaje y distribución"]

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="/" className="inline-flex" aria-label="Tradeline Logistic, inicio">
              <img src="/tradeline-logo.png" alt="Tradeline Logistic" className="h-20 w-auto rounded-md object-contain" />
            </a>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-500">
              Coordinación de transporte internacional y comercio exterior para empresas que necesitan mover su carga con información clara y acompañamiento directo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-gray-800 px-4 py-2 text-sm text-gray-300 transition hover:border-green-700 hover:text-white"><MessageCircle className="h-4 w-4" />WhatsApp</a>
              <a href={`mailto:${company.email}`} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-gray-800 px-4 py-2 text-sm text-gray-300 transition hover:border-brand-700 hover:text-white"><Mail className="h-4 w-4" />Correo</a>
            </div>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-sm font-semibold text-white"><Anchor className="h-4 w-4 text-brand-400" />Servicios</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((service) => <li key={service}><a href="/#services" className="transition hover:text-white">{service}</a></li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Contacto</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /><span>{company.location}</span></li>
              <li className="flex items-start gap-2"><Building2 className="mt-0.5 h-4 w-4 shrink-0" /><span>RUC {company.taxId}</span></li>
              <li className="break-all"><a href={`mailto:${company.email}`} className="transition hover:text-white">{company.email}</a></li>
              <li><a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">{company.whatsappDisplay}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-gray-800 pt-8 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {company.name}. Todos los derechos reservados.</p>
          <nav aria-label="Enlaces legales" className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/privacidad" className="transition hover:text-white">Privacidad</a>
            <a href="/terminos" className="transition hover:text-white">Términos</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
