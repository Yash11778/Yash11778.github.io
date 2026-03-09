"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ArrowRight } from "lucide-react";
import GradientBlinds from "@/components/ui/gradient-blinds";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { WHATSAPP_LINK } from "@/lib/constants";

interface HeroSectionProps {
  isLoading: boolean;
  mounted: boolean;
}

export default function HeroSection({ isLoading, mounted }: HeroSectionProps) {
  const { theme } = useTheme();

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-neutral-50 dark:bg-black px-4 pt-20 transition-colors duration-300">
      {/* Dynamic Background: Ripple in Light Mode, Blinds in Dark Mode */}
      <div className="absolute inset-0 pointer-events-auto">
        {mounted && theme === "light" && (
          <div className="absolute inset-0 opacity-70">
            <BackgroundRippleEffect />
          </div>
        )}

        {mounted && theme === "dark" && (
          <GradientBlinds
            gradientColors={["#000000", "#0a0a0a", "#171717", "#000000"]}
            angle={-15}
            noise={0.4}
            blindCount={12}
            blindMinWidth={60}
            spotlightRadius={0.7}
            spotlightSoftness={0.9}
            spotlightOpacity={0.4}
            mouseDampening={0.15}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="normal"
          />
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isLoading ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center mt-12 sm:mt-20 pointer-events-none w-full"
      >
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/80 dark:bg-black/50 border border-neutral-200 dark:border-white/10 text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400 mb-6 uppercase tracking-widest backdrop-blur-md shadow-sm text-center">
          High-Velocity Engineering
        </div>

        <h1 className="text-[2.5rem] leading-[1.1] sm:text-6xl md:text-8xl font-bold tracking-tighter text-neutral-900 dark:text-white text-center max-w-5xl drop-shadow-sm dark:drop-shadow-none">
          You scale the business. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-400 to-neutral-800 dark:from-neutral-200 dark:to-neutral-600">
            We build the engine.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl text-center mt-6 mb-10 font-light leading-relaxed px-2">
          Daemons Build is a technical agency. Whether you need rapid MVPs, AI
          automation, or complex API integrations, we ship production-ready code.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pointer-events-auto px-4 sm:px-0">
          <Link
            href={WHATSAPP_LINK}
            className="px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all hover:scale-105 w-full sm:w-auto text-center flex items-center justify-center gap-2 shadow-lg dark:shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] group"
          >
            Book a Free Tech Audit{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            onClick={() =>
              document
                .getElementById("process")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 rounded-full bg-white/80 dark:bg-black/40 border border-neutral-300 dark:border-white/20 text-neutral-900 dark:text-white font-semibold hover:bg-neutral-100 dark:hover:bg-white/5 transition-all w-full sm:w-auto text-center backdrop-blur-md shadow-sm dark:shadow-none"
          >
            See how we work
          </button>
        </div>
      </motion.div>
    </section>
  );
}
