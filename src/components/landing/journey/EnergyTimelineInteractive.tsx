import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { GripVertical, Sparkles } from "lucide-react";

interface EnergyBlock {
  id: string;
  label: string;
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
const MIN_GAP = 0; // allow touching but no overlap

const initialBlocks: EnergyBlock[] = [
  { id: "high1", label: "High energy", startHour: 7.5, endHour: 9.5, color: "text-mint", bg: "bg-mint-light/60", borderColor: "border-mint/30", activeRing: "ring-mint/40" },
  { id: "moderate1", label: "Moderate", startHour: 10, endHour: 11.5, color: "text-sunny", bg: "bg-sunny-light/60", borderColor: "border-sunny/30", activeRing: "ring-sunny/40" },
  { id: "nap", label: "Nap time", startHour: 13, endHour: 15, color: "text-sky", bg: "bg-sky-light/60", borderColor: "border-sky/30", activeRing: "ring-sky/40" },
  { id: "low", label: "Low energy", startHour: 16, endHour: 17.5, color: "text-lavender", bg: "bg-lavender-light/60", borderColor: "border-lavender/30", activeRing: "ring-lavender/40" },
  { id: "moderate2", label: "Moderate", startHour: 18.5, endHour: 20, color: "text-sunny", bg: "bg-sunny-light/60", borderColor: "border-sunny/30", activeRing: "ring-sunny/40" },
];

export const EnergyTimelineInteractive = () => {
  const [blocks, setBlocks] = useState(initialBlocks);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const dragRef = useRef<{ id: string; startX: number; origStart: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getHourWidth = useCallback(() => {
    if (!containerRef.current) return 60;
    return containerRef.current.clientWidth / VISIBLE_HOURS;
  }, []);

  // Resolve overlaps by pushing neighbors away from the dragged block
  const resolveOverlaps = useCallback((arr: EnergyBlock[], movedId: string): EnergyBlock[] => {
    const sorted = [...arr].sort((a, b) => a.startHour - b.startHour);
    const movedIdx = sorted.findIndex(b => b.id === movedId);
    if (movedIdx === -1) return sorted;

    // Push right neighbors
    for (let i = movedIdx + 1; i < sorted.length; i++) {
      const prev = sorted[i - 1];
      const curr = sorted[i];
      const minStart = prev.endHour + MIN_GAP;
      if (curr.startHour < minStart) {
        const duration = curr.endHour - curr.startHour;
        const newStart = Math.min(minStart, END_HOUR - duration);
        sorted[i] = { ...curr, startHour: newStart, endHour: newStart + duration };
      }
    }

    // Push left neighbors
    for (let i = movedIdx - 1; i >= 0; i--) {
      const next = sorted[i + 1];
      const curr = sorted[i];
      const duration = curr.endHour - curr.startHour;
      const maxEnd = next.startHour - MIN_GAP;
      if (curr.endHour > maxEnd) {
        const newEnd = Math.max(maxEnd, START_HOUR + duration);
        sorted[i] = { ...curr, startHour: newEnd - duration, endHour: newEnd };
      }
    }

    return sorted;
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent, block: EnergyBlock) => {
      e.preventDefault();
      e.stopPropagation();
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      dragRef.current = { id: block.id, startX: e.clientX, origStart: block.startHour };
      setDraggingId(block.id);
    },
    []
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      const drag = dragRef.current;
      if (!drag) return;
      const hourWidth = getHourWidth();
      const dx = e.clientX - drag.startX;
      const dHours = dx / hourWidth;
      const block = blocks.find(b => b.id === drag.id);
      if (!block) return;
      const duration = block.endHour - block.startHour;
      let newStart = Math.round((drag.origStart + dHours) * 2) / 2;
      newStart = Math.max(START_HOUR, Math.min(END_HOUR - duration, newStart));

      const updated = blocks.map(b =>
        b.id === drag.id ? { ...b, startHour: newStart, endHour: newStart + duration } : b
      );
      setBlocks(resolveOverlaps(updated, drag.id));
    },
    [blocks, getHourWidth, resolveOverlaps]
  );

  const handlePointerUp = useCallback(() => {
    dragRef.current = null;
    setDraggingId(null);
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
            style={{ height: 64 }}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            {/* Grid lines */}
            {hours.map((h, i) => (
              <div
                key={h}
                className="absolute top-0 bottom-0 border-l border-border/30"
                style={{ left: `${(i / VISIBLE_HOURS) * 100}%` }}
              />
            ))}

            {/* Blocks */}
            {blocks.map((block) => {
              const leftPct = ((block.startHour - START_HOUR) / VISIBLE_HOURS) * 100;
              const widthPct = ((block.endHour - block.startHour) / VISIBLE_HOURS) * 100;
              const isDragging = draggingId === block.id;
              return (
                <motion.div
                  key={block.id}
                  className={`absolute top-2 bottom-2 rounded-xl ${block.bg} border ${block.borderColor} flex items-center justify-center gap-1 cursor-grab active:cursor-grabbing select-none touch-none transition-shadow ${isDragging ? `ring-2 ${block.activeRing} shadow-lifted z-20` : "z-10 hover:shadow-soft"}`}
                  style={{ left: `${leftPct}%`, width: `${widthPct}%` }}
                  onPointerDown={(e) => handlePointerDown(e, block)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <GripVertical className="h-3 w-3 text-muted-foreground/40 shrink-0" />
                  <span className={`text-xs font-bold ${block.color} truncate`}>
                    {block.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-2 mt-3 justify-center">
            {[
              { label: "High energy", dot: "bg-mint" },
              { label: "Moderate", dot: "bg-sunny" },
              { label: "Low energy", dot: "bg-lavender" },
              { label: "Nap", dot: "bg-sky" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 bg-card"
              >
                <div className={`h-2 w-2 rounded-full ${item.dot}`} />
                <span className="text-[10px] font-medium text-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
