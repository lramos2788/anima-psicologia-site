'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Users, ClipboardCheck, BookOpen } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Brain,
    title: 'Psicoterapia individual',
    description:
      'Psicanálise com Lucas Ramos ou TCC com Benedita Araujo. Abordagens distintas, escolhidas conforme o que você traz.',
    href: '/agendamento',
  },
  {
    icon: Users,
    title: 'Terapia em grupo',
    description:
      'Grupos conduzidos por Benedita Araujo, com participação de Lucas Ramos como convidado no manejo das discussões.',
    href: '/agendamento',
  },
  {
    icon: ClipboardCheck,
    title: 'Avaliação psicológica',
    description:
      'Laudos e documentos técnicos para processos seletivos, procedimentos médicos e decisões administrativas. Conduzida por Lucas Ramos.',
    href: '/agendamento',
  },
  {
    icon: BookOpen,
    title: 'Cursos e workshops',
    description:
      'Formações presenciais para profissionais e interessados em saúde mental.',
    href: '/agendamento',
  },
]

export default function ServicesPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-marfim">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-dourado text-sm font-bold uppercase tracking-[0.2em]">
            O que você encontra aqui
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-grafite mt-4 tracking-tight">
            Quatro formas de trabalho
          </h2>
          <p className="mt-4 text-grafite/70 max-w-2xl mx-auto font-light leading-relaxed">
            Cada trabalho é conduzido por um profissional específico, dentro de sua
            própria abordagem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="group bg-bege/30 rounded-sm p-6 h-full transition-all hover:shadow-lg hover:bg-bege/50 hover:-translate-y-1 border border-bege">
                    <div className="w-12 h-12 rounded-sm bg-madeira/10 flex items-center justify-center mb-4 group-hover:bg-dourado/20 transition-colors">
                      <Icon className="w-6 h-6 text-madeira group-hover:text-dourado transition-colors" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-grafite mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-grafite/70 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
