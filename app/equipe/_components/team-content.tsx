'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Target, BookOpen, Shield } from 'lucide-react'
import Link from 'next/link'

const professionals = [
  {
    name: 'Lucas Ramos',
    role: 'Psicanalista',
    image: '/images/lucas-perfil.jpg',
    secondImage: '/images/Perfil3.jpeg',
    approach: 'Psicanálise',
    icon: Heart,
    bio: 'Lucas Ramos é psicanalista dedicado à escuta profunda do inconsciente. Com formação sólida em teoria psicanalítica, seu trabalho terapêutico é guiado pela convicção de que cada ser humano carrega uma história única que merece ser ouvida com atenção e respeito.',
    philosophy: 'Na psicanálise, buscamos acessar as camadas mais profundas da experiência humana. Através da fala livre e da relação terapêutica, criamos um espaço seguro para que emoções silenciadas possam encontrar expressão e elaboração.',
    specialties: [
      'Escuta do inconsciente',
      'Elaboração de conflitos internos',
      'Autoconhecimento profundo',
      'Relações interpessoais',
    ],
  },
  {
    name: 'Benedita Araujo',
    role: 'Terapeuta Cognitivo-Comportamental',
    image: '/images/bene1.jpeg',
    secondImage: '/images/benedita-perfil.jpg',
    approach: 'TCC',
    icon: Target,
    bio: 'Benedita Araujo é especialista em Terapia Cognitivo-Comportamental (TCC), uma abordagem baseada em evidências científicas. Seu foco está em oferecer clareza e ferramentas práticas que promovem o autocontrole e o equilíbrio emocional.',
    philosophy: 'A TCC nos convida a compreender como pensamentos, emoções e comportamentos se conectam. Com técnicas estruturadas e validadas, desenvolvemos juntos estratégias eficazes para lidar com os desafios do dia a dia.',
    specialties: [
      'Reestruturação cognitiva',
      'Manejo de ansiedade e estresse',
      'Técnicas de autorregulação',
      'Desenvolvimento de habilidades',
    ],
  },
]

export default function TeamContent() {
  return (
    <div className="pb-20">
      {/* Page Header */}
      <section className="bg-anima-blue-500 py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-anima-amber-400 text-sm font-semibold uppercase tracking-widest"
          >
            Nossa Equipe
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 tracking-tight"
          >
            Profissionais que Transformam
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-xl mx-auto mt-4"
          >
            Duas abordagens complementares unidas pelo compromisso com o seu bem-estar.
          </motion.p>
        </div>
      </section>

      {/* Professionals */}
      {professionals?.map((prof: any, index: number) => (
        <ProfessionalSection key={prof?.name ?? index} professional={prof} index={index} />
      ))}
    </div>
  )
}

function ProfessionalSection({ professional, index }: { professional: any; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const isEven = index % 2 === 0
  const Icon = professional?.icon

  return (
    <section
      ref={ref}
      className={`py-16 sm:py-24 ${isEven ? 'bg-white' : 'bg-anima-green-50/30'}`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`${isEven ? '' : 'lg:order-2'}`}
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-anima-green-100 shadow-lg">
              <Image
                src={professional?.image ?? ''}
                alt={`Foto de ${professional?.name ?? 'profissional'}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`${isEven ? '' : 'lg:order-1'}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-anima-amber-400/15 flex items-center justify-center">
                {Icon && <Icon className="w-5 h-5 text-anima-amber-500" />}
              </div>
              <span className="text-anima-amber-500 font-semibold text-sm uppercase tracking-wider">
                {professional?.approach ?? ''}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-anima-blue-500 tracking-tight">
              {professional?.name ?? ''}
            </h2>
            <p className="text-anima-green-500 font-medium mt-1 mb-6">
              {professional?.role ?? ''}
            </p>

            <p className="text-anima-blue-300 leading-relaxed mb-4">
              {professional?.bio ?? ''}
            </p>

            <blockquote className="border-l-4 border-anima-amber-400 pl-4 italic text-anima-blue-400 mb-6">
              &ldquo;{professional?.philosophy ?? ''}&rdquo;
            </blockquote>

            <div className="mb-6">
              <h4 className="font-semibold text-anima-blue-500 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-anima-green-500" />
                Áreas de Atuação
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(professional?.specialties ?? [])?.map?.((spec: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-anima-blue-300">
                    <Shield className="w-3.5 h-3.5 text-anima-green-400 shrink-0" />
                    {spec}
                  </div>
                )) ?? []}
              </div>
            </div>

            <Link
              href="/agendamento"
              className="inline-flex items-center gap-2 bg-anima-green-500 hover:bg-anima-green-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:shadow-md"
            >
              Agendar com {professional?.name?.split?.(' ')?.[0] ?? 'profissional'}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
