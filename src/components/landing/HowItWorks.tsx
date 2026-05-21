import { Section, SectionTitle } from "./Section";
import { steps } from "@/data/steps";

export function HowItWorks() {
  return (
    <Section id="como-funciona">
      <SectionTitle
        eyebrow="Como funciona"
        title={
          <>
            Da bagunça ao <span className="text-gradient-brand">controle</span> em poucos passos.
          </>
        }
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((s, i) => (
          <div key={s.n} className="relative glass rounded-xl p-6">
            <div className="text-xs font-mono text-brand-orange tracking-widest">{s.n}</div>
            <h3 className="mt-3 text-base font-semibold text-foreground flex flex-wrap items-center gap-2">
              {s.title}
              {s.experimental && (
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                  EXPERIMENTAL
                </span>
              )}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            {i < steps.length - 1 && (
              <div
                aria-hidden
                className="hidden lg:block absolute top-1/2 -right-2 h-px w-4 bg-gradient-to-r from-brand-orange/60 to-transparent"
              />
            )}
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        O reconhecimento por imagem faz parte da evolução prevista do produto.
      </p>
    </Section>
  );
}
