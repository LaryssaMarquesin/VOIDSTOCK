import { Section, SectionTitle } from "./Section";
import { XCircle, CheckCircle2 } from "lucide-react";

const antes = [
  "Componentes espalhados",
  "Planilhas desatualizadas",
  "Compras repetidas",
  "Histórico perdido",
  "Tempo desperdiçado",
];
const depois = [
  "Estoque centralizado",
  "Localização rápida",
  "Movimentações registradas",
  "Alertas de itens críticos",
  "Visão clara do inventário",
];

export function BeforeAfter() {
  return (
    <Section>
      <SectionTitle
        eyebrow="O que muda na rotina"
        title={
          <>
            Uma rotina mais simples para quem{" "}
            <span className="text-gradient-brand">cuida do estoque.</span>
          </>
        }
      />

      <div className="mt-14 grid md:grid-cols-2 gap-5">
        <div className="rounded-2xl p-7 border border-white/10 bg-white/[0.02]">
          <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Antes
          </div>
          <ul className="mt-5 space-y-3">
            {antes.map((a) => (
              <li key={a} className="flex items-start gap-3 text-foreground/90">
                <XCircle className="h-5 w-5 text-rose-400/80 mt-0.5 shrink-0" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl p-7 glass-purple shadow-glow">
          <div className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Depois
          </div>
          <ul className="mt-5 space-y-3">
            {depois.map((a) => (
              <li key={a} className="flex items-start gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 text-brand-orange mt-0.5 shrink-0" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
