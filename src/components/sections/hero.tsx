"use client"

import { motion } from "framer-motion"
import { ArrowRight, Anchor, ClipboardCheck, Headphones, Radar } from "lucide-react"
import { getWhatsAppUrl } from "@/config/company"

const stats = [
  { icon: ClipboardCheck, value: "Integral", label: "Gestión de principio a fin" },
  { icon: Radar, value: "Visible", label: "Seguimiento de la operación" },
  { icon: Headphones, value: "Directo", label: "Soporte especializado" },
]

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#071b34] pt-24 pb-12 sm:pt-28 sm:pb-16">
      <img
        src="/hero-cargo-ship.png"
        alt="Portacontenedores navegando frente a una terminal marítima"
        width={1792}
        height={1024}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center"
      />
      <div className="absolute inset-0 bg-[#071b34]/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071b34] via-[#071b34]/80 to-[#071b34]/10" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: "easeOut" }}>
            <span className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm sm:mb-6 sm:px-4 sm:text-sm">
              <Anchor className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              Agencia de carga y comercio exterior
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }} className="break-words text-4xl font-bold font-heading leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            TradeLine - Logística internacional <span className="text-cyan-300">desde Perú</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }} className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-xl">
            Cotiza transporte marítimo, aéreo y terrestre con acompañamiento especializado desde el origen hasta la entrega de tu carga.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }} className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-8 sm:gap-4">
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:bg-brand-600 sm:px-6 sm:text-base">
              Cotizar envío <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={getWhatsAppUrl("Hola, necesito asesoría para un envío internacional.")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-black/20 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-black/35 sm:px-6 sm:text-base">
              Hablar por WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.4, ease: "easeOut" }} className="mt-10 grid max-w-lg grid-cols-3 gap-2 sm:mt-16 sm:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-2 h-5 w-5 text-cyan-300" aria-hidden="true" />
              <div className="text-sm font-bold font-heading text-white sm:text-base">{stat.value}</div>
              <div className="mt-1 text-[10px] leading-tight text-white/60 sm:text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
