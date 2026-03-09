"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { SITE_NAME, WHATSAPP_LINK } from "@/lib/constants";

interface NavbarProps {
  isLoading: boolean;
}

export default function Navbar({ isLoading }: NavbarProps) {
  const { theme, setTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: isLoading ? 1.2 : 0 }}
      className="fixed top-4 sm:top-6 inset-x-4 sm:inset-x-0 sm:max-w-fit mx-auto z-50 rounded-full border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-md px-4 sm:px-6 py-3 flex items-center justify-between sm:justify-center gap-4 sm:gap-6 shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
    >
      <button
        onClick={scrollToTop}
        className="text-xl font-bold text-neutral-900 dark:text-white tracking-tighter hover:opacity-70 transition-opacity focus:outline-none shrink-0"
      >
        {SITE_NAME}
        <span className="text-neutral-400 dark:text-neutral-500">.</span>
      </button>

      <div className="flex gap-3 sm:gap-6 items-center sm:border-l sm:border-neutral-200 sm:dark:border-white/10 sm:pl-6 shrink-0">
        <Link
          href="#process"
          className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors hidden md:block"
        >
          Process
        </Link>
        <Link
          href="#services"
          className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors hidden sm:block"
        >
          Arsenal
        </Link>
        <Link
          href={WHATSAPP_LINK}
          target="_blank"
          className="text-xs sm:text-sm font-semibold bg-neutral-900 dark:bg-white text-white dark:text-black px-4 sm:px-5 py-2 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          <span className="hidden sm:inline">Get an Audit</span>
          <span className="sm:hidden">Audit</span>
        </Link>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-white/20 transition-all shrink-0"
          aria-label="Toggle theme"
        >
          <Sun className="h-4 w-4 hidden dark:block" />
          <Moon className="h-4 w-4 block dark:hidden" />
        </button>
      </div>
    </motion.nav>
  );
}
