"use client";

import { motion } from "framer-motion";
import { METRICS } from "@/lib/constants";

export default function MetricsBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-6 border-b border-neutral-200 dark:border-white/5 bg-neutral-100/50 dark:bg-neutral-900/20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-6 md:gap-8 text-center">
        {METRICS.map((metric, idx) => (
          <div key={metric.label} className="contents">
            <div>
              <h4 className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">
                {metric.value}
              </h4>
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                {metric.label}
              </p>
            </div>
            {idx < METRICS.length - 1 && (
              <div className="w-12 h-px md:w-px md:h-12 bg-neutral-300 dark:bg-white/10" />
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
