import { createContext, useEffect, useState } from "react";
import {
    translations,
    DEFAULT_LANGUAGE,
    type Language,
    isLanguage,
    TranslationTree
} from "./translations";

type LanguageContextType = {
    t: (key: string) => string;
    i18n: {
        language: Language;
        changeLanguage: (lang: Language) => void;
    };
    translations: TranslationTree;
};


export const LanguageContext = createContext<LanguageContextType | null>(null);

/**
 * Detect initial language (SSR-safe)
 */
const detectLanguage = (): Language => {
    if (typeof window === "undefined") return DEFAULT_LANGUAGE;

    const saved = localStorage.getItem("lang");
    if (saved && isLanguage(saved)) return saved;

    const browser = navigator.language.split("-")[0];
    if (isLanguage(browser)) return browser;

    return DEFAULT_LANGUAGE;
};

export const LanguageProvider = ({
                                     children,
                                 }: {
    children: React.ReactNode;
}) => {
    const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);

    useEffect(() => {
        setLanguage(detectLanguage());
    }, []);

    /**
     * Translation function
     */
    const t = (key: string): string => {
        return (
            key
                .split(".")
                .reduce(
                    (acc: any, part) => acc?.[part],
                    translations[language]
                ) ?? key
        );
    };

    /**
     * Change language safely
     */
    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
        if (typeof window !== "undefined") {
            localStorage.setItem("lang", lang);
        }
    };

    return (
        <LanguageContext.Provider
            value={{
                t,
                i18n: { language, changeLanguage },
                translations: translations[language],
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
