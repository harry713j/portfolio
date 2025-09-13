"use client";

import { useTheme } from "@/context/ThemeContext";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <SunIcon className="text-orange-400" />
      ) : (
        <MoonIcon className="text-white" />
      )}
    </button>
  );
}
