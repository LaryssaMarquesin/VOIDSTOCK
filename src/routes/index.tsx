import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Audience } from "@/components/landing/Audience";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { Features } from "@/components/landing/Features";
import { Benefits } from "@/components/landing/Benefits";
import { MVP } from "@/components/landing/MVP";
import { Survey } from "@/components/landing/Survey";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VoidStock | Estoque Inteligente para Laboratórios" },
      {
        name: "description",
        content:
          "VoidStock é uma solução inteligente para organizar, localizar e controlar componentes técnicos em laboratórios, equipes acadêmicas e ambientes de engenharia.",
      },
      { property: "og:title", content: "VoidStock | Estoque Inteligente para Laboratórios" },
      {
        property: "og:description",
        content:
          "Organize, localize e controle componentes técnicos com uma experiência simples, visual e preparada para reconhecimento inteligente por imagem.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#7e2a90" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Problem />
      <Audience />
      <HowItWorks />
      <BeforeAfter />
      <Features />
      <Benefits />
      <MVP />
      <Survey />
      <Footer />
    </main>
  );
}
