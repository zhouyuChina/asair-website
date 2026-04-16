import {
  Inbox,
  Bot,
  Shield,
  Network,
  Lock,
  Zap,
  CheckCircle2,
} from "lucide-react"
import type { Dictionary } from "@/app/[lang]/dictionaries"

const featureMeta = [
  { id: "multitenant" as const, icon: Inbox, color: "text-blue-400" },
  { id: "webDev" as const, icon: Network, color: "text-emerald-400" },
  { id: "security" as const, icon: Lock, color: "text-purple-400" },
  { id: "rd" as const, icon: Zap, color: "text-orange-400" },
]

export function Features({ dict }: { dict: Dictionary }) {
  const t = dict.features

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">{t.sectionLabel}</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight">
            {t.sectionTitle1}{" "}
            <span className="gradient-text">{t.sectionTitleAccent}</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* 2x2 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featureMeta.map(({ id, icon: Icon, color }) => {
            const feature = t.items[id]
            return (
              <div
                key={id}
                className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group flex flex-col gap-6"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className={`w-6 h-6 ${color}`} strokeWidth={1.5} />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground leading-snug">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>

                <div className="flex flex-col gap-2.5 pt-2 border-t border-border/30">
                  {feature.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-2 group/link"
                >
                  {t.learnMore}
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            )
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 glass-card rounded-2xl p-8 border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-10 h-10 rounded-lg gradient-btn flex items-center justify-center mb-3">
                <Inbox className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-sm font-bold text-foreground mb-2">{t.globalReach.title}</h4>
              <p className="text-sm text-muted-foreground">{t.globalReach.description}</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-lg gradient-btn flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-sm font-bold text-foreground mb-2">{t.enterpriseGrade.title}</h4>
              <p className="text-sm text-muted-foreground">{t.enterpriseGrade.description}</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-lg gradient-btn flex items-center justify-center mb-3">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-sm font-bold text-foreground mb-2">{t.aiPowered.title}</h4>
              <p className="text-sm text-muted-foreground">{t.aiPowered.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
