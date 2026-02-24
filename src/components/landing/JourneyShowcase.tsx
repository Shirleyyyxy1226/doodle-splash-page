import { motion } from "framer-motion";
import { Baby, Sun, MapPin, Moon, AlertTriangle, Star, Heart, UserCheck, Clock, Wind, Footprints, Navigation, ChevronDown } from "lucide-react";

// ── Step 1: Profile mockup ──
const ProfileMockup = () => (
  <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
    <div className="bg-gradient-to-br from-coral-light via-sunny-light to-mint-light p-4">
      <p className="font-display text-xs font-bold text-foreground">Family Profile</p>
      <p className="text-[10px] text-muted-foreground">Manage travel preferences</p>
    </div>
    <div className="p-3 space-y-2">
      <div className="flex items-center gap-2 rounded-xl bg-muted/50 p-2.5">
        <div className="h-8 w-8 rounded-full bg-coral-light flex items-center justify-center shrink-0">
          <Baby className="h-4 w-4 text-coral" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display text-xs font-bold text-foreground">Milo's Profile</p>
          <p className="text-[10px] text-muted-foreground">Used to shape your itinerary</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { icon: Sun, label: "Age", value: "3 years" },
          { icon: MapPin, label: "Mobility", value: "walks but tires" },
          { icon: Moon, label: "Naps", value: "occasional rest" },
          { icon: AlertTriangle, label: "Allergies", value: "peanuts" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="bg-muted/30 rounded-lg p-2">
              <div className="flex items-center gap-1 text-muted-foreground mb-0.5">
                <Icon className="h-2.5 w-2.5" />
                <span className="text-[9px]">{item.label}</span>
              </div>
              <p className="text-[10px] font-semibold text-foreground">{item.value}</p>
            </div>
          );
        })}
      </div>
      <div className="flex gap-1">
        {["Animals", "Outdoor play", "Water"].map((interest) => (
          <span key={interest} className="inline-flex items-center gap-0.5 rounded-full bg-muted/50 px-2 py-0.5 text-[9px] font-medium text-foreground">
            <Heart className="h-2 w-2 text-coral" />
            {interest}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// ── Step 2: Traveler selection mockup ──
const TravelerMockup = () => (
  <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
    <div className="h-20 bg-gradient-to-br from-sky-light to-mint-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
      <div className="absolute bottom-2 left-3">
        <p className="font-display text-xs font-bold text-foreground">Barcelona Beach</p>
        <p className="text-[10px] text-muted-foreground">Jun 15–19 · 5 days</p>
      </div>
    </div>
    <div className="p-3">
      <p className="font-display text-[10px] font-bold text-foreground mb-2">Who's traveling?</p>
      <div className="flex gap-2 mb-3">
        {[
          { name: "Shirley", role: "Parent", selected: true },
          { name: "Milo", role: "Child · 3 yrs", selected: true, isChild: true },
        ].map((t) => (
          <div
            key={t.name}
            className={`flex-1 flex items-center gap-2 p-2 rounded-xl border transition-all ${
              t.selected ? "border-primary bg-coral-light" : "border-border bg-card"
            }`}
          >
            <div className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 ${
              t.selected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}>
              {t.isChild ? <Baby className="h-3 w-3" /> : <UserCheck className="h-3 w-3" />}
            </div>
            <div>
              <p className="text-[10px] font-semibold text-foreground">{t.name}</p>
              <p className="text-[8px] text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-gradient-to-r from-primary to-coral py-2 text-center">
        <span className="font-display text-[10px] font-semibold text-primary-foreground">
          Generate Itinerary for Milo →
        </span>
      </div>
    </div>
  </div>
);

// ── Step 3: Itinerary mockup ──
const ItineraryMockup = () => (
  <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
    <div className="p-3">
      <p className="font-display text-xs font-bold text-foreground">Your Itinerary</p>
      <p className="text-[10px] text-muted-foreground mb-2">Barcelona Beach Family</p>
      <div className="flex items-center gap-1 mb-3 rounded-full bg-mint-light px-2 py-1 w-fit">
        <Star className="h-2.5 w-2.5 text-mint" />
        <span className="text-[9px] font-semibold text-mint">✓ Paced around Milo's energy</span>
      </div>
      <div className="flex gap-1.5 mb-3">
        {[1, 2, 3].map((d) => (
          <div
            key={d}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-medium ${
              d === 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            Day {d}
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          { time: "9:00 AM", title: "Beach Morning", note: "Shallow water, shade available", color: "bg-sky-light" },
          { time: "11:30 AM", title: "Rest & Snack 💤", note: "Nap window aligned", color: "bg-lavender-light" },
          { time: "2:00 PM", title: "Aquarium Visit", note: "Stroller-friendly paths", color: "bg-mint-light" },
        ].map((item) => (
          <div key={item.title} className={`rounded-lg ${item.color} p-2.5`}>
            <div className="flex items-center gap-1.5 mb-0.5">
              <Clock className="h-2.5 w-2.5 text-muted-foreground" />
              <span className="text-[9px] text-muted-foreground font-medium">{item.time}</span>
            </div>
            <p className="text-[10px] font-bold text-foreground">{item.title}</p>
            <p className="text-[9px] text-muted-foreground">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── Step 4: In-trip mockup ──
const InTripMockup = () => (
  <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
    <div className="p-3">
      <p className="font-display text-xs font-bold text-foreground">Your Plan — Live</p>
      <p className="text-[10px] text-muted-foreground mb-2">Day 1 · Morning Adventures</p>
    </div>
    {/* Mini map */}
    <div className="relative h-28 mx-3 rounded-xl bg-gradient-to-br from-sky-light via-mint-light to-sunny-light overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <div key={`h-${i}`} className="absolute h-px w-full bg-foreground/20" style={{ top: `${i * 20}%` }} />
        ))}
        {[...Array(6)].map((_, i) => (
          <div key={`v-${i}`} className="absolute h-full w-px bg-foreground/20" style={{ left: `${i * 20}%` }} />
        ))}
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-coral shadow-lg">
          <Navigation className="h-4 w-4 text-primary-foreground" />
        </div>
      </div>
      <div className="absolute left-[25%] top-[30%] flex h-5 w-5 items-center justify-center rounded-full bg-mint shadow">
        <Baby className="h-2.5 w-2.5 text-primary-foreground" />
      </div>
      <div className="absolute right-[20%] bottom-[25%] flex h-5 w-5 items-center justify-center rounded-full bg-sunny shadow">
        <Footprints className="h-2.5 w-2.5 text-primary-foreground" />
      </div>
    </div>
    <div className="p-3 space-y-1.5">
      {[
        { time: "Now", title: "Beach Playtime 🏖️", active: true },
        { time: "11:30", title: "Nap Break 💤", active: false },
      ].map((a) => (
        <div key={a.title} className={`rounded-lg border p-2.5 ${a.active ? "border-primary bg-coral-light/50" : "border-border"}`}>
          <div className="flex items-center gap-1.5 mb-0.5">
            <Clock className="h-2.5 w-2.5 text-muted-foreground" />
            <span className="text-[9px] text-muted-foreground font-medium">{a.time}</span>
          </div>
          <p className="text-[10px] font-bold text-foreground">{a.title}</p>
        </div>
      ))}
    </div>
  </div>
);

const steps = [
  {
    step: "1",
    emoji: "👶",
    title: "Tell us about your child",
    description: "Age, mobility, nap schedule, allergies, interests — we capture every detail that matters.",
    Mockup: ProfileMockup,
  },
  {
    step: "2",
    emoji: "👨‍👩‍👧",
    title: "Pick who's traveling",
    description: "Select family members and we generate a personalized plan around your child's needs.",
    Mockup: TravelerMockup,
  },
  {
    step: "3",
    emoji: "🗺️",
    title: "Get a smart itinerary",
    description: "Drag, reorder, adjust pacing. Every activity is rated for kid-friendliness with built-in rest time.",
    Mockup: ItineraryMockup,
  },
  {
    step: "4",
    emoji: "🎉",
    title: "Enjoy the trip — live",
    description: "Real-time map, timeline, and smart nudges so you can be present instead of planning.",
    Mockup: InTripMockup,
  },
];

export const JourneyShowcase = () => {
  return (
    <section id="journey" className="bg-card py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl rounded-3xl bg-gradient-to-br from-coral via-sunny to-mint px-6 py-12 text-center shadow-lifted md:px-12 md:py-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-card/20 backdrop-blur-sm px-4 py-2">
            <span className="text-lg">✨</span>
            <span className="font-body font-semibold text-card">How Kiddogo Works</span>
          </div>
          <h2 className="mb-4 font-display text-4xl font-bold leading-tight text-card md:text-5xl">
            Your Journey,{" "}
            <span className="relative">
              Designed for Kids
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 100 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-card/50" />
              </svg>
            </span>
          </h2>
          <p className="font-body text-lg text-card/90">
            Four steps from "we have a toddler" to "we had the best trip ever."
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mx-auto max-w-5xl space-y-20 lg:space-y-28">
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg font-bold shadow-soft">
                      {step.emoji}
                    </div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider font-display">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Mockup */}
                <div className="w-full max-w-[280px] flex-shrink-0">
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="transition-shadow hover:shadow-lifted"
                  >
                    <step.Mockup />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Connecting arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="font-body text-muted-foreground">
            That's it. <span className="font-semibold text-foreground">Tell us about your kid → We plan around them → Enjoy the trip</span>. 🌈
          </p>
        </motion.div>
      </div>
    </section>
  );
};
