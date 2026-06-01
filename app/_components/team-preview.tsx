'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const team = [
  {
    name: 'Lucas Ramos',
    role: 'Psicanalista',
    image: '/images/lucas-perfil.jpg',
    brief: 'Acolhimento profundo para a escuta do inconsciente.',
  },
  {
    name: 'Benedita Araujo',
    role: 'Terapeuta Cognitivo-Comportamental',
    image: '/images/bene1.jpeg',
    brief: 'Clareza e ferramentas para o autocontrole e equilíbrio emocional.',
  },
]

export default function TeamPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-anima-green-50/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-anima-amber-400 text-sm font-semibold uppercase tracking-widest">
            Nossa Equipe
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-anima-blue-500 mt-3 tracking-tight">
            Profissionais que Acolhem
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team?.map((member: any, i: number) => (
            <motion.div
              key={member?.name ?? i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] bg-anima-green-100">
                <Image
                  src={member?.image ?? ''}
                  alt={`Foto de ${member?.name ?? 'profissional'}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-anima-blue-500">
                  {member?.name ?? ''}
                </h3>
                <p className="text-anima-amber-500 text-sm font-medium mt-1">
                  {member?.role ?? ''}
                </p>
                <p className="text-anima-blue-300 text-sm mt-3 leading-relaxed">
                  {member?.brief ?? ''}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/equipe"
            className="inline-flex items-center gap-2 text-anima-green-500 hover:text-anima-amber-500 font-medium transition-colors"
          >
            Conheça toda a equipe
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
