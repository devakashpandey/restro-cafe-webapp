"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import SectionHeading from "@/components/section-heading";
import { SkewScroller } from "@/components/skew-scroller";
import { galleryImages } from "@/lib/data";

const categories = [
  { key: "all", label: "All" },
  { key: "food", label: "Food" },
  { key: "interior", label: "Interior" },
  { key: "team", label: "Team" },
  { key: "events", label: "Events" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = galleryImages.filter(
    (img) => activeCategory === "all" || img.category === activeCategory
  );

  const selectedIndex = filtered.findIndex(img => img.src === selectedImage);

  const showNext = () => {
    if (selectedIndex < filtered.length - 1) {
      setSelectedImage(filtered[selectedIndex + 1].src);
    } else {
      setSelectedImage(filtered[0].src);
    }
  };

  const showPrev = () => {
    if (selectedIndex > 0) {
      setSelectedImage(filtered[selectedIndex - 1].src);
    } else {
      setSelectedImage(filtered[filtered.length - 1].src);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, selectedIndex]);

  return (
    <>
      <Navbar />

      <section className="relative pt-12 pb-10 md:pt-16 md:pb-12 bg-background">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Gallery"
            title="Visual Stories"
            description="A curated collection of moments, dishes, and spaces that define the Ember & Oak experience."
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "gradient-bistro text-white"
                    : "bg-card text-muted-foreground border border-border hover:border-primary/30 hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-2 md:columns-3 lg:columns-4 gap-6 md:gap-10 space-y-6 md:space-y-10"
            >
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => setSelectedImage(img.src)}
                  className="relative rounded-xl overflow-hidden cursor-pointer group break-inside-avoid shadow-sm border border-border/50"
                >
                  <div className="relative aspect-[3/4]">
                     <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-end p-4">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {img.alt}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground font-heading">
                No images in this category yet
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 text-white/50 hover:text-white transition-all z-110 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-md"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white transition-all z-110 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-md"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white transition-all z-110 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-md"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Enlarged gallery image"
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              
              {/* Image Counter */}
              <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-white/60 font-medium">
                {selectedIndex + 1} / {filtered.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skew Scroller Intro Spacing */}
      <section className="pt-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionHeading 
             badge="Immersive"
             title="Cinematic Experience"
             description="Scroll down to explore our journey through a kinetic lens."
           />
        </div>
      </section>

      <SkewScroller />

      <Footer />
      <WhatsAppButton />
    </>
  );
}
