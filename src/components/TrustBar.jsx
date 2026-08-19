import { motion } from "framer-motion";
import { FiShield, FiTruck, FiRefreshCw } from "react-icons/fi";
import { BiDiamond } from "react-icons/bi";
import { trustFeatures } from "../data/content";

const icons = {
  gem: BiDiamond,
  shield: FiShield,
  truck: FiTruck,
  refresh: FiRefreshCw,
};

export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-10 md:-mt-12">
      <div className="container-px mx-auto max-w-8xl">
        <div className="bg-blush rounded-md shadow-soft grid grid-cols-2 md:grid-cols-4 divide-y divide-x-0 md:divide-y-0 md:divide-x divide-wine/10">
          {trustFeatures.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-3 px-5 py-6 sm:py-7 cursor-default"
              >
                <span className="grid place-items-center w-11 h-11 shrink-0 rounded-full bg-white text-wine text-lg transition-all duration-300 group-hover:bg-wine group-hover:text-gold-light">
                  <Icon />
                </span>
                <div>
                  <p className="font-display font-semibold text-wine text-sm sm:text-base leading-tight">
                    {f.title}
                  </p>
                  <p className="text-[11px] sm:text-xs text-wine/50 mt-0.5">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}