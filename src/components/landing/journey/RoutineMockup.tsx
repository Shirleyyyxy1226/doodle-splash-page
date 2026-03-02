import { useState, useRef, useCallback } from "react";
import { Baby, Sun, Moon, GripVertical } from "lucide-react";

interface EnergyBlock {
  id: string;
  label: string;
  startHour: number; // 0-24 in hours
  endHour: number;
  color: string;
  bg: string;
  borderColor: string;
}

const initialBlocks: EnergyBlock[] = [
  { id: "sleep1", label: "Sleep", startHour: 0, endHour: 7, color: "text-sky", bg: "bg-sky-light/60", borderColor: "border-sky/30" },
  { id: "moderate1", label: "Moderate", startHour: 7, endHour: 9, color: "text-sunny", bg: "bg-sunny-light/60", borderColor: "border-sunny/30" },
  { id: "high", label: "High energy", startHour: 9, endHour: 11, color: "text-mint", bg: "bg-mint-light/60", borderColor: "border-mint/30" },
  { id: "moderate2", label: "Moderate", startHour: 11, endHour: 12, color: "text-sunny", bg: "bg-sunny-light/60", borderColor: "border-sunny/30" },
  { id: "nap", label: "Nap", startHour: 12.5, endHour: 14, color: "text-sky", bg: "bg-sky-light/60", borderColor: "border-sky/30" },
  { id: "low", label: "Low energy", startHour: 14, endHour: 16, color: "text-lavender", bg: "bg-lavender-light/60", borderColor: "border-lavender/30" },
  { id: "moderate3", label: "Moderate", startHour: 16, endHour: 19, color: "text-sunny", bg: "bg-sunny-light/60", borderColor: "border-sunny/30" },
  { id: "sleep2", label: "Sleep", startHour: 19.5, endHour: 24, color: "text-sky", bg: "bg-sky-light/60", borderColor: "border-sky/30" },
];

const legendItems = [
  { label: "High energy", dotClass: "bg-mint" },
  { label: "Moderate", dotClass: "bg-sunny" },
  { label: "Low energy", dotClass: "bg-lavender" },
  { label: "Nap", dotClass: "bg-sky" },
];

const VISIBLE_HOURS = 6;
const TOTAL_HOURS = 24;
const HOUR_WIDTH = 40; // px per hour

export const RoutineMockup = () => {
  const [blocks, setBlocks] = useState(initialBlocks);
  const [scrollOffset, setScrollOffset] = useState(6 * HOUR_WIDTH); // start at 6 AM
  const [dragging, setDragging] = useState<{ id: string; startX: number; origStart: number; origEnd: number } | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const totalWidth = TOTAL_HOURS * HOUR_WIDTH;
  const viewportWidth = VISIBLE_HOURS * HOUR_WIDTH;

  const handleBlockPointerDown = useCallback((e: React.PointerEvent, block: EnergyBlock) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.currentTarget as HTMLElement;
    target.setPointerCapture(e.pointerId);
    setDragging({ id: block.id, startX: e.clientX, origStart: block.startHour, origEnd: block.endHour });
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging) return;
    const dx = e.clientX - dragging.startX;
    const dHours = dx / HOUR_WIDTH;
    const duration = dragging.origEnd - dragging.origStart;
    let newStart = Math.round((dragging.origStart + dHours) * 2) / 2; // snap to 30min
    newStart = Math.max(0, Math.min(TOTAL_HOURS - duration, newStart));
    setBlocks(prev => prev.map(b => b.id === dragging.id ? { ...b, startHour: newStart, endHour: newStart + duration } : b));
  }, [dragging]);

  const handlePointerUp = useCallback(() => {
    setDragging(null);
  }, []);

  // Timeline hours to show
  const visibleStartHour = Math.floor(scrollOffset / HOUR_WIDTH);
  const hours = Array.from({ length: VISIBLE_HOURS + 1 }, (_, i) => visibleStartHour + i).filter(h => h <= 24);

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

      {/* Energy Rhythm Section */}
      <div className="px-3 pt-3 pb-1">
        <p className="text-[9px] font-bold text-foreground mb-0.5 uppercase tracking-wider">Daily Energy Rhythm</p>
        <p className="text-[7px] text-muted-foreground mb-2">Drag blocks to adjust your child's energy pattern.</p>

        {/* Legend */}
        <div className="flex gap-1.5 mb-2 flex-wrap">
          {legendItems.map(item => (
            <div key={item.label} className="flex items-center gap-1 rounded-full border border-border px-1.5 py-0.5">
              <div className={`h-1.5 w-1.5 rounded-full ${item.dotClass}`} />
              <span className="text-[7px] font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative rounded-lg border border-border bg-muted/20 overflow-hidden">
          {/* Time labels */}
          <div className="flex border-b border-border" style={{ width: viewportWidth }}>
            {hours.slice(0, VISIBLE_HOURS).map(h => (
              <div key={h} className="text-[7px] text-muted-foreground text-center py-1" style={{ width: HOUR_WIDTH }}>
                {h === 0 ? '12 AM' : h <= 12 ? `${h}${h === 12 ? ' PM' : ' AM'}` : `${h - 12} PM`}
              </div>
            ))}
          </div>

          {/* Blocks area */}
          <div
            ref={timelineRef}
            className="relative h-12 select-none touch-none"
            style={{ width: viewportWidth }}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            {/* Grid lines */}
            {hours.slice(0, VISIBLE_HOURS).map((h, i) => (
              <div
                key={h}
                className="absolute top-0 bottom-0 border-l border-border/40"
                style={{ left: i * HOUR_WIDTH }}
              />
            ))}

            {/* Energy blocks */}
            {blocks.map(block => {
              const left = (block.startHour * HOUR_WIDTH) - scrollOffset;
              const width = (block.endHour - block.startHour) * HOUR_WIDTH;
              // Skip if not visible
              if (left + width < 0 || left > viewportWidth) return null;
              return (
                <div
                  key={block.id}
                  className={`absolute top-1.5 bottom-1.5 rounded-md ${block.bg} border ${block.borderColor} flex items-center justify-center gap-0.5 cursor-grab active:cursor-grabbing transition-colors ${dragging?.id === block.id ? 'ring-1 ring-foreground/20 shadow-soft' : ''}`}
                  style={{ left: Math.max(0, left), width: Math.min(width, viewportWidth - Math.max(0, left)) }}
                  onPointerDown={(e) => handleBlockPointerDown(e, block)}
                >
                  <GripVertical className="h-2 w-2 text-muted-foreground/50" />
                  <span className={`text-[7px] font-bold ${block.color} truncate`}>{block.label}</span>
                </div>
              );
            })}
          </div>

          {/* Scrollbar */}
          <div className="relative h-3 bg-muted/30 border-t border-border">
            <div className="absolute inset-y-0.5 flex items-center px-1 w-full">
              <button
                className="text-muted-foreground/50 text-[8px] shrink-0"
                onClick={() => setScrollOffset(Math.max(0, scrollOffset - 2 * HOUR_WIDTH))}
              >◀</button>
              <div className="flex-1 relative mx-1">
                <div className="h-1.5 rounded-full bg-border" />
                <div
                  ref={scrollRef}
                  className="absolute top-0 h-1.5 rounded-full bg-muted-foreground/30 cursor-pointer"
                  style={{
                    left: `${(scrollOffset / (totalWidth - viewportWidth)) * 70}%`,
                    width: '30%',
                  }}
                />
              </div>
              <button
                className="text-muted-foreground/50 text-[8px] shrink-0"
                onClick={() => setScrollOffset(Math.min(totalWidth - viewportWidth, scrollOffset + 2 * HOUR_WIDTH))}
              >▶</button>
            </div>
          </div>
        </div>
      </div>

      {/* Meals & Nap summary */}
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
