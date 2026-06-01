'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import type { ChartData } from './thermometer-content'

interface EmotionalChartProps {
  data: ChartData[]
}

export default function EmotionalChart({ data }: EmotionalChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data ?? []}
        margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
      >
        <XAxis
          dataKey="name"
          tickLine={false}
          tick={{ fontSize: 10 }}
          interval="preserveStartEnd"
        />
        <YAxis
          tickLine={false}
          tick={{ fontSize: 10 }}
          allowDecimals={false}
        />
        <Tooltip contentStyle={{ fontSize: 11 }} />
        <Legend
          verticalAlign="top"
          wrapperStyle={{ fontSize: 11 }}
        />
        <Bar dataKey="otimo" name="😄 Ótimo" fill="#4A5D4E" radius={[4, 4, 0, 0]} />
        <Bar dataKey="bem" name="😊 Bem" fill="#6B8E6E" radius={[4, 4, 0, 0]} />
        <Bar dataKey="neutro" name="😐 Neutro" fill="#C68B3E" radius={[4, 4, 0, 0]} />
        <Bar dataKey="ansioso" name="😟 Ansioso" fill="#D97706" radius={[4, 4, 0, 0]} />
        <Bar dataKey="triste" name="😢 Triste" fill="#3E5A8C" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
