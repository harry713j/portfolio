import type { Metadata } from "next";
import { Inter, Fira_Mono } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { ThemeProvider } from "@/context/ThemeContext";
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

export const metadata: Metadata = {
  title: "harihara",
  description:
    "Harihara Sethi is a Full-stack developer, proficient in making web applications as per need, specialize in server side technologies, checkout his portfolio to know more about him",
  keywords: [
    "Harihara",
    "Harihara Sethi",
    "Fullstack Developer",
    "Web Developer",
    "Backend Developer",
    "Portfolio",
    "Software Developer",
    "Software Engineer",
    "Golang",
    "TypeScript",
    "NodeJS",
  ],
  authors: { name: "Harihara Sethi" },
  openGraph: {
    title: "Harihara Sethi",
    description: "",
    url: "", // portfolio url
    siteName: "harihara",
    images: [
      {
        url: "", // Image Must be an absolute URL
        width: 400,
        height: 200,
      },
    ],
    type: "website",
  },
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
          className={`${firaMono.variable} ${inter.variable} antialiased bg-white dark:bg-neutral-800`}
        >
          <RadixThemeProvider>{children}</RadixThemeProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
