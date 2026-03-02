import { useState } from "react";
import { motion } from "framer-motion";
import { EnergyTimelineInteractive } from "./journey/EnergyTimelineInteractive";
import { Hand, ArrowDown } from "lucide-react";

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
      <span className="text-xs font-medium font-body">Drag to try</span>
    </motion.div>
  </motion.div>
);

interface PainPoint {
  emoji: string;
  title: string;
  description: string;
  highlights: { text: string; isNumber: boolean }[];
}

const painPoints: PainPoint[] = [
  {
    emoji: "🔥",
    title: "Endless Tabs",
    description: "",
    highlights: [
      { text: "Juggling ", isNumber: false },
      { text: "8", isNumber: true },
      { text: " different apps and reading ", isNumber: false },
      { text: "200+", isNumber: true },
      { text: " reviews over ", isNumber: false },
      { text: "10 hours", isNumber: true },
      { text: ", just to piece together one weekend trip.", isNumber: false },
    ],
  },
  {
    emoji: "🪫",
    title: "0% Toddler Battery",
    description: "",
    highlights: [
      { text: "Watching a meticulously planned ", isNumber: false },
      { text: "12-hour", isNumber: true },
      { text: " itinerary collapse in ", isNumber: false },
      { text: "1 minute", isNumber: true },
      { text: " because your kid's battery suddenly hit ", isNumber: false },
      { text: "zero", isNumber: true },
      { text: ".", isNumber: false },
    ],
  },
  {
    emoji: "🧳",
    title: "Packing Chaos",
    description: "",
    highlights: [
      { text: "Checking off a ", isNumber: false },
      { text: "50-item", isNumber: true },
      { text: " packing list and hauling ", isNumber: false },
      { text: "3 heavy bags", isNumber: true },
      { text: ", only to arrive and realize you forgot the ", isNumber: false },
      { text: "1 essential", isNumber: true },
      { text: " comfort toy.", isNumber: false },
    ],
  },
];

const PainPointCard = ({ point, index }: { point: PainPoint; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative cursor-pointer group"
    >
      <motion.div
        className={`relative rounded-3xl p-8 md:p-10 transition-all duration-500 overflow-hidden ${
          hovered
            ? "text-card shadow-lifted"
            : "border border-border bg-card shadow-card text-foreground"
        }`}
      >
        {/* Gradient background on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-coral via-sunny to-mint rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative z-10">
          <span className="text-3xl mb-4 block">{point.emoji}</span>
          <h3 className={`font-body text-xl md:text-2xl font-bold mb-3 transition-colors duration-400 ${
            hovered ? "text-card" : "text-foreground"
          }`}>
            {point.title}
          </h3>
          <p className={`font-body text-sm md:text-base leading-relaxed transition-colors duration-400 ${
            hovered ? "text-card/90" : "text-muted-foreground"
          }`}>
            {point.highlights.map((h, i) =>
              h.isNumber ? (
                <span
                  key={i}
                  className={`font-bold text-lg md:text-xl transition-colors duration-400 ${
                    hovered ? "text-card" : "text-coral"
                  }`}
                >
                  {h.text}
                </span>
              ) : (
                <span key={i}>{h.text}</span>
              )
            )}
          </p>

          {/* Hover CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-6 flex items-center gap-2"
          >
            <span className="font-body text-sm font-semibold text-card">
              See how we solve this
            </span>
            <ArrowDown className="h-4 w-4 text-card animate-bounce-soft" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const FeaturesShowcase = () => {
  return (
    <section id="features" className="relative bg-background py-24 lg:py-32 overflow-visible">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-coral/[0.03] blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-sky/[0.03] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 overflow-visible relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 shadow-soft"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-coral animate-[pulse_2s_ease-in-out_infinite]" />
            <span className="font-body font-semibold text-foreground text-sm tracking-wide">Sound Familiar?</span>
          </motion.div>
          <h2 className="mb-5 font-body text-4xl font-bold text-foreground md:text-5xl leading-tight">
            Family trips shouldn't feel like{" "}
            <span className="text-gradient-coral">a second job</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            If any of these hit close to home, you're not alone.
          </p>
        </motion.div>

        {/* Pain point cards */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 lg:mb-32">
          {painPoints.map((point, i) => (
            <PainPointCard key={point.title} point={point} index={i} />
          ))}
        </div>

        {/* Energy Timeline - hero feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative rounded-[2rem] border border-border bg-card p-8 md:p-12 shadow-card overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-sunny to-mint" />
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              <div className="flex-1">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-coral-light px-3 py-1.5">
                  <span className="text-xs font-bold text-coral uppercase tracking-wider font-body">
                    Personalize
                  </span>
                </div>
                <h3 className="mb-2 font-body text-2xl font-bold text-foreground md:text-3xl">
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
      </div>
    </section>
  );
};
