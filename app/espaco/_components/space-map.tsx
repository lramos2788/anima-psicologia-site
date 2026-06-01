'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, X, Armchair, Brain, Users, Coffee } from 'lucide-react'
import Image from 'next/image'

const rooms = [
  {
    id: 'psicanalise',
    label: 'Consultório Psicanálise',
    icon: Brain,
    x: 10,
    y: 15,
    width: 38,
    height: 35,
    color: '#4A5D4E',
    description:
      'Ambiente intimista com iluminação suave, projetado para a escuta profunda. Divã clássico e poltrona confortável criam o espaço ideal para a experiência psicanalítica.',
  },
  {
    id: 'tcc',
    label: 'Consultório TCC',
    icon: Armchair,
    x: 52,
    y: 15,
    width: 38,
    height: 35,
    color: '#C68B3E',
    description:
      'Sala estruturada e luminosa, equipada com recursos para atividades terapêuticas. Mesa de trabalho e materiais de apoio favorecem a abordagem prática da TCC.',
  },
  {
    id: 'grupo',
    label: 'Sala de Grupos',
    icon: Users,
    x: 10,
    y: 55,
    width: 55,
    height: 35,
    color: '#3E5A8C',
    description:
      'Espaço amplo e versátil, preparado para vivências em grupo, workshops e cursos. Cadeiras dispostas em círculo promovem acolhimento e troca.',
  },
  {
    id: 'recepcao',
    label: 'Recepção/Acolhimento',
    icon: Coffee,
    x: 69,
    y: 55,
    width: 21,
    height: 35,
    color: '#6B8E6E',
    description:
      'Área de acolhimento com café, água e leitura. Um espaço tranquilo para chegar, respirar e se preparar para a sessão.',
  },
]

export default function SpaceMap() {
  const [activeRoom, setActiveRoom] = useState<string | null>(null)
  const selectedRoom = rooms?.find?.((r: any) => r?.id === activeRoom)

  return (
    <div className="min-h-[80vh]">
      {/* Header */}
      <section className="bg-anima-blue-500 py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <MapPin className="w-8 h-8 text-anima-amber-400 mx-auto mb-4" />
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Conheça o <span className="text-anima-amber-400">Espaço</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto mt-4">
            Um ambiente pensado para o seu conforto e bem-estar. Clique em cada área para saber mais.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['/images/espaco-1.jpeg', '/images/espaco-2.jpeg', '/images/espaco-3.jpeg']?.map?.((src: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-video rounded-xl overflow-hidden bg-anima-green-100 shadow-sm"
              >
                <Image
                  src={src}
                  alt={`Foto do Espaço ANIMA ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </motion.div>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-16 bg-anima-green-50/30">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-anima-blue-500 mb-8 text-center">
            Mapa Interativo
          </h2>

          {/* <!-- Substituir por mapa real quando disponível --> */}
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden" style={{ aspectRatio: '16/10' }}>
            {/* Floor plan SVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background */}
              <rect x="0" y="0" width="100" height="100" fill="#F8F6F3" />

              {/* Grid lines */}
              <line x1="5" y1="50" x2="95" y2="50" stroke="#E5E0D8" strokeWidth="0.3" strokeDasharray="2,2" />
              <line x1="50" y1="5" x2="50" y2="95" stroke="#E5E0D8" strokeWidth="0.3" strokeDasharray="2,2" />

              {/* Walls */}
              <rect x="8" y="12" width="84" height="80" fill="none" stroke="#1F2A38" strokeWidth="0.8" rx="1" />
              <line x1="50" y1="12" x2="50" y2="52" stroke="#1F2A38" strokeWidth="0.5" />
              <line x1="8" y1="52" x2="92" y2="52" stroke="#1F2A38" strokeWidth="0.5" />
              <line x1="67" y1="52" x2="67" y2="92" stroke="#1F2A38" strokeWidth="0.5" />

              {/* Room fills */}
              {rooms?.map?.((room: any) => {
                const isActive = activeRoom === room?.id
                return (
                  <g key={room?.id} className="cursor-pointer" onClick={() => setActiveRoom(room?.id ?? null)}>
                    <rect
                      x={room?.x}
                      y={room?.y}
                      width={room?.width}
                      height={room?.height}
                      fill={isActive ? (room?.color ?? '#4A5D4E') : `${room?.color ?? '#4A5D4E'}15`}
                      stroke={room?.color ?? '#4A5D4E'}
                      strokeWidth={isActive ? '1' : '0.5'}
                      rx="1"
                      className="transition-all duration-300"
                      opacity={isActive ? 0.25 : 1}
                    />
                    <text
                      x={(room?.x ?? 0) + (room?.width ?? 0) / 2}
                      y={(room?.y ?? 0) + (room?.height ?? 0) / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={room?.color ?? '#4A5D4E'}
                      fontSize="3"
                      fontWeight="600"
                      className="pointer-events-none select-none"
                    >
                      {room?.label ?? ''}
                    </text>
                  </g>
                )
              }) ?? []}

              {/* Title */}
              <text x="50" y="7" textAnchor="middle" fill="#1F2A38" fontSize="3.5" fontWeight="700">
                Espaço ANIMA - Sala 202
              </text>
            </svg>
          </div>

          {/* Room detail */}
          <AnimatePresence>
            {selectedRoom && (
              <motion.div
                key={selectedRoom?.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-6 bg-white rounded-xl shadow-sm p-6 border-l-4"
                style={{ borderLeftColor: selectedRoom?.color ?? '#4A5D4E' }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {selectedRoom?.icon && (
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${selectedRoom?.color ?? '#4A5D4E'}15` }}
                      >
                        <selectedRoom.icon className="w-5 h-5" style={{ color: selectedRoom?.color ?? '#4A5D4E' }} />
                      </div>
                    )}
                    <h3 className="font-display text-xl font-bold text-anima-blue-500">
                      {selectedRoom?.label ?? ''}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveRoom(null)}
                    className="text-anima-blue-300 hover:text-anima-blue-500 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="mt-3 text-anima-blue-300 leading-relaxed">
                  {selectedRoom?.description ?? ''}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Address */}
      <section className="py-12 bg-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-anima-amber-500" />
            <h3 className="font-semibold text-anima-blue-500">Endereço</h3>
          </div>
          <p className="text-anima-blue-300">
            Rua da Cacimba, s/n, 2º andar - Sala 202, Itapuã, Salvador - BA
          </p>
        </div>
      </section>
    </div>
  )
}
