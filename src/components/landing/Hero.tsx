import { ArrowRight, MapPin, CheckCircle2, Boxes, AlertTriangle, Activity, Timer } from "lucide-react";
import { safeOpen } from "@/lib/safe-open";
import { MVP_WEB_URL, GOOGLE_FORMS_URL } from "@/config/links";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 10%, rgba(126,42,144,0.35), transparent 60%), radial-gradient(ellipse 40% 35% at 85% 20%, rgba(242,103,34,0.22), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass-purple px-3 py-1 text-xs font-medium text-foreground/90">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            Estoque inteligente para equipes técnicas
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Pare de perder componentes{" "}
            <span className="text-gradient-brand">no laboratório.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
            O VoidStock ajuda equipes técnicas a registrar, localizar e controlar
            itens de estoque com mais rapidez, organização e rastreabilidade.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => safeOpen(MVP_WEB_URL, "MVP")}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:opacity-95 transition"
            >
              Testar MVP <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => safeOpen(GOOGLE_FORMS_URL, "Pesquisa")}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/10 transition"
            >
              Responder pesquisa
            </button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["Controle de estoque", "Localização rápida", "Registro de movimentações"].map((m) => (
              <li key={m} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-orange" />
                {m}
              </li>
            ))}
          </ul>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}

function DashboardMockup() {
  const stats = [
    { icon: Boxes, label: "Itens cadastrados", value: "248", tone: "purple" },
    { icon: AlertTriangle, label: "Itens críticos", value: "12", tone: "orange" },
    { icon: Activity, label: "Movimentações hoje", value: "36", tone: "purple" },
    { icon: Timer, label: "Tempo médio de localização", value: "18s", tone: "orange" },
  ];

  return (
    <div className="relative animate-fade-up [animation-delay:120ms]">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-3xl opacity-60 blur-3xl"
        style={{ background: "var(--gradient-brand-soft)" }}
      />
      <div className="glass rounded-2xl p-5 sm:p-6 shadow-glow">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
            <span className="text-sm text-muted-foreground">Painel VoidStock</span>
          </div>
          <span className="text-xs text-muted-foreground">ao vivo</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`rounded-xl p-4 ${s.tone === "purple" ? "glass-purple" : "glass-orange"}`}
            >
              <div className="flex items-center justify-between">
                <s.icon className={`h-4 w-4 ${s.tone === "purple" ? "text-brand-purple" : "text-brand-orange"}`} style={s.tone === "purple" ? { color: "#c084d8" } : undefined} />
              </div>
              <div className="mt-2 text-2xl font-bold tracking-tight text-foreground">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl glass p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Item destacado</div>
              <div className="mt-1 text-base font-semibold text-foreground">Sensor ultrassônico HC SR04</div>
              <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-brand-orange" /> Gaveta B3
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Disponível
                </span>
              </div>
            </div>
            <span className="rounded-md bg-gradient-brand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
              Estoque
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
