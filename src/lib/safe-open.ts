import { toast } from "sonner";

export function safeOpen(url: string | undefined | null, label?: string) {
  if (!url || url.trim() === "") {
    toast.info("Este link ainda está em preparação para a entrega.", {
      description: label ? `Recurso: ${label}` : undefined,
    });
    return;
  }
  if (url.startsWith("mailto:") || url.startsWith("tel:")) {
    window.location.href = url;
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}
