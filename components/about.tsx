import Image from "next/image";
import { MapPin, Languages as LanguagesIcon, GraduationCap } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="border-t border-outline-variant/30 pt-20 lg:pt-40">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg border border-outline-variant/50 bg-surface-low lg:max-w-none">
            <Image
              src={site.avatar.about.src}
              alt={site.avatar.about.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-on-surface sm:text-4xl">
              About
            </h2>
            <div className="mt-6 space-y-5">
              {site.aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-[65ch] text-base leading-[1.7] text-on-surface-variant">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <div className="rounded-lg border border-outline-variant/50 bg-surface-low p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-1 shrink-0 text-primary" size={20} strokeWidth={1.75} />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.1em] text-secondary">
                      Education
                    </p>
                    <p className="mt-2 font-display text-base font-medium text-on-surface">
                      {site.education.school}
                    </p>
                    <p className="mt-1 text-sm text-on-surface-variant">
                      {site.education.degree} &middot; {site.education.gpa}
                    </p>
                    <p className="mt-1 text-sm text-on-surface-variant">{site.education.period}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LanguagesIcon className="mt-1 shrink-0 text-primary" size={20} strokeWidth={1.75} />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.1em] text-secondary">
                      Languages
                    </p>
                    <ul className="mt-2 space-y-1">
                      {site.languages.map((language) => (
                        <li key={language.name} className="text-sm text-on-surface-variant">
                          <span className="text-on-surface">{language.name}</span>,{" "}
                          {language.level}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 shrink-0 text-primary" size={20} strokeWidth={1.75} />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.1em] text-secondary">
                      Location
                    </p>
                    <p className="mt-2 text-sm text-on-surface-variant">{site.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
