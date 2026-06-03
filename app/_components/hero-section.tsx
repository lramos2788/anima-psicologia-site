'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden bg-grafite px-6 py-32 md:px-12 lg:px-24 pt-40">
      
      {/* Imagem de Fundo Real (Consultório) */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/sala1.png"
          alt="Consultório Espaço ANIMA"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay Escuro para Legibilidade Profissional */}
        <div className="absolute inset-0 bg-grafite/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-grafite via-grafite/50 to-transparent opacity-90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Kicker / Selo Superior */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 inline-flex items-center justify-center"
        >
          <span className="text-dourado text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
            Espaço Clínico de Psicologia em Itapuã
          </span>
        </motion.div>

        {/* Título Principal (Playfair Display) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-marfim leading-[1.1] tracking-tight mb-8"
        >
          Espaço <span className="font-semibold text-dourado">ANIMA</span>
        </motion.h1>

        {/* Headline Forte */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-2xl md:text-3xl lg:text-4xl text-marfim/90 mb-6"
        >
          Escuta profunda. Técnica rigorosa. Cuidado singular.
        </motion.h2>

        {/* Subtítulo (Lato) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-base md:text-lg text-marfim/80 leading-relaxed font-light mb-12"
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
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-madeira text-marfim px-8 py-4 rounded-sm font-medium text-sm transition-all hover:bg-madeira/90 shadow-lg"
          >
            Conhecer os Profissionais
          </Link>
          <Link
            href="#agendamento"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-transparent text-marfim border border-marfim/40 px-8 py-4 rounded-sm font-medium text-sm transition-all hover:bg-marfim/10"
          >
            Solicitar Agendamento
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}