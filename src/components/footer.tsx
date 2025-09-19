"use client";
import { timeTransformation } from "@/utils";
import { useEffect, useState } from "react";

export function Footer() {
  const [currentDate, setCurrentDate] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setCurrentDate(date.toDateString());
      setCurrentTime(timeTransformation(date.toTimeString()));
    };
    updateTime();
    const intervalId = setInterval(updateTime, 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="flex items-center justify-between">
      <p className="text-xs md:text-sm font-inter text-slate-600/60 dark:text-slate-100/60 italic">
        Developed By{" "}
        <a
          href="https://github.com/harry713j"
          target="_blank"
          className="underline decoration-2 underline-offset-1 text-blue-400 decoration-mint dark:text-blue-300 dark:decoration-gray"
        >
          Harihara Sethi
        </a>
      </p>
      <p className="font-inter italic text-xs md:text-sm text-slate-700/80 dark:text-slate-200 underline underline-offset-2 decoration-2 decoration-mint dark:decoration-gray ">
        {currentDate && currentTime
          ? `${currentDate} ${currentTime}`
          : "--:-- IST"}
      </p>
    </footer>
  );
}
