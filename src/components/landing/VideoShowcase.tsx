import { motion } from "framer-motion";
import { Baby, Heart, Star, Sparkles } from "lucide-react";
import childProfileImg from "@/assets/card-child-profile.jpg";
import napPhotoImg from "@/assets/card-nap-photo.png";
import tripPhotoImg from "@/assets/card-trip-photo.png";

const features = [
  {
    icon: Baby,
    title: "Child profiles",
    description: "Age, naps, allergies, energy levels — every detail shapes the plan.",
    image: childProfileImg,
    stepId: "step-1",
  },
  {
    icon: Heart,
    title: "Nap-synced plans",
    description: "Activities paced around your child's rest windows and energy.",
    image: napPhotoImg,
    stepId: "step-2",
  },
  {
    icon: Star,
    title: "Live trip guide",
    description: "Real-time map, timeline, and smart nudges while you travel.",
    image: tripPhotoImg,
    stepId: "step-3",
  },
];

export const VideoShowcase = () => {
  return (
    <>
      {/* Full-screen YouTube video section */}
      <section className="relative flex items-center justify-center bg-cream">
        <div className="container mx-auto px-4 py-12 w-full">
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
      <section className="bg-cream py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-body text-2xl font-bold text-foreground flex items-center gap-2 md:text-3xl">
              <Sparkles size={20} className="text-secondary" />
              Everything Your Family Trip Needs
            </h2>
          </motion.div>
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
                  className="overflow-hidden rounded-2xl bg-card shadow-card cursor-pointer"
                  onClick={() => document.getElementById(feature.stepId)?.scrollIntoView({ behavior: "smooth", block: "center" })}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-105"
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
