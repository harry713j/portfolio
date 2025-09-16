"use client";

import { useTheme } from "@/context/ThemeContext";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Switch } from "@radix-ui/themes";

export function ThemeSwitcher() {
  const { toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 ">
      <SunIcon className="w-5 h-5 text-yellow-500 dark:text-yellow-300 " />
      <Switch
        size={{ initial: "3" }}
        color="gray"
        variant="soft"
        onClick={toggleTheme}
        style={{
          cursor: "pointer",
        }}
      />
      <MoonIcon className="w-5 h-5 text-gray dark:text-gray-300 " />
    </div>
  );
}
