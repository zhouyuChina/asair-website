import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Dictionary } from "@/app/[lang]/dictionaries"

export function EnterpriseJourney({ dict }: { dict: Dictionary }) {
  const t = dict.journey

  return (
    <section id="journey" className="py-24 px-6 bg-card/10 dark:bg-card/10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">{t.sectionLabel}</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight">
            {t.sectionTitle1}{" "}
            <span className="gradient-text">{t.sectionTitleAccent}</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{t.sectionSubtitle}</p>
        </div>

        {/* Timeline steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.steps.map((step, index) => (
            <div key={step.title} className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl gradient-btn flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 border border-border/40 space-y-2.5">
                {step.details.map((detail) => (
                  <div key={detail} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{detail}</span>
                  </div>
                ))}
              </div>

              {index < t.steps.length - 1 && (
                <div className="hidden md:flex justify-center py-2">
                  <ArrowRight className="w-5 h-5 text-border/40 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-16 glass-card rounded-2xl p-8 border border-primary/10 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">{t.ctaTitle}</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">{t.ctaSubtitle}</p>
          <Button
            size="lg"
            className="gradient-btn text-white border-0 shadow-xl font-semibold px-8 py-6 hover:opacity-90 transition-opacity"
          >
            {t.ctaButton}
          </Button>
        </div>
      </div>
    </section>
  )
}
