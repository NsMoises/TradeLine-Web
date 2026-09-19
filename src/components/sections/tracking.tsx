"use client"

import type { FormEvent } from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, PackageSearch, ShieldCheck } from "lucide-react"
import { track } from "@vercel/analytics"
import { getWhatsAppUrl } from "@/config/company"

export function Tracking() {
  const [reference, setReference] = useState("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = `Hola, deseo consultar el estado de mi carga. Mi número de guía o BL es: ${reference.trim()}`
    track("tracking_requested")
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer")
  }

  return (
    <section id="tracking" className="relative overflow-hidden bg-[#071b34] py-16 text-white sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,128,255,0.3),_transparent_45%)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-8">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-1.5 text-sm font-medium text-cyan-200">
            <PackageSearch className="h-4 w-4" aria-hidden="true" /> Seguimiento de carga
          </span>
          <h2 className="mt-5 text-3xl font-bold font-heading sm:text-5xl">Rastrea tu operación</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Ingresa tu número de guía, BL o referencia de embarque. Un especialista te informará el estado actual de tu carga.
          </p>
          <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-white/60">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
            La plataforma de seguimiento en línea estará disponible próximamente.
          </p>
        </motion.div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55 }} className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-sm sm:p-8">
          <label className="block text-sm font-semibold text-white" htmlFor="tracking-reference">Número de guía, BL o referencia</label>
          <input
            id="tracking-reference"
            value={reference}
            onChange={(event) => setReference(event.target.value)}
            required
            placeholder="Ej.: MAEU123456789"
            className="mt-3 min-h-13 w-full rounded-lg border border-white/20 bg-white px-4 py-3 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-300/20"
          />
          <button type="submit" className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/30">
            Consultar mi envío <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <p className="mt-4 text-center text-xs leading-relaxed text-white/60">La consulta se enviará por WhatsApp para darte una respuesta personalizada.</p>
        </motion.form>
      </div>
    </section>
  )
}
