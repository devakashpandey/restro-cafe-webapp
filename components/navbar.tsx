"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeColor, setActiveColor] = useState("orange");
  const pathname = usePathname();



  useEffect(() => {
    document.documentElement.setAttribute("data-color", "orange");
  }, []);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "glass py-2 shadow-lg border-border/10"
          : "bg-background/80 backdrop-blur-md py-3 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg group-hover:scale-110 transition-transform duration-300 bg-white">
              <Image
                src="/logo.png"
                alt="Bhoj Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight font-heading text-foreground">
                Bhoj
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-primary/60 font-bold leading-none hidden sm:block">
                By Aditya Inn
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-1 py-1 text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Theme Controls */}
          <div className="hidden lg:flex items-center gap-5">

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-muted text-muted-foreground transition-all"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <Link href="/booking">
              <Button className="gradient-bistro text-white font-bold h-11 px-6 rounded-full shadow-lg hover:shadow-primary/20 transition-all">
                Book a Table
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle Group */}
          <div className="flex lg:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-primary transition-all duration-300"
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-500" />}
              </button>
            )}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-background border-t border-border"
          >
            <nav className="flex flex-col p-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-base font-bold tracking-tight transition-all duration-300 ${
                      pathname === link.href
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-4 space-y-4">
                 <Link href="tel:+15551234567" className="flex items-center gap-3 px-4 py-3 text-muted-foreground font-medium">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>Call Us: +1 (555) 123-4567</span>
                </Link>
                <Link href="/booking" className="block">
                  <Button className="w-full gradient-bistro text-white font-bold h-12 rounded-xl">
                    Book a Table
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
