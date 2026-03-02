import { motion } from "framer-motion";
import { EnergyTimelineInteractive } from "./journey/EnergyTimelineInteractive";
import { PlaceReviewMockup } from "./journey/PlaceReviewMockup";
import { HotelOptionsMockup } from "./journey/HotelOptionsMockup";
import { TipsMockup } from "./journey/TipsMockup";
import { QuickAdjustmentsMockup } from "./journey/QuickAdjustmentsMockup";
import { PackingListMockup } from "./journey/PackingListMockup";
import { Sparkles, MapPin, Hotel, Lightbulb, Settings, Luggage } from "lucide-react";

interface Feature {
  icon: typeof Sparkles;
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  Mockup: React.ComponentType;
}

const features: Feature[] = [
  {
    icon: MapPin,
    tag: "Places",
    tagColor: "text-coral",
    title: "Places parents actually trust",
    description:
      "Every recommendation comes with real parent reviews, kid-specific tags, and tips from families who've been there with toddlers.",
    Mockup: PlaceReviewMockup,
  },
  {
    icon: Hotel,
    tag: "Stays & Dining",
    tagColor: "text-sky",
    title: "Kid-friendly stays & dining",
    description:
      "Hotels with cribs, restaurants with highchairs — filtered by what actually matters when you travel with little ones.",
    Mockup: HotelOptionsMockup,
  },
  {
    icon: Lightbulb,
    tag: "Smart Tips",
    tagColor: "text-sunny",
    title: "Tips that think one step ahead",
    description:
      "We tell you what to watch out for, why we planned it this way, and what other parents wish they'd known.",
    Mockup: TipsMockup,
  },
  {
    icon: Settings,
    tag: "Adjustments",
    tagColor: "text-mint",
    title: "Change your plan in one tap",
    description:
      "Too much walking? Need more rest? Tap once and the entire plan reshuffles — always with more options to explore.",
    Mockup: QuickAdjustmentsMockup,
  },
  {
    icon: Luggage,
    tag: "Packing",
    tagColor: "text-lavender",
    title: "Pack smart, forget nothing",
    description:
      "Weather-aware packing lists customized for your destination, with kid essentials sorted by category.",
    Mockup: PackingListMockup,
  },
];

export const FeaturesShowcase = () => {
  return (
    <section id="features" className="bg-background py-20 lg:py-28 overflow-visible">
      <div className="container mx-auto px-4 overflow-visible">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-coral-light px-4 py-2">
            <Sparkles className="h-4 w-4 text-coral" />
            <span className="font-body font-semibold text-coral text-sm">Features</span>
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Everything you need,{" "}
            <span className="text-gradient-coral">built for kids</span>
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            From personalized routines to real parent reviews — every detail is designed around your child.
          </p>
        </motion.div>

        {/* Energy Timeline - full width hero feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl mb-20 lg:mb-28"
        >
          <div className="text-center mb-6">
            <div className="mb-3 inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-coral text-primary-foreground shadow-soft">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold text-coral uppercase tracking-wider font-display">
                Personalize
              </span>
            </div>
            <h3 className="mb-3 font-body text-2xl font-bold text-foreground md:text-3xl">
              Customize your child's rhythm
            </h3>
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Drag and resize energy blocks to match your child's daily pattern — nap times, energy peaks, meal windows.
            </p>
          </div>
          <EnergyTimelineInteractive />
        </motion.div>

        {/* Feature cards - alternating layout */}
        <div className="mx-auto max-w-5xl space-y-20 lg:space-y-28 overflow-visible">
          {features.map((feature, i) => {
            const isEven = i % 2 === 0;
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.tag}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col items-center gap-8 lg:flex-row ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-3 inline-flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted shadow-soft">
                      <Icon className={`h-5 w-5 ${feature.tagColor}`} />
                    </div>
                    <span className={`text-xs font-bold ${feature.tagColor} uppercase tracking-wider font-display`}>
                      {feature.tag}
                    </span>
                  </div>
                  <h3 className="mb-3 font-body text-2xl font-bold text-foreground md:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                    {feature.description}
                  </p>
                </div>

                {/* Mockup */}
                <div className="w-full max-w-[300px] flex-shrink-0">
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="transition-shadow hover:shadow-lifted"
                  >
                    <feature.Mockup />
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
