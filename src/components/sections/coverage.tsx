"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { Plane, Ship } from "lucide-react"

const regions = [
  { name: "Norteamérica", flag: "🇺🇸🇨🇦🇲🇽", routes: "USA, Canadá, México", ports: "Laredo, Detroit, Vancouver", x: 28, y: 35 },
  { name: "Europa", flag: "🇪🇺", routes: "Rotterdam, Hamburgo, Valencia", ports: "Gdansk, Le Havre, Felixstowe", x: 55, y: 30 },
  { name: "Asia-Pacífico", flag: "🇨🇳🇯🇵🇰🇷", routes: "Shanghai, Yokohama, Busan", ports: "Singapur, Hong Kong, Kaohsiung", x: 75, y: 40 },
  { name: "Latinoamérica", flag: "🌎", routes: "Colón, Santos, Callao", ports: "Buenos Aires, Cartagena, Valparaíso", x: 40, y: 58 },
  { name: "Medio Oriente", flag: "🇦🇪🇸🇦", routes: "Dubai, Jeddah, Doha", ports: "Salalah, Abu Dhabi", x: 62, y: 38 },
  { name: "África", flag: "🌍", routes: "Durban, Tanger, Mombasa", ports: "Lagos, Alejandría, Ciudad del Cabo", x: 55, y: 55 },
]

const routes = [
  { from: [28, 35], to: [55, 30], mode: "air" as const },
  { from: [28, 35], to: [40, 58], mode: "sea" as const },
  { from: [55, 30], to: [75, 40], mode: "sea" as const },
  { from: [55, 30], to: [62, 38], mode: "air" as const },
  { from: [40, 58], to: [55, 55], mode: "sea" as const },
  { from: [75, 40], to: [62, 38], mode: "air" as const },
]

export function Coverage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")!
    let animationId: number
    let time = 0
    let isVisible = true

    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting },
      { threshold: 0 },
    )
    observer.observe(canvas)

    const resize = () => {
      const parent = canvas.parentElement!
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const drawPlane = (x: number, y: number, angle: number, scale: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)
      ctx.scale(scale, scale)
      ctx.shadowColor = "rgba(37, 99, 235, 0.45)"
      ctx.shadowBlur = 8
      ctx.fillStyle = "#2563eb"
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(12, 0)
      ctx.lineTo(3, -2.5)
      ctx.lineTo(-1, -9)
      ctx.lineTo(-4, -9)
      ctx.lineTo(-3, -2)
      ctx.lineTo(-10, -1.5)
      ctx.lineTo(-10, 1.5)
      ctx.lineTo(-3, 2)
      ctx.lineTo(-4, 9)
      ctx.lineTo(-1, 9)
      ctx.lineTo(3, 2.5)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()
      ctx.restore()
    }

    const drawShip = (x: number, y: number, angle: number, scale: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)
      ctx.scale(scale, scale)

      ctx.strokeStyle = "rgba(13, 148, 136, 0.35)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(-16, -5)
      ctx.lineTo(-23, -5)
      ctx.moveTo(-16, 0)
      ctx.lineTo(-26, 0)
      ctx.moveTo(-16, 5)
      ctx.lineTo(-23, 5)
      ctx.stroke()

      ctx.shadowColor = "rgba(15, 118, 110, 0.4)"
      ctx.shadowBlur = 7
      ctx.fillStyle = "#0f3d56"
      ctx.strokeStyle = "#0d9488"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(16, 0)
      ctx.lineTo(10, -7)
      ctx.lineTo(-13, -7)
      ctx.lineTo(-17, -4)
      ctx.lineTo(-17, 4)
      ctx.lineTo(-13, 7)
      ctx.lineTo(10, 7)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      const containerColors = ["#ef4444", "#f59e0b", "#0891b2", "#22c55e"]
      containerColors.forEach((color, index) => {
        ctx.fillStyle = color
        ctx.fillRect(-10 + index * 5, -4.5, 4, 4)
        ctx.fillRect(-10 + index * 5, 0.5, 4, 4)
      })
      ctx.fillStyle = "#f8fafc"
      ctx.fillRect(10, -4, 2.5, 8)
      ctx.restore()
    }

    const animate = () => {
      if (!isVisible || document.hidden) {
        animationId = requestAnimationFrame(animate)
        return
      }

      time += 0.008
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      // Map background grid
      ctx.strokeStyle = "rgba(200, 210, 230, 0.06)"
      ctx.lineWidth = 0.5
      for (let x = 0; x <= w; x += 40) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
        ctx.stroke()
      }
      for (let y = 0; y <= h; y += 40) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }

      // Convert percentage to pixel coords
      const toPx = (x: number, y: number) => [w * x / 100, h * y / 100]

      // Draw routes
      routes.forEach((route, i) => {
        const [fx, fy] = toPx(route.from[0], route.from[1])
        const [tx, ty] = toPx(route.to[0], route.to[1])
        const cpx = (fx + tx) / 2
        const cpy = Math.min(fy, ty) - 40 + Math.sin(i * 1.5) * 10

        const isAir = route.mode === "air"
        const routeColor = isAir ? "37, 99, 235" : "13, 148, 136"

        // Glow
        ctx.strokeStyle = `rgba(${routeColor}, ${0.06 + Math.sin(time + i) * 0.02})`
        ctx.lineWidth = 6
        ctx.beginPath()
        ctx.moveTo(fx, fy)
        ctx.quadraticCurveTo(cpx, cpy, tx, ty)
        ctx.stroke()

        // Line
        ctx.strokeStyle = `rgba(${routeColor}, ${0.3 + Math.sin(time + i) * 0.05})`
        ctx.lineWidth = 1.5
        ctx.setLineDash(isAir ? [5, 6] : [2, 5])
        ctx.beginPath()
        ctx.moveTo(fx, fy)
        ctx.quadraticCurveTo(cpx, cpy, tx, ty)
        ctx.stroke()
        ctx.setLineDash([])

        // Moving aircraft or cargo ship
        const t = (time * (isAir ? 0.7 : 0.35) + i * 0.23) % 1
        const mt = t
        const mx = (1 - mt) * (1 - mt) * fx + 2 * (1 - mt) * mt * cpx + mt * mt * tx
        const my = (1 - mt) * (1 - mt) * fy + 2 * (1 - mt) * mt * cpy + mt * mt * ty
        const dx = 2 * (1 - mt) * (cpx - fx) + 2 * mt * (tx - cpx)
        const dy = 2 * (1 - mt) * (cpy - fy) + 2 * mt * (ty - cpy)
        const angle = Math.atan2(dy, dx)
        const iconScale = w < 560 ? 0.7 : 0.9
        if (isAir) drawPlane(mx, my, angle, iconScale)
        else drawShip(mx, my, angle, iconScale)
      })

      // Draw port nodes
      regions.forEach((region) => {
        const [px, py] = toPx(region.x, region.y)
        const pulse = 0.5 + Math.sin(time * 2 + region.x) * 0.5

        // Outer glow
        ctx.fillStyle = `rgba(0, 128, 255, ${0.08 + pulse * 0.06})`
        ctx.beginPath()
        ctx.arc(px, py, 14 + pulse * 6, 0, Math.PI * 2)
        ctx.fill()

        // Inner dot
        ctx.fillStyle = `rgba(0, 200, 255, ${0.6 + pulse * 0.3})`
        ctx.beginPath()
        ctx.arc(px, py, 4, 0, Math.PI * 2)
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      observer.disconnect()
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <section id="coverage" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-200 px-4 py-1.5 text-sm font-medium text-brand-600 mb-4">
            Alcance internacional
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-gray-900">
            Cobertura <span className="text-brand-600">Internacional</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Coordinamos operaciones hacia mercados internacionales según disponibilidad de ruta y transportista.
          </p>
        </motion.div>

        <div className="relative rounded-2xl border border-gray-200 bg-white/50 p-6 shadow-sm">
          <div className="absolute left-8 top-8 z-10 flex flex-wrap gap-2" aria-label="Tipos de ruta">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-blue-700 shadow-sm backdrop-blur-sm">
              <Plane className="h-3.5 w-3.5" aria-hidden="true" /> Ruta aérea
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-100 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-teal-700 shadow-sm backdrop-blur-sm">
              <Ship className="h-3.5 w-3.5" aria-hidden="true" /> Ruta marítima
            </span>
          </div>
          <canvas
            ref={canvasRef}
            className="w-full h-[240px] min-[420px]:h-[300px] sm:h-[400px] rounded-xl"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-gray-200 bg-white p-3 text-center hover:border-brand-200 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="text-2xl block mb-1">{region.flag}</span>
                <h3 className="text-xs font-semibold font-heading text-gray-900">
                  {region.name}
                </h3>
                <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{region.routes}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-gray-400">Los destinos mostrados son referenciales. Confirma la cobertura específica al solicitar tu cotización.</p>
        </div>
      </div>
    </section>
  )
}
