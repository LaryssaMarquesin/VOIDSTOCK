import { Section, SectionTitle } from "./Section";
import { ClipboardList } from "lucide-react";
import { safeOpen } from "@/lib/safe-open";
import { GOOGLE_FORMS_URL } from "@/config/links";

export function Survey() {
  return (
    <Section id="pesquisa">
      <div className="glass rounded-2xl px-6 py-12 sm:px-12 sm:py-16 text-center">
        <div className="mx-auto h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow">
          <ClipboardList className="h-6 w-6 text-white" />
        </div>
        <SectionTitle
          title={
            <span className="mt-6 block">
              Ajude a melhorar o <span className="text-gradient-brand">VoidStock.</span>
            </span>
          }
          subtitle="Sua resposta ajuda a equipe a entender se a solução faz sentido para quem vive a rotina de laboratórios, projetos técnicos e equipes acadêmicas."
        />
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => safeOpen(GOOGLE_FORMS_URL, "Pesquisa")}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:opacity-95 transition"
          >
            Responder pesquisa
          </button>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Pesquisa acadêmica. As respostas serão usadas apenas para validação do projeto.
        </p>
      </div>
    </Section>
  );
}
