"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SITE_NAME } from "@/lib/constants";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-50 dark:bg-black"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-900 dark:text-white"
          >
            {SITE_NAME}
            <span className="text-neutral-400 dark:text-neutral-600">.</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
