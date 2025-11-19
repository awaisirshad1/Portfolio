import { Component } from "solid-js";
import { Theme } from "../types/theme";
import { useTheme } from "./useTheme";

export const ThemeSelector: Component = () => {
  const { theme, setTheme } = useTheme();

  return (
    <select value={theme()} onChange={(e) => setTheme(e.currentTarget.value as Theme)}>
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
};
