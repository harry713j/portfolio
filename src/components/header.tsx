"use client";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./themeSwitcher";
import { timeTransformation } from "@/utils";

export function Header() {
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
    <nav className="mb-20 w-full flex items-center">
      <div className="flex items-center gap-4 ml-auto">
        <p className="text-sm text-slate-700 dark:text-slate-200 ">
          {currentDate && currentTime
            ? `${currentDate} ${currentTime}`
            : "--:-- IST"}
        </p>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
