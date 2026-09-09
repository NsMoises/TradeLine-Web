"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Ship, Plane, Truck, FileCheck, Package, Search,
} from "lucide-react"

const services = [
  {
    icon: Ship,
    title: "Transporte Marítimo",
    desc: "Contenedores FCL y LCL a puertos de todo el mundo. Consolidación y desconsolidación con tracking satelital 24/7.",
    gradient: "from-blue-500 to-cyan-500",
    detail: "FCL y LCL",
  },
  {
    icon: Plane,
    title: "Transporte Aéreo",
    desc: "Carga express y estándar con las principales aerolíneas. Ideal para mercancía urgente o de alto valor.",
    gradient: "from-purple-500 to-pink-500",
    detail: "Carga urgente y de valor",
  },
  {
    icon: Truck,
    title: "Transporte Terrestre",
    desc: "Cobertura regional e internacional multimodal. Cross-docking, FTL, LTL y distribución capilar integrada.",
    gradient: "from-amber-500 to-orange-500",
    detail: "FTL, LTL y multimodal",
  },
  {
    icon: FileCheck,
    title: "Despacho Aduanero",
    desc: "Gestión documental y aduanal completa. Clasificación arancelaria, certificados de origen, NOM y permisos.",
    gradient: "from-green-500 to-emerald-500",
    detail: "Documentación y permisos",
  },
  {
    icon: Package,
    title: "Almacenaje & Distribución",
    desc: "Centros logísticos estratégicos con WMS. Picking, packing, cross-docking y última milla integrados.",
    gradient: "from-red-500 to-rose-500",
    detail: "Picking, packing y última milla",
  },
  {
    icon: Search,
    title: "Consultoría de Comercio Exterior",
    desc: "Asesoría en tratados internacionales, incoterms, optimización de rutas, reducción de costos y drawback.",
    gradient: "from-indigo-500 to-violet-500",
    detail: "Rutas, incoterms y costos",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-transparent to-gray-50/30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-200 px-4 py-1.5 text-sm font-medium text-brand-600 mb-4">
            <Ship className="h-3.5 w-3.5" />
            Soluciones Integrales
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-gray-900">
            Soluciones <span className="text-brand-600">logísticas</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Elige el alcance que necesita tu operación y recibe una propuesta preparada según las características de tu carga.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 hover:border-brand-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div
                  className={cn(
                    "inline-flex rounded-xl bg-gradient-to-br p-3 text-white shadow-sm",
                    service.gradient
                  )}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <span className="max-w-[60%] text-right text-xs font-medium leading-tight text-gray-400">{service.detail}</span>
              </div>

              <h3 className="text-lg font-semibold font-heading text-gray-900 group-hover:text-brand-600 transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {service.desc}
              </p>

            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-12 max-w-3xl border-t border-gray-200 pt-8 text-center sm:mt-16"
        >
          <p className="text-sm leading-relaxed text-gray-500">Cada servicio se cotiza según la ruta, características de la carga, fecha y requisitos documentarios de la operación.</p>
        </motion.div>
      </div>
    </section>
  )
}
