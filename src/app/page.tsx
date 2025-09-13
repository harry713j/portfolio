import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/themeSwitcher";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <h1 className="text-slate-700 dark:text-white">Harihara i am, hmm</h1>
      <ThemeSwitcher />
    </div>
  );
}
