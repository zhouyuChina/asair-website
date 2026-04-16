import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { LOCALES, DEFAULT_LOCALE, hasLocale } from '@/app/[lang]/dictionaries'

function getPreferredLocale(request: NextRequest): string {
  // Check cookie first
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && hasLocale(cookieLocale)) {
    return cookieLocale
  }

  // Fall back to Accept-Language header
  const acceptLang = request.headers.get('accept-language') ?? ''
  for (const segment of acceptLang.split(',')) {
    const tag = segment.split(';')[0].trim().toLowerCase()
    if (hasLocale(tag)) return tag
    // Match e.g. "zh-TW" → "zh-tw", "zh-CN" → "zh-cn"
    const normalized = tag.replace('_', '-')
    if (hasLocale(normalized)) return normalized
    // Match "zh" → "zh-cn" as default Chinese
    if (tag === 'zh') return 'zh-cn'
  }

  return DEFAULT_LOCALE
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if pathname already starts with a supported locale
  const pathnameHasLocale = LOCALES.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  const locale = getPreferredLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip _next, api, static assets, and favicon
    '/((?!_next|api|.*\\..*|favicon.ico).*)',
  ],
}
