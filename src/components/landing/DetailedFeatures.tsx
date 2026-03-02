import { motion } from "framer-motion";
import { PlaceReviewMockup } from "./journey/PlaceReviewMockup";
import { HotelOptionsMockup } from "./journey/HotelOptionsMockup";
import { TipsMockup } from "./journey/TipsMockup";
import { QuickAdjustmentsMockup } from "./journey/QuickAdjustmentsMockup";
import { PackingListMockup } from "./journey/PackingListMockup";

const features = [
  {
    badge: "Discover",
    badgeColor: "bg-coral-light text-coral",
    title: "Trusted places, rated by parents",
    description:
      "Every recommendation is backed by real parent reviews — filtered by child age, stroller access, and more.",
    Mockup: PlaceReviewMockup,
  },
  {
    badge: "Stay & Dine",
    badgeColor: "bg-sky-light text-sky",
    title: "Kid-friendly stays & dining",
    description:
      "Hotels with cribs, restaurants with highchairs — filtered for what actually matters with little ones.",
    Mockup: HotelOptionsMockup,
  },
  {
    badge: "Tips",
    badgeColor: "bg-sunny-light text-sunny",
    title: "Smart tips that think ahead",
    description:
      "Context-aware reminders based on your child's routine, the weather, and what other parents found useful.",
    Mockup: TipsMockup,
  },
  {
    badge: "Adjust",
    badgeColor: "bg-mint-light text-mint",
    title: "One-tap adjustments",
    description:
      "Too tired? Too hot? One tap and we rearrange your entire plan — no re-planning needed.",
    Mockup: QuickAdjustmentsMockup,
  },
  {
    badge: "Pack",
    badgeColor: "bg-lavender-light text-lavender",
    title: "Packing lists, customized",
    description:
      "Weather-aware, destination-specific packing lists so you never forget the essentials.",
    Mockup: PackingListMockup,
  },
];

export const DetailedFeatures = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-5xl"
        >
          <h2 className="font-body text-2xl font-bold text-foreground md:text-3xl leading-tight">
            Everything you need,{" "}
            <span className="text-gradient-coral">in one place</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-5xl space-y-20 lg:space-y-28">
          {features.map((feature, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col items-center gap-8 lg:flex-row ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text */}
                <div className="flex-1 text-center lg:text-left">
                  <div
                    className={`mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1.5 ${feature.badgeColor}`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider font-body">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="mb-3 font-body text-2xl font-bold text-foreground md:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                    {feature.description}
                  </p>
                </div>

                {/* Mockup */}
                <div className="w-full max-w-[280px] flex-shrink-0">
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="transition-shadow hover:shadow-lifted"
                  >
                    <feature.Mockup />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
