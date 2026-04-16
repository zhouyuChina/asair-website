"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Zap, Building2, Rocket } from "lucide-react"

const plans = [
  {
    id: "starter",
    name: "Starter",
    icon: Rocket,
    price: { monthly: 49, annual: 39 },
    description: "Perfect for small teams getting started with AI support.",
    features: [
      "Up to 3 channels",
      "5,000 AI messages / month",
      "2 agent seats",
      "Basic analytics",
      "Email support",
      "WhatsApp & Telegram",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    id: "professional",
    name: "Professional",
    icon: Zap,
    price: { monthly: 149, annual: 119 },
    description: "Built for growing businesses that need full omnichannel power.",
    features: [
      "Unlimited channels",
      "50,000 AI messages / month",
      "20 agent seats",
      "Advanced analytics & reports",
      "Priority support (24/7)",
      "Custom AI workflows",
      "LLM routing (GPT-4, Claude)",
      "API access",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Building2,
    price: { monthly: null, annual: null },
    description: "For large organizations requiring multi-tenant architecture and SLA guarantees.",
    features: [
      "Multi-tenant workspaces",
      "Unlimited AI messages",
      "Unlimited agent seats",
      "Dedicated infrastructure",
      "99.99% uptime SLA",
      "SSO & SAML",
      "Custom branding",
      "Dedicated success manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="py-24 px-6 bg-card/10 dark:bg-card/10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Pricing</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground dark:text-foreground text-balance">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="mt-4 text-muted-foreground dark:text-muted-foreground leading-relaxed">
            No hidden fees. Scale as you grow. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 glass dark:glass border border-border/40 dark:border-border/40 rounded-full p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                !annual
                  ? "gradient-btn text-white shadow-md"
                  : "text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                annual
                  ? "gradient-btn text-white shadow-md"
                  : "text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground"
              }`}
            >
              Annual
              <span className="ml-2 text-xs px-1.5 py-0.5 rounded-full bg-green-500/20 dark:bg-green-500/20 text-green-400 dark:text-green-400 font-medium">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 ${
                plan.popular
                  ? "glass-card dark:glass-card glow-border dark:glow-border border-primary/40 dark:border-primary/40 scale-[1.02]"
                  : "glass-card dark:glass-card border border-border/40 dark:border-border/40 hover:border-border/70 dark:hover:border-border/70"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="gradient-btn text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon + name */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    plan.popular ? "gradient-btn shadow-lg" : "bg-secondary/60 dark:bg-secondary/60 border border-border/40 dark:border-border/40"
                  }`}
                >
                  <plan.icon
                    className={`w-5 h-5 ${plan.popular ? "text-white" : "text-muted-foreground"}`}
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-lg font-bold text-foreground dark:text-foreground">{plan.name}</span>
              </div>

              {/* Price */}
              <div className="mb-4">
                {plan.price.monthly !== null ? (
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold gradient-text">
                      ${annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-muted-foreground dark:text-muted-foreground mb-1.5">/mo</span>
                  </div>
                ) : (
                  <div className="text-4xl font-bold gradient-text">Custom</div>
                )}
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mt-1.5 leading-relaxed">{plan.description}</p>
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className={`w-full font-semibold mb-6 ${
                  plan.popular
                    ? "gradient-btn text-white border-0 shadow-xl hover:opacity-90 transition-opacity"
                    : "bg-secondary/60 hover:bg-secondary text-foreground border border-border/60"
                }`}
              >
                {plan.cta}
              </Button>

              {/* Features */}
              <div className="flex flex-col gap-2.5 flex-1">
                <span className="text-xs font-semibold text-muted-foreground dark:text-muted-foreground uppercase tracking-wider mb-1">
                  What&apos;s included
                </span>
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        plan.popular ? "text-primary" : "text-muted-foreground dark:text-muted-foreground"
                      }`}
                    />
                    <span className="text-sm text-muted-foreground dark:text-muted-foreground leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-muted-foreground dark:text-muted-foreground mt-10">
          All plans include a 14-day free trial. No credit card required.{" "}
          <a href="#" className="text-primary hover:underline">
            Compare all features →
          </a>
        </p>
      </div>
    </section>
  )
}
