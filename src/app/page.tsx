import React from "react";
import HeroSection from "@/components/hero-section";
import Header from "@/components/header";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Portfolio() {



  return (
    <div className="min-h-screen relative bg-background text-foreground">
      {/* Header with Theme Toggle */}
      <Header />

      {/* Hero Section */}
     <HeroSection />

      {/*About */}
      <About />

      {/* Experience Section */}
      <Experience  />

      {/* Technologies Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
