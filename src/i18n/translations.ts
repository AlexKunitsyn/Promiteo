import en from "../locales/en/common.json";
import es from "../locales/es/common.json";

export const DEFAULT_LANGUAGE = "en" as const;

export const supportedLanguages = ["en", "es"] as const;

export type Language = typeof supportedLanguages[number];

export const translations: Record<Language, Record<string, string>> = {
    en,
    es,
};

/**
 * Type guard for language
 * Проверяет, что строка — поддерживаемый язык
 */
export const isLanguage = (value: string): value is Language => {
    return supportedLanguages.includes(value as Language);
};