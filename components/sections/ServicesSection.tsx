"use client";

import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-24 px-6 max-w-7xl mx-auto relative z-10 border-t border-neutral-200 dark:border-white/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
          Our Arsenal
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base sm:text-lg max-w-2xl mx-auto">
          We are versatile developers. We build across the entire stack so you
          don&apos;t have to hire five different specialists to launch your
          product.
        </p>
      </motion.div>
      <HoverEffect items={SERVICES} className="max-w-6xl mx-auto" />
    </section>
  );
}
