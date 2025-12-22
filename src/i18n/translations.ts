import en from "../locales/en/common.json";
import es from "../locales/es/common.json";

export const DEFAULT_LANGUAGE = "en" as const;

export const supportedLanguages = ["en", "es"] as const;

export type Language = typeof supportedLanguages[number];

/**
 * Тип для JSON-переводов
 * может быть строка, массив или объект
 */
export type TranslationValue =
    | string
    | number
    | boolean
    | TranslationValue[]
    | { [key: string]: TranslationValue };

export type TranslationTree = {
    [key: string]: TranslationValue;
};

export const translations: Record<Language, TranslationTree> = {
    en,
    es,
};

export const isLanguage = (value: string): value is Language => {
    return supportedLanguages.includes(value as Language);
};
