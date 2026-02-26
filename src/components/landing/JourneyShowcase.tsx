import { motion } from "framer-motion";
import { Baby, Sun, Moon, Clock, Utensils, Zap, Cookie, BedDouble, Wind, MapPin, Star, Navigation, Footprints, Users, ChevronRight } from "lucide-react";

// ── Step 1: Daily Routine mockup (based on app screenshot) ──
const RoutineMockup = () => (
  <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
    <div className="bg-gradient-to-br from-coral-light via-sunny-light to-mint-light p-3">
      <div className="flex items-center gap-2.5">
        <div className="h-9 w-9 rounded-full bg-mint-light flex items-center justify-center">
          <Baby className="h-4 w-4 text-mint" />
        </div>
        <div>
          <p className="font-display text-xs font-bold text-foreground">Milo's Daily Routine</p>
          <p className="text-[9px] text-muted-foreground">4 years old · A typical day</p>
        </div>
      </div>
    </div>
    <div className="p-3 space-y-0">
      {[
        { time: "7:00 AM", icon: Sun, label: "Start of day", title: "Wake up", color: "text-sunny", bg: "" },
        { time: "8:00 AM", icon: Utensils, label: "Meal time", title: "Breakfast", color: "text-sunny", bg: "" },
        { time: "9:00 AM", icon: Zap, label: "Most energetic 9–11 AM", title: "High energy window", color: "text-mint", bg: "bg-mint-light/40" },
        { time: "10:00 AM", icon: Cookie, label: "Between meals", title: "Snack time", color: "text-coral", bg: "" },
        { time: "12:00 PM", icon: Utensils, label: "Meal time", title: "Lunch", color: "text-sunny", bg: "" },
        { time: "12:30 PM", icon: BedDouble, label: "12:30 – 2:00 PM", title: "Nap time", color: "text-sky", bg: "bg-sky-light/40" },
        { time: "3:00 PM", icon: Cookie, label: "Between meals", title: "Snack time", color: "text-coral", bg: "" },
        { time: "7:30 PM", icon: Moon, label: "Wind down", title: "Bedtime", color: "text-sky", bg: "" },
      ].map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.time + item.title} className={`flex items-center gap-2.5 py-1.5 px-1 ${item.bg} rounded-md`}>
            <span className="text-[8px] text-muted-foreground w-12 shrink-0 font-medium">{item.time}</span>
            <div className={`h-2 w-2 rounded-full ${item.color.replace("text-", "bg-")} shrink-0`} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <Icon className={`h-2.5 w-2.5 ${item.color}`} />
                <span className={`text-[8px] font-medium ${item.color}`}>{item.label}</span>
              </div>
              <p className="text-[10px] font-bold text-foreground">{item.title}</p>
            </div>
          </div>
        );
      })}
    </div>
    <div className="mx-3 mb-3 rounded-xl bg-muted/40 p-2.5">
      <p className="text-[9px] font-bold text-foreground mb-1">HOW THIS SHAPES YOUR TRIP</p>
      <div className="space-y-0.5">
        {[
          "Morning energy high — great for active plans",
          "Afternoon nap usually around 12:30",
          "Snacks needed every 2 hours",
        ].map((tip) => (
          <div key={tip} className="flex items-start gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-coral mt-1 shrink-0" />
            <p className="text-[8px] text-muted-foreground">{tip}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── Step 2: Itinerary mockup (compact) ──
const ItineraryMockup = () => (
  <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
    <div className="p-3 pb-0">
      <p className="font-display text-xs font-bold text-foreground">Your Itinerary</p>
      <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-coral-light px-2 py-0.5">
        <Baby className="h-2.5 w-2.5 text-coral" />
        <span className="text-[8px] font-semibold text-coral">Designed for Milo, age 3</span>
      </div>
      <div className="flex gap-1.5 mt-2 mb-2">
        {[1, 2, 3].map((d) => (
          <div key={d} className={`px-3 py-1 rounded-lg text-[10px] font-medium ${d === 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
            Day {d}
          </div>
        ))}
      </div>
    </div>
    <div className="px-3 pb-2 space-y-1.5">
      {[
        {
          time: "10:00 AM · ~1 HR",
          title: "Arrive & unpack",
          desc: "Get settled into the resort.",
          rating: "94% parents say kid-friendly",
          tags: ["Crib provided", "Pool access"],
        },
        {
          time: "12:45 PM · ~1 HR",
          title: "Nap / rest time 💤",
          desc: "Aligned with Milo's nap window.",
          isRest: true,
        },
      ].map((item) => (
        <div key={item.title} className={`rounded-xl border-l-[3px] ${item.isRest ? "border-l-sky bg-sky-light/30" : "border-l-coral bg-card"} p-2`}>
          <div className="flex items-center gap-1 mb-0.5">
            <MapPin className="h-2.5 w-2.5 text-muted-foreground" />
            <span className="text-[8px] text-muted-foreground font-medium">{item.time}</span>
          </div>
          <p className="text-[10px] font-bold text-foreground">{item.title}</p>
          <p className="text-[8px] text-muted-foreground">{item.desc}</p>
          {item.rating && (
            <div className="flex items-center gap-1 mt-0.5">
              <Users className="h-2.5 w-2.5 text-coral" />
              <span className="text-[8px] font-medium text-foreground">{item.rating}</span>
            </div>
          )}
          {item.tags && (
            <div className="flex gap-1 flex-wrap mt-0.5">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-coral-light px-1.5 py-0.5 text-[7px] font-medium text-coral">{tag}</span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    {/* Quick adjustments - bigger */}
    <div className="px-3 pb-3">
      <p className="text-[10px] font-bold text-foreground mb-2">Quick adjustments</p>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Make lighter", icon: "✓", desc: "Remove low-priority activities", active: true },
          { label: "Add more rest", icon: "🌙", desc: "Insert buffer time", active: false },
          { label: "Less walking", icon: "👣", desc: "Keep activities closer", active: false },
          { label: "Stay nearby", icon: "✓", desc: "Near accommodation", active: true },
        ].map((adj) => (
          <div key={adj.label} className={`rounded-xl border p-2.5 ${adj.active ? "border-coral bg-coral-light/40" : "border-border"}`}>
            <p className="text-[10px] font-bold text-foreground">{adj.label}</p>
            <p className="text-[7px] text-muted-foreground">{adj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── Step 3: Live map + plan mockup ──
const LivePlanMockup = () => (
  <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
    <div className="p-3 pb-1">
      <p className="font-display text-xs font-bold text-foreground">Your Plan</p>
      <p className="text-[10px] text-muted-foreground mb-2">Day 2 · Cultural Morning</p>
      <div className="flex gap-1.5 mb-2">
        {[1, 2, 3].map((d) => (
          <div
            key={d}
            className={`px-3 py-1 rounded-lg text-[10px] font-medium ${
              d === 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            Day {d}
          </div>
        ))}
      </div>
    </div>
    {/* Map area */}
    <div className="relative h-32 mx-3 rounded-xl bg-gradient-to-br from-sky-light via-mint-light to-sunny-light overflow-hidden mb-2">
      {/* Faux map grid */}
      <div className="absolute inset-0 opacity-15">
        {[...Array(8)].map((_, i) => (
          <div key={`h-${i}`} className="absolute h-px w-full bg-foreground/30" style={{ top: `${i * 14}%` }} />
        ))}
        {[...Array(8)].map((_, i) => (
          <div key={`v-${i}`} className="absolute h-full w-px bg-foreground/30" style={{ left: `${i * 14}%` }} />
        ))}
      </div>
      {/* Route line */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
        <path d="M40,70 C60,30 80,25 100,35 S140,50 160,30" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="0" opacity="0.7" />
        <circle cx="40" cy="70" r="4" fill="hsl(var(--primary))" />
        <circle cx="100" cy="35" r="3" fill="hsl(var(--coral))" />
        <circle cx="160" cy="30" r="4" fill="hsl(var(--coral))" />
      </svg>
      {/* Distance badges */}
      <div className="absolute top-2 right-2 bg-card/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-sm">
        <p className="text-[8px] font-bold text-foreground">🚶 53 min</p>
        <p className="text-[7px] text-muted-foreground">3.9 km</p>
      </div>
      <div className="absolute bottom-2 left-2 bg-card/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-sm">
        <p className="text-[8px] font-bold text-foreground">🚶 51 min</p>
        <p className="text-[7px] text-muted-foreground">3.8 km</p>
      </div>
      {/* Place labels */}
      <div className="absolute top-3 left-3">
        <p className="text-[7px] font-medium text-foreground/60">Sagrada Família</p>
      </div>
    </div>
    <div className="px-3 pb-3 space-y-1.5">
      {[
        { time: "9:30 AM · ~45 min", title: "Breakfast at resort", desc: "Start slow. Buffet options for little ones." },
        { time: "10:30 AM · ~1 hr", title: "Park Güell visit", desc: "Mosaic wonderland. Book the quieter morning slot.", tip: "🧩 Colourful tiles keep toddlers engaged" },
        { time: "12:00 PM · ~45 min", title: "Lunch nearby", desc: "Family-friendly tapas near the park." },
      ].map((item) => (
        <div key={item.title} className="rounded-xl border border-border p-2.5">
          <div className="flex items-center gap-1 mb-0.5">
            <Clock className="h-2.5 w-2.5 text-muted-foreground" />
            <span className="text-[8px] text-muted-foreground font-medium">{item.time}</span>
          </div>
          <p className="text-[10px] font-bold text-foreground">{item.title}</p>
          <p className="text-[8px] text-muted-foreground">{item.desc}</p>
          {item.tip && (
            <div className="mt-1 rounded-lg bg-coral-light/60 px-2 py-1">
              <p className="text-[8px] font-medium text-coral">{item.tip}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const steps = [
  {
    step: "1",
    emoji: "🧒",
    title: "Share your child's rhythm",
    description: "Nap times, energy peaks, meal windows, allergies — we learn your child's daily routine so every plan fits naturally.",
    Mockup: RoutineMockup,
    color: { bg: "bg-coral", text: "text-coral" },
  },
  {
    step: "2",
    emoji: "🗺️",
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
    emoji: "📍",
    title: "Follow along, stress-free",
    description: "Live map with walking distances, real-time timeline, and smart tips — so you can be present instead of planning.",
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

        {/* Steps */}
        <div className="mx-auto max-w-5xl space-y-20 lg:space-y-28 overflow-visible">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={step.step}
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
                      {step.emoji}
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
                      {/* On lg: all on right. On small: alternate left/right */}
                      <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 0.35, x: 0 }}
                        viewport={{ once: true }}
                        className="absolute -left-40 top-[2%] lg:-right-64 lg:left-auto lg:top-[5%] font-display text-3xl font-extrabold text-coral whitespace-nowrap select-none pointer-events-none"
                      >
                        Age & Energy
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 0.3, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="absolute -right-36 top-[28%] lg:-right-56 lg:top-[30%] font-display text-3xl font-extrabold text-sky whitespace-nowrap select-none pointer-events-none"
                      >
                        Nap Windows
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 0.3, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="absolute -left-32 top-[55%] lg:-right-60 lg:left-auto lg:top-[55%] font-display text-3xl font-extrabold text-sunny whitespace-nowrap select-none pointer-events-none"
                      >
                        Allergies
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 0.35, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="absolute -right-32 top-[78%] lg:-right-52 lg:top-[78%] font-display text-3xl font-extrabold text-mint whitespace-nowrap select-none pointer-events-none"
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
            );
          })}
        </div>

        {/* Connecting arrow */}


      </div>
    </section>
  );
};
