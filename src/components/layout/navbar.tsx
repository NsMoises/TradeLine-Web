"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const links = [
  { href: "#services", label: "Servicios" },
  { href: "#process", label: "Proceso" },
  { href: "#coverage", label: "Cobertura" },
  { href: "#benefits", label: "Ventajas" },
  { href: "#contact", label: "Contacto" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 50)

      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      )}
    >
      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100/50">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-500 to-accent-500"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.75rem] items-center justify-between sm:h-20">
          <motion.a
            href="#"
            aria-label="Tradeline Logistic, inicio"
            className={cn(
              "group flex items-center rounded-lg border p-1 shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2",
              scrolled
                ? "border-brand-100 bg-brand-950 shadow-brand-950/15"
                : "border-white/30 bg-brand-950/90 shadow-black/25"
            )}
            whileHover={{ y: -2, scale: 1.035 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 420, damping: 22 }}
          >
            <img
              src="/tradeline-logo.png"
              alt="Tradeline Logistic"
              className="h-14 w-auto rounded-md object-contain transition-transform duration-300 group-hover:scale-[1.025] sm:h-[4.25rem]"
            />
          </motion.a>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-600 relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-brand-500 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100",
                  scrolled ? "text-gray-600" : "text-white/80"
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-all hover:scale-105 active:scale-95",
                scrolled
                  ? "bg-brand-600 text-white hover:bg-brand-700"
                  : "bg-white text-brand-700 hover:bg-gray-100"
              )}
            >
              Cotizar envío
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className={cn(
              "lg:hidden flex h-11 w-11 items-center justify-center rounded-lg",
              scrolled ? "text-gray-900" : "text-white"
            )}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            id="mobile-navigation"
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="max-h-[calc(100svh-4rem)] overflow-y-auto px-4 py-4 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 block min-h-11 rounded-lg bg-brand-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
              >
                Cotizar envío
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
