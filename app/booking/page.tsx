"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import SectionHeading from "@/components/section-heading";
import { timeSlots } from "@/lib/data";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // WhatsApp redirect
    const message = encodeURIComponent(
      `🍽 New Reservation Request\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nSpecial Requests: ${formData.specialRequests || "None"}`
    );
    window.open(`https://wa.me/15551234567?text=${message}`, "_blank");

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen flex items-center justify-center px-4 bg-background">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md"
          >
            <div className="w-20 h-20 mx-auto rounded-full gradient-bistro flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold font-sans mb-4">
              Reservation Submitted!
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Thank you, {formData.name}! We&apos;ve received your reservation for{" "}
              <span className="text-primary">{formData.date}</span> at{" "}
              <span className="text-primary">{formData.time}</span>. We&apos;ll
              confirm your booking shortly via email & WhatsApp.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              className="gradient-bistro text-white font-semibold rounded-full px-8 py-5"
            >
              Make Another Reservation
            </Button>
          </motion.div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 bg-background">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Reservations"
            title="Reserve Your Experience"
            description="Secure your table at Ember & Oak. Whether it's an intimate dinner or a grand celebration, we're ready."
          />

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-6 md:p-8 space-y-6 border border-border"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">
                      Full Name *
                    </label>
                    <Input
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-muted border-border rounded-xl h-12 focus:border-primary/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="john@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-muted border-border rounded-xl h-12 focus:border-primary/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    required
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-muted border-border rounded-xl h-12 focus:border-primary/40"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">
                      <CalendarDays className="w-4 h-4 inline mr-1.5 text-primary" />
                      Preferred Date *
                    </label>
                    <Input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="bg-muted border-border rounded-xl h-12 focus:border-primary/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">
                      <Users className="w-4 h-4 inline mr-1.5 text-primary" />
                      Number of Guests *
                    </label>
                    <select
                      required
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="w-full bg-muted border border-border rounded-xl h-12 px-3 text-sm focus:border-primary/40 focus:outline-none appearance-none text-foreground"
                    >
                      <option value="" className="bg-card">Select guests</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((n) => (
                        <option key={n} value={n} className="bg-card">
                          {n} {n === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-sm font-medium mb-3 text-muted-foreground">
                    <Clock className="w-4 h-4 inline mr-1.5 text-primary" />
                    Preferred Time *
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        disabled={!slot.available}
                        onClick={() =>
                          setFormData({ ...formData, time: slot.time })
                        }
                        className={`py-2.5 px-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                          !slot.available
                            ? "bg-muted text-muted-foreground/40 cursor-not-allowed line-through"
                            : formData.time === slot.time
                            ? "gradient-bistro text-white"
                            : "bg-muted text-muted-foreground border border-border hover:border-primary/30 hover:text-primary"
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Special Requests
                  </label>
                  <Textarea
                    placeholder="Dietary requirements, allergies, special occasions..."
                    value={formData.specialRequests}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        specialRequests: e.target.value,
                      })
                    }
                    className="bg-muted border-border rounded-xl min-h-[100px] focus:border-primary/40 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    type="submit"
                    className="flex-1 gradient-bistro text-white font-semibold rounded-xl h-12 hover:opacity-90 transition-opacity text-base"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Confirm Reservation
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      const msg = encodeURIComponent("Hi! I'd like to make a reservation.");
                      window.open(`https://wa.me/15551234567?text=${msg}`, "_blank");
                    }}
                    className="border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/5 rounded-xl h-12"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book via WhatsApp
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-sans font-semibold text-lg mb-4">
                  Reservation Info
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <CalendarDays className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Advance Booking</p>
                      <p className="text-muted-foreground">
                        We recommend booking at least 48 hours in advance for weekend dining.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Large Parties</p>
                      <p className="text-muted-foreground">
                        For groups of 8+, contact us directly for private dining options.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Cancellation Policy</p>
                      <p className="text-muted-foreground">
                        Free cancellation up to 24 hours before your reservation.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-sans font-semibold text-lg mb-4">
                  Opening Hours
                </h3>
                <ul className="space-y-3 text-sm">
                  {[
                    { day: "Monday — Friday", hours: "11:00 AM — 10:00 PM" },
                    { day: "Saturday", hours: "10:00 AM — 11:00 PM" },
                    { day: "Sunday", hours: "10:00 AM — 9:00 PM" },
                  ].map((item, i) => (
                    <li key={i} className="flex justify-between">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="font-medium text-primary">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="gradient-bistro rounded-2xl p-6 text-white">
                <h3 className="font-sans font-bold text-lg mb-2">
                  First Visit? 🎉
                </h3>
                <p className="text-sm text-white/80 mb-3">
                  Enjoy 20% off your entire bill on your first dining experience with us.
                </p>
                <p className="text-xs font-bold uppercase tracking-wider">
                  Use code: WELCOME20
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
