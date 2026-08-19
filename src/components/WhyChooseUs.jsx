import { motion } from "framer-motion";
import * as GiIcons from "react-icons/gi";
import { GiStarFormation } from "react-icons/gi";
import Reveal from "./Reveal";
import { whyChooseUs } from "../data/content";

export default function WhyChooseUs() {
  return (
    <section className="py-10 md:py-20" style={{ background: "#FFF8F5" }}>
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className=" mb-5 md:mb-10 text-center">
          <span className="eyebrow mb-4 justify-center">
            <GiStarFormation /> Why Choose Us
          </span>
          <h2
            className="text-3xl md:text-5xl font-black"
            style={{ color: "#2B1014" }}
          >
            The Rolex's <span style={{ color: "#7A2436" }}>Difference</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-8 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = GiIcons[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-center shadow-card flex flex-col items-center transition-shadow duration-300 hover:shadow-soft"
              >
                <div
                  className="mb-3 sm:mb-6 flex h-11 w-11 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl shrink-0"
                  style={{ background: `${item.tint}18` }}
                >
                  <Icon
                    className="text-xl sm:text-3xl"
                    style={{ color: item.tint }}
                  />
                </div>
                <h3
                  className="mb-1.5 sm:mb-3 text-sm sm:text-xl font-bold"
                  style={{ color: "#2B1014" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[11px] sm:text-sm leading-snug sm:leading-relaxed"
                  style={{ color: "#6B5A5E" }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
