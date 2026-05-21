import { Section, SectionTitle } from "./Section";
import { problems } from "@/data/problems";

export function Problem() {
  return (
    <Section id="problema">
      <SectionTitle
        eyebrow="O problema"
        title={
          <>
            O problema não é falta de peça.{" "}
            <span className="text-gradient-brand">É falta de controle.</span>
          </>
        }
        subtitle="Em laboratórios e equipes técnicas, pequenos componentes somem, estoques ficam desatualizados e o tempo vai embora procurando o que deveria estar fácil de encontrar."
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {problems.map((p) => (
          <div
            key={p.title}
            className="glass rounded-xl p-6 transition hover:-translate-y-0.5 hover:border-white/15"
          >
            <div className="h-10 w-10 rounded-lg glass-purple flex items-center justify-center">
              <p.icon className="h-5 w-5" style={{ color: "#c084d8" }} />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">{p.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
