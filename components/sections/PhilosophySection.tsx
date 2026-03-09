"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PHILOSOPHY_POINTS, WHATSAPP_LINK } from "@/lib/constants";

const CODE_SNIPPET = `// Daemons Execution Model

async function scaleStartup(idea) {
  try {
    const architecture = await Daemons.design(idea);
    const mwp = await Daemons.buildFast(architecture);
    
    return mwp.deploy({
      scale: "infinite",
      bugs: 0,
      techDebt: "managed"
    });
  } catch (competitors) {
    return "Outpaced.";
  }
}`;

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-20 md:py-32 px-6 max-w-7xl mx-auto relative z-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-6">
            You focus on the product.
            <br />
            We handle the complexity.
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed mb-6">
            We don&apos;t just write code; we architect systems. We know that as
            a startup, your runway is limited and speed is your only moat.
          </p>
          <ul className="space-y-4 mb-8">
            {PHILOSOPHY_POINTS.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 font-medium text-sm sm:text-base"
              >
                <CheckCircle2 className="w-5 h-5 text-neutral-900 dark:text-white shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href={WHATSAPP_LINK}
            className="inline-flex items-center gap-2 font-bold text-neutral-900 dark:text-white hover:opacity-70 transition-opacity"
          >
            Stop wrestling with tech. Let&apos;s talk{" "}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Code Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-sm dark:shadow-none w-full"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-100 dark:bg-white/5 blur-[100px] rounded-full" />
          <div className="overflow-x-auto relative z-10 w-full">
            <pre className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-mono">
              <code>{CODE_SNIPPET}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
