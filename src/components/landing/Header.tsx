import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { safeOpen } from "@/lib/safe-open";
import { MVP_WEB_URL } from "@/config/links";

const nav = [
  { href: "#problema", label: "Problema" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#mvp", label: "Teste o MVP" },
  { href: "#pesquisa", label: "Pesquisa" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" aria-label="VoidStock início" className="flex items-center">
          <Logo className="h-8 sm:h-9" />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => safeOpen(MVP_WEB_URL, "MVP")}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-glow hover:opacity-95 transition"
          >
            Testar MVP
          </button>
          <button
            className="lg:hidden p-2 rounded-md text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl">
          <div className="px-5 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-foreground hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                safeOpen(MVP_WEB_URL, "MVP");
              }}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-brand px-4 py-3 text-sm font-semibold text-white"
            >
              Testar MVP
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
