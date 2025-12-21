import { createContext, useEffect, useState } from "react";
import { translations, DEFAULT_LANGUAGE, supportedLanguages } from "./translations";

type LanguageContextType = {
    t: (key: string) => any;
    i18n: {
        language: string;
        changeLanguage: (lang: string) => void;
    };
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

const detectLanguage = () => {
    if (typeof window === "undefined") return DEFAULT_LANGUAGE;

    const saved = localStorage.getItem("lang");
    if (saved && supportedLanguages.includes(saved)) return saved;

    const browser = navigator.language.split("-")[0];
    if (supportedLanguages.includes(browser)) return browser;

    return DEFAULT_LANGUAGE;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

    useEffect(() => {
        setLanguage(detectLanguage());
    }, []);

    const t = (key: string) =>
        key.split(".").reduce((acc: any, part) => acc?.[part], translations[language]) ?? key;

    const changeLanguage = (lang: string) => {
        setLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    return (
        <LanguageContext.Provider value={{ t, i18n: { language, changeLanguage } }}>
            {children}
        </LanguageContext.Provider>
    );
};
