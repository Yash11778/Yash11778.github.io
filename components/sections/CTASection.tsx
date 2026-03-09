"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 px-6 relative z-10 overflow-hidden border-t border-neutral-200 dark:border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(0,0,0,0.02)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_bottom_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center relative z-20"
      >
        <h2 className="text-[2.5rem] leading-tight sm:text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white tracking-tighter mb-6 md:mb-8">
          Ready to build?
        </h2>
        <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-400 mb-10 md:mb-12 font-light max-w-2xl mx-auto">
          Skip the agency fluff. Let&apos;s get on a call, look at your
          architecture, and figure out how to build it better and faster.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:gap-6 px-4 sm:px-0">
          <Link
            href={WHATSAPP_LINK}
            className="px-6 sm:px-10 py-4 sm:py-5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-bold text-base sm:text-lg hover:scale-105 shadow-xl dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
          >
            Claim your Free Tech Audit{" "}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
