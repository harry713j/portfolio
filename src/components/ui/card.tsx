"use client";

import { cn } from "@/lib/utils";
import { motion, type MotionProps } from "motion/react";
import * as React from "react";

interface CardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <motion.div
      className={cn(
        "relative flex w-full overflow-hidden rounded-xl p-[1.5px] cursor-pointer",
        className
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...props}
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute animate-rotate inset-0 h-full w-full rounded-xl"
        style={{
          background:
            "conic-gradient(from 0deg, #E93D82, #8B5CF6, #06B6D4, #E93D82)",
        }}
      />

      {/* Inner card body */}
      <motion.div
        className="relative z-10 w-full rounded-[0.60rem] bg-white dark:bg-slate-900 p-6 shadow-2xl"
        whileHover={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
