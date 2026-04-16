import { Button } from "@/components/ui/button"
import { Zap, MessageCircle } from "lucide-react"
import type { Dictionary } from "@/app/[lang]/dictionaries"

export function CTABanner({ dict }: { dict: Dictionary }) {
  const t = dict.cta

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-[600px] h-[300px] rounded-full blur-3xl opacity-15 dark:opacity-15"
          style={{ background: "radial-gradient(ellipse, #3b82f6, #6366f1, #8b5cf6)" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <div className="w-14 h-14 rounded-2xl gradient-btn flex items-center justify-center shadow-2xl pulse-glow-anim">
          <Zap className="w-7 h-7 text-white" strokeWidth={2} />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground text-balance">
          {t.title1}{" "}
          <span className="gradient-text">{t.titleAccent}</span>
        </h2>

        <p className="text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed max-w-xl text-pretty">
          {t.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://wa.me/6584374880"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="gradient-btn text-white border-0 shadow-2xl font-semibold px-8 py-6 text-base hover:opacity-90 transition-all hover:scale-[1.02] group gap-2 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              {t.whatsapp}
            </Button>
          </a>
          <a href="mailto:263203788@qq.com">
            <Button
              size="lg"
              variant="outline"
              className="border-border/60 dark:border-border/60 bg-secondary/30 dark:bg-secondary/30 hover:bg-secondary/60 dark:hover:bg-secondary/60 text-foreground dark:text-foreground font-semibold px-8 py-6 text-base w-full sm:w-auto"
            >
              {t.consultation}
            </Button>
          </a>
        </div>

        <p className="text-sm text-muted-foreground dark:text-muted-foreground">{t.note}</p>
      </div>
    </section>
  )
}
