import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function PromoBanner({ data, reverse = false }) {
  return (
    <section className="bg-wine">
      <div
        className={`grid lg:grid-cols-2 items-stretch ${
          reverse ? "" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center py-16 md:py-24 container-px lg:px-16 ${
            reverse ? "lg:order-2" : ""
          }`}
        >
          <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            <span className="eyebrow text-gold-light justify-center lg:justify-start">
              {data.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-white leading-tight text-balance">
              {data.heading}
            </h2>
            <p className="mt-5 text-white/65 leading-relaxed">
              {data.paragraph}
            </p>
            <a href="#collections" className="btn-gold mt-8">
              {data.cta}
              <FiArrowRight />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className={`relative min-h-[280px] sm:min-h-[360px] ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          <img
            src={data.image}
            alt={data.heading}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wine-900/40 via-transparent to-transparent lg:bg-gradient-to-l" />
        </motion.div>
      </div>
    </section>
  );
}