"use client";

import { useState, useEffect, useSyncExternalStore } from "react";

import {
  LoadingScreen,
  Navbar,
  HeroSection,
  TechMarquee,
  MetricsBanner,
  ProcessSection,
  PhilosophySection,
  ProjectsSection,
  ServicesSection,
  FAQSection,
  CTASection,
  Footer,
} from "@/components/sections";

const emptySubscribe = () => () => {};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,  // client
    () => false, // server
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      <main className="min-h-screen bg-neutral-50 dark:bg-black text-neutral-600 dark:text-neutral-300 selection:bg-black/10 dark:selection:bg-white/20 overflow-hidden font-sans transition-colors duration-300">
        <Navbar isLoading={isLoading} />
        <HeroSection isLoading={isLoading} mounted={mounted} />
        <TechMarquee />
        <MetricsBanner />
        <ProcessSection />
        <PhilosophySection />
        <ProjectsSection />
        <ServicesSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}