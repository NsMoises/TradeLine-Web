"use client"

import { motion } from "framer-motion"
import { Search, FileText, Ship, ClipboardCheck, TrendingUp } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico y Análisis",
    desc: "Analizamos tu mercancía, origen, destino y tiempos. Te presentamos la mejor ruta y costo para tu operación.",
    detail: "Evaluamos tipo de carga, volumen, peso, valor y requisitos regulatorios. Comparamos múltiples opciones de transporte y te presentamos la ruta óptima.",
    color: "from-blue-500 to-cyan-500",
    stat: "Alcance definido",
  },
  {
    icon: FileText,
    number: "02",
    title: "Gestión Documental",
    desc: "Preparamos y validamos toda la documentación: factura comercial, packing list, certificados de origen, BL y permisos especiales.",
    detail: "Clasificación arancelaria, certificados de origen, permisos fitosanitarios, NOM, y coordinación con agente aduanal en destino.",
    color: "from-purple-500 to-pink-500",
    stat: "Documentos revisados",
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Coordinación Operativa",
    desc: "Reserva de espacio, asignación de equipo, transporte terrestre de recolección y consolidación en nuestro centro logístico.",
    detail: "Coordinamos la recolección en origen, reservamos espacio en buque/avión/camión, y consolidamos tu carga con tracking desde el primer kilómetro.",
    color: "from-amber-500 to-orange-500",
    stat: "Operación coordinada",
  },
  {
    icon: Ship,
    number: "04",
    title: "Ejecución y Tracking",
    desc: "Transporte internacional con monitoreo GPS satelital en tiempo real. Despacho aduanero y gestión de sobretasas.",
    detail: "Monitoreo satelital en tiempo real, alertas de eventos, gestión de sobretasas, y coordinación con agentes en aduana de destino.",
    color: "from-green-500 to-emerald-500",
    stat: "Seguimiento informado",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Entrega y Post-Venta",
    desc: "Distribución capilar hasta tu destino final. Reporte de entrega, facturación y soporte post-venta.",
    detail: "Coordinación de última milla, confirmación de entrega, generación de reportes, facturación electrónica y soporte post-venta continuo.",
    color: "from-red-500 to-rose-500",
    stat: "Cierre documentado",
  },
]

export function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section id="process" className="relative py-16 sm:py-24 lg:py-32 bg-gray-50/80 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-50 border border-accent-200 px-4 py-1.5 text-sm font-medium text-accent-600 mb-4">
            Cómo Trabajamos
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-gray-900">
            Cinco pasos para{" "}
            <span className="text-accent-600">una operación clara</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Un proceso transparente y eficiente de principio a fin.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-200 via-accent-200 to-brand-200" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={cn(
                    "relative md:flex md:items-center",
                    isLeft ? "md:flex-row" : "md:flex-row-reverse",
                  )}
                >
                  {/* Content */}
                  <div className={cn(
                    "md:w-[calc(50%-2rem)]",
                    isLeft ? "md:text-right md:pr-0" : "md:text-left md:pl-0",
                  )}>
                    <button
                      type="button"
                      aria-expanded={activeStep === i}
                      className={cn(
                        "w-full rounded-2xl border border-gray-200 bg-white p-4 text-left sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/20",
                        isLeft && "md:text-right",
                        activeStep === i && "ring-2 ring-brand-200 shadow-lg",
                      )}
                      onClick={() => setActiveStep(activeStep === i ? null : i)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={cn(
                          "inline-flex rounded-xl bg-gradient-to-br p-2.5 text-white shadow-sm",
                          step.color,
                        )}>
                          <step.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <span className={cn("text-[10px] font-bold", ["text-blue-500", "text-purple-500", "text-amber-500", "text-green-500", "text-red-500"][i])}>{step.number}</span>
                          <h3 className="text-base font-semibold font-heading text-gray-900">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>

                      {/* Expanded detail */}
                      <motion.div
                        initial={false}
                        animate={{ height: activeStep === i ? "auto" : 0, opacity: activeStep === i ? 1 : 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 mt-3 border-t border-gray-100">
                          <p className="text-sm text-gray-600">{step.detail}</p>
                          <span className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-brand-600 bg-brand-50 rounded-full px-2.5 py-0.5">
                            {step.stat}
                          </span>
                        </div>
                      </motion.div>
                    </button>
                  </div>

                  {/* Center node (desktop) */}
                  <div className="hidden md:flex md:w-16 md:justify-center md:shrink-0">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-heading text-white shadow-md border-2 border-white",
                      [
                        "bg-blue-500",
                        "bg-purple-500",
                        "bg-amber-500",
                        "bg-green-500",
                        "bg-red-500",
                      ][i],
                    )}>
                      {step.number}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
