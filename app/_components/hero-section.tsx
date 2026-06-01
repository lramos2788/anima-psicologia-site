'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/espaco-1.jpeg"
          alt="Espaço ANIMA - ambiente terapêutico acolhedor"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-anima-blue-500/85 via-anima-blue-500/75 to-anima-blue-500/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles className="w-5 h-5 text-anima-amber-400" />
          <span className="text-anima-amber-400 text-sm font-medium uppercase tracking-widest">
            Psicoterapia Integrativa em Itapuã
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
        >
          Espaço{' '}
          <span className="text-anima-amber-400">ANIMA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-white/80 leading-relaxed mb-10 font-light"
        >
          Aqui, a profundidade da escuta psicanalítica encontra a clareza das
          práticas baseadas em evidências.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/agendamento"
            className="inline-flex items-center gap-2 bg-anima-amber-400 hover:bg-anima-amber-300 text-anima-blue-800 px-8 py-4 rounded-lg font-semibold text-base transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            Agendar Atendimento
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium text-base transition-all backdrop-blur-sm border border-white/20"
          >
            Descubra seu Caminho
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
