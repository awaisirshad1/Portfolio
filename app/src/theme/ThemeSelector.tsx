import { Component, createSignal, Show } from "solid-js";
import "./themeselector.css"
import { useTheme } from "./useTheme";

export const ThemeSelector: Component = () => {
  // custom hook
  const { theme, setTheme } = useTheme();

  const [slider, setSlider] = createSignal(theme()==="dark");
  const toggle = () => {
    theme() === "dark" ? setTheme("light") : setTheme("dark");
    setSlider(!slider());
  }

  return (
    <div class="theme-selector-container">
      <button class="theme-button" onClick={toggle}>
        <div class={`circle ${slider() ? "slide" : ""}`}>
        </div>
      </button>
    </div>
  );
};
