import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We used to dread family trips. KiddoGo made our Barcelona vacation the smoothest one yet — nap times, kid-friendly spots, all sorted.",
    author: "Sarah M.",
    role: "Mom of 2",
  },
  {
    quote: "The energy timeline is genius. It planned around my toddler's meltdown hours and we actually enjoyed every activity.",
    author: "James L.",
    role: "Dad of 1",
  },
  {
    quote: "I was skeptical, but the packing list alone saved me. Weather-aware, kid-specific — I forgot nothing for the first time ever.",
    author: "Emily R.",
    role: "Mom of 3",
  },
  {
    quote: "Other travel apps don't get it. KiddoGo understands that traveling with a 2-year-old is a completely different game.",
    author: "David K.",
    role: "Dad of 2",
  },
  {
    quote: "The one-tap adjust feature is a lifesaver. When my kid got cranky, I reshuffled the whole afternoon in seconds.",
    author: "Anna W.",
    role: "Mom of 1",
  },
  {
    quote: "Finally, restaurant and hotel recommendations from real parents. No more guessing if there's a highchair available.",
    author: "Michael T.",
    role: "Dad of 3",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-coral text-coral" />
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section className="relative bg-background py-24 lg:py-32 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-4xl font-bold text-foreground md:text-5xl leading-tight mb-4"
        >
          Built for <em className="text-gradient-coral not-italic">real families</em> with{" "}
          <em className="text-gradient-coral not-italic">real stories.</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          We're grateful to have the support of a passionate community.
          Explore their stories and testimonials below.
        </motion.p>
      </div>

      {/* Scrolling testimonials - two rows, opposite directions */}
      <div className="space-y-6">
        {/* Row 1 - scroll left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[360px] rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <StarRating />
                <p className="mt-4 font-body text-sm text-foreground leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-coral-light flex items-center justify-center">
                    <span className="text-xs font-bold text-coral font-body">{t.author[0]}</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground font-body">{t.author}</p>
                    <p className="text-[10px] text-muted-foreground font-body">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - scroll right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            {[...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)].map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[360px] rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <StarRating />
                <p className="mt-4 font-body text-sm text-foreground leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-sky-light flex items-center justify-center">
                    <span className="text-xs font-bold text-sky font-body">{t.author[0]}</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground font-body">{t.author}</p>
                    <p className="text-[10px] text-muted-foreground font-body">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
