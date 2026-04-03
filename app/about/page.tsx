"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChefHat, Award, Heart, Users, Leaf, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import SectionHeading from "@/components/section-heading";

const stagger = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-muted">
        <div className="absolute inset-0">
          <Image
            src="/images/interior.png" // Using existing image
            alt="About Ember & Oak"
            fill
            sizes="100vw"
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary border border-primary/20 rounded-full mb-6 bg-primary/5">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading leading-tight mb-6 text-foreground">
              A Passion for{" "}
              <span className="text-gradient-bistro">Culinary Art</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From humble beginnings to a celebrated dining destination, discover the heart and soul behind Ember & Oak.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-5xl font-bold font-heading mb-8">
                Where Every Meal <span className="text-gradient-bistro">Tells a Story</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-base">
                <p>
                  Ember & Oak was born in 2018 from a simple belief: dining should be more than just eating — it should be an experience that engages all the senses and creates lasting memories.
                </p>
                <p>
                  Our founder, Chef Marcus Chen, trained in the kitchens of Paris, Tokyo, and New York before bringing his global perspective to create something truly unique. His vision was to build a restaurant where classical culinary techniques meet modern innovation.
                </p>
                <p>
                  With locally-sourced ingredients, a world-class team, and an unwavering commitment to excellence, we continue to push boundaries and redefine what premium dining means.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative pr-4 pb-4"
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/5] border border-border shadow-2xl relative">
                <Image
                  src="/images/chef.png" // Placeholder or actual chef image from artifacts if any
                  alt="Chef Marcus Chen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-8 sm:-left-8 bg-card rounded-2xl p-6 border border-border shadow-2xl">
                <p className="font-heading font-bold text-primary text-xl mb-1">Chef Marcus Chen</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Founder & Executive Chef</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values (Grid) */}
      <section className="py-20 md:py-28 bg-muted relative border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us"
            description="The principles that guide every decision we make, from the kitchen to the dining room."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 md:gap-y-16">
            {[
              {
                icon: Leaf,
                title: "Sustainability",
                desc: "We partner with local farms and practice zero-waste cooking. Our commitment to the environment is reflected in every dish.",
              },
              {
                icon: Heart,
                title: "Hospitality",
                desc: "We don't just serve food — we create warmth. Every guest is family, and every visit should feel like coming home.",
              },
              {
                icon: ChefHat,
                title: "Craftsmanship",
                desc: "From hand-rolled pasta to house-made sauces, we honor the art of cooking with meticulous attention to detail.",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "We pursue perfection relentlessly. Our team trains continuously to deliver the highest quality in every aspect.",
              },
              {
                icon: Users,
                title: "Community",
                desc: "We believe in giving back. Through events, partnerships, and programs, we strengthen the community around us.",
              },
              {
                icon: Clock,
                title: "Consistency",
                desc: "Whether it's your first visit or your hundredth, you can expect the same exceptional experience every time.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our People"
            title="The Hands Behind the Flavor"
            description="Our talented culinary team brings passion and expertise to every plate."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {[
              { name: "Marcus Chen", role: "Executive Chef", initials: "MC" },
              { name: "Sarah Laurent", role: "Head Pastry Chef", initials: "SL" },
              { name: "David Park", role: "Sommelier", initials: "DP" },
              { name: "Emily Rodriguez", role: "Manager", initials: "ER" },
            ].map((member, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative w-44 h-44 mx-auto rounded-full overflow-hidden mb-6 border-4 border-muted group-hover:border-primary/20 shadow-lg transition-all duration-500">
                  <div className="absolute inset-0 gradient-bistro flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-foreground font-heading">
                      {member.initials}
                    </span>
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden bg-muted">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold font-heading mb-8">
              Come Dine <span className="text-gradient-bistro">With Us</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Ready to experience the perfect blend of tradition and innovation? Reserve your table now and let us take you on a journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/booking">
                <Button className="gradient-bistro text-white font-bold h-14 px-10 rounded-full shadow-lg shadow-primary/20">
                  Book a Table
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/menu">
                <Button variant="outline" className="h-14 px-10 rounded-full border-border hover:bg-background font-bold">
                  Discover Our Menu
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
