import { createSignal, createEffect, onCleanup } from "solid-js";
import { Theme } from "../types/theme";

// Optional: persist theme in localStorage
const THEME_KEY = "app-theme";

export function useTheme() {
  // Initialize theme from localStorage or default to 'system'
  const savedTheme = (localStorage.getItem(THEME_KEY) as Theme) || "system";
  const [theme, setThemeSignal] = createSignal<Theme>(savedTheme);

  // Helper: detect system theme
  const getSystemTheme = (): "light" | "dark" =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  // Apply theme to document
  const applyTheme = (t: Theme) => {
    let applied = t === "system" ? getSystemTheme() : t;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(applied);
  };

  // Reactively apply theme whenever it changes
  createEffect(() => {
    const t = theme();
    applyTheme(t);
    localStorage.setItem(THEME_KEY, t);

    if (t === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const listener = (e: MediaQueryListEvent) => {
        applyTheme("system");
      };
      mediaQuery.addEventListener("change", listener);
      onCleanup(() => mediaQuery.removeEventListener("change", listener));
    }
  });

  const setTheme = (t: Theme) => setThemeSignal(t);

  return { theme, setTheme };
}
