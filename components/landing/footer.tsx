import { Zap } from "lucide-react"
import type { Dictionary } from "@/app/[lang]/dictionaries"

export function Footer({ dict }: { dict: Dictionary }) {
  const t = dict.footer

  const columns = [
    {
      title: t.columns.product,
      links: [
        { label: t.links.features, href: "#features" },
        { label: t.links.services, href: "#services" },
        { label: t.links.journey, href: "#journey" },
        { label: t.links.roadmap, href: "#" },
      ],
    },
    {
      title: t.columns.resources,
      links: [
        { label: t.links.apiDocs, href: "#" },
        { label: t.links.developerGuide, href: "#" },
        { label: t.links.blog, href: "#" },
        { label: t.links.statusPage, href: "#" },
        { label: t.links.community, href: "#" },
      ],
    },
    {
      title: t.columns.company,
      links: [
        { label: t.links.aboutUs, href: "#" },
        { label: t.links.careers, href: "#" },
        { label: t.links.pressKit, href: "#" },
        { label: t.links.partners, href: "#" },
        { label: t.links.contactLink, href: "#" },
      ],
    },
  ]

  return (
    <footer id="footer" className="border-t border-border/40 dark:border-border/40 bg-card/20 dark:bg-card/20 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 rounded-lg gradient-btn flex items-center justify-center shadow-lg">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight gradient-text">ASAIR</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
              {t.description}
            </p>
            <div className="flex gap-3 mt-1">
              {["X", "LI", "GH"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-secondary/60 dark:bg-secondary/60 border border-border/40 dark:border-border/40 flex items-center justify-center text-xs font-bold text-muted-foreground hover:text-foreground dark:hover:text-foreground hover:border-border/80 dark:hover:border-border/80 transition-colors"
                  aria-label={s}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-foreground dark:text-foreground uppercase tracking-widest">{col.title}</h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-foreground dark:text-foreground uppercase tracking-widest">{t.columns.contact}</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://wa.me/6584374880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground transition-colors duration-200"
                >
                  WhatsApp: +65 8437 4880
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Singapore</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/30 dark:border-border/30">
          <p className="text-sm text-muted-foreground dark:text-muted-foreground">{t.copyright}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground dark:text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-green-400 dark:bg-green-400 animate-pulse" />
            {t.systemStatus}
          </div>
        </div>
      </div>
    </footer>
  )
}
