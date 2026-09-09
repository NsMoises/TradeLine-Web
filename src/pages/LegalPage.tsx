import type { ReactNode } from "react"
import { ArrowLeft, Container } from "lucide-react"
import { company } from "@/config/company"

type LegalPageProps = {
  title: string
  updated: string
  children: ReactNode
}

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2 font-bold font-heading"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white"><Container className="h-4 w-4" /></span>{company.name}</a>
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"><ArrowLeft className="h-4 w-4" />Volver al inicio</a>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm text-gray-500">Última actualización: {updated}</p>
        <h1 className="mt-3 text-3xl font-bold font-heading sm:text-5xl">{title}</h1>
        <article className="legal-content mt-10">{children}</article>
      </main>
    </div>
  )
}

export function PrivacyPage() {
  return <LegalPage title="Aviso de privacidad" updated="5 de septiembre de 2026">
    <h2>Responsable y finalidad</h2><p>{company.name}, RUC {company.taxId}, con domicilio en {company.location}, es responsable del tratamiento de la información enviada mediante este sitio. Los datos se utilizan para responder consultas, preparar cotizaciones y dar seguimiento a solicitudes comerciales.</p>
    <h2>Datos recopilados</h2><p>Podemos recibir nombre, empresa, correo, teléfono, origen, destino y descripción de la carga cuando el visitante decide completar el formulario.</p>
    <h2>WhatsApp y terceros</h2><p>El formulario prepara un mensaje que el usuario envía voluntariamente mediante WhatsApp. Ese servicio aplica sus propias políticas de privacidad. No vendemos información personal.</p>
    <h2>Conservación y derechos</h2><p>Conservamos la información durante el tiempo necesario para atender la solicitud y obligaciones aplicables. Para consultar, corregir o solicitar la eliminación de datos, escribe a <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
    <h2>Actualizaciones</h2><p>Este aviso puede cambiar para reflejar mejoras del servicio o requisitos legales. La fecha visible al inicio identifica la versión vigente.</p>
  </LegalPage>
}

export function TermsPage() {
  return <LegalPage title="Términos de uso" updated="5 de septiembre de 2026">
    <h2>Uso del sitio</h2><p>Este sitio ofrece información general sobre servicios de logística y permite solicitar contacto comercial. El uso indebido, automatizado o destinado a afectar su disponibilidad no está permitido.</p>
    <h2>Cotizaciones</h2><p>La información enviada no constituye una oferta vinculante. Precios, tiempos, rutas, disponibilidad y condiciones se confirman después de revisar los detalles y documentación de cada operación.</p>
    <h2>Contenido</h2><p>Las descripciones son informativas y pueden actualizarse. La contratación de servicios requiere una propuesta y aceptación independientes.</p>
    <h2>Enlaces externos</h2><p>Los enlaces a WhatsApp y otros servicios conducen a plataformas administradas por terceros, sujetas a sus propios términos.</p>
    <h2>Contacto</h2><p>Para consultas relacionadas con estos términos, escribe a <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
  </LegalPage>
}
