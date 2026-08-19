import { motion } from "framer-motion";
import * as GiIcons from "react-icons/gi";
import { trustBadges } from "../data/content";

export default function TrustBadges() {
  return (
    <section className="bg-white relative z-10">
      <div className="container-px mx-auto max-w-7xl py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {trustBadges.map((item, i) => {
          const Icon = GiIcons[item.icon];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl hover:bg-light transition-colors duration-300"
            >
              <span className="w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{ background: "#7A243612", color: "#7A2436" }}>
                <Icon />
              </span>
              <h3 className="font-bold text-sm md:text-base" style={{ color: "#2B1014" }}>{item.title}</h3>
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#6B5A5E" }}>{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
