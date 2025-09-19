"use client";
import { cn } from "@/lib/utils";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { IconButton, Separator } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { NavLink } from "./ui/navlink";
import { useActiveSection } from "@/hooks/use-active-section";
import { useTheme } from "@/context/ThemeContext";

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

const sections = ["home", "work", "skill", "contact"];

export function Navbar({ className, ...props }: NavbarProps) {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const activeId = useActiveSection(sections);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const THRESHOLD = 20; // px to start blur
    let ticking = false;

    const getScrollTop = () =>
      document.scrollingElement?.scrollTop ??
      window.pageYOffset ??
      document.documentElement.scrollTop ??
      0;

    const rafCallback = () => {
      const top = getScrollTop();
      setScrolled(top > THRESHOLD);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(rafCallback);
      }
    };

    // helper for navigation events (anchor/hash)
    const onHashChange = () => setTimeout(handleScroll, 50);

    // initial check after mount
    handleScroll();

    // listen on window + document (covers most cases)
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });

    // handle anchor jumps and history navigation
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("popstate", handleScroll);

    // if user clicks anchor links, re-check after short delay (smooth scroll)
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor =
        target.closest &&
        ((target as HTMLElement).closest(
          "a[href^='#']"
        ) as HTMLAnchorElement | null);
      if (anchor) setTimeout(handleScroll, 50);
    };
    document.addEventListener("click", onDocClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("popstate", handleScroll);
      document.removeEventListener("click", onDocClick);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full flex items-center transition-all duration-300 top-0 left-0 right-0 z-20 px-8 pt-4 pb-2 md:px-16 md:pt-6 md:pb-3 lg:px-24 lg:pt-8 lg:pb-4 border-b ",
        scrolled
          ? "backdrop-blur-xl bg-white/70 border-b border-neutral-200 shadow-sm dark:bg-neutral-800/60 dark:border-neutral-700/40"
          : "bg-white border-transparent dark:bg-[#111111]",
        className
      )}
      {...props}
    >
      <div className="mx-auto md:mr-0 md:ml-auto flex items-center min-[320px]:gap-3 gap-5 sm:gap-6">
        <div className="flex items-center min-[320px]:gap-3 gap-5 sm:gap-6 font-fira-mono font-normal text-slate-600/80 ">
          {sections.map((section) => (
            <NavLink
              key={`${section}`}
              href={`#${section}`}
              className={cn(
                "transition-colors duration-200 md:text-base text-sm",
                activeId === section
                  ? "text-slate-600 dark:text-slate-200 underline underline-offset-4"
                  : "text-slate-600/60 hover:text-slate-600 dark:text-slate-200/60 dark:hover:text-slate-200"
              )}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </NavLink>
          ))}
        </div>
        <Separator
          orientation="vertical"
          size={{ initial: "1", sm: "2" }}
          color="gray"
        />
        <div className="flex items-center gap-6 font-fira-mono font-normal ">
          <IconButton
            variant="ghost"
            size={{ initial: "2", sm: "3", md: "4" }}
            style={{
              cursor: "pointer",
            }}
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5 text-yellow-500" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray" />
            )}
          </IconButton>
        </div>
      </div>
    </nav>
  );
}
