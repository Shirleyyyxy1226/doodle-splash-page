import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Users, Footprints, Star, ExternalLink, Lightbulb, X, Check } from "lucide-react";

const tags = [
  { label: "Colourful", checked: true },
  { label: "Some shade", checked: true },
  { label: "Stroller tricky in parts", checked: true },
];

const reviews = [
  {
    name: "Luisa B.",
    childAge: "3 yrs",
    date: "Jan 2026",
    stars: 5,
    text: "The colours kept our daughter fascinated the whole visit. Go early — much less crowded and cooler temperatures.",
    tags: ["Colourful", "Some shade"],
  },
  {
    name: "Kevin O.",
    childAge: "2 yrs",
    date: "Dec 2025",
    stars: 3,
    text: "Beautiful but bring a carrier rather than a stroller — some paths are steep. Our son loved the lizard mosaic.",
    tags: ["Stroller tricky in parts", "Colourful"],
  },
  {
    name: "Maria S.",
    childAge: "4 yrs",
    date: "Nov 2025",
    stars: 4,
    text: "Wonderful experience. The kids loved the mosaics. Bring water and snacks — limited food options inside.",
    tags: ["Colourful"],
  },
];

const filterTopics = ["All", "Colourful", "Some shade", "Stroller tricky in parts"];

export const PlaceReviewMockup = () => {
  const [showReviews, setShowReviews] = useState(false);
  const [activeTopic, setActiveTopic] = useState("All");

  const filteredReviews =
    activeTopic === "All"
      ? reviews
      : reviews.filter((r) => r.tags.includes(activeTopic));

  const topicCounts = filterTopics.map((t) => ({
    label: t,
    count: t === "All" ? reviews.length : reviews.filter((r) => r.tags.includes(t)).length,
  }));

  return (
    <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden relative">
      {/* Activity card */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-muted-foreground" />
            <span className="text-[9px] text-muted-foreground font-medium">10:30 AM · ~1 HR</span>
          </div>
          <span className="text-[8px] text-muted-foreground italic">easy to skip</span>
        </div>

        <h4 className="text-sm font-bold text-foreground mb-0.5">Park Güell visit</h4>
        <p className="text-[9px] text-muted-foreground mb-1.5">
          Mosaic wonderland. Book the quieter morning slot.
        </p>

        <div className="flex items-center gap-1.5 mb-2">
          <ExternalLink className="h-2.5 w-2.5 text-coral" />
          <span className="text-[9px] font-semibold text-coral">Park Güell</span>
          <span className="rounded-full border border-border px-1.5 py-0.5 text-[7px] text-muted-foreground flex items-center gap-0.5">
            <MapPin className="h-2 w-2" /> Map
          </span>
        </div>
        <p className="text-[7px] text-muted-foreground mb-2">
          Carrer d'Olot s/n, Gràcia, Barcelona
        </p>

        {/* Parent recommendation */}
        <div className="rounded-xl bg-coral-light/40 p-2.5 mb-2">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-coral" />
              <span className="text-[10px] font-bold text-foreground">85% of parents recommend</span>
            </div>
            <button
              onClick={() => setShowReviews(true)}
              className="text-[8px] font-semibold text-coral hover:underline"
            >
              412 reviews ›
            </button>
          </div>
          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
            <div className="h-full rounded-full bg-coral" style={{ width: "85%" }} />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center gap-0.5 rounded-full border border-coral/30 bg-coral-light/20 px-2 py-0.5 text-[7px] font-medium text-coral"
            >
              <Check className="h-2 w-2" />
              {tag.label}
            </span>
          ))}
        </div>

        {/* Tip */}
        <div className="flex items-start gap-1.5 mb-2">
          <Lightbulb className="h-3 w-3 text-sunny shrink-0 mt-0.5" />
          <p className="text-[8px] text-muted-foreground">
            Book the 9:30 AM slot — less crowded, cooler, and better for toddlers.
          </p>
        </div>

        {/* Walk time */}
        <div className="flex items-center gap-1 mb-3 pb-2 border-b border-border">
          <Footprints className="h-3 w-3 text-muted-foreground" />
          <span className="text-[9px] text-muted-foreground">~10 min walk</span>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setShowReviews(true)}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-mint-light/60 py-2 text-[10px] font-bold text-mint hover:bg-mint-light transition-colors"
          >
            <Star className="h-3 w-3" />
            View details
          </button>
          <button className="flex items-center justify-center gap-1.5 rounded-xl bg-lavender-light/60 py-2 text-[10px] font-bold text-lavender hover:bg-lavender-light transition-colors">
            <ExternalLink className="h-3 w-3" />
            More options
          </button>
        </div>
      </div>

      {/* Reviews drawer overlay */}
      <AnimatePresence>
        {showReviews && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute inset-0 bg-card z-30 overflow-y-auto rounded-2xl"
          >
            {/* Handle */}
            <div className="flex justify-center pt-2">
              <div className="h-1 w-10 rounded-full bg-muted-foreground/20" />
            </div>

            <div className="p-3">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-sm font-bold text-foreground">Park Güell</h4>
                  <p className="text-[8px] text-muted-foreground">
                    Carrer d'Olot s/n, Gràcia, Barcelona
                  </p>
                </div>
                <button
                  onClick={() => setShowReviews(false)}
                  className="h-6 w-6 rounded-full bg-muted flex items-center justify-center"
                >
                  <X className="h-3 w-3 text-muted-foreground" />
                </button>
              </div>

              {/* Rating bar */}
              <div className="rounded-xl bg-coral-light/40 p-2.5 mb-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-coral" />
                    <span className="text-[10px] font-bold text-foreground">
                      85% of parents recommend
                    </span>
                  </div>
                  <span className="text-[8px] text-muted-foreground">412 reviews</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-coral" style={{ width: "85%" }} />
                </div>
              </div>

              {/* Filter by topic */}
              <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                Filter by topic
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {topicCounts.map((topic) => (
                  <button
                    key={topic.label}
                    onClick={() => setActiveTopic(topic.label)}
                    className={`rounded-full px-2 py-0.5 text-[8px] font-medium transition-all ${
                      activeTopic === topic.label
                        ? "border border-coral text-coral bg-coral-light/30"
                        : "border border-border text-muted-foreground"
                    }`}
                  >
                    {topic.label === "All" ? `All (${topic.count})` : `✓ ${topic.label} (${topic.count})`}
                  </button>
                ))}
              </div>

              {/* Reviews */}
              <div className="space-y-2">
                {filteredReviews.map((review, i) => (
                  <div key={i} className="rounded-xl border border-border p-2.5">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-[10px] font-bold text-foreground">{review.name}</p>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className={`h-2.5 w-2.5 ${
                              s <= review.stars ? "text-sunny fill-sunny" : "text-muted-foreground/30"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-[7px] text-muted-foreground mb-1">
                      Child aged {review.childAge} · {review.date}
                    </p>
                    <p className="text-[9px] text-foreground/80 leading-relaxed mb-1.5">
                      {review.text}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {review.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-0.5 rounded-full border border-coral/30 bg-coral-light/20 px-1.5 py-0.5 text-[7px] font-medium text-coral"
                        >
                          ✓ {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
