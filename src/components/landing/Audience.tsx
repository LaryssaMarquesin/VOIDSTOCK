import { Section, SectionTitle } from "./Section";
import { audience } from "@/data/audience";

export function Audience() {
  return (
    <Section id="para-quem">
      <SectionTitle
        eyebrow="Para quem é"
        title={
          <>
            Feito para quem precisa <span className="text-gradient-brand">encontrar rápido</span> e controlar melhor.
          </>
        }
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {audience.map((a) => (
          <div
            key={a.title}
            className="glass rounded-xl p-6 transition hover:-translate-y-0.5"
          >
            <div className="h-11 w-11 rounded-lg glass-orange flex items-center justify-center">
              <a.icon className="h-5 w-5 text-brand-orange" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{a.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.benefit}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
