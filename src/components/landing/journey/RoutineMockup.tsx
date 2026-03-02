import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Moon, UtensilsCrossed, ChevronDown, ChevronUp, Footprints, MapPin, Cookie } from "lucide-react";

interface ScheduleItem {
  time: string;
  energyLabel: string;
  energyColor: string;
  bgColor: string;
  dotColor: string;
  borderLeftColor: string;
  title: string;
  subtitle?: string;
  walkTime?: string;
  icon: typeof Sparkles;
}

const scheduleItems: ScheduleItem[] = [
  {
    time: "10:00 AM",
    energyLabel: "High energy",
    energyColor: "text-mint",
    bgColor: "bg-mint-light/30",
    dotColor: "bg-coral",
    borderLeftColor: "border-mint/40",
    title: "Arrive & unpack",
    subtitle: "Flexible",
    icon: Sparkles,
  },
  {
    time: "11:30 AM",
    energyLabel: "Energy dipping",
    energyColor: "text-lavender",
    bgColor: "bg-lavender-light/30",
    dotColor: "bg-coral",
    borderLeftColor: "border-lavender/40",
    title: "Beach walk",
    subtitle: "Flexible",
    walkTime: "~5 min walk",
    icon: Footprints,
  },
  {
    time: "12:00 PM",
    energyLabel: "Hunger window",
    energyColor: "text-sunny",
    bgColor: "bg-sunny-light/30",
    dotColor: "bg-sunny",
    borderLeftColor: "border-sunny/40",
    title: "Lunch",
    subtitle: "Flexible",
    icon: UtensilsCrossed,
  },
  {
    time: "12:45 PM",
    energyLabel: "Nap window",
    energyColor: "text-sky",
    bgColor: "bg-sky-light/30",
    dotColor: "bg-sky",
    borderLeftColor: "border-sky/40",
    title: "Nap / rest time",
    subtitle: "~1.5 hr",
    icon: Moon,
  },
  {
    time: "2:30 PM",
    energyLabel: "High energy",
    energyColor: "text-mint",
    bgColor: "bg-muted/20",
    dotColor: "bg-muted-foreground/30",
    borderLeftColor: "border-muted-foreground/20",
    title: "Buffer time",
    subtitle: "Flexible",
    icon: Sparkles,
  },
  {
    time: "3:00 PM",
    energyLabel: "High energy",
    energyColor: "text-mint",
    bgColor: "bg-mint-light/30",
    dotColor: "bg-coral",
    borderLeftColor: "border-mint/40",
    title: "Promenade stroll",
    subtitle: "Flexible",
    walkTime: "~15 min walk",
    icon: Footprints,
  },
];

const reminders = [
  { icon: Cookie, text: "Pack snacks — Milo usually needs one every 2 hours" },
  { icon: Moon, text: "Plan to be near the resort around 12:30 PM for nap time" },
  { icon: MapPin, text: "Barceloneta Beach has shaded areas near the promenade" },
  { icon: UtensilsCrossed, text: "Lunch spot is a 2-minute walk from the beach" },
];

export const RoutineMockup = () => {
  const [remindersOpen, setRemindersOpen] = useState(true);

  return (
    <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
      {/* Schedule items */}
      <div className="divide-y divide-border/50">
        {scheduleItems.map((item, i) => (
          <div key={i} className={`${item.bgColor} px-3 py-2.5`}>
            <div className="flex items-start gap-2.5">
              {/* Time */}
              <span className="text-[9px] font-medium text-muted-foreground w-[52px] shrink-0 pt-0.5">
                {item.time}
              </span>

              {/* Dot + vertical line */}
              <div className="flex flex-col items-center shrink-0 pt-0.5">
                <div className={`h-2 w-2 rounded-full ${item.dotColor} shrink-0`} />
                {i < scheduleItems.length - 1 && (
                  <div className={`w-px flex-1 mt-1 border-l-2 ${item.borderLeftColor}`} style={{ minHeight: 28 }} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-0.5">
                  <item.icon className={`h-2.5 w-2.5 ${item.energyColor}`} />
                  <span className={`text-[8px] font-semibold ${item.energyColor}`}>
                    {item.energyLabel}
                  </span>
                </div>
                <p className="text-[10px] font-bold text-foreground leading-tight">
                  {item.title}
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  {item.walkTime && (
                    <span className="text-[7px] font-semibold text-mint flex items-center gap-0.5">
                      <Footprints className="h-2 w-2" />
                      {item.walkTime}
                    </span>
                  )}
                  {item.subtitle && (
                    <span className="text-[7px] text-muted-foreground">
                      {item.subtitle}
                    </span>
                  )}
                </div>
              </div>

              {/* Chevron */}
              <ChevronDown className="h-3 w-3 text-muted-foreground/30 shrink-0 mt-1" />
            </div>
          </div>
        ))}
      </div>

      {/* Today's Reminders */}
      <div className="mx-2 my-2 rounded-xl border border-border bg-card overflow-hidden">
        <button
          onClick={() => setRemindersOpen(!remindersOpen)}
          className="w-full flex items-center justify-between px-3 py-2"
        >
          <div className="flex items-center gap-1.5">
            <Cookie className="h-3 w-3 text-sunny" />
            <span className="text-[9px] font-bold text-foreground">Today's Reminders</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[7px] text-muted-foreground">{reminders.length} tips</span>
            {remindersOpen ? (
              <ChevronUp className="h-2.5 w-2.5 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-2.5 w-2.5 text-muted-foreground" />
            )}
          </div>
        </button>
        <AnimatePresence>
          {remindersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="px-3 pb-2 space-y-1.5">
                {reminders.map((r, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-sunny-light/60 flex items-center justify-center shrink-0">
                      <r.icon className="h-2.5 w-2.5 text-sunny" />
                    </div>
                    <p className="text-[8px] text-muted-foreground leading-relaxed pt-0.5">
                      {r.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
