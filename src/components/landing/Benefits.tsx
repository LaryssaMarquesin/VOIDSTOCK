import { Section, SectionTitle } from "./Section";
import { benefits } from "@/data/benefits";

export function Benefits() {
  return (
    <Section>
      <SectionTitle
        eyebrow="Benefícios"
        title={
          <>
            Menos perda. Mais controle.{" "}
            <span className="text-gradient-brand">Mais tempo para construir.</span>
          </>
        }
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {benefits.map((b) => (
          <div key={b.title} className="glass rounded-xl p-6 transition hover:-translate-y-0.5">
            <div className="h-10 w-10 rounded-lg glass-orange flex items-center justify-center">
              <b.icon className="h-5 w-5 text-brand-orange" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">{b.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
