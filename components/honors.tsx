import Image from "next/image";
import { Trophy } from "lucide-react";
import { honors } from "@/data/honors";
import { Reveal } from "@/components/reveal";

export function Honors() {
  return (
    <section id="honors" className="border-t border-outline-variant/30 pt-20 lg:pt-40">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-on-surface sm:text-4xl">
            Honors & Awards
          </h2>
        </Reveal>

        <ol className="mt-12 max-w-3xl border-l border-outline-variant/50">
          {honors.map((honor, index) => (
            <Reveal
              key={honor.title}
              as="li"
              delay={index * 0.08}
              className="relative pb-12 pl-8 last:pb-0"
            >
              <span
                className={`absolute -left-[7px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full ${
                  honor.featured ? "bg-tertiary" : "bg-primary"
                }`}
              >
                {honor.featured && <Trophy size={9} strokeWidth={2.5} className="text-bg-lowest" />}
              </span>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-secondary">
                    {honor.year}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-medium text-on-surface sm:text-xl">
                    {honor.title}
                  </h3>
                  <p className="mt-2 max-w-[60ch] text-sm leading-[1.7] text-on-surface-variant">
                    {honor.description}
                  </p>
                </div>

                {honor.image && (
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded border border-outline-variant/50 bg-surface-low sm:w-36">
                    <Image
                      src={honor.image}
                      alt={honor.imageAlt ?? honor.title}
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
