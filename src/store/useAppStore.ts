import { create } from "zustand";

type Theme = "light" | "dark";
type Lang = "ru" | "en";

interface AppState {
    theme: Theme;
    lang: Lang;
    toggleTheme: () => void;
    setLang: (lang: Lang) => void;
    initializeTheme: () => void;
}

export const useAppStore = create<AppState>((set) => ({
    theme: "dark",
    lang: "ru",
    
    toggleTheme: () =>
        set((state) => {
            const newTheme = state.theme === "dark" ? "light" : "dark";
            localStorage.setItem("theme", newTheme);
            document.documentElement.setAttribute("data-theme", newTheme);
            return { theme: newTheme };
        }),
    
    setLang: (lang) => {
        localStorage.setItem("lang", lang);
        set({ lang });
    },
    
    initializeTheme: () => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const savedLang = localStorage.getItem("lang") as Lang | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        
        const theme = savedTheme || (prefersDark ? "dark" : "light");
        const lang = savedLang || "ru";
        
        document.documentElement.setAttribute("data-theme", theme);
        set({ theme, lang });
    }
}));