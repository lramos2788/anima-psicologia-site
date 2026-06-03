'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Tipagem estrita aplicada (removido o uso de 'any')
interface TeamMember {
  name: string;
  role: string;
  image: string;
  brief: string;
}

const team: TeamMember[] = [
  {
    name: 'Lucas Ramos',
    role: 'Psicanalista',
    image: '/images/lucas-perfil.jpg',
    brief: 'Acolhimento profundo para a escuta do inconsciente e rigor na Avaliação Psicológica.',
  },
  {
    name: 'Benedita Araujo',
    role: 'Terapeuta Cognitivo-Comportamental',
    image: '/images/bene1.jpeg',
    brief: 'Clareza, evidências e ferramentas para o autocontrole e regulação emocional.',
  },
]

export default function TeamPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-bege/30 border-y border-bege">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-dourado text-sm font-bold uppercase tracking-[0.2em]">
            Nossa Equipe
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-grafite mt-4 tracking-tight leading-tight">
            Direção <span className="italic text-madeira">Clínica</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-marfim rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-bege"
            >
              <div className="relative aspect-[4/5] bg-bege/50">
                <Image
                  src={member.image}
                  alt={`Fotografia profissional de ${member.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 text-center border-t border-bege">
                <h3 className="font-serif text-2xl font-bold text-grafite">
                  {member.name}
                </h3>
                <p className="text-madeira text-sm font-semibold uppercase tracking-wider mt-2 mb-4">
                  {member.role}
                </p>
                <p className="text-grafite/70 text-base leading-relaxed font-light">
                  {member.brief}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href="/equipe"
            className="inline-flex items-center gap-2 text-madeira hover:text-dourado font-medium transition-colors border-b border-transparent hover:border-dourado pb-1"
          >
            Conheça a trajetória completa da equipe
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}