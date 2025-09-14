"use client";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="relative px-[28rem] pb-10 pt-[6rem] min-h-screen">
      <Header />
      <HeroSection />
    </div>
  );
}
