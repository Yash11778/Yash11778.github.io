"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ChevronLeft, ChevronRight, Moon, Sun, ArrowLeft } from "lucide-react";
import { PROJECTS, SITE_NAME, WHATSAPP_LINK } from "@/lib/constants";

// ─── Image Carousel ──────────────────────────────────────────────────

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 group">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`${alt} screenshot ${current + 1}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === current
                    ? "bg-white scale-110 shadow"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-black text-neutral-600 dark:text-neutral-300 selection:bg-black/10 dark:selection:bg-white/20 font-sans transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-4 sm:top-6 inset-x-4 sm:inset-x-0 sm:max-w-fit mx-auto z-50 rounded-full border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-md px-4 sm:px-6 py-3 flex items-center justify-between sm:justify-center gap-4 sm:gap-6 shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
        <Link
          href="/"
          className="text-xl font-bold text-neutral-900 dark:text-white tracking-tighter hover:opacity-70 transition-opacity shrink-0"
        >
          {SITE_NAME}
          <span className="text-neutral-400 dark:text-neutral-500">.</span>
        </Link>

        <div className="flex gap-3 sm:gap-6 items-center sm:border-l sm:border-neutral-200 sm:dark:border-white/10 sm:pl-6 shrink-0">
          <Link
            href="/"
            className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors hidden md:flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Home
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
      </nav>

      {/* Header */}
      <section className="pt-32 sm:pt-40 pb-16 md:pb-24 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/80 dark:bg-black/50 border border-neutral-200 dark:border-white/10 text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400 mb-6 uppercase tracking-widest backdrop-blur-md shadow-sm">
            Case Studies
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white tracking-tighter mb-6">
            Our Work
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 font-light text-base sm:text-lg max-w-2xl mx-auto">
            Systems we&apos;ve architected and shipped to production — from
            DeFi protocols to AI-driven trading engines.
          </p>
        </motion.div>
      </section>

      {/* Projects List */}
      <section className="px-6 pb-24 md:pb-32 max-w-7xl mx-auto">
        <div className="flex flex-col gap-20 md:gap-32">
          {PROJECTS.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center"
            >
              {/* Image carousel — alternates sides */}
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <ImageCarousel images={project.images} alt={project.title} />
              </div>

              {/* Copy */}
              <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3 block">
                  Project {String(idx + 1).padStart(2, "0")}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
                  {project.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 px-6 border-t border-neutral-200 dark:border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tighter mb-6">
            Want something like this?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-10 font-light max-w-xl mx-auto">
            Let&apos;s talk about your project. We&apos;ll audit your idea and
            map the fastest path to production.
          </p>
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold hover:scale-105 shadow-lg dark:shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] transition-all"
          >
            Book a Free Tech Audit
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
