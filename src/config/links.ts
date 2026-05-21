// Centralizado para edição rápida. Vazio = botão mostra toast "em preparação".
const env = (import.meta as any).env ?? {};

export const MVP_WEB_URL: string = env.VITE_MVP_WEB_URL ?? "";
export const APK_DOWNLOAD_URL: string = env.VITE_APK_DOWNLOAD_URL ?? "";
export const GOOGLE_FORMS_URL: string = env.VITE_GOOGLE_FORMS_URL ?? "";
export const GITHUB_URL: string = env.VITE_GITHUB_URL ?? "";
export const API_SWAGGER_URL: string = env.VITE_API_SWAGGER_URL ?? "";
export const CONTACT_EMAIL: string = env.VITE_CONTACT_EMAIL ?? "";
