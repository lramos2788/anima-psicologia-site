'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Phone } from 'lucide-react'

export default function CtaSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-madeira overflow-hidden">
      {/* Elementos decorativos sutis no fundo sólido para não ficar "chapado" */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-dourado/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[400px] h-[400px] bg-grafite/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-marfim tracking-tight mb-6">
            Pronto para dar o primeiro passo?
          </h2>
          <p className="text-marfim/80 text-lg font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Cada jornada de autoconhecimento começa com uma decisão. Estamos aqui para caminhar com você em direção ao equilíbrio e à clareza.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/agendamento"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-marfim hover:bg-bege text-madeira px-8 py-4 rounded-sm font-semibold transition-all shadow-md"
            >
              <Calendar className="w-5 h-5" />
              Solicitar Agendamento
            </Link>
            <a
              href="https://wa.me/5571992953117"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-marfim/10 text-marfim border border-marfim/30 px-8 py-4 rounded-sm font-medium transition-all"
            >
              <Phone className="w-5 h-5" />
              Entrar em contato
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}