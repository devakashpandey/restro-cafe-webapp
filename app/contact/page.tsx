"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import SectionHeading from "@/components/section-heading";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-background">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Contact Us"
            title="Get in Touch"
            description="Have a question, want to plan a private event, or just want to share some love? We'd love to hear from you."
          />
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full gradient-bistro flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/5 rounded-full px-8 py-5"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-muted-foreground">
                          Full Name *
                        </label>
                        <Input
                          required
                          placeholder="John Doe"
                          className="bg-muted/50 border-border rounded-xl h-12 focus:border-primary/40"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-muted-foreground">
                          Email *
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder="john@email.com"
                          className="bg-muted/50 border-border rounded-xl h-12 focus:border-primary/40"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-muted-foreground">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="bg-muted/50 border-border rounded-xl h-12 focus:border-primary/40"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-muted-foreground">
                        Subject *
                      </label>
                      <select
                        required
                        className="w-full bg-muted/50 border border-border rounded-xl h-12 px-3 text-sm focus:border-primary/40 focus:outline-none appearance-none text-foreground"
                      >
                        <option value="" className="bg-card">Select a topic</option>
                        <option value="reservation" className="bg-card">Reservation Inquiry</option>
                        <option value="event" className="bg-card">Private Event</option>
                        <option value="catering" className="bg-card">Catering</option>
                        <option value="feedback" className="bg-card">Feedback</option>
                        <option value="careers" className="bg-card">Careers</option>
                        <option value="other" className="bg-card">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-muted-foreground">
                        Message *
                      </label>
                      <Textarea
                        required
                        placeholder="Tell us how we can help..."
                        className="bg-muted/50 border-border rounded-xl min-h-[140px] focus:border-primary/40 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full gradient-bistro text-white font-bold rounded-xl h-14 text-base shadow-lg shadow-primary/10"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-lg mb-5">
                  Contact Information
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-1">Visit Us</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        123 Gourmet Avenue, Culinary District, New York, NY 10001
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-1">Call Us</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 987-6543</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-1">Email Us</p>
                      <p className="text-sm text-muted-foreground">hello@emberandoak.com</p>
                      <p className="text-sm text-muted-foreground">events@emberandoak.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-1">Working Hours</p>
                      <p className="text-sm text-muted-foreground">Mon — Fri: 11AM — 10PM</p>
                      <p className="text-sm text-muted-foreground">Sat — Sun: 10AM — 11PM</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-lg mb-4">
                  Follow Us
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: InstagramIcon, label: "Instagram", href: "#" },
                    { icon: FacebookIcon, label: "Facebook", href: "#" },
                    { icon: TwitterIcon, label: "Twitter", href: "#" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                    >
                      <social.icon className="w-4 h-4" />
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 rounded-2xl overflow-hidden border border-border aspect-[21/9] shadow-inner"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343004!2d-73.98823890000001!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca05ca48ab5ac2c!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              className="dark:invert dark:hue-rotate-180" // Using CSS class for theme-aware filter
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ember & Oak location"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
