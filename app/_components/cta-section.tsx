'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MessageCircle } from 'lucide-react'

export default function CtaSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/espaco-2.jpeg"
          alt="Espaço ANIMA"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-anima-blue-500/85" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Pronto para dar o primeiro passo?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Cada jornada de autoconhecimento começa com uma decisão. Estamos aqui para caminhar com você.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/agendamento"
              className="inline-flex items-center gap-2 bg-anima-amber-400 hover:bg-anima-amber-300 text-anima-blue-800 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Solicitar Agendamento
            </Link>
            <a
              href="https://wa.me/5571992953117"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium transition-all backdrop-blur-sm border border-white/20"
            >
              <MessageCircle className="w-5 h-5" />
              Falar via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
