"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Code2, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: <Activity className="w-6 h-6 text-neutral-900 dark:text-white" />,
    title: "01. Architecture Audit",
    desc: "We tear down your business requirements and architect the exact technical stack and database schema needed to hit the market fast, with a foundation built to scale.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-neutral-900 dark:text-white" />,
    title: "02. The Blueprint",
    desc: "We deliver a ruthless, phased roadmap. Whether we are building an AI-integrated backtesting engine, deploying Solana smart contracts, or launching a scalable Web2 platform, you know exactly what ships and when.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-neutral-900 dark:text-white" />,
    title: "03. Ruthless Execution",
    desc: "We act as your elite engineering wing. We write the code, automate the CI/CD pipelines, and deploy the infrastructure. You focus on selling the product. We handle the complexity",
    isSolid: false,
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-20 md:py-32 px-6 max-w-7xl mx-auto relative z-10 border-b border-neutral-200 dark:border-white/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
          How We Operate
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 font-light text-base sm:text-lg max-w-2xl mx-auto">
          We don&apos;t do endless discovery phases. We audit, we plan, and we
          execute.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-neutral-200 dark:bg-white/10" />

        {STEPS.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative text-center md:text-left z-10"
          >
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto md:mx-0 rounded-full flex items-center justify-center mb-6 shadow-sm border-2 ${
                step.isSolid
                  ? "bg-neutral-900 dark:bg-white border-neutral-900 dark:border-white"
                  : "bg-white dark:bg-black border-neutral-200 dark:border-white/10"
              }`}
            >
              {step.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-3">
              {step.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
