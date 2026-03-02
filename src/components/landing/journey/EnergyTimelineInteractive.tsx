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
const MIN_GAP = 0;
const MIN_DURATION = 0.5; // minimum 30 minutes

const initialBlocks: EnergyBlock[] = [
  { id: "high1", label: "High energy", startHour: 7.5, endHour: 9.5, color: "text-mint", bg: "bg-mint-light/60", borderColor: "border-mint/30", activeRing: "ring-mint/40" },
  { id: "moderate1", label: "Moderate", startHour: 10, endHour: 11.5, color: "text-sunny", bg: "bg-sunny-light/60", borderColor: "border-sunny/30", activeRing: "ring-sunny/40" },
  { id: "nap", label: "Nap time", startHour: 13, endHour: 15, color: "text-sky", bg: "bg-sky-light/60", borderColor: "border-sky/30", activeRing: "ring-sky/40" },
  { id: "low", label: "Low energy", startHour: 16, endHour: 17.5, color: "text-lavender", bg: "bg-lavender-light/60", borderColor: "border-lavender/30", activeRing: "ring-lavender/40" },
  { id: "moderate2", label: "Moderate", startHour: 18.5, endHour: 20, color: "text-sunny", bg: "bg-sunny-light/60", borderColor: "border-sunny/30", activeRing: "ring-sunny/40" },
];

type DragMode = "move" | "resize-left" | "resize-right";

export const EnergyTimelineInteractive = () => {
  const [blocks, setBlocks] = useState(initialBlocks);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const dragRef = useRef<{
    id: string;
    startX: number;
    origStart: number;
    origEnd: number;
    mode: DragMode;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getHourWidth = useCallback(() => {
    if (!containerRef.current) return 60;
    return containerRef.current.clientWidth / VISIBLE_HOURS;
  }, []);

  const resolveOverlaps = useCallback(
    (arr: EnergyBlock[], movedId: string, dragDirection: number): EnergyBlock[] => {
      const moved = arr.find((b) => b.id === movedId);
      if (!moved) return arr;

      const others = arr
        .filter((b) => b.id !== movedId)
        .sort((a, b) => a.startHour - b.startHour);

      const EPS = 0.001;
      let insertIndex = others.length;

      if (dragDirection > 0) {
        const idx = others.findIndex((o) => moved.endHour <= o.startHour + EPS);
        insertIndex = idx === -1 ? others.length : idx;
      } else if (dragDirection < 0) {
        const idx = others.findIndex((o) => moved.startHour < o.endHour - EPS);
        insertIndex = idx === -1 ? others.length : idx;
      } else {
        const idx = others.findIndex((o) => moved.startHour < o.startHour);
        insertIndex = idx === -1 ? others.length : idx;
      }

      const ordered = [
        ...others.slice(0, insertIndex),
        moved,
        ...others.slice(insertIndex),
      ];

      const withDesired = ordered.map((b) => ({
        ...b,
        desiredStart: b.startHour,
        duration: b.endHour - b.startHour,
      }));

      let cursor = START_HOUR;
      const forward = withDesired.map((b) => {
        let start = Math.max(b.desiredStart, cursor);
        if (start + b.duration > END_HOUR) {
          start = END_HOUR - b.duration;
        }
        const placed = {
          ...b,
          startHour: start,
          endHour: start + b.duration,
        };
        cursor = placed.endHour + MIN_GAP;
        return placed;
      });

      for (let i = forward.length - 2; i >= 0; i--) {
        const curr = forward[i];
        const next = forward[i + 1];
        const maxEnd = next.startHour - MIN_GAP;
        if (curr.endHour > maxEnd) {
          const newStart = Math.max(START_HOUR, maxEnd - curr.duration);
          forward[i] = {
            ...curr,
            startHour: newStart,
            endHour: newStart + curr.duration,
          };
        }
      }

      return forward.map(({ desiredStart, duration, ...rest }) => rest);
    },
    []
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent, block: EnergyBlock, mode: DragMode) => {
      e.preventDefault();
      e.stopPropagation();
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      dragRef.current = {
        id: block.id,
        startX: e.clientX,
        origStart: block.startHour,
        origEnd: block.endHour,
        mode,
      };
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

      if (drag.mode === "move") {
        const block = blocks.find((b) => b.id === drag.id);
        if (!block) return;
        const duration = block.endHour - block.startHour;
        let newStart = Math.round((drag.origStart + dHours) * 2) / 2;
        newStart = Math.max(START_HOUR, Math.min(END_HOUR - duration, newStart));

        const updated = blocks.map((b) =>
          b.id === drag.id ? { ...b, startHour: newStart, endHour: newStart + duration } : b
        );
        const dragDirection = Math.sign(dHours);
        setBlocks(resolveOverlaps(updated, drag.id, dragDirection));
      } else if (drag.mode === "resize-left") {
        let newStart = Math.round((drag.origStart + dHours) * 2) / 2;
        newStart = Math.max(START_HOUR, Math.min(drag.origEnd - MIN_DURATION, newStart));
        setBlocks((prev) =>
          prev.map((b) =>
            b.id === drag.id ? { ...b, startHour: newStart } : b
          )
        );
      } else if (drag.mode === "resize-right") {
        let newEnd = Math.round((drag.origEnd + dHours) * 2) / 2;
        newEnd = Math.max(drag.origStart + MIN_DURATION, Math.min(END_HOUR, newEnd));
        setBlocks((prev) =>
          prev.map((b) =>
            b.id === drag.id ? { ...b, endHour: newEnd } : b
          )
        );
      }
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
                Slide to move · Drag edges to resize
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
                <div
                  key={block.id}
                  className={`absolute top-2 bottom-2 rounded-xl ${block.bg} border ${block.borderColor} flex items-center select-none touch-none transition-shadow ${isDragging ? `ring-2 ${block.activeRing} shadow-lifted z-20` : "z-10 hover:shadow-soft"}`}
                  style={{ left: `${leftPct}%`, width: `${widthPct}%` }}
                >
                  {/* Left resize handle */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-2 cursor-col-resize z-30 flex items-center justify-center group"
                    onPointerDown={(e) => handlePointerDown(e, block, "resize-left")}
                  >
                    <div className="w-0.5 h-4 rounded-full bg-muted-foreground/20 group-hover:bg-muted-foreground/50 transition-colors" />
                  </div>

                  {/* Main drag area */}
                  <div
                    className="flex-1 flex items-center justify-center gap-1 cursor-grab active:cursor-grabbing min-w-0 px-3"
                    onPointerDown={(e) => handlePointerDown(e, block, "move")}
                  >
                    <GripVertical className="h-3 w-3 text-muted-foreground/40 shrink-0" />
                    <span className={`text-xs font-bold ${block.color} truncate`}>
                      {block.label}
                    </span>
                  </div>

                  {/* Right resize handle */}
                  <div
                    className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize z-30 flex items-center justify-center group"
                    onPointerDown={(e) => handlePointerDown(e, block, "resize-right")}
                  >
                    <div className="w-0.5 h-4 rounded-full bg-muted-foreground/20 group-hover:bg-muted-foreground/50 transition-colors" />
                  </div>
                </div>
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
