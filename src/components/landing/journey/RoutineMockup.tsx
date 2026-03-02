import { Baby, Sun, Moon } from "lucide-react";

const energyBlocks = [
  { label: "Moderate", time: "9–11 AM", color: "text-sunny", bg: "bg-sunny-light/60", borderColor: "border-sunny/30" },
  { label: "High energy", time: "11 AM–1 PM", color: "text-mint", bg: "bg-mint-light/60", borderColor: "border-mint/30" },
  { label: "Nap", time: "1–3 PM", color: "text-sky", bg: "bg-sky-light/60", borderColor: "border-sky/30" },
  { label: "Low energy", time: "3–5 PM", color: "text-lavender", bg: "bg-lavender-light/60", borderColor: "border-lavender/30" },
  { label: "Moderate", time: "5–7 PM", color: "text-sunny", bg: "bg-sunny-light/60", borderColor: "border-sunny/30" },
  { label: "Low energy", time: "7–9 PM", color: "text-lavender", bg: "bg-lavender-light/60", borderColor: "border-lavender/30" },
];

const legendItems = [
  { label: "High energy", dotClass: "bg-mint" },
  { label: "Moderate", dotClass: "bg-sunny" },
  { label: "Low energy", dotClass: "bg-lavender" },
  { label: "Nap", dotClass: "bg-sky" },
];

export const RoutineMockup = () => {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
      {/* Header */}
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

      {/* Wake / Bedtime */}
      <div className="px-3 pt-3 space-y-1">
        {[
          { icon: Sun, label: "Wake up", time: "7:00 AM", color: "text-sunny" },
          { icon: Moon, label: "Bedtime", time: "7:30 PM", color: "text-sky" },
        ].map(item => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center justify-between py-1.5 px-2 rounded-lg bg-muted/30">
              <div className="flex items-center gap-1.5">
                <Icon className={`h-3 w-3 ${item.color}`} />
                <span className="text-[9px] font-medium text-foreground">{item.label}</span>
              </div>
              <span className="text-[9px] font-bold text-muted-foreground bg-card rounded-full px-2 py-0.5 border border-border">{item.time}</span>
            </div>
          );
        })}
      </div>

      {/* Energy Rhythm */}
      <div className="px-3 pt-3 pb-1">
        <p className="text-[9px] font-bold text-foreground mb-0.5 uppercase tracking-wider">Daily Energy Rhythm</p>

        {/* Legend */}
        <div className="flex gap-1.5 mb-2 flex-wrap">
          {legendItems.map(item => (
            <div key={item.label} className="flex items-center gap-1 rounded-full border border-border px-1.5 py-0.5">
              <div className={`h-1.5 w-1.5 rounded-full ${item.dotClass}`} />
              <span className="text-[7px] font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Static energy blocks */}
        <div className="grid grid-cols-3 gap-1">
          {energyBlocks.map((block, i) => (
            <div
              key={i}
              className={`rounded-lg ${block.bg} border ${block.borderColor} p-1.5 text-center`}
            >
              <span className={`text-[7px] font-bold ${block.color} block`}>{block.label}</span>
              <span className="text-[6px] text-muted-foreground">{block.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Meals */}
      <div className="px-3 pt-2 pb-1">
        <p className="text-[9px] font-bold text-foreground mb-1 uppercase tracking-wider">Meals</p>
        <div className="space-y-0.5 mb-2">
          {[
            { label: "Breakfast", time: "8:00 AM" },
            { label: "Lunch", time: "12:00 PM" },
            { label: "Dinner", time: "6:00 PM" },
          ].map(m => (
            <div key={m.label} className="flex items-center justify-between py-1 px-2 rounded-md bg-muted/20">
              <span className="text-[8px] text-foreground font-medium">{m.label}</span>
              <span className="text-[8px] text-muted-foreground bg-card rounded-full px-1.5 py-0.5 border border-border">{m.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
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
};
