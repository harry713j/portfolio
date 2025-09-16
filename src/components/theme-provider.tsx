"use client";
import { useTheme } from "@/context/ThemeContext";
import { Theme } from "@radix-ui/themes";
import React from "react";

export function RadixThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <Theme accentColor="gray" appearance={theme}>
      {children}
    </Theme>
  );
}
