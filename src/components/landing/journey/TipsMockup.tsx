import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, ChevronDown, ChevronUp, MapPin, Moon, UtensilsCrossed, Cookie, Info } from "lucide-react";

const tips = [
  {
    icon: Cookie,
    text: "Pack snacks — Milo usually needs one every 2 hours",
    reason: "Based on Milo's eating pattern, he tends to get cranky without snacks mid-morning.",
  },
  {
    icon: Moon,
    text: "Plan to be near the resort around 12:30 PM for nap time",
    reason: "Milo's nap window is 12:30–2:30 PM. Missing it usually leads to an overtired evening.",
  },
  {
    icon: MapPin,
    text: "Barceloneta Beach has shaded areas near the promenade",
    reason: "UV index peaks at 1 PM in Barcelona. Shade is essential for toddlers with sensitive skin.",
  },
  {
    icon: UtensilsCrossed,
    text: "Lunch spot is a 2-minute walk from the beach",
    reason: "We picked La Mar Salada because it has highchairs, a kids menu, and is close to your next activity.",
  },
];

export const TipsMockup = () => {
  const [expanded, setExpanded] = useState(true);
  const [showReason, setShowReason] = useState<number | null>(null);

  return (
    <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
      <div className="p-3">
        <p className="text-xs font-bold text-foreground mb-1">We think ahead for you</p>
        <p className="text-[8px] text-muted-foreground mb-3">
          Smart tips based on your child's routine, the weather, and real parent feedback.
        </p>
      </div>

      {/* Today's Reminders card */}
      <div className="mx-3 mb-3 rounded-xl border border-border bg-card overflow-hidden">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between px-3 py-2.5"
        >
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-sunny-light/80 flex items-center justify-center">
              <Cookie className="h-3.5 w-3.5 text-sunny" />
            </div>
            <span className="text-[11px] font-bold text-foreground">Today's Reminders</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[8px] text-muted-foreground">{tips.length} tips</span>
            {expanded ? (
              <ChevronUp className="h-3 w-3 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            )}
          </div>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="px-3 pb-3 space-y-2">
                {tips.map((tip, i) => {
                  const Icon = tip.icon;
                  return (
                    <div key={i}>
                      <div className="flex items-start gap-2.5">
                        <div className="h-7 w-7 rounded-full bg-sunny-light/60 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="h-3 w-3 text-sunny" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-foreground leading-relaxed">
                            {tip.text}
                          </p>
                          <button
                            onClick={() => setShowReason(showReason === i ? null : i)}
                            className="flex items-center gap-0.5 mt-0.5 text-[7px] font-medium text-coral hover:underline"
                          >
                            <Info className="h-2 w-2" />
                            {showReason === i ? "Hide why" : "Why this tip?"}
                          </button>
                        </div>
                      </div>
                      <AnimatePresence>
                        {showReason === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-10 mt-1 rounded-lg bg-coral-light/30 px-2.5 py-1.5">
                              <p className="text-[8px] text-foreground/70 leading-relaxed">
                                {tip.reason}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
