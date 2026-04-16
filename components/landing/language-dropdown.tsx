"use client"

import { Globe } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Locale } from "@/app/[lang]/dictionaries"

const languages: { code: Locale; label: string; nativeLabel: string }[] = [
  { code: "en", label: "English", nativeLabel: "EN" },
  { code: "zh-cn", label: "简体中文", nativeLabel: "简体" },
  { code: "zh-tw", label: "繁體中文", nativeLabel: "繁體" },
]

interface LanguageDropdownProps {
  currentLang: Locale
}

export function LanguageDropdown({ currentLang }: LanguageDropdownProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (locale: Locale) => {
    if (locale === currentLang) return
    // Replace the current locale segment in the pathname
    const segments = pathname.split('/')
    segments[1] = locale
    router.push(segments.join('/') || `/${locale}`)
  }

  const current = languages.find((l) => l.code === currentLang)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground hover:bg-secondary/60 dark:hover:bg-secondary/60 flex items-center gap-2"
        >
          <Globe className="w-4 h-4" />
          <span className="text-xs font-medium hidden sm:inline">
            {current?.nativeLabel ?? currentLang.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLocale(lang.code)}
            className={`flex items-center justify-between ${
              lang.code === currentLang ? "text-primary font-semibold" : ""
            }`}
          >
            <span>{lang.label}</span>
            <span className="text-xs text-muted-foreground">{lang.nativeLabel}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
