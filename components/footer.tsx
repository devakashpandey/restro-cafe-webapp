"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
} from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-background text-foreground border-t border-border/10">
      {/* Top Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg group-hover:scale-105 transition-transform duration-300 bg-white">
                <Image
                  src="/logo.png"
                  alt="Bhoj Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-foreground">
                  Bhoj
                </h3>
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">
                  By Aditya Inn
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans max-w-xs">
              Authentic Indian flavors served with royal hospitality. Every meal is a celebration of taste and tradition at Bhoj.
            </p>
            <div className="flex gap-4">
              {[InstagramIcon, FacebookIcon, TwitterIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-all duration-300 border border-border hover:border-primary/30"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Our Menu", href: "/menu" },
                { label: "Reservations", href: "/booking" },
                { label: "Gallery", href: "/gallery" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-sm text-white/60">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="leading-relaxed">123 Gourmet Avenue, Culinary District, NY 10001</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/60 font-medium">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/60 font-medium">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@emberandoak.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-6">
              Dine with Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-4 text-white/60">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-bold mb-1">Mon — Fri</p>
                  <p className="text-sm">11:00 AM — 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-4 text-white/60">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-bold mb-1">Sat — Sun</p>
                  <p className="text-sm">10:00 AM — 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white/5 rounded-3xl p-8 md:p-10 mb-12 border border-white/10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-heading font-bold text-white mb-2">
                Stay in the Loop
              </h4>
              <p className="text-white/60 font-medium">
                Subscribe for exclusive offers, new menu drops, and event invites.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm placeholder:text-white/40 focus:outline-none focus:border-primary/40 transition-colors text-white"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-white font-bold text-sm rounded-2xl hover:opacity-90 transition-opacity whitespace-nowrap shadow-lg shadow-primary/20"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10">
          <div className="flex items-center gap-6 text-[13px] text-white/40 font-medium">
            <span>© {new Date().getFullYear()} Bhoj Restaurant & Aditya Inn.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
            </div>
          </div>
          <div className="text-[13px] text-white/40 font-bold uppercase tracking-widest hidden md:block">
            Crafted for <span className="text-primary">Excellence</span>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-8 w-12 h-12 rounded-2xl gradient-bistro flex items-center justify-center shadow-2xl shadow-primary/30 z-40 border border-white/10"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </motion.button>
    </footer>
  );
}
