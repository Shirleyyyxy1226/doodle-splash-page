import { useState } from "react";
import { Sun, CloudSun, Cloud, CloudRain, Check, Trash2 } from "lucide-react";

const weatherDays = [
  { day: "Wed", icon: CloudSun, high: 28, low: 17 },
  { day: "Thu", icon: CloudSun, high: 28, low: 17 },
  { day: "Fri", icon: Sun, high: 27, low: 16 },
  { day: "Sat", icon: Sun, high: 27, low: 16 },
  { day: "Sun", icon: CloudSun, high: 27, low: 16 },
  { day: "Mon", icon: CloudSun, high: 27, low: 16 },
  { day: "Tue", icon: Cloud, high: 26, low: 15 },
  { day: "Wed", icon: CloudRain, high: 25, low: 15 },
];

const categories = ["All", "Kids Essentials", "Clothing", "Documents", "Toiletries"];

interface PackingItem {
  name: string;
  category: string;
  checked: boolean;
}

const initialItems: PackingItem[] = [
  { name: "Favorite Toys", category: "Kids Essentials", checked: false },
  { name: "Diapers", category: "Kids Essentials", checked: false },
  { name: "Passport", category: "Documents", checked: false },
  { name: "Sunscreen", category: "Toiletries", checked: false },
];

export const PackingListMockup = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(initialItems);

  const toggleItem = (index: number) => {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, checked: !item.checked } : item))
    );
  };

  const filtered = activeCategory === "All" ? items : items.filter((i) => i.category === activeCategory);
  const checkedCount = items.filter((i) => i.checked).length;

  return (
    <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
      <div className="p-3">
        <p className="font-display text-xs font-bold text-foreground">Packing List</p>
        <p className="text-[9px] text-muted-foreground">Mar 27 – Apr 04</p>
      </div>


      {/* Category filter */}
      <div className="px-3 mb-2 flex gap-1 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`shrink-0 rounded-full px-2.5 py-1 text-[8px] font-medium transition-all ${
              activeCategory === cat
                ? "bg-coral text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="px-3 mb-1">
        <div className="flex items-center justify-between">
          <div className="flex-1 h-1 rounded-full bg-muted overflow-hidden mr-2">
            <div
              className="h-full rounded-full bg-gradient-to-r from-coral to-sunny transition-all duration-300"
              style={{ width: `${(checkedCount / items.length) * 100}%` }}
            />
          </div>
          <span className="text-[8px] text-muted-foreground font-medium">{checkedCount} / {items.length}</span>
        </div>
      </div>

      {/* Items */}
      <div className="px-3 pb-3 space-y-1">
        {filtered.map((item, i) => {
          const realIndex = items.indexOf(item);
          return (
            <div
              key={item.name}
              onClick={() => toggleItem(realIndex)}
              className="flex items-center gap-2.5 rounded-xl bg-muted/30 p-2 cursor-pointer hover:bg-muted/50 transition-colors"
            >
              <div
                className={`h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                  item.checked ? "bg-coral border-coral" : "border-muted-foreground/30"
                }`}
              >
                {item.checked && <Check className="h-3 w-3 text-primary-foreground" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-[10px] font-bold ${item.checked ? "line-through text-muted-foreground" : "text-foreground"}`}>
                  {item.name}
                </p>
                <p className="text-[8px] text-muted-foreground">{item.category}</p>
              </div>
              <Trash2 className="h-3 w-3 text-coral/50 shrink-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
