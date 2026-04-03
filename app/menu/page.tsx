"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import BookingPopup from "@/components/booking-popup";
import SectionHeading from "@/components/section-heading";
import { menuItems } from "@/lib/data";

const categories = [
  { key: "all", label: "All" },
  { key: "starters", label: "Starters" },
  { key: "main-course", label: "Main Course" },
  { key: "drinks", label: "Drinks" },
  { key: "desserts", label: "Desserts" },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />

      <section className="relative pt-20 pb-10 md:pt-28 md:pb-12 bg-muted">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Menu"
            title="Explore Our Cuisine"
            description="Every dish is a story, every flavor a journey. Discover our carefully curated selection of culinary masterpieces."
          />

          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-card border border-border rounded-full text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
              />
            </div>
          </div>

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

      {/* Menu Grid */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 md:gap-y-16"
            >
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/20 transition-all duration-500"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 flex gap-1.5">
                      {item.isPopular && (
                        <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider gradient-bistro text-white rounded-full">
                          Popular
                        </span>
                      )}
                      {item.isNew && (
                        <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/90 text-white rounded-full">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-sans font-semibold text-lg leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-primary font-bold text-lg shrink-0">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground font-sans">
                No dishes found
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Try adjusting your search or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BookingPopup />
    </>
  );
}
