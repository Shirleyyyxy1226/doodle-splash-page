import { motion } from "framer-motion";
import { RoutineMockup } from "./journey/RoutineMockup";
import { ItineraryMockup } from "./journey/ItineraryMockup";
import { LivePlanMockup } from "./journey/LivePlanMockup";
import { PlaceReviewMockup } from "./journey/PlaceReviewMockup";
import { HotelOptionsMockup } from "./journey/HotelOptionsMockup";
import { TipsMockup } from "./journey/TipsMockup";
import { QuickAdjustmentsMockup } from "./journey/QuickAdjustmentsMockup";
import { PackingListMockup } from "./journey/PackingListMockup";

const features = [
  {
    badge: "Discover",
    badgeColor: "bg-coral-light text-coral",
    title: "Trusted places, rated by parents",
    description: "Every recommendation is backed by real parent reviews — filtered by child age, stroller access, and more.",
    Mockup: PlaceReviewMockup,
  },
  {
    badge: "Stay & Dine",
    badgeColor: "bg-sky-light text-sky",
    title: "Kid-friendly stays & dining",
    description: "Hotels with cribs, restaurants with highchairs — filtered for what actually matters with little ones.",
    Mockup: HotelOptionsMockup,
  },
  {
    badge: "Tips",
    badgeColor: "bg-sunny-light text-sunny",
    title: "Smart tips that think ahead",
    description: "Context-aware reminders based on your child's routine, the weather, and what other parents found useful.",
    Mockup: TipsMockup,
  },
  {
    badge: "Adjust",
    badgeColor: "bg-mint-light text-mint",
    title: "One-tap adjustments",
    description: "Too tired? Too hot? One tap and we rearrange your entire plan — no re-planning needed.",
    Mockup: QuickAdjustmentsMockup,
  },
  {
    badge: "Pack",
    badgeColor: "bg-lavender-light text-lavender",
    title: "Packing lists, customized",
    description: "Weather-aware, destination-specific packing lists so you never forget the essentials.",
    Mockup: PackingListMockup,
  },
];

const steps = [
  {
    step: "1",
    title: "Share your child's rhythm",
    description: "Nap times, energy peaks, meal windows, allergies — we learn your child's daily routine so every plan fits naturally.",
    Mockup: RoutineMockup,
    color: { bg: "bg-coral", text: "text-coral" },
  },
  {
    step: "2",
    title: "An itinerary built around your child",
    description: "",
    highlights: [
      { text: "Age & Energy", color: "text-coral" },
      { text: "Nap Windows", color: "text-sky" },
      { text: "Allergies", color: "text-sunny" },
      { text: "Interests", color: "text-mint" },
    ],
    Mockup: ItineraryMockup,
    color: { bg: "bg-sunny", text: "text-sunny" },
  },
  {
    step: "3",
    title: "Follow along, stress-free",
    description: "Live map with walking distances, parent ratings, and smart tips — so you can be present instead of planning.",
    Mockup: LivePlanMockup,
    color: { bg: "bg-mint", text: "text-mint" },
  },
];

export const JourneyShowcase = () => {
  return (
    <section id="journey" className="bg-card py-20 lg:py-28 overflow-visible">
      <div className="container mx-auto px-4 overflow-visible">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl rounded-3xl bg-gradient-to-br from-coral via-sunny to-mint px-6 py-12 text-center shadow-lifted md:px-12 md:py-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-card/20 backdrop-blur-sm px-4 py-2">
            <span className="text-lg">✨</span>
            <span className="font-body font-semibold text-card">How KiddoGo Works</span>
          </div>
          <h2 className="mb-4 font-handwriting text-4xl leading-tight text-card md:text-5xl">
            Your Journey,{" "}
            <span className="relative">
              Designed for Kids
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 100 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-card/50" />
              </svg>
            </span>
          </h2>
          <p className="font-body text-lg text-card/90">
            Three steps from "we have a toddler" to "we had the best trip ever."
          </p>
        </motion.div>

        {/* Features sub-header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-5xl"
        >
          <h2 className="font-body text-2xl font-bold text-foreground md:text-3xl leading-tight">
            Everything you need,{" "}
            <span className="text-gradient-coral">in one place</span>
          </h2>
        </motion.div>

        {/* Features */}
        <div className="mx-auto max-w-5xl space-y-20 lg:space-y-28 mb-20 lg:mb-28">
          {features.map((feature, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col items-center gap-8 lg:flex-row ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1 text-center lg:text-left">
                  <div className={`mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1.5 ${feature.badgeColor}`}>
                    <span className="text-xs font-bold uppercase tracking-wider font-body">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="mb-3 font-body text-2xl font-bold text-foreground md:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                    {feature.description}
                  </p>
                </div>
                <div className="w-full max-w-[280px] flex-shrink-0">
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

        {/* Steps */}
        <div className="mx-auto max-w-5xl space-y-20 lg:space-y-28 overflow-visible">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={step.step}>
                <motion.div
                  id={`step-${step.step}`}
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
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${step.color.bg} text-primary-foreground font-display text-lg font-bold shadow-soft`}>
                        {step.step}
                      </div>
                      <span className={`text-xs font-bold ${step.color.text} uppercase tracking-wider font-display`}>
                        Step {step.step}
                      </span>
                    </div>
                    <h3 className="mb-3 font-body text-2xl font-bold text-foreground md:text-3xl">
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className="font-body text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                        {step.description}
                      </p>
                    )}
                    {step.highlights && (
                      <p className="mt-2 font-body text-sm text-muted-foreground">
                        Personalised around what matters most.
                      </p>
                    )}
                  </div>

                  {/* Mockup with floating text */}
                  <div className="w-full max-w-[280px] flex-shrink-0 relative overflow-visible">
                    {step.highlights && (
                      <>
                        <motion.span
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 0.35, x: 0 }}
                          viewport={{ once: true }}
                          className="absolute -left-48 top-[2%] lg:left-auto lg:right-[-44rem] font-display text-3xl font-extrabold text-coral whitespace-nowrap select-none pointer-events-none text-right"
                        >
                          Age & Energy
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 0.3, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                          className="absolute -right-48 top-[28%] lg:right-[-44rem] font-display text-3xl font-extrabold text-sky whitespace-nowrap select-none pointer-events-none text-right"
                        >
                          Nap Windows
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 0.3, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 }}
                          className="absolute -left-48 top-[55%] lg:left-auto lg:right-[-44rem] font-display text-3xl font-extrabold text-sunny whitespace-nowrap select-none pointer-events-none text-right"
                        >
                          Allergies
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 0.35, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                          className="absolute -right-48 top-[78%] lg:right-[-44rem] font-display text-3xl font-extrabold text-mint whitespace-nowrap select-none pointer-events-none text-right"
                        >
                          Interests
                        </motion.span>
                      </>
                    )}
                    <motion.div
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="transition-shadow hover:shadow-lifted relative z-10"
                    >
                      <step.Mockup />
                    </motion.div>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
