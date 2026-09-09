"use client"

import type { FormEvent } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Building2, Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react"
import { track } from "@vercel/analytics"
import { company, getWhatsAppUrl } from "@/config/company"

function readField(data: FormData, name: string) {
  return String(data.get(name) ?? "").trim()
}

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const service = readField(data, "service")
    const message = [
      "Hola, quiero solicitar una cotización de logística internacional.",
      "",
      `Nombre: ${readField(data, "name")}`,
      `Empresa: ${readField(data, "company") || "No indicada"}`,
      `Correo: ${readField(data, "email")}`,
      `Teléfono: ${readField(data, "phone")}`,
      `Servicio: ${service}`,
      `Origen: ${readField(data, "origin")}`,
      `Destino: ${readField(data, "destination")}`,
      `Carga: ${readField(data, "cargo")}`,
    ].join("\n")

    track("quote_submitted", { service })
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contact" className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}>
            <span className="text-sm font-semibold text-brand-600">Cotiza tu operación</span>
            <h2 className="mt-3 text-3xl font-bold font-heading text-gray-950 sm:text-5xl">Cuéntanos qué necesitas transportar</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Completa los datos principales. Al enviar, abriremos WhatsApp con tu solicitud lista para conversar con un especialista.
            </p>

            <div className="mt-8 space-y-5 border-t border-gray-200 pt-8">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-700"><MessageCircle className="h-5 w-5" aria-hidden="true" /></span>
                <span><span className="block text-sm font-semibold text-gray-950">WhatsApp</span><span className="mt-1 block text-sm text-gray-600 group-hover:text-green-700">{company.whatsappDisplay}</span></span>
              </a>
              <a href={`mailto:${company.email}`} className="group flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-700"><Mail className="h-5 w-5" aria-hidden="true" /></span>
                <span className="min-w-0"><span className="block text-sm font-semibold text-gray-950">Correo</span><span className="mt-1 block break-all text-sm text-gray-600 group-hover:text-brand-700">{company.email}</span></span>
              </a>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700"><MapPin className="h-5 w-5" aria-hidden="true" /></span>
                <span><span className="block text-sm font-semibold text-gray-950">Ubicación</span><span className="mt-1 block text-sm text-gray-600">{company.location}</span></span>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700"><Building2 className="h-5 w-5" aria-hidden="true" /></span>
                <span><span className="block text-sm font-semibold text-gray-950">RUC</span><span className="mt-1 block text-sm text-gray-600">{company.taxId}</span></span>
              </div>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-gray-800">Nombre completo<input name="name" required autoComplete="name" className="form-field" /></label>
              <label className="text-sm font-medium text-gray-800">Empresa <span className="font-normal text-gray-400">(opcional)</span><input name="company" autoComplete="organization" className="form-field" /></label>
              <label className="text-sm font-medium text-gray-800">Correo<input name="email" type="email" required autoComplete="email" className="form-field" /></label>
              <label className="text-sm font-medium text-gray-800">Teléfono<input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className="form-field" /></label>
              <label className="text-sm font-medium text-gray-800 sm:col-span-2">Servicio
                <select name="service" required defaultValue="" className="form-field">
                  <option value="" disabled>Selecciona una opción</option>
                  <option>Transporte marítimo</option><option>Transporte aéreo</option><option>Transporte terrestre</option><option>Despacho aduanero</option><option>Almacenaje y distribución</option><option>Asesoría de comercio exterior</option>
                </select>
              </label>
              <label className="text-sm font-medium text-gray-800">Origen<input name="origin" required placeholder="Ciudad o puerto" className="form-field" /></label>
              <label className="text-sm font-medium text-gray-800">Destino<input name="destination" required placeholder="Ciudad o puerto" className="form-field" /></label>
              <label className="text-sm font-medium text-gray-800 sm:col-span-2">Descripción de la carga<textarea name="cargo" required rows={4} placeholder="Tipo de mercancía, peso, volumen y fecha estimada" className="form-field resize-y" /></label>
            </div>

            <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-gray-600">
              <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-brand-600" />
              <span>Acepto el tratamiento de mis datos según el <a href="/privacidad" className="font-semibold text-brand-700 hover:underline">aviso de privacidad</a>.</span>
            </label>

            <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/30">
              Preparar cotización en WhatsApp <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-gray-500"><ShieldCheck className="h-4 w-4" aria-hidden="true" />Tus datos solo se usarán para atender esta solicitud.</p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
