import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.svg";
import heroBgV2 from "@/assets/hero-bg-v2.svg";
import heroBgV3 from "@/assets/hero-bg-v3.png";

const HeroContent = () => (
  <>
    <div className="container relative z-10 mx-auto flex flex-1 flex-col items-center justify-center px-4 text-center pt-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-6 font-body text-3xl font-bold leading-[2] md:text-5xl lg:text-6xl text-foreground [transform:scaleY(0.6)]"
      >
        Travel with Kids,
        <br />
        <span className="text-gradient-coral">Without the Mental Load.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mx-auto mb-8 max-w-lg font-body text-sm text-muted-foreground md:text-base"
      >
        Age, naps, allergies, energy levels — no detail is too small.
        KiddoGo builds travel itineraries that{" "}
        <span className="font-semibold text-foreground">actually work for families</span>. ✨
      </motion.p>

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
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="relative z-10 pb-8 text-center"
    >
      <ArrowDown className="mx-auto h-5 w-5 text-muted-foreground animate-bounce" />
    </motion.div>
  </>
);

const HeroSection = ({ label, bgImage, bgStyle }: { label: string; bgImage: string; bgStyle?: React.CSSProperties }) => (
  <section
    className="relative overflow-hidden bg-cream min-h-screen flex flex-col"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
      backgroundRepeat: 'no-repeat',
      ...bgStyle,
    }}
  >
    <div className="absolute top-24 left-6 z-20 rounded-full bg-foreground/70 px-4 py-1.5 text-sm font-bold text-primary-foreground">
      {label}
    </div>
    <HeroContent />
    <div className="absolute bottom-0 left-0 right-0 translate-y-[50px]">
      <svg viewBox="0 0 1440 120" className="w-full fill-card">
        <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
      </svg>
    </div>
  </section>
);

export const Hero = () => {
  return (
    <>
      <HeroSection label="Version 1" bgImage={heroBg} />
      <HeroSection label="Version 2" bgImage={heroBgV2} bgStyle={{ backgroundBlendMode: 'multiply' }} />
      <HeroSection label="Version 3" bgImage={heroBgV3} />
    </>
  );
};
