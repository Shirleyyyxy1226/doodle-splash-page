import { motion } from "framer-motion";
import { EnergyTimelineInteractive } from "./journey/EnergyTimelineInteractive";
import { PlaceReviewMockup } from "./journey/PlaceReviewMockup";
import { HotelOptionsMockup } from "./journey/HotelOptionsMockup";
import { TipsMockup } from "./journey/TipsMockup";
import { QuickAdjustmentsMockup } from "./journey/QuickAdjustmentsMockup";
import { PackingListMockup } from "./journey/PackingListMockup";
import { MapPin, Hotel, Lightbulb, Settings, Luggage, Hand } from "lucide-react";

interface Feature {
  icon: typeof MapPin;
  tag: string;
  tagColor: string;
  tagBg: string;
  accentGradient: string;
  title: string;
  description: string;
  Mockup: React.ComponentType;
}

const features: Feature[] = [
  {
    icon: MapPin,
    tag: "Trusted Places",
    tagColor: "text-coral",
    tagBg: "bg-coral-light",
    accentGradient: "from-coral/5 to-transparent",
    title: "Places parents actually trust",
    description:
      "Every recommendation comes with real parent reviews, kid-specific tags, and tips from families who've been there with toddlers.",
    Mockup: PlaceReviewMockup,
  },
  {
    icon: Hotel,
    tag: "Stays & Dining",
    tagColor: "text-sky",
    tagBg: "bg-sky-light",
    accentGradient: "from-sky/5 to-transparent",
    title: "Kid-friendly stays & dining",
    description:
      "Hotels with cribs, restaurants with highchairs — filtered by what actually matters when you travel with little ones.",
    Mockup: HotelOptionsMockup,
  },
  {
    icon: Lightbulb,
    tag: "Smart Tips",
    tagColor: "text-sunny",
    tagBg: "bg-sunny-light",
    accentGradient: "from-sunny/5 to-transparent",
    title: "Tips that think one step ahead",
    description:
      "We tell you what to watch out for, why we planned it this way, and what other parents wish they'd known.",
    Mockup: TipsMockup,
  },
  {
    icon: Settings,
    tag: "One-tap Adjust",
    tagColor: "text-mint",
    tagBg: "bg-mint-light",
    accentGradient: "from-mint/5 to-transparent",
    title: "Change your plan in one tap",
    description:
      "Too much walking? Need more rest? Tap once and the entire plan reshuffles — always with more options to explore.",
    Mockup: QuickAdjustmentsMockup,
  },
  {
    icon: Luggage,
    tag: "Packing",
    tagColor: "text-lavender",
    tagBg: "bg-lavender-light",
    accentGradient: "from-lavender/5 to-transparent",
    title: "Pack smart, forget nothing",
    description:
      "Weather-aware packing lists customized for your destination, with kid essentials sorted by category.",
    Mockup: PackingListMockup,
  },
];

const DragHintAnimation = () => (
  <motion.div
    className="flex items-center gap-2 text-muted-foreground"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <motion.div
      animate={{ x: [0, 12, 0, -12, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
      className="flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 shadow-soft"
    >
      <Hand className="h-3.5 w-3.5 text-coral" />
      <span className="text-xs font-medium">Drag to try</span>
    </motion.div>
  </motion.div>
);

export const FeaturesShowcase = () => {
  return (
    <section id="features" className="relative bg-background py-24 lg:py-32 overflow-visible">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-coral/[0.03] blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-sky/[0.03] blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-mint/[0.03] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 overflow-visible relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 shadow-soft"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-coral animate-[pulse_2s_ease-in-out_infinite]" />
            <span className="font-display font-semibold text-foreground text-sm tracking-wide">Features</span>
          </motion.div>
          <h2 className="mb-5 font-display text-4xl font-bold text-foreground md:text-5xl leading-tight">
            Everything you need,{" "}
            <span className="text-gradient-coral">built for kids</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            From personalized routines to real parent reviews — every detail is designed around your child.
          </p>
        </motion.div>

        {/* Energy Timeline - hero feature with premium card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl mb-24 lg:mb-32"
        >
          <div className="relative rounded-[2rem] border border-border bg-card p-8 md:p-12 shadow-card overflow-hidden">
            {/* Decorative gradient top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-sunny to-mint" />
            
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              <div className="flex-1">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-coral-light px-3 py-1.5">
                  <span className="text-xs font-bold text-coral uppercase tracking-wider font-display">
                    Personalize
                  </span>
                </div>
                <h3 className="mb-2 font-display text-2xl font-bold text-foreground md:text-3xl">
                  Customize your child's rhythm
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed max-w-lg">
                  Drag and resize energy blocks to match your child's daily pattern — nap times, energy peaks, meal windows.
                </p>
              </div>
              <div className="flex-shrink-0 self-center md:self-start md:mt-8">
                <DragHintAnimation />
              </div>
            </div>
            <EnergyTimelineInteractive />
          </div>
        </motion.div>

        {/* Feature cards - premium alternating layout */}
        <div className="mx-auto max-w-5xl space-y-16 lg:space-y-24 overflow-visible">
          {features.map((feature, i) => {
            const isEven = i % 2 === 0;
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.tag}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative flex flex-col items-center gap-10 lg:gap-16 lg:flex-row ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text side */}
                <div className="flex-1 text-center lg:text-left">
                  <div className={`mb-4 inline-flex items-center gap-2.5 rounded-full ${feature.tagBg} px-4 py-2`}>
                    <Icon className={`h-4 w-4 ${feature.tagColor}`} />
                    <span className={`text-xs font-bold ${feature.tagColor} uppercase tracking-wider font-display`}>
                      {feature.tag}
                    </span>
                  </div>
                  <h3 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl leading-tight">
                    {feature.title}
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                    {feature.description}
                  </p>
                </div>

                {/* Mockup side with premium frame */}
                <div className="w-full max-w-[300px] flex-shrink-0">
                  <motion.div
                    whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                    className="relative"
                  >
                    {/* Glow behind mockup */}
                    <div className={`absolute inset-4 rounded-3xl bg-gradient-to-br ${feature.accentGradient} blur-2xl`} />
                    <div className="relative">
                      <feature.Mockup />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
