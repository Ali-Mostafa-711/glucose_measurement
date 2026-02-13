"use client";
import { motion } from "framer-motion";

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
