"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-10 md:mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary border border-primary/20 rounded-full mb-4 bg-primary/5">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed text-base md:text-lg mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
