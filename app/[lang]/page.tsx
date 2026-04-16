import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import { Navbar } from '@/components/landing/navbar'
import { Hero } from '@/components/landing/hero'
import { Integrations } from '@/components/landing/integrations'
import { Features } from '@/components/landing/features'
import { EnterpriseJourney } from '@/components/landing/enterprise-journey'
import { CTABanner } from '@/components/landing/cta-banner'
import { Footer } from '@/components/landing/footer'

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar dict={dict} lang={lang} />
      <Hero dict={dict} />
      <Integrations dict={dict} />
      <Features dict={dict} />
      <EnterpriseJourney dict={dict} />
      <CTABanner dict={dict} />
      <Footer dict={dict} />
    </main>
  )
}
