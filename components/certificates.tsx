import Image from "next/image";
import { certificates } from "@/data/certificates";
import { Reveal } from "@/components/reveal";

export function Certificates() {
  return (
    <section id="certificates" className="border-t border-outline-variant/30 pt-20 lg:pt-40">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-on-surface sm:text-4xl">
            Certificates
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <Reveal key={certificate.title} delay={index * 0.06}>
              <div className="h-full overflow-hidden rounded-lg border border-outline-variant/50 bg-surface-low">
                <div
                  className="relative w-full bg-bg-lowest"
                  style={{ aspectRatio: certificate.aspect }}
                >
                  <Image
                    src={certificate.image}
                    alt={certificate.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain p-3"
                  />
                </div>
                <div className="border-t border-outline-variant/40 p-5">
                  <h3 className="font-display text-base font-medium text-on-surface">
                    {certificate.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.08em] text-secondary">
                    {certificate.issuer}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-on-surface-variant">
                    {certificate.date}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
