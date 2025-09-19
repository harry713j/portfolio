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

type Skill = {
  category: "language" | "framework" | "database" | "others";
  name: string;
};

type MailPayloadType = {
  name: string;
  email: string;
  message: string;
};

/** Backend */

interface APIResponse {
  success: boolean;
  message: string;
}
