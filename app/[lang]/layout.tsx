import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '../globals.css'
import { getDictionary, hasLocale, LOCALES } from './dictionaries'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    generator: 'v0.app',
    keywords: ['AI customer service', 'omnichannel helpdesk', 'WhatsApp automation', 'multi-tenant SaaS', 'enterprise AI'],
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      type: 'website',
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <html lang={lang} className="bg-background" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
