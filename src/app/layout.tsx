import type { Metadata } from "next";
import { Inter, Fira_Mono } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { RadixThemeProvider } from "@/components/theme-provider";

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

// TODO: modify for better SEO
export const metadata: Metadata = {
  title: "harihara",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={`${firaMono.variable} ${inter.variable} antialiased bg-white dark:bg-gray-800`}
        >
          <RadixThemeProvider>{children}</RadixThemeProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
