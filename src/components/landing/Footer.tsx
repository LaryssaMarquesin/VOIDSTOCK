import { Logo } from "./Logo";
import { safeOpen } from "@/lib/safe-open";
import {
  MVP_WEB_URL,
  APK_DOWNLOAD_URL,
  GOOGLE_FORMS_URL,
  GITHUB_URL,
  API_SWAGGER_URL,
  CONTACT_EMAIL,
} from "@/config/links";

export function Footer() {
  const links = [
    { label: "Aplicação", url: MVP_WEB_URL, name: "MVP" },
    { label: "APK", url: APK_DOWNLOAD_URL, name: "APK" },
    { label: "Pesquisa", url: GOOGLE_FORMS_URL, name: "Pesquisa" },
    { label: "GitHub", url: GITHUB_URL, name: "GitHub" },
    { label: "API", url: API_SWAGGER_URL, name: "API" },
    { label: "Contato", url: CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : "", name: "Contato" },
  ];

  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 grid gap-8 md:grid-cols-[1.2fr_1fr] items-start">
        <div>
          <Logo className="h-9" />
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            Sistema inteligente de gestão de estoque para laboratórios e equipes técnicas.
          </p>
        </div>
        <nav className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-6 text-sm">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => safeOpen(l.url, l.name)}
              className="text-muted-foreground hover:text-foreground transition text-left"
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} VoidStock. Todos os direitos reservados.</span>
          <span>Estoque inteligente para equipes técnicas.</span>
        </div>
      </div>
    </footer>
  );
}
