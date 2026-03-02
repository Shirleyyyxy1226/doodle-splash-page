import { motion } from "framer-motion";

export const VideoShowcase = () => {
  return (
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
  );
};
