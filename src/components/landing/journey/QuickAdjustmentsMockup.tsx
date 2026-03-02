import { useState } from "react";
import { Zap, Moon, Footprints, MapPin, RefreshCw } from "lucide-react";

const adjustments = [
  {
    label: "Make lighter",
    desc: "Remove low-priority activities",
    icon: Zap,
  },
  {
    label: "Add more rest",
    desc: "Insert buffer time",
    icon: Moon,
  },
  {
    label: "Less walking",
    desc: "Keep activities closer",
    icon: Footprints,
  },
  {
    label: "Stay nearby",
    desc: "Near accommodation",
    icon: MapPin,
  },
];

export const QuickAdjustmentsMockup = () => {
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
      <div className="p-3">
        <div className="flex items-center gap-2 mb-1">
          <RefreshCw className="h-3.5 w-3.5 text-coral" />
          <h4 className="text-xs font-bold text-foreground">One-tap adjustments</h4>
        </div>
        <p className="text-[8px] text-muted-foreground mb-3">
          Change your plan instantly — we'll rearrange everything to match.
        </p>

        <div className="grid grid-cols-2 gap-2">
          {adjustments.map((adj) => {
            const Icon = adj.icon;
            const isActive = selected.has(adj.label);
            return (
              <div
                key={adj.label}
                onClick={() => toggle(adj.label)}
                className={`rounded-xl border p-2.5 cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "border-coral bg-coral-light/40 shadow-soft"
                    : "border-border hover:border-muted-foreground/30"
                }`}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Icon className={`h-3 w-3 ${isActive ? "text-coral" : "text-muted-foreground"}`} />
                  <p className="text-[10px] font-bold text-foreground">{adj.label}</p>
                </div>
                <p className="text-[7px] text-muted-foreground">{adj.desc}</p>
              </div>
            );
          })}
        </div>

        <p className="text-[8px] text-muted-foreground text-center mt-3 italic">
          Always have more options — tap any card to explore alternatives.
        </p>
      </div>
    </div>
  );
};
