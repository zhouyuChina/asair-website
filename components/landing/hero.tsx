"use client"

import { MessageSquare, Bot, CheckCircle2 } from "lucide-react"
import type { Dictionary } from "@/app/[lang]/dictionaries"

// Interpolate {whatsapp}, {telegram}, {line} placeholders with bold spans
function HeroSubtitle({ template }: { template: string }) {
  const brandMap: Record<string, string> = {
    whatsapp: 'WhatsApp',
    telegram: 'Telegram',
    line: 'LINE',
  }
  const parts = template.split(/\{(whatsapp|telegram|line)\}/g)
  return (
    <>
      {parts.map((part, i) =>
        brandMap[part] ? (
          <span key={i} className="text-foreground font-medium">
            {brandMap[part]}
          </span>
        ) : (
          part
        )
      )}
    </>
  )
}

export function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.hero
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden grid-bg">
      {/* Background ambient blobs */}
      <div
        aria-hidden
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f6, #6366f1)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #8b5cf6, #6366f1)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-sm font-medium text-primary">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          {t.badge}
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance leading-[1.1]">
          {t.headline1}{" "}
          <span className="gradient-text">{t.headlineAccent}</span>
          <br />
          {t.headline2}
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
          <HeroSubtitle template={t.subtitle} />
        </p>

        {/* Hero Mockup */}
        <div className="w-full mt-8 relative">
          <div className="relative rounded-2xl overflow-hidden glass-card glow-blue pulse-glow-anim border border-primary/20 dark:border-primary/20">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border/40 bg-secondary/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-secondary/50 text-xs text-muted-foreground font-mono">
                  app.asair.io / inbox
                </div>
              </div>
            </div>

            {/* Mock dashboard content */}
            <div className="aspect-video relative overflow-hidden bg-background/80">
              <div className="absolute inset-0 grid grid-cols-4 divide-x divide-border/30">
                {/* Sidebar */}
                <div className="col-span-1 p-4 flex flex-col gap-3 bg-card/50">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Channels</div>
                  {[
                    { label: "WhatsApp", count: 24, color: "bg-green-500" },
                    { label: "Telegram", count: 18, color: "bg-blue-400" },
                    { label: "LINE", count: 9, color: "bg-emerald-400" },
                    { label: "All Inbox", count: 51, color: "bg-primary" },
                  ].map((ch) => (
                    <div
                      key={ch.label}
                      className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-2.5 h-2.5 rounded-full ${ch.color}`} />
                        <span className="text-xs text-muted-foreground group-hover:text-foreground">{ch.label}</span>
                      </div>
                      <span className="text-xs font-mono text-primary font-semibold">{ch.count}</span>
                    </div>
                  ))}
                  <div className="mt-auto pt-4 border-t border-border/30">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
                      <Bot className="w-3 h-3 text-primary" />
                      <span className="text-xs text-primary font-medium">AI Auto-Reply ON</span>
                    </div>
                  </div>
                </div>

                {/* Chat list */}
                <div className="col-span-1 flex flex-col divide-y divide-border/20">
                  <div className="p-3 text-xs font-semibold text-muted-foreground bg-secondary/20 uppercase tracking-wider">Active Chats</div>
                  {[
                    { name: "Sarah K.", msg: "Need help with my order...", time: "2m", unread: 2, channel: "WA" },
                    { name: "John D.", msg: "Can you check the status?", time: "5m", unread: 0, channel: "TG" },
                    { name: "Li Wei", msg: "感谢您的回复，请问...", time: "8m", unread: 1, channel: "LN" },
                    { name: "Priya R.", msg: "The payment failed again", time: "12m", unread: 3, channel: "WA" },
                  ].map((chat) => (
                    <div key={chat.name} className="p-3 hover:bg-secondary/30 cursor-pointer transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">
                            {chat.name[0]}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-semibold text-foreground truncate">{chat.name}</span>
                              <span className="text-[10px] px-1 rounded bg-secondary text-muted-foreground font-mono">{chat.channel}</span>
                            </div>
                            <p className="text-[11px] text-muted-foreground truncate">{chat.msg}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1 flex-shrink-0">
                          <span className="text-[10px] text-muted-foreground">{chat.time}</span>
                          {chat.unread > 0 && (
                            <span className="w-4 h-4 rounded-full gradient-btn text-white text-[9px] flex items-center justify-center font-bold">
                              {chat.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat window */}
                <div className="col-span-2 flex flex-col">
                  <div className="p-3 border-b border-border/30 bg-secondary/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center text-xs font-bold text-green-400">S</div>
                      <div>
                        <div className="text-xs font-semibold text-foreground">Sarah K.</div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                          <span className="text-[10px] text-muted-foreground">Online · WhatsApp</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-primary/10 border border-primary/20">
                      <Bot className="w-3 h-3 text-primary" />
                      <span className="text-[10px] text-primary font-medium">AI Handling</span>
                    </div>
                  </div>
                  <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
                    <div className="flex justify-end">
                      <div className="max-w-[70%] px-3 py-2 rounded-2xl rounded-tr-sm bg-secondary/60 text-[11px] text-foreground">
                        Hi, I need help with my order #1234. It hasn&apos;t arrived yet.
                      </div>
                    </div>
                    <div className="flex justify-start gap-2 items-end">
                      <div className="w-5 h-5 rounded-full gradient-btn flex items-center justify-center flex-shrink-0">
                        <Bot className="w-3 h-3 text-white" />
                      </div>
                      <div className="max-w-[70%] px-3 py-2 rounded-2xl rounded-tl-sm bg-primary/15 border border-primary/20 text-[11px] text-foreground">
                        Hello Sarah! I can see your order #1234 is currently in transit. Estimated delivery: Tomorrow by 6 PM. 📦
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="max-w-[70%] px-3 py-2 rounded-2xl rounded-tr-sm bg-secondary/60 text-[11px] text-foreground">
                        Great, thank you!
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-auto">
                      <div className="flex-1 px-3 py-2 rounded-xl bg-secondary/40 border border-border/40 text-[11px] text-muted-foreground flex items-center gap-2">
                        <MessageSquare className="w-3 h-3 flex-shrink-0" />
                        <span>AI is composing a reply...</span>
                        <div className="flex gap-0.5 ml-auto">
                          <div className="w-1 h-1 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                          <div className="w-1 h-1 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                          <div className="w-1 h-1 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating stat pills */}
          <div className="absolute -left-4 top-1/3 hidden lg:flex glass border border-border/40 rounded-xl px-4 py-2.5 shadow-xl items-center gap-3 float-anim">
            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <div className="text-xs font-bold text-foreground">98.7%</div>
              <div className="text-[10px] text-muted-foreground">CSAT Score</div>
            </div>
          </div>
          <div className="absolute -right-4 top-1/4 hidden lg:flex glass border border-border/40 rounded-xl px-4 py-2.5 shadow-xl items-center gap-3 float-anim" style={{ animationDelay: "2s" }}>
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-xs font-bold text-foreground">3.2s avg</div>
              <div className="text-[10px] text-muted-foreground">AI Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
