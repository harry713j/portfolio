import { cn } from "@/lib/utils";
import React from "react";

interface BackgroundHeaderProps extends React.HTMLAttributes<"h1"> {
  className?: string;
  color?: string;
  children: React.ReactNode;
}

export function BackgroundHeader({
  className,
  color,
  children,
}: BackgroundHeaderProps) {
  return (
    <div className="relative inline-block w-fit ">
      <h1
        className={cn(
          "text-3xl z-10 font-fira-mono font-bold text-slate-700 dark:text-slate-200",
          className
        )}
      >
        {children}
      </h1>
      <span
        className="absolute inline-block bottom-0 left-2 w-full h-4 rounded-sm -z-10  bg-mint dark:bg-gray opacity-70"
        style={{
          backgroundColor: color,
        }}
      />
    </div>
  );
}
