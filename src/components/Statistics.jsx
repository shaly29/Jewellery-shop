import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import useCountUp from "../hooks/useCountUp";
import { stats } from "../data/content";

function StatItem({ stat, isActive, index }) {
  const value = useCountUp(stat.value, isActive);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <p className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white tracking-tight drop-shadow-md">
        {value.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="mt-3 text-sm md:text-base font-bold text-white/85">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function Statistics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      className="py-10 md:py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #7A2436, #4E1420, #C9633A)",
      }}
    >
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Our Numbers Speak
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem
              stat={stat}
              isActive={inView}
              index={i}
              key={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
