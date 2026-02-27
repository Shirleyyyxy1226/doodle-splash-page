import { Baby, Sun, Moon, Utensils, Zap, Cookie, BedDouble } from "lucide-react";

export const RoutineMockup = () => (
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
