// Centralizado para edição rápida. Vazio = botão mostra toast "em preparação".
const env = (import.meta as any).env ?? {};

export const MVP_WEB_URL: string = env.VITE_MVP_WEB_URL ?? "https://void-stock-frontend.vercel.app/";
export const APK_DOWNLOAD_URL: string = env.VITE_APK_DOWNLOAD_URL ?? "https://github.com/LaryssaMarquesin/VOIDSTOCK";
export const GOOGLE_FORMS_URL: string = env.VITE_GOOGLE_FORMS_URL ?? "https://docs.google.com/forms/d/e/1FAIpQLSf3q55JXqREqZt3I9XYCKj2Z-_l9qMuIWCImZi6BQBCwgTFLg/viewform";
export const GITHUB_URL: string = env.VITE_GITHUB_URL ?? "https://github.com/hrqric/VOID.VSS";
export const API_SWAGGER_URL: string = env.VITE_API_SWAGGER_URL ?? "https://github.com/hrqric/VOID.VSS/tree/main";
export const CONTACT_EMAIL: string = env.VITE_CONTACT_EMAIL ?? "";
