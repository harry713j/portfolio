"use client";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col min-[320px]:gap-8 gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-28">
        <Navbar />
        <HeroSection />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </Container>
  );
}
