import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/reveal";

const socials = [
  { label: "GitHub", href: site.github.url, icon: Github },
  { label: "LinkedIn", href: site.linkedin.url, icon: Linkedin },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-outline-variant/30 pt-20 pb-16 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-balance font-display text-3xl font-semibold leading-[1.2] tracking-[-0.02em] text-on-surface sm:text-4xl">
            Open to internships, collaborations, and conversations about immersive tech.
          </h2>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-sm text-on-surface transition-colors hover:text-primary sm:text-base"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phoneHref}`}
              className="font-mono text-sm text-on-surface-variant transition-colors hover:text-primary sm:text-base"
            >
              {site.phone}
            </a>
            <span className="text-sm text-on-surface-variant">{site.location}</span>
          </div>

          <div className="mt-8 flex items-center gap-5">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="text-on-surface-variant transition-colors hover:text-primary"
              >
                <Icon size={20} strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-4 border-t border-outline-variant/30 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-on-surface-variant">
            {site.name}
          </p>
          <p className="font-mono text-xs text-on-surface-variant/70">
            &copy; 2026 {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
