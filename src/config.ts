// URL base do sistema (front do produto). Defina VITE_APP_URL no deploy; em dev aponta para o Next local.
export const APP_URL = (import.meta.env.VITE_APP_URL as string | undefined) ?? "http://localhost:3000";
export const SIGNUP_URL = `${APP_URL}/pt-BR/cadastro`;
export const LOGIN_URL = `${APP_URL}/pt-BR/entrar`;
export const DEMO_URL = `${APP_URL}/pt-BR/demo`;

