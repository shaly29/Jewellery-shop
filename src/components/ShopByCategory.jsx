import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { categories } from "../data/content";


export default function ShopByCategory() {
  return (
    <section id="collections" className="section-pad bg-cream">
      <div className="container-px mx-auto max-w-8xl">
        <Reveal className="text-center">
          <h2 className="section-heading">Shop by Category</h2>
          <div className="divider-orn mt-4">✦</div>
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-10 sm:gap-x-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/shop?category=${encodeURIComponent(cat.name)}`}
                className="group flex flex-col items-center gap-4 w-28 sm:w-32"
              >
                <span className="relative">
                  <span className="absolute -inset-1.5 rounded-full border border-gold/0 group-hover:border-gold/60 transition-all duration-300" />
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-card transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
                <span className="text-center">
                  <span className="block font-display font-semibold text-wine text-sm sm:text-base">
                    {cat.name}
                  </span>
                  <span className="mt-1 inline-flex items-center gap-1 text-[11px] text-gold-dark tracking-wide">
                    Explore
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
