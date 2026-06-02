'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-marfim px-6 py-24 md:px-12 lg:px-24">
      
      {/* Elemento de fundo sutil (meio círculo abstrato) para criar profundidade sem poluir */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-bege/50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[400px] h-[400px] bg-dourado/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Kicker / Selo Superior */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 inline-flex items-center justify-center"
        >
          <span className="text-madeira text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
            Espaço Clínico de Psicologia em Itapuã
          </span>
        </motion.div>

        {/* Título Principal (Playfair Display) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-grafite leading-[1.1] tracking-tight mb-8"
        >
          Espaço <span className="font-semibold text-madeira">ANIMA</span>
        </motion.h1>

        {/* Headline Forte */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-2xl md:text-3xl lg:text-4xl text-grafite/90 mb-6"
        >
          Escuta profunda. Técnica rigorosa. Cuidado singular.
        </motion.h2>

        {/* Subtítulo (Lato) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-base md:text-lg text-grafite/80 leading-relaxed font-light mb-12"
        >
          Reunimos Psicanálise, Terapia Cognitivo-Comportamental e Avaliação Psicológica em um ambiente construído para acolher diferentes formas de sofrimento psíquico sem abrir mão da excelência clínica.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            href="#profissionais"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-madeira text-marfim px-8 py-4 rounded-sm font-medium text-sm transition-all hover:bg-madeira/90 shadow-sm"
          >
            Conhecer os Profissionais
          </Link>
          <Link
            href="#agendamento"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-transparent text-grafite border border-grafite/30 px-8 py-4 rounded-sm font-medium text-sm transition-all hover:bg-grafite/5"
          >
            Solicitar Agendamento
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}