"use client"

import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check system preference or localStorage
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    if (newIsDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="text-muted-foreground hover:text-foreground hover:bg-secondary/60 dark:hover:bg-secondary/60"
        disabled
      >
        <Sun className="w-4 h-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="text-muted-foreground hover:text-foreground hover:bg-secondary/60 dark:hover:bg-secondary/60 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </Button>
  )
}
