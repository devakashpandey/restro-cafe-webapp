"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MorphingReveal = ({
  image = "/images/chef.png",
  title = "Culinary Masterpiece",
  subtitle = "Crafting unforgettable dining moments since 2018.",
  description = "Our approach combines traditional wood-fired techniques with modern culinary artistry to deliver a dining experience that stays with you forever.",
  features = [
    { title: "Organic Sourcing", desc: "Fresh ingredients from local sustainable farms." },
    { title: "Artisan Wood-Fire", desc: "Traditional oak-fired grills for smoky depth." }
  ]
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // MORPHING LOGIC
  const heroScale = useTransform(smoothProgress, [0, 0.4], [1, 0.55]);
  const heroX = useTransform(smoothProgress, [0, 0.4], ["0%", "-22%"]);
  const heroRotate = useTransform(smoothProgress, [0, 0.4], [0, -2]);
  const heroBorderRadius = useTransform(smoothProgress, [0, 0.4], ["0rem", "2.5rem"]);

  // CONTENT ENTRANCE
  const contentX = useTransform(smoothProgress, [0.35, 0.65], ["100%", "0%"]);
  const contentOpacity = useTransform(smoothProgress, [0.35, 0.55], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-background">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-border/20 z-30" />

      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* --- THE MORPHING HERO --- */}
        <motion.div
          style={{
            scale: heroScale,
            x: heroX,
            rotate: heroRotate,
            borderRadius: heroBorderRadius
          }}
          className="relative z-20 w-full h-full bg-muted shadow-2xl overflow-hidden border border-border/10"
        >
          <Image
            src={image}
            alt="Chef or Interior"
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />

          {/* Initial Hero Text */}
          <motion.div
            style={{ 
              opacity: useTransform(smoothProgress, [0, 0.2], [1, 0]),
              y: useTransform(smoothProgress, [0, 0.2], [0, -30])
            }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center"
          >
             <div className="flex items-center gap-2 mb-6">
               <div className="h-px w-8 bg-primary" />
               <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Masterclass</span>
               <div className="h-px w-8 bg-primary" />
             </div>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 font-heading">
              {title}
            </h2>
            <p className="text-xl md:text-2xl font-medium text-white/70 max-w-lg">
              {subtitle}
            </p>
          </motion.div>
        </motion.div>

        {/* --- THE REVEALED CONTENT --- */}
        <motion.div
          style={{ x: contentX, opacity: contentOpacity }}
          className="absolute right-[5%] w-[90%] md:w-[38%] z-10"
        >
          <div className="space-y-12">
            <div className="space-y-6 text-left">
              <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-primary border border-primary/20 rounded-full bg-primary/5">
                Our Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading leading-[1.1] text-foreground">
                Crafted for the <br /> <span className="text-gradient-bistro">Modern Gourmet.</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {features.map((f, i) => (
                <div key={i} className="group p-6 bg-muted/50 rounded-2xl border border-border/50 hover:border-primary/30 hover:bg-muted transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">{f.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1.5">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button className="gradient-bistro text-white font-bold h-14 px-12 rounded-full shadow-lg group">
                Reserve Your Experience
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* BACKGROUND ACCENT */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/20 z-0 border-l border-border/10" />
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-border/20 z-30" />
    </div>
  );
}
