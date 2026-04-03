"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface BrokenShardGalleryProps {
  images?: string[];
  positions?: Array<{ x: number; y: number; r: number }>;
  backgroundColor?: string;
  containerHeight?: string;
  cardWidth?: string;
  cardHeight?: string;
  text?: string;
  textColor?: string;
  textSize?: string;
  textFadeRange?: [number, number];
  textScaleRange?: [number, number];
  scaleRange?: [number, number, number];
  className?: string;
}

export const BrokenShardGallery = ({
  images = [
    "/images/steak.png",
    "/images/pasta.png",
    "/images/cocktail.png",
    "/images/interior.png",
    "/images/chef.png",
  ],
  positions = [
    { x: -400, y: -250, r: -20 },
    { x: 400, y: -300, r: 15 },
    { x: -350, y: 250, r: 30 },
    { x: 300, y: 300, r: -15 },
    { x: 0, y: 0, r: 0 },
  ],
  backgroundColor = "bg-background",
  containerHeight = "h-[200vh]",
  cardWidth = "w-48 sm:w-64",
  cardHeight = "h-64 sm:h-80",
  text = "Ember & Oak",
  textColor = "text-primary",
  textSize = "text-5xl sm:text-7xl md:text-9xl",
  textFadeRange = [0, 0.4],
  textScaleRange = [1, 2],
  scaleRange = [1, 0.9, 1.1],
  className = "",
}: BrokenShardGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className={`relative ${containerHeight} ${backgroundColor} ${className}`}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Shards */}
        <div className="relative w-full h-full flex items-center justify-center">
          {positions.map((pos, i) => {
            const x = useTransform(scrollYProgress, [0, 1], [0, pos.x]);
            const y = useTransform(scrollYProgress, [0, 1], [0, pos.y]);
            const rotate = useTransform(scrollYProgress, [0, 1], [0, pos.r]);
            const scale = useTransform(scrollYProgress, [0, 0.5, 1], scaleRange);
            const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

            return (
              <motion.div
                key={i}
                style={{ x, y, rotate, scale, opacity, zIndex: positions.length - i }}
                className={`absolute ${cardWidth} ${cardHeight} rounded-2xl overflow-hidden shadow-2xl border border-white/10`}
              >
                <div className="absolute inset-0 bg-black/30 z-10 hover:bg-black/10 transition-colors" />
                <Image
                  src={images[i % images.length]}
                  alt={`Shard ${i}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="object-cover"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Text */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, textFadeRange, [0, 1]),
            scale: useTransform(scrollYProgress, textFadeRange, [0.5, 1]),
            filter: useTransform(
              scrollYProgress,
              [0, 0.3, 0.6],
              ["blur(10px)", "blur(5px)", "blur(0px)"]
            ),
          }}
          className={`absolute z-50 ${textColor} ${textSize} font-heading font-black pointer-events-none drop-shadow-2xl text-center`}
        >
          {text}
          <div className="text-xs sm:text-sm font-bold tracking-[0.5em] uppercase text-foreground/50 mt-4">
            Where Taste Meets Art
          </div>
        </motion.div>
      </div>
    </div>
  );
};
