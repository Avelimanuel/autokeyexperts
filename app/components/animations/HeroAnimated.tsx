"use client";

import { motion } from "framer-motion";

export default function HeroAnimated({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-5 text-center px-6"
    >
      {children}
    </motion.div>
  );
}
