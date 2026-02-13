"use client";
import { motion } from "framer-motion";

export default function SlideUp({
  children,
  className,
  delay = 0,
  duration = 0.5,
  yOffset = 50,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
