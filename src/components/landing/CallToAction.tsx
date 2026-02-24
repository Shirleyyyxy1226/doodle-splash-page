import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Baby, Star, Heart } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-coral via-sunny to-mint py-24">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-card/10"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-card/10"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div className="absolute left-[10%] top-[20%] text-card/30" animate={{ y: [-20, 20, -20] }} transition={{ duration: 4, repeat: Infinity }}>
          <Baby className="h-12 w-12" />
        </motion.div>
        <motion.div className="absolute right-[15%] top-[30%] text-card/30" animate={{ y: [20, -20, 20] }} transition={{ duration: 5, repeat: Infinity }}>
          <Star className="h-10 w-10 fill-current" />
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 font-handwriting text-4xl text-card md:text-5xl lg:text-6xl">
            Ready to Travel{" "}
            <span className="relative">
              with Confidence?
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 100 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-card/50" />
              </svg>
            </span>
          </h2>

          <p className="mb-10 font-body text-lg text-card/90 md:text-xl">
            Tell us about your kid. We'll handle the rest.
            <br />
            Join families who finally{" "}
            <span className="font-semibold">enjoy</span> traveling with little ones. ✨
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://kiddogo.co.uk/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-card font-display text-lg text-foreground shadow-lifted hover:bg-card/90 px-8">
                <Sparkles className="mr-2 h-5 w-5" />
                Try Our App 🚀
              </Button>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {[
              { icon: Baby, label: "Child profiles" },
              { icon: Heart, label: "Nap-synced plans" },
              { icon: Star, label: "Live trip guide" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2 rounded-full bg-card/20 px-4 py-2 backdrop-blur-sm">
                  <Icon className="h-4 w-4 text-card" />
                  <span className="font-body text-sm font-medium text-card">{item.label}</span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
