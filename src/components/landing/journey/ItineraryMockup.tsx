import { useState } from "react";
import { Baby, MapPin, Users } from "lucide-react";

export const ItineraryMockup = () => {
  const [selected, setSelected] = useState<Set<string>>(new Set(["Make lighter", "Stay nearby"]));

  const toggle = (label: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  return (
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
      {/* Quick adjustments - interactive */}
      <div className="px-3 pb-3">
        <p className="text-[10px] font-bold text-foreground mb-2">Quick adjustments</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Make lighter", desc: "Remove low-priority activities" },
            { label: "Add more rest", desc: "Insert buffer time" },
            { label: "Less walking", desc: "Keep activities closer" },
            { label: "Stay nearby", desc: "Near accommodation" },
          ].map((adj) => (
            <div
              key={adj.label}
              onClick={() => toggle(adj.label)}
              className={`rounded-xl border p-2.5 cursor-pointer transition-all duration-200 ${selected.has(adj.label) ? "border-coral bg-coral-light/40" : "border-border hover:border-muted-foreground/30"}`}
            >
              <p className="text-[10px] font-bold text-foreground">{adj.label}</p>
              <p className="text-[7px] text-muted-foreground">{adj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
