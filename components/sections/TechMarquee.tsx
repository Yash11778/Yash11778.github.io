"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";

const doubled = [...TECH_STACK, ...TECH_STACK];

export default function TechMarquee() {
  return (
    <section className="relative z-10 py-6 sm:py-10 border-y border-neutral-200 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        className="flex flex-none gap-8 sm:gap-12 pr-8 sm:pr-12"
      >
        {doubled.map((tech, idx) => (
          <div
            key={idx}
            className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-400 dark:text-neutral-600 tracking-tight"
          >
            {tech}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
