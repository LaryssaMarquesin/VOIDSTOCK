import { Section, SectionTitle } from "./Section";
import { features } from "@/data/features";

export function Features() {
  return (
    <Section id="funcionalidades">
      <SectionTitle
        eyebrow="Funcionalidades"
        title={
          <>
            Tudo que o laboratório precisa para{" "}
            <span className="text-gradient-brand">sair do controle manual.</span>
          </>
        }
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group glass rounded-xl p-5 transition hover:-translate-y-0.5 hover:border-brand-orange/30"
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-brand/0 glass-purple flex items-center justify-center transition group-hover:scale-105">
              <f.icon className="h-5 w-5" style={{ color: "#c084d8" }} />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-foreground flex items-center gap-2">
              {f.title}
              {f.experimental && (
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                  EXPERIMENTAL
                </span>
              )}
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
