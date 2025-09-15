/** Theme context */
type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

/** Project */
type Project = {
  name: string;
  description: string;
  src?: string; // image link
  code: string;
  url?: string; // website link if present
  techStack: Array<string>;
};
