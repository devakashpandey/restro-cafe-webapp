"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarDays, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BookingPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
    }, 2500);
  };

  return (
    <>
      {/* Floating trigger */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 gradient-bistro text-primary-foreground font-semibold text-sm rounded-full shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 transition-all"
      >
        <CalendarDays className="w-4 h-4" />
        <span className="hidden sm:inline">Quick Book</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
            >
              <div className="glass rounded-2xl p-6 mx-4 border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold">
                      Quick Reservation
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Book your table in seconds
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-white/5 transition-colors text-muted-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full gradient-bistro flex items-center justify-center mb-4">
                      <CalendarDays className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold font-heading">
                      Reservation Confirmed!
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      We&apos;ll send you a confirmation shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        required
                        className="bg-white/5 border-white/10 rounded-xl h-11 focus:border-primary/40"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        className="bg-white/5 border-white/10 rounded-xl h-11 focus:border-primary/40"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          type="date"
                          required
                          className="bg-white/5 border-white/10 rounded-xl h-11 pl-10 focus:border-primary/40"
                        />
                      </div>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <select
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl h-11 pl-10 pr-3 text-sm text-foreground focus:border-primary/40 focus:outline-none appearance-none"
                        >
                          <option value="" className="bg-card">Time</option>
                          <option value="6:00 PM" className="bg-card">6:00 PM</option>
                          <option value="6:30 PM" className="bg-card">6:30 PM</option>
                          <option value="7:00 PM" className="bg-card">7:00 PM</option>
                          <option value="7:30 PM" className="bg-card">7:30 PM</option>
                          <option value="8:00 PM" className="bg-card">8:00 PM</option>
                          <option value="8:30 PM" className="bg-card">8:30 PM</option>
                          <option value="9:00 PM" className="bg-card">9:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <select
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl h-11 pl-10 pr-3 text-sm text-foreground focus:border-primary/40 focus:outline-none appearance-none"
                      >
                        <option value="" className="bg-card">Number of Guests</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n} className="bg-card">
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                    <Button
                      type="submit"
                      className="w-full gradient-bistro text-primary-foreground font-semibold rounded-xl h-11 hover:opacity-90 transition-opacity"
                    >
                      Reserve Now
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
