'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Users, ClipboardCheck, BookOpen } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Brain,
    title: 'Psicoterapia Individual',
    description:
      'Atendimentos em Psicanálise e TCC, respeitando a singularidade de cada pessoa.',
    href: '/agendamento',
  },
  {
    icon: Users,
    title: 'Terapia em Grupo',
    description:
      'Vivências coletivas que promovem troca, acolhimento e crescimento mútuo.',
    href: '/agendamento',
  },
  {
    icon: ClipboardCheck,
    title: 'Avaliações Psicológicas',
    description:
      'Avaliações fundamentadas para autoconhecimento e orientação terapêutica.',
    href: '/agendamento',
  },
  {
    icon: BookOpen,
    title: 'Cursos e Workshops',
    description:
      'Formações presenciais para profissionais e interessados em saúde mental.',
    href: '/agendamento',
  },
]

export default function ServicesPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-anima-amber-400 text-sm font-semibold uppercase tracking-widest">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-anima-blue-500 mt-3 tracking-tight">
            Caminhos para o Bem-Estar
          </h2>
          <p className="mt-4 text-anima-blue-300 max-w-xl mx-auto">
            Oferecemos abordagens complementares para cuidar da saúde emocional com profundidade e eficácia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services?.map((service: any, i: number) => {
            const Icon = service?.icon
            return (
              <motion.div
                key={service?.title ?? i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={service?.href ?? '/agendamento'}>
                  <div className="group bg-anima-green-50/50 rounded-xl p-6 h-full transition-all hover:shadow-lg hover:bg-anima-green-50 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-lg bg-anima-green-500/10 flex items-center justify-center mb-4 group-hover:bg-anima-amber-400/20 transition-colors">
                      {Icon && <Icon className="w-6 h-6 text-anima-green-500 group-hover:text-anima-amber-500 transition-colors" />}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-anima-blue-500 mb-2">
                      {service?.title ?? ''}
                    </h3>
                    <p className="text-sm text-anima-blue-300 leading-relaxed">
                      {service?.description ?? ''}
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
