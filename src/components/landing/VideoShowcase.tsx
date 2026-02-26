import { motion } from "framer-motion";
import { Baby, Heart, Star } from "lucide-react";
import childProfileImg from "@/assets/card-child-profile.jpg";
import napScheduleImg from "@/assets/card-nap-schedule.png";
import liveTripImg from "@/assets/card-live-trip.png";

const features = [
  {
    icon: Baby,
    title: "Child profiles",
    description: "Age, naps, allergies, energy levels — every detail shapes the plan.",
    image: childProfileImg,
  },
  {
    icon: Heart,
    title: "Nap-synced plans",
    description: "Activities paced around your child's rest windows and energy.",
    image: napScheduleImg,
  },
  {
    icon: Star,
    title: "Live trip guide",
    description: "Real-time map, timeline, and smart nudges while you travel.",
    image: liveTripImg,
  },
];

export const VideoShowcase = () => {
  return (
    <>
      {/* Full-screen YouTube video section */}
      <section className="relative min-h-screen flex items-center justify-center bg-cream">
        <div className="container mx-auto px-4 py-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-5xl"
          >
            <div className="relative w-full overflow-hidden rounded-2xl shadow-lifted" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/CBzOWKsUfvE?list=PLnnpEIeBJ37jbpr1q4G3NM6WxzJruV4jb"
                title="KiddoGo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature cards section */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center font-body text-2xl font-bold text-foreground md:text-3xl lg:text-4xl"
          >
            Everything Your Family Trip Needs
          </motion.h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="overflow-hidden rounded-2xl bg-card shadow-card"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 flex items-center gap-2 font-body text-lg font-bold text-foreground">
                      <Icon className="h-5 w-5 text-coral" />
                      {feature.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
