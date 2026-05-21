import { Section, SectionTitle } from "./Section";
import { ExternalLink, Download, FileText } from "lucide-react";
import { safeOpen } from "@/lib/safe-open";
import { MVP_WEB_URL, APK_DOWNLOAD_URL, GOOGLE_FORMS_URL } from "@/config/links";

export function MVP() {
  return (
    <Section id="mvp">
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1d0e2c] via-[#1a0d24] to-[#2a0f1a] px-6 py-14 sm:px-12 sm:py-20 text-center">
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 30% 0%, rgba(126,42,144,0.35), transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(242,103,34,0.25), transparent 60%)",
          }}
        />
        <div className="relative">
          <SectionTitle
            eyebrow="Experimente"
            title={
              <>
                Experimente o <span className="text-gradient-brand">VoidStock.</span>
              </>
            }
            subtitle="Teste a proposta da solução e ajude a validar uma nova forma de organizar estoques técnicos."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => safeOpen(MVP_WEB_URL, "Demonstração")}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:opacity-95 transition"
            >
              <ExternalLink className="h-4 w-4" /> Acessar demonstração
            </button>
            <button
              onClick={() => safeOpen(APK_DOWNLOAD_URL, "APK")}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/10 transition"
            >
              <Download className="h-4 w-4" /> Baixar APK
            </button>
            <button
              onClick={() => safeOpen(GOOGLE_FORMS_URL, "Pesquisa")}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white/10 transition"
            >
              <FileText className="h-4 w-4" /> Responder pesquisa
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
