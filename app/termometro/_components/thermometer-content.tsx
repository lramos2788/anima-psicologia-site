'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Activity, Check } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import dynamic from 'next/dynamic'

const EmotionalChart = dynamic(() => import('./emotional-chart'), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] flex items-center justify-center text-anima-blue-300">Carregando gráfico...</div>
  ),
})

const emojis = [
  { value: 'ótimo', emoji: '😄', label: 'Ótimo', color: '#4A5D4E' },
  { value: 'bem', emoji: '😊', label: 'Bem', color: '#6B8E6E' },
  { value: 'neutro', emoji: '😐', label: 'Neutro', color: '#C68B3E' },
  { value: 'ansioso', emoji: '😟', label: 'Ansioso(a)', color: '#D97706' },
  { value: 'triste', emoji: '😢', label: 'Triste', color: '#3E5A8C' },
]

export interface ChartData {
  name: string
  otimo: number
  bem: number
  neutro: number
  ansioso: number
  triste: number
}

export default function ThermometerContent() {
  const [selected, setSelected] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [chartData, setChartData] = useState<ChartData[]>([])
  const [loading, setLoading] = useState(false)

  const fetchData = useCallback(async () => {
    try {
      const sevenDaysAgo = new Date()
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

      const { data, error } = await supabase
        ?.from?.('anima_emotional_logs')
        ?.select?.('created_at, emoji_value')
        ?.gte?.('created_at', sevenDaysAgo?.toISOString?.() ?? '')
        ?.order?.('created_at', { ascending: true }) ?? { data: null, error: null }

      if (error) {
        console.error('Erro ao buscar dados:', error)
        return
      }

      // Group by day
      const grouped: Record<string, Record<string, number>> = {}
      for (const row of data ?? []) {
        const day = new Date(row?.created_at ?? '')?.toLocaleDateString?.('pt-BR', {
          weekday: 'short',
          day: '2-digit',
        }) ?? ''
        if (!grouped[day]) {
          grouped[day] = { otimo: 0, bem: 0, neutro: 0, ansioso: 0, triste: 0 }
        }
        const val = row?.emoji_value ?? ''
        if (grouped[day]?.[val] !== undefined) {
          grouped[day][val] = (grouped[day][val] ?? 0) + 1
        }
      }

      const chartArr: ChartData[] = Object.entries(grouped ?? {})?.map?.(([name, values]: [string, any]) => ({
        name,
        otimo: values?.otimo ?? 0,
        bem: values?.bem ?? 0,
        neutro: values?.neutro ?? 0,
        ansioso: values?.ansioso ?? 0,
        triste: values?.triste ?? 0,
      })) ?? []

      setChartData(chartArr)
    } catch (err: any) {
      console.error('Erro:', err)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleSubmit = async () => {
    if (!selected) return
    setLoading(true)
    try {
      await supabase?.from?.('anima_emotional_logs')?.insert?.({
        emoji_value: selected,
        anonymous: true,
      })
      setSubmitted(true)
      fetchData()
    } catch (err: any) {
      console.error('Erro ao salvar:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh]">
      {/* Header */}
      <section className="bg-anima-blue-500 py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <Activity className="w-8 h-8 text-anima-amber-400 mx-auto mb-4" />
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Termômetro <span className="text-anima-amber-400">Emocional</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto mt-4">
            Como você está se sentindo hoje? Compartilhe anonimamente e veja como a comunidade se sente.
          </p>
        </div>
      </section>

      {/* Emoji Selection */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h2 className="font-display text-2xl font-bold text-anima-blue-500 mb-8">
                Escolha como você se sente agora
              </h2>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {emojis?.map?.((item: any) => (
                  <motion.button
                    key={item?.value}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelected(item?.value ?? '')}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${
                      selected === item?.value
                        ? 'bg-anima-green-50 ring-2 ring-anima-green-400 shadow-md'
                        : 'bg-anima-green-50/30 hover:bg-anima-green-50/60'
                    }`}
                  >
                    <span className="text-4xl">{item?.emoji ?? ''}</span>
                    <span className="text-xs font-medium text-anima-blue-400">{item?.label ?? ''}</span>
                  </motion.button>
                )) ?? []}
              </div>

              <button
                onClick={handleSubmit}
                disabled={!selected || loading}
                className="inline-flex items-center gap-2 bg-anima-green-500 hover:bg-anima-green-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                {loading ? 'Enviando...' : 'Compartilhar'}
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-anima-green-500/15 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-anima-green-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-anima-blue-500 mb-2">
                Obrigado por compartilhar!
              </h3>
              <p className="text-anima-blue-300 mb-6">
                Sua resposta foi registrada anonimamente. Veja o panorama abaixo.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Chart */}
      <section className="py-16 bg-anima-green-50/30">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-anima-blue-500 mb-2 text-center">
            Panorama dos Últimos 7 Dias
          </h2>
          <p className="text-anima-blue-300 text-center mb-8 text-sm">
            Respostas anônimas da comunidade ANIMA
          </p>

          <div className="bg-white rounded-xl p-6 shadow-sm" style={{ height: 350 }}>
            {(chartData?.length ?? 0) > 0 ? (
              <EmotionalChart data={chartData} />
            ) : (
              <div className="h-full flex items-center justify-center text-anima-blue-300 text-sm">
                Ainda não há dados suficientes. Seja o primeiro a compartilhar!
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
