"use client";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <Container>
      <Header />
      <HeroSection />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </Container>
  );
}
