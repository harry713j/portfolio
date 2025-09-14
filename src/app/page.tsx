"use client";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="relative flex flex-col gap-28 px-[28rem] pb-10 pt-[6rem] min-h-screen">
      <Header />
      <HeroSection />
      <Projects />
      <Skills />
    </div>
  );
}
