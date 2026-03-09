"use client";

import { motion } from "framer-motion";
import { FAQS } from "@/lib/constants";

export default function FAQSection() {
  return (
    <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto relative z-10 border-t border-neutral-200 dark:border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
          Common Questions
        </h2>
      </motion.div>
      <div className="grid gap-6 md:gap-8">
        {FAQS.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 md:p-8 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02]"
          >
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-3">
              {faq.q}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
