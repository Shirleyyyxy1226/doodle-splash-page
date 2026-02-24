import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowDown, Baby, Heart, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.svg";
import beachImg from "@/assets/beach-paradise.jpg";
import cookingImg from "@/assets/cooking-class.jpg";
import safariImg from "@/assets/safari-adventure.jpg";

const features = [
  {
    icon: Baby,
    title: "Child profiles",
    description: "Age, naps, allergies, energy levels — every detail shapes the plan.",
    image: beachImg,
  },
  {
    icon: Heart,
    title: "Nap-synced plans",
    description: "Activities paced around your child's rest windows and energy.",
    image: cookingImg,
  },
  {
    icon: Star,
    title: "Live trip guide",
    description: "Real-time map, timeline, and smart nudges while you travel.",
    image: safariImg,
  },
];

export const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-cream pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: '1728px 1022px',
        backgroundPosition: 'center calc(40% - 70px)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 font-handwriting text-3xl font-bold leading-[2] md:text-5xl lg:text-6xl text-foreground [transform:scaleY(0.6)]"
        >
          Travel with Kids,
          <br />
          <span className="text-gradient-coral">Without the Mental Load.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mb-8 max-w-lg font-body text-sm text-muted-foreground md:text-base"
        >
          Age, naps, allergies, energy levels — no detail is too small.
          Kiddogo builds travel itineraries that{" "}
          <span className="font-semibold text-foreground">actually work for families</span>. ✨
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="https://kiddogo.co.uk/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full border-2 border-primary-foreground/30 bg-primary font-display text-base hover:bg-coral/90 px-8">
              <Sparkles className="mr-2 h-5 w-5" />
              Try Our App
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-foreground/20 font-display text-base hover:bg-muted px-8"
            onClick={() => document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" })}
          >
            See How It Works
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: Baby, label: "Child profiles" },
            { icon: Heart, label: "Nap-synced plans" },
            { icon: Star, label: "Live trip guide" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-soft">
                <Icon className="h-4 w-4 text-coral" />
                <span className="font-body text-sm font-medium text-foreground">{item.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Feature cards */}
      <div className="container relative z-10 mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="overflow-hidden rounded-2xl bg-card shadow-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mb-2 flex items-center gap-2 font-display text-lg font-bold text-foreground">
                    <Icon className="h-5 w-5 text-coral" />
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[50px]">
        <svg viewBox="0 0 1440 120" className="w-full fill-card">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};
