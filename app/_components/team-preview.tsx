'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface TeamMember {
  name: string
  credential: string
  image: string
  description: string
}

const team: TeamMember[] = [
  {
    name: 'Lucas Ramos',
    credential: 'Psicólogo e Psicanalista · CRP 03/29660',
    image: '/images/lucas-perfil.jpg',
    description:
      'Escuta orientada pela psicanálise, para o que se repete e não se explica. Avaliação psicológica com rigor metodológico.',
  },
  {
    name: 'Benedita Araujo',
    credential: 'Psicóloga · CRP 03/19048',
    image: '/images/bene1.jpeg',
    description:
      'Terapia Cognitivo-Comportamental, com foco em mulheres em exaustão emocional. Ferramentas para autocontrole e regulação emocional.',
  },
]

export default function TeamPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} id="profissionais" className="py-24 sm:py-32 bg-bege/30 border-y border-bege">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-dourado text-sm font-bold uppercase tracking-[0.2em]">
            Quem atende aqui
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-grafite mt-4 tracking-tight leading-tight">
            Dois psicólogos, duas abordagens
          </h2>
        </motion.div>

        {/* TODO(design): uniformizar fotos — mesma sessão, aspect-ratio, crop ombros-cima,
            dessaturação leve e overlay sutil para aproximar temperatura de cor entre os dois perfis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-marfim rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-bege"
            >
              <div className="relative aspect-[4/5] bg-bege/50 overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.credential}`}
                  fill
                  className="object-cover object-top grayscale-[20%] transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-grafite/10 mix-blend-multiply pointer-events-none" />
              </div>
              <div className="p-8 text-center border-t border-bege">
                <h3 className="font-serif text-2xl font-bold text-grafite">
                  {member.name}
                </h3>
                <p className="text-madeira text-sm font-semibold mt-2 mb-4">
                  {member.credential}
                </p>
                <p className="text-grafite/70 text-base leading-relaxed font-light">
                  {member.description}
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
            Conheça a trajetória de cada um
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
