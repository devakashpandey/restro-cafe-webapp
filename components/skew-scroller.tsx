"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface SkewScrollerProps {
  images?: string[];
  itemCount?: number;
  backgroundColor?: string;
  containerHeight?: string;
  noiseOpacity?: number;
  rotation?: number;
  scale?: number;
  gridCols?: number;
  aspectRatio?: string;
  text?: string;
  textColor?: string;
  textSize?: string;
  className?: string;
}

export const SkewScroller = ({
  images = [
    "/images/steak.png",
    "/images/pasta.png",
    "/images/cocktail.png",
    "/images/interior.png",
    "/images/chef.png",
    "/images/dessert.png",
    "/images/salad.png",
    "/images/hero.png",
  ],
  itemCount = 24,
  backgroundColor = "bg-background",
  containerHeight = "h-[180vh]",
  noiseOpacity = 0.05,
  rotation = -12,
  scale = 1.3,
  gridCols = 4,
  aspectRatio = "aspect-[3/4]",
  text = "CULINARY\nVISUALS",
  textColor = "text-foreground",
  textSize = "text-5xl sm:text-7xl md:text-9xl",
  className = "",
}: SkewScrollerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate move ranges based on scroll progress
  const xMove = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const yMove = useTransform(scrollYProgress, [0, 1], [0, -800]);

  const colWidth = 100 / gridCols;

  return (
    <div
      ref={containerRef}
      className={`relative ${containerHeight} ${backgroundColor} overflow-hidden ${className}`}
    >
      {/* Noise Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay" 
        style={{ 
          backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`, 
          opacity: noiseOpacity 
        }} 
      />

      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div
          className="absolute top-0 left-0 w-[150%] flex flex-wrap content-start transform-gpu"
          style={{
            rotate: rotation,
            scale: scale,
            x: xMove,
            y: yMove,
          }}
        >
          {Array.from({ length: itemCount }).map((_, i) => (
            <div
              key={i}
              className={`p-2 sm:p-4 ${aspectRatio}`}
              style={{ width: `${colWidth}%` }}
            >
              <motion.div
                className="w-full h-full overflow-hidden rounded-xl shadow-2xl bg-muted border border-border/10"
                whileHover={{ scale: 0.96, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={images[i % images.length]}
                  alt={`Gallery item ${i}`}
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700 ease-out"
                />
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Floating Text */}
        <div className={`absolute bottom-12 right-12 z-50 mix-blend-difference ${textColor}`}>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${textSize} font-black uppercase leading-[0.85] tracking-tighter text-right`}
          >
            {text.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < text.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </motion.h2>
        </div>
      </div>
    </div>
  );
};
