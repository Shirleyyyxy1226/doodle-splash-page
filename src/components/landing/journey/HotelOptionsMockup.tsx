import { useState } from "react";
import { MapPin, Users, ExternalLink, Home, Baby, Utensils, Check } from "lucide-react";

const filters = [
  { label: "All", icon: null },
  { label: "Family rooms", icon: Home },
  { label: "Baby cot", icon: Baby },
  { label: "Kitchen", icon: Utensils },
];

const hotels = [
  {
    name: "Hotel Arts Barcelona",
    address: "Marina 19-21, Vila Olímpica",
    recommend: 92,
    reviews: 287,
    tags: ["Family rooms", "Pool access", "Crib on request"],
    desc: "Quieter lounge area with crib on request — useful for families who need a mid-day rest stop near the waterfront.",
    walkTime: "~5 min",
  },
  {
    name: "Hotel 1898",
    address: "La Rambla 109, El Raval, Barcelona",
    recommend: 88,
    reviews: 112,
    tags: ["Family rooms", "Kitchen access", "Baby cot"],
    desc: "Spacious family rooms with a kitchenette — useful for preparing Milo's preferred meals or snacks.",
    walkTime: "~20 min",
  },
];

const restaurants = [
  {
    name: "La Mar Salada",
    address: "Passeig de Joan de Borbó 58",
    recommend: 90,
    reviews: 156,
    tags: ["Highchair", "Kids menu", "Outdoor seating"],
    desc: "Relaxed seafood restaurant with a kids menu and outdoor terrace — easy to bring a stroller.",
    walkTime: "~8 min",
  },
];

export const HotelOptionsMockup = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showType, setShowType] = useState<"hotels" | "restaurants">("hotels");

  const items = showType === "hotels" ? hotels : restaurants;

  return (
    <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
      <div className="p-3">
        <h4 className="text-xs font-bold text-foreground mb-0.5">
          {showType === "hotels" ? "Kid-friendly stays" : "Family-friendly dining"}
        </h4>
        <p className="text-[8px] text-muted-foreground mb-2">
          {showType === "hotels" ? "Filtered for families with toddlers" : "Restaurants that welcome little ones"}
        </p>

        {/* Type toggle */}
        <div className="flex gap-1 mb-2">
          <button
            onClick={() => setShowType("hotels")}
            className={`rounded-full px-2.5 py-1 text-[8px] font-bold transition-all ${
              showType === "hotels" ? "bg-coral text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            Hotels
          </button>
          <button
            onClick={() => setShowType("restaurants")}
            className={`rounded-full px-2.5 py-1 text-[8px] font-bold transition-all ${
              showType === "restaurants" ? "bg-coral text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            Restaurants
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-1 flex-nowrap overflow-x-auto mb-2 pb-0.5">
          {filters.map((f) => {
            const Icon = f.icon;
            return (
              <button
                key={f.label}
                onClick={() => setActiveFilter(f.label)}
                className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[7px] font-medium whitespace-nowrap transition-all shrink-0 ${
                  activeFilter === f.label
                    ? "border border-coral text-coral bg-coral-light/30"
                    : "border border-border text-muted-foreground"
                }`}
              >
                {Icon && <Icon className="h-2.5 w-2.5" />}
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Items */}
      <div className="px-3 pb-3 space-y-2">
        {items.map((item) => (
          <div key={item.name} className="rounded-xl border border-border p-2.5">
            <div className="flex items-start justify-between mb-0.5">
              <h5 className="text-[10px] font-bold text-foreground">{item.name}</h5>
              <span className="text-[7px] text-muted-foreground bg-muted rounded-full px-1.5 py-0.5 shrink-0">
                {item.walkTime}
              </span>
            </div>
            <p className="text-[7px] text-muted-foreground mb-1">{item.address}</p>

            {/* Recommendation */}
            <div className="flex items-center gap-1.5 mb-1">
              <Users className="h-3 w-3 text-coral" />
              <span className="text-[9px] font-bold text-foreground">{item.recommend}% recommend</span>
              <span className="text-[7px] text-muted-foreground">{item.reviews} reviews</span>
            </div>
            <div className="h-1 rounded-full bg-muted overflow-hidden mb-1.5">
              <div className="h-full rounded-full bg-coral" style={{ width: `${item.recommend}%` }} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-0.5 rounded-full border border-coral/30 bg-coral-light/20 px-1.5 py-0.5 text-[7px] font-medium text-coral"
                >
                  <Check className="h-2 w-2" />
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-[8px] text-muted-foreground leading-relaxed mb-2">{item.desc}</p>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-1.5">
              <button className="flex items-center justify-center gap-1 rounded-lg border border-border py-1.5 text-[8px] font-medium text-muted-foreground hover:bg-muted/50 transition-colors">
                <MapPin className="h-2.5 w-2.5" />
                View on map
              </button>
              <button className="flex items-center justify-center gap-1 rounded-lg bg-coral py-1.5 text-[8px] font-bold text-primary-foreground hover:opacity-90 transition-opacity">
                <ExternalLink className="h-2.5 w-2.5" />
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
