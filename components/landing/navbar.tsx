"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"
import { LanguageDropdown } from "./language-dropdown"
import { ThemeToggle } from "./theme-toggle"
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries"

interface NavbarProps {
  dict: Dictionary
  lang: Locale
}

export function Navbar({ dict, lang }: NavbarProps) {
  const t = dict.nav
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: t.platform, href: "#features" },
    { label: t.services, href: "#services" },
    { label: t.about, href: "#about" },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border/50 shadow-lg shadow-black/20 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg gradient-btn flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
            <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold tracking-tight gradient-text">ASAIR</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageDropdown currentLang={lang} />
          <ThemeToggle />
          <Button
            size="sm"
            className="gradient-btn text-white border-0 shadow-lg hover:opacity-90 transition-opacity font-semibold px-6"
          >
            {t.contactSales}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-border/50">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
              <div className="flex gap-2">
                <LanguageDropdown currentLang={lang} />
                <ThemeToggle />
              </div>
              <Button size="sm" className="gradient-btn text-white border-0 font-semibold">
                {t.contactSales}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
