import { MapPin, Users, Footprints } from "lucide-react";

export const LivePlanMockup = () => (
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
    <div className="relative h-28 mx-3 rounded-xl bg-gradient-to-br from-sky-light via-mint-light to-sunny-light overflow-hidden mb-2">
      <div className="absolute inset-0 opacity-15">
        {[...Array(8)].map((_, i) => (
          <div key={`h-${i}`} className="absolute h-px w-full bg-foreground/30" style={{ top: `${i * 14}%` }} />
        ))}
        {[...Array(8)].map((_, i) => (
          <div key={`v-${i}`} className="absolute h-full w-px bg-foreground/30" style={{ left: `${i * 14}%` }} />
        ))}
      </div>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
        <path d="M40,70 C60,30 80,25 100,35 S140,50 160,30" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
        <circle cx="40" cy="70" r="4" fill="hsl(var(--primary))" />
        <circle cx="100" cy="35" r="3" fill="hsl(var(--coral))" />
        <circle cx="160" cy="30" r="4" fill="hsl(var(--coral))" />
      </svg>
      <div className="absolute top-2 right-2 bg-card/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-sm">
        <p className="text-[8px] font-bold text-foreground">🚶 15 min</p>
        <p className="text-[7px] text-muted-foreground">1.2 km</p>
      </div>
    </div>
    {/* Activity cards - matching real app style */}
    <div className="px-3 pb-3 space-y-1.5">
      {[
        {
          time: "10:30 AM · ~1.5 HR",
          title: "Barcelona Aquarium",
          desc: "Stroller-friendly, air-conditioned. Great for toddlers.",
          rating: "97% of 534 parents say kid-friendly",
          tags: ["Stroller friendly", "A/C", "Tunnel walk-through"],
          walk: "~10 min walk",
          skippable: true,
        },
        {
          time: "3:00 PM · ~1 HR",
          title: "Promenade stroll",
          desc: "Walk along the seafront promenade. Ice cream stops along the way.",
          rating: "92% of 178 parents say kid-friendly",
          tags: ["Flat & wide", "Ice cream shops"],
          walk: "~15 min walk",
          skippable: true,
        },
        {
          time: "3:00 PM · OPEN",
          title: "Beach play time",
          desc: "Build sandcastles, paddle in shallows. Pure fun.",
          rating: "93% of 267 parents say kid-friendly",
          tags: ["Calm shallows", "Lifeguards on duty"],
          skippable: true,
        },
      ].map((item) => (
        <div key={item.title} className="rounded-xl border-l-[3px] border-l-coral bg-card p-2.5">
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center gap-1">
              <MapPin className="h-2.5 w-2.5 text-muted-foreground" />
              <span className="text-[8px] text-muted-foreground font-medium">{item.time}</span>
            </div>
            {item.skippable && (
              <span className="text-[7px] text-muted-foreground italic">easy to skip</span>
            )}
          </div>
          <p className="text-[10px] font-bold text-foreground">{item.title}</p>
          <p className="text-[8px] text-muted-foreground leading-relaxed">{item.desc}</p>
          <div className="flex items-center gap-1 mt-1">
            <Users className="h-2.5 w-2.5 text-coral" />
            <span className="text-[8px] font-medium text-foreground">{item.rating}</span>
          </div>
          <div className="flex gap-1 flex-wrap mt-1">
            {item.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-coral-light px-1.5 py-0.5 text-[7px] font-medium text-coral">{tag}</span>
            ))}
          </div>
          {item.walk && (
            <div className="flex items-center gap-1 mt-1.5">
              <Footprints className="h-2.5 w-2.5 text-muted-foreground" />
              <span className="text-[7px] text-muted-foreground">{item.walk}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);
