"use client"

import { motion } from "framer-motion"
import { BadgeCheck, ClipboardList, Headphones, Radar } from "lucide-react"

const benefits = [
  {
    icon: ClipboardList,
    title: "Una gestión integral",
    description: "Coordinamos documentación, transporte y despacho para reducir puntos de contacto y retrasos.",
  },
  {
    icon: Radar,
    title: "Visibilidad de la operación",
    description: "Recibes actualizaciones claras desde la recolección hasta la entrega final de tu carga.",
  },
  {
    icon: BadgeCheck,
    title: "Cotización transparente",
    description: "Revisamos ruta, tiempos y conceptos incluidos antes de iniciar cada operación.",
  },
  {
    icon: Headphones,
    title: "Acompañamiento directo",
    description: "Un especialista atiende tus consultas y centraliza la comunicación durante el envío.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="bg-gray-950 py-16 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="text-sm font-semibold text-cyan-300">Por qué elegirnos</span>
            <h2 className="mt-3 text-3xl font-bold font-heading sm:text-5xl">
              Tu carga, con información clara en cada etapa
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Diseñamos cada operación según el origen, destino, tipo de mercancía y plazo que necesita tu negocio.
            </p>
          </motion.div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.08 }}
                className="bg-gray-950 p-6 sm:p-7"
              >
                <benefit.icon className="h-6 w-6 text-cyan-300" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold font-heading">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{benefit.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
