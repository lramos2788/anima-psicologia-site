'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

export default function TwoApproachesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-madeira/5">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-grafite tracking-tight leading-tight mb-8">
            Duas escutas, um espaço
          </h2>
          <p className="text-grafite/80 text-lg leading-relaxed font-light mb-6">
            Psicanálise e Terapia Cognitivo-Comportamental não são a mesma coisa — e não
            fingimos que sejam. São caminhos distintos, com premissas próprias sobre o que
            é o sofrimento e o que se faz com ele. Aqui você encontra os dois, sem que um
            tenha que se disfarçar do outro.
          </p>
          <p className="text-grafite/70 text-base leading-relaxed font-light mb-10">
            Não saber qual procurar é comum. A primeira conversa serve para isso.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-madeira hover:bg-madeira/90 text-marfim px-8 py-4 rounded-sm font-medium text-sm transition-all shadow-md"
          >
            Responder o quiz
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
