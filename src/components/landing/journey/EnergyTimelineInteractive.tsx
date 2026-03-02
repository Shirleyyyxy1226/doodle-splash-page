import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { GripVertical, Sparkles } from "lucide-react";

interface EnergyBlock {
  id: string;
  label: string;
  emoji: string;
  startHour: number;
  endHour: number;
  color: string;
  bg: string;
  borderColor: string;
  activeRing: string;
}

const START_HOUR = 7;
const END_HOUR = 21;
const VISIBLE_HOURS = END_HOUR - START_HOUR;

const initialBlocks: EnergyBlock[] = [
  { id: "wake", label: "Wake up", emoji: "🌅", startHour: 7, endHour: 8, color: "text-sunny", bg: "bg-sunny-light/60", borderColor: "border-sunny/30", activeRing: "ring-sunny/40" },
  { id: "high1", label: "High energy", emoji: "⚡", startHour: 8, endHour: 10.5, color: "text-mint", bg: "bg-mint-light/60", borderColor: "border-mint/30", activeRing: "ring-mint/40" },
  { id: "moderate1", label: "Moderate", emoji: "🚶", startHour: 10.5, endHour: 12, color: "text-sunny", bg: "bg-sunny-light/60", borderColor: "border-sunny/30", activeRing: "ring-sunny/40" },
  { id: "lunch", label: "Lunch", emoji: "🍽️", startHour: 12, endHour: 13, color: "text-coral", bg: "bg-coral-light/60", borderColor: "border-coral/30", activeRing: "ring-coral/40" },
  { id: "nap", label: "Nap time", emoji: "😴", startHour: 13, endHour: 15, color: "text-sky", bg: "bg-sky-light/60", borderColor: "border-sky/30", activeRing: "ring-sky/40" },
  { id: "low", label: "Low energy", emoji: "🐢", startHour: 15, endHour: 17, color: "text-lavender", bg: "bg-lavender-light/60", borderColor: "border-lavender/30", activeRing: "ring-lavender/40" },
  { id: "moderate2", label: "Moderate", emoji: "🎨", startHour: 17, endHour: 19, color: "text-sunny", bg: "bg-sunny-light/60", borderColor: "border-sunny/30", activeRing: "ring-sunny/40" },
  { id: "wind", label: "Wind down", emoji: "🌙", startHour: 19, endHour: 21, color: "text-lavender", bg: "bg-lavender-light/60", borderColor: "border-lavender/30", activeRing: "ring-lavender/40" },
];

const formatHour = (h: number) => {
  const hour = Math.floor(h);
  const min = h % 1 === 0.5 ? "30" : "00";
  if (hour === 0 || hour === 24) return "12:00 AM";
  if (hour < 12) return `${hour}:${min} AM`;
  if (hour === 12) return `12:${min} PM`;
  return `${hour - 12}:${min} PM`;
};

export const EnergyTimelineInteractive = () => {
  const [blocks, setBlocks] = useState(initialBlocks);
  const [dragging, setDragging] = useState<{
    id: string;
    startX: number;
    origStart: number;
    origEnd: number;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getHourWidth = useCallback(() => {
    if (!containerRef.current) return 60;
    return containerRef.current.clientWidth / VISIBLE_HOURS;
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent, block: EnergyBlock) => {
      e.preventDefault();
      e.stopPropagation();
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      setDragging({
        id: block.id,
        startX: e.clientX,
        origStart: block.startHour,
        origEnd: block.endHour,
      });
    },
    []
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      const hourWidth = getHourWidth();
      const dx = e.clientX - dragging.startX;
      const dHours = dx / hourWidth;
      const duration = dragging.origEnd - dragging.origStart;
      let newStart = Math.round((dragging.origStart + dHours) * 2) / 2;
      newStart = Math.max(START_HOUR, Math.min(END_HOUR - duration, newStart));
      setBlocks((prev) =>
        prev.map((b) =>
          b.id === dragging.id
            ? { ...b, startHour: newStart, endHour: newStart + duration }
            : b
        )
      );
    },
    [dragging, getHourWidth]
  );

  const handlePointerUp = useCallback(() => {
    setDragging(null);
  }, []);

  const hours = Array.from({ length: VISIBLE_HOURS + 1 }, (_, i) => START_HOUR + i);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl mt-8 lg:mt-12"
    >
      <div className="rounded-3xl border border-border bg-card shadow-lifted overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-coral-light via-sunny-light to-mint-light px-5 py-4 sm:px-8 sm:py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card/60 backdrop-blur-sm shadow-soft">
              <Sparkles className="h-5 w-5 text-coral" />
            </div>
            <div>
              <h4 className="font-display text-sm font-bold text-foreground sm:text-base">
                Try it! Drag to adjust the energy rhythm
              </h4>
              <p className="text-xs text-muted-foreground">
                Slide each block to match your child's day
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="px-4 py-5 sm:px-8 sm:py-6">
          {/* Hour labels */}
          <div ref={containerRef} className="relative mb-1">
            <div className="flex">
              {hours.slice(0, VISIBLE_HOURS).map((h) => (
                <div
                  key={h}
                  className="text-[10px] text-muted-foreground text-center font-medium"
                  style={{ flex: 1 }}
                >
                  {h <= 12 ? `${h}${h === 12 ? "pm" : "am"}` : `${h - 12}pm`}
                </div>
              ))}
            </div>
          </div>

          {/* Draggable area */}
          <div
            className="relative rounded-2xl border border-border bg-muted/20 overflow-hidden"
            style={{ height: 72 }}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            {/* Grid lines */}
            {hours.map((h, i) => (
              <div
                key={h}
                className="absolute top-0 bottom-0 border-l border-border/30"
                style={{
                  left: `${(i / VISIBLE_HOURS) * 100}%`,
                }}
              />
            ))}

            {/* Blocks */}
            {blocks.map((block) => {
              const leftPct =
                ((block.startHour - START_HOUR) / VISIBLE_HOURS) * 100;
              const widthPct =
                ((block.endHour - block.startHour) / VISIBLE_HOURS) * 100;
              const isDragging = dragging?.id === block.id;
              return (
                <motion.div
                  key={block.id}
                  className={`absolute top-2 bottom-2 rounded-xl ${block.bg} border ${block.borderColor} flex items-center justify-center gap-1.5 cursor-grab active:cursor-grabbing transition-shadow select-none touch-none ${isDragging ? `ring-2 ${block.activeRing} shadow-lifted z-20` : "z-10 hover:shadow-soft"}`}
                  style={{
                    left: `${leftPct}%`,
                    width: `${widthPct}%`,
                  }}
                  onPointerDown={(e) => handlePointerDown(e, block)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <GripVertical className="h-3.5 w-3.5 text-muted-foreground/40 shrink-0 hidden sm:block" />
                  <span className="text-base sm:text-lg leading-none">{block.emoji}</span>
                  <div className="hidden sm:block min-w-0">
                    <span className={`text-xs font-bold ${block.color} block truncate`}>
                      {block.label}
                    </span>
                    <span className="text-[10px] text-muted-foreground block">
                      {formatHour(block.startHour)}–{formatHour(block.endHour)}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-2 mt-3 justify-center">
            {[
              { emoji: "⚡", label: "High energy", dot: "bg-mint" },
              { emoji: "🚶", label: "Moderate", dot: "bg-sunny" },
              { emoji: "🐢", label: "Low energy", dot: "bg-lavender" },
              { emoji: "😴", label: "Nap", dot: "bg-sky" },
              { emoji: "🍽️", label: "Meal", dot: "bg-coral" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 bg-card"
              >
                <div className={`h-2 w-2 rounded-full ${item.dot}`} />
                <span className="text-[10px] font-medium text-foreground">
                  {item.emoji} {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
