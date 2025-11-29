import { createSignal, createEffect, onCleanup } from "solid-js";
import { Theme } from "../types/theme";

const THEME_KEY = "app-theme";

export function useTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;

  const getSysTheme = (): Theme => 
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" ;

  const initialTheme = savedTheme || getSysTheme();
  const [theme, setThemeSignal] = createSignal<Theme>(initialTheme);

  createEffect(() => {
    const t = theme();
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(t);
    localStorage.setItem(THEME_KEY, t);
  });

  if (!savedTheme) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => {
      setThemeSignal(getSysTheme());
    };
    mediaQuery.addEventListener("change", listener);
    onCleanup(() => mediaQuery.removeEventListener("change", listener));
  }

  const setTheme = (t: Theme) => {
    localStorage.setItem(THEME_KEY, t);
    setThemeSignal(t);
  };

  return { theme, setTheme };
}

