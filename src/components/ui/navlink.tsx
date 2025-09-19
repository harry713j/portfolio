"use client";

import { cn } from "@/lib/utils";
import { animate } from "motion/react";

interface NavLinkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
  offset?: number;
}

export function NavLink({ href, children, offset, className }: NavLinkProps) {
  const smoothScrollTo = (targetId: string, offset = 100) => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const targetY = el.getBoundingClientRect().top + window.scrollY - offset;

    animate(window.scrollY, targetY, {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier ease
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        const id = href.replace("#", "");
        smoothScrollTo(id, offset);
      }}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </a>
  );
}
