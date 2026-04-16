import { Send, MessageCircle, CreditCard, Globe, Webhook, BarChart3 } from "lucide-react"
import type { Dictionary } from "@/app/[lang]/dictionaries"

const channels = [
  { icon: MessageCircle, label: "WhatsApp", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Send, label: "Telegram", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Globe, label: "LINE", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: CreditCard, label: "Stripe", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Webhook, label: "Webhooks", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: BarChart3, label: "Analytics", color: "text-cyan-400", bg: "bg-cyan-500/10" },
]

export function Integrations({ dict }: { dict: Dictionary }) {
  const t = dict.integrations
  const stats = [
    { value: "50M+", label: t.stats.messages },
    { value: "99.9%", label: t.stats.uptime },
    { value: "150+", label: t.stats.countries },
  ]

  return (
    <section id="integrations" className="py-20 px-6 border-y border-border/40 bg-card/20 dark:bg-card/20">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest text-center">
          {t.sectionLabel}
        </p>

        <div className="w-full relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10"
            style={{ background: "linear-gradient(to right, oklch(0.98 0.001 0), transparent)" }}
          />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10"
            style={{ background: "linear-gradient(to left, oklch(0.98 0.001 0), transparent)" }}
          />
          <div className="dark pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10"
            style={{ background: "linear-gradient(to right, oklch(0.13 0.01 264), transparent)" }}
          />
          <div className="dark pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10"
            style={{ background: "linear-gradient(to left, oklch(0.13 0.01 264), transparent)" }}
          />

          <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap py-2">
            {channels.map((ch) => (
              <div key={ch.label} className="flex flex-col items-center gap-2 group cursor-default">
                <div
                  className={`w-14 h-14 rounded-2xl ${ch.bg} border border-border/40 flex items-center justify-center
                    opacity-50 group-hover:opacity-90 group-hover:border-border/80 transition-all duration-300 group-hover:scale-110`}
                >
                  <ch.icon className={`w-6 h-6 ${ch.color}`} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  {ch.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 md:gap-12 pt-4 border-t border-border/30 w-full max-w-2xl">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</span>
              <span className="text-xs text-muted-foreground text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
