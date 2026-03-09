"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

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
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          {/* Navigation arrows */}
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

          {/* Dots */}
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

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-6 max-w-7xl mx-auto relative z-10 border-t border-neutral-200 dark:border-white/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
          Previous Projects
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base sm:text-lg max-w-2xl mx-auto">
          A selection of systems we&apos;ve engineered and shipped to
          production.
        </p>
      </motion.div>

      <div className="flex flex-col gap-16 md:gap-24">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Image carousel */}
            <div className={idx % 2 === 1 ? "md:order-2" : ""}>
              <ImageCarousel images={project.images} alt={project.title} />
            </div>

            {/* Copy */}
            <div className={idx % 2 === 1 ? "md:order-1" : ""}>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
                {project.title}
              </h3>
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
