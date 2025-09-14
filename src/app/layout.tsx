import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Theme } from "@radix-ui/themes";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["600", "700"],
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
          className={`${geistMono.variable} ${inter.variable} antialiased bg-white dark:bg-gray-800`}
        >
          <Theme>{children}</Theme>
        </body>
      </ThemeProvider>
    </html>
  );
}
