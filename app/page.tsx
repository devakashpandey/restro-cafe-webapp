"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, ChefHat, Leaf, Award, Clock, Users, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import OfferBanner from "@/components/offer-banner";
import BookingPopup from "@/components/booking-popup";
import SectionHeading from "@/components/section-heading";
import { BrokenShardGallery } from "@/components/broken-shard-gallery";
import { MorphingReveal } from "@/components/morphing-reveal";
import { menuItems, testimonials, galleryImages } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function HomePage() {
  const featuredItems = menuItems.filter((item) => item.isPopular).slice(0, 4);

  return (
    <>
      <div className="sticky top-0 z-50 flex flex-col w-full">
         <OfferBanner />
         <Navbar />
      </div>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* BG Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="Premium dining experience"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-white/90">
                Est. 2018 • Premium Dining
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-8 text-white drop-shadow-sm"
            >
              Experience Taste{" "}
              <span className="text-gradient-bistro">Like Never Before</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-white/80 max-w-xl mb-12 leading-relaxed font-sans"
            >
              Where culinary artistry meets unforgettable ambiance. Handcrafted dishes, 
              world-class cocktails, and moments that linger long after the last bite.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-5"
            >
              <Link href="/booking">
                <Button className="gradient-bistro text-white font-bold text-base px-10 h-14 rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
                  Reserve a Table
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/menu">
                <Button
                  variant="outline"
                  className="border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/50 backdrop-blur-md font-bold text-base px-10 h-14 rounded-full transition-all"
                >
                  Explore Menu
                </Button>
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 mt-16 pt-8 border-t border-white/10"
            >
              <div className="flex -space-x-3">
                {["SC", "JR", "EW", "MP"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-primary bg-background flex items-center justify-center text-xs font-bold text-foreground overflow-hidden shadow-lg"
                  >
                     <div className="w-full h-full gradient-bistro flex items-center justify-center text-white">
                       {initials}
                     </div>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-base font-bold text-white ml-2">4.9/5.0</span>
                </div>
                <p className="text-xs text-white/70 tracking-wide uppercase font-semibold">Join 5,000+ Monthly Happy Guests</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* ─── FEATURED MENU ─── */}
      <section className="py-20 md:py-28 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Specialties"
            title="Chef's Signature Dishes"
            description="Carefully curated selections that define our culinary philosophy. Each dish is a masterpiece."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {featuredItems.map((item, i) => (
              <motion.div
                key={item.id}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl overflow-hidden bg-card border border-border/50 hover:border-primary/20 transition-all duration-500 shadow-sm"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  {item.isPopular && (
                    <span className="absolute top-4 right-4 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] gradient-bistro text-white rounded-full shadow-lg">
                      Popular
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      {item.name}
                    </h3>
                    <span className="text-primary font-bold text-lg">₹{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <Link href="/menu">
                    <Button
                      variant="outline"
                      className="w-full rounded-xl border-border hover:bg-primary hover:text-white transition-all text-xs font-bold uppercase tracking-widest h-10"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-16">
            <Link href="/menu">
              <Button
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/5 rounded-full px-10 h-14 font-bold text-base"
              >
                View Full Menu
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <MorphingReveal 
        image="/images/chef.png"
        title="Chef's Canvas"
        subtitle="Where every ingredient tells a story of passion and tradition."
        description="Founded with a mission to redefine fine dining, Ember & Oak combines the raw power of wood-fire with the delicate touch of artisan craftsmanship."
      />

      {/* ─── WHY CHOOSE US ─── */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden bg-muted">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Ember & Oak"
            title="Crafted with Passion"
            description="Every detail is intentional, from sourcing the finest ingredients to creating the perfect atmosphere."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {[
              {
                icon: ChefHat,
                title: "Master Chefs",
                desc: "Award-winning culinary experts bringing global flavors to your plate.",
              },
              {
                icon: Leaf,
                title: "Farm to Table",
                desc: "Locally sourced, organic ingredients delivered fresh every morning.",
              },
              {
                icon: Award,
                title: "Two Michelin Stars",
                desc: "Recognized for our unwavering commitment to culinary art and service.",
              },
              {
                icon: Utensils,
                title: "Curated Experience",
                desc: "Personalized dining tailored to your preferences and special occasions.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20 pt-20 border-t border-border">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "50K+", label: "Happy Guests" },
              { value: "200+", label: "Signature Dishes" },
              { value: "4.9★", label: "Average Rating" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary font-heading mb-2">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="py-20 md:py-28 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative pr-8 pb-8"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-border">
                <Image
                  src="/images/interior.png"
                  alt="Restaurant interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-8 sm:-left-8 bg-card rounded-2xl p-8 border border-border shadow-2xl z-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl gradient-bistro flex items-center justify-center shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-2xl">Michelin</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Two Star Restaurant</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary border border-primary/20 rounded-full mb-6 bg-primary/5">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-heading leading-tight mb-8">
                A Legacy of <span className="text-gradient-bistro">Culinary Excellence</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Founded in 2018, Ember & Oak was born from a passion for creating extraordinary 
                dining experiences. Our philosophy is simple — source the best ingredients, 
                treat them with respect, and serve them in an atmosphere that makes every 
                meal feel special.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                       <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                       <p className="font-bold text-base mb-1">Open daily</p>
                       <p className="text-xs text-muted-foreground">Mon — Sun, 10AM — 11PM</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                       <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                       <p className="font-bold text-base mb-1">Private Events</p>
                       <p className="text-xs text-muted-foreground">Up to 100 guests</p>
                    </div>
                 </div>
              </div>

              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-border hover:bg-muted font-bold rounded-full px-10 h-14"
                >
                  Discover Our Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <BrokenShardGallery 
        text="Taste the Art" 
        images={[
          "/images/steak.png",
          "/images/pasta.png",
          "/images/cocktail.png",
          "/images/interior.png",
          "/images/chef.png",
        ]}
      />

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-muted border-y border-border">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="What Our Guests Say"
            description="Don't just take our word for it. Hear from the people who've shared an evening with us."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.id}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-3xl p-8 border border-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-foreground/90 leading-relaxed mb-10 italic text-lg">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden gradient-bistro flex items-center justify-center shadow-md">
                    <span className="text-xl font-bold text-white">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">{t.name}</p>
                    <p className="text-xs uppercase tracking-widest text-primary font-bold">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY PREVIEW ─── */}
      <section className="py-20 md:py-28 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Gallery"
            title="A Visual Journey"
            description="Experience the ambiance and art of Ember & Oak through our lens."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.slice(0, 4).map((img, i) => (
              <motion.div
                key={img.id}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-3xl overflow-hidden aspect-square group shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
                   <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                      <ArrowRight className="w-6 h-6 text-white" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Link href="/gallery">
              <Button
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/5 rounded-full px-12 h-14 font-bold"
              >
                View Full Gallery
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── MAP & FINAL CTA ─── */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 bg-muted">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary border border-primary/20 rounded-full mb-6 bg-primary/5">
                Visit Us
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold font-heading leading-tight mb-8">
                Ready to Create <br /> <span className="text-gradient-bistro">Unforgettable Memories?</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">
                Join us for an evening of culinary excellence and unparalleled service. 
                Reserve your table today and experience the heart of fine dining.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link href="/booking">
                  <Button className="gradient-bistro text-white font-bold h-14 px-12 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all">
                    Reserve Your Table
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="h-14 px-12 rounded-full border-border hover:bg-background font-bold"
                  >
                    Get Directions
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-border aspect-video"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343004!2d-73.98823890000001!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca05ca48ab5ac2c!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                className="dark:invert dark:hue-rotate-180"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant location"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BookingPopup />
    </>
  );
}
