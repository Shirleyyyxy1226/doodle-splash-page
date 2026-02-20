import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Baby, ArrowDown, Sparkles, Heart, Shield, Plane, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";
import kiddogoLogo from "@/assets/kiddogo-logo.svg";
import heroBg from "@/assets/hero-bg.svg";

const floatAnimation = {
  y: [0, -12, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
};

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-cream pt-20" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Floating animated icons */}
      <motion.div animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-28 left-[8%] z-10">
        <div className="rounded-full bg-coral-light/60 p-3 shadow-soft backdrop-blur-sm"><Plane className="h-5 w-5 text-coral" /></div>
      </motion.div>
      <motion.div animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-36 right-[10%] z-10">
        <div className="rounded-full bg-sunny-light/60 p-3 shadow-soft backdrop-blur-sm"><Heart className="h-5 w-5 text-secondary" /></div>
      </motion.div>
      <motion.div animate={{ y: [0, -10, 0], rotate: [0, 12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-64 left-[5%] z-10">
        <div className="rounded-full bg-mint-light/60 p-3 shadow-soft backdrop-blur-sm"><MapPin className="h-5 w-5 text-mint" /></div>
      </motion.div>
      <motion.div animate={{ y: [0, 14, 0], rotate: [0, -6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-56 right-[6%] z-10">
        <div className="rounded-full bg-coral-light/60 p-3 shadow-soft backdrop-blur-sm"><Star className="h-5 w-5 text-coral" /></div>
      </motion.div>

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 h-40 w-40 rounded-full bg-coral-light opacity-30 blur-2xl" />
      <div className="absolute top-60 right-16 h-48 w-48 rounded-full bg-sunny-light opacity-30 blur-2xl" />
      <div className="absolute bottom-40 left-1/3 h-32 w-32 rounded-full bg-mint-light opacity-30 blur-2xl" />

      <div className="container relative z-10 mx-auto px-4 py-6 lg:py-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-coral-light px-4 py-2"
          >
            <img src={kiddogoLogo} alt="Kiddogo" className="h-6 w-6" />
            <span className="font-display text-sm font-bold text-foreground">Kiddogo</span>
            <span className="mx-1 h-4 w-px bg-foreground/20" />
            <span className="font-body text-sm font-semibold text-muted-foreground">Kid-Conscious Travel</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-3 font-display text-2xl font-bold leading-[1.1] md:text-3xl lg:text-4xl"
          >
            Tell Us About Your Kid.
            <br />
            <span className="relative inline-block">
              <span className="text-gradient-coral">We Plan Around Them.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-1 left-0 right-0 h-2 rounded-full bg-sunny-light origin-left"
              />
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mb-6 max-w-lg font-body text-sm text-muted-foreground md:text-base"
          >
            Age, naps, allergies, energy levels — no detail is too small. 
            Kiddogo builds travel itineraries that{" "}
            <span className="font-semibold text-foreground">actually work for families</span>. ✨
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <a href="https://kiddogo.co.uk/demo" target="_blank" rel="noopener noreferrer">
              <Button size="default" className="bg-primary font-display hover:bg-coral/90 px-6">
                <Sparkles className="mr-2 h-5 w-5" />
                Try Our App
              </Button>
            </a>
            <Button
              size="default"
              variant="outline"
              className="border-2 border-foreground/20 font-display hover:bg-muted"
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
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
          >
            {[
              { icon: Baby, label: "All ages welcome" },
              { icon: Shield, label: "Allergy-aware" },
              { icon: Heart, label: "Nap-synced plans" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 shadow-soft">
                  <Icon className="h-3.5 w-3.5 text-coral" />
                  <span className="font-body text-xs font-medium text-foreground">{item.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Spacer to maintain layout */}
        <div className="mt-8 h-[360px]" />
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full fill-card">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};
