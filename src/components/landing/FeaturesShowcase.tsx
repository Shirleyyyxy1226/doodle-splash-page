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
  title: string;
  highlights: { text: string; isNumber: boolean }[];
}

const painPoints: PainPoint[] = [
  {
    title: "Endless Tabs",
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
    title: "The Toddler Boss",
    highlights: [
      { text: "Trying to visit ", isNumber: false },
      { text: "3", isNumber: true },
      { text: " must-see spots, only to realize your whole day is dictated by ", isNumber: false },
      { text: "1", isNumber: true },
      { text: " toddler's unpredictable energy levels and sudden obsessions.", isNumber: false },
    ],
  },
  {
    title: "Packing Chaos",
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

        <div className="relative z-10 flex flex-col justify-center min-h-[180px]">
          {/* Default content - hidden on hover */}
          <motion.div
            animate={{ opacity: hovered ? 0 : 1, scale: hovered ? 0.95 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-body text-xl md:text-2xl font-bold mb-3 text-foreground">
              {point.title}
            </h3>
            <p className="font-body text-sm md:text-base leading-relaxed text-muted-foreground">
              {point.highlights.map((h, i) =>
                h.isNumber ? (
                  <span key={i} className="font-bold text-lg md:text-xl text-coral">
                    {h.text}
                  </span>
                ) : (
                  <span key={i}>{h.text}</span>
                )
              )}
            </p>
          </motion.div>

          {/* Hover content - only "See how we solve this" */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 1.05 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <span className="font-handwriting text-3xl md:text-4xl text-card mb-3 text-center">
              See how we solve this
            </span>
            <ArrowDown className="h-5 w-5 text-card animate-bounce" />
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
          className="mx-auto mb-16 max-w-5xl"
        >
          <h2 className="font-body text-2xl font-bold text-foreground md:text-3xl leading-tight">
            Planning with kids is{" "}
            <span className="text-gradient-coral">overwhelming</span>
          </h2>
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
