"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import Link from "next/link";

export default function OfferBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -60, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-[60] bg-primary text-primary-foreground"
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3 relative">
          <Sparkles className="w-3.5 h-3.5 shrink-0 opacity-80" />
          <p className="text-sm font-medium text-center">
            🎉 First Visit?{" "}
            <span className="font-bold">Get 20% OFF</span> on your experience!{" "}
            <Link href="/booking" className="underline underline-offset-4 hover:no-underline font-bold ml-1">
              Book Now →
            </Link>
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Dismiss offer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
