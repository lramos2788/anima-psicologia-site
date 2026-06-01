import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export const dynamic = 'force-dynamic'

export default function sitemap(): MetadataRoute.Sitemap {
  const headersList = headers()
  const host = headersList?.get?.('x-forwarded-host') ?? process.env.NEXTAUTH_URL ?? 'http://localhost:3000'
  const siteUrl = host?.startsWith?.('http') ? host : `https://${host}`

  const routes = [
    '',
    '/equipe',
    '/servicos',
    '/quiz',
    '/termometro',
    '/espaco',
    '/agendamento',
    '/parceiros',
  ]

  return routes?.map?.((route: string) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  })) ?? []
}
