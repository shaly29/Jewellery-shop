import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { GiHeartBeats } from "react-icons/gi";
import { HiPlus } from "react-icons/hi";
import Reveal from "./Reveal";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className=" mb-5 md:mb-10 text-center">
          <span className="eyebrow mb-4 justify-center">
            <GiHeartBeats /> Testimonials
          </span>
          <h2
            className="text-3xl md:text-5xl font-black"
            style={{ color: "#2B1014" }}
          >
            What Our <span style={{ color: "#7A2436" }}>Customers Say</span>
          </h2>
          <p
            className="mt-3 text-sm max-w-lg mx-auto"
            style={{ color: "#6B5A5E" }}
          >
            Real feedback from customers across Jaffna.
          </p>
          <div className="mt-4 flex justify-center">
            <button
              className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-card hover:scale-105 active:scale-95 transition-transform"
              style={{ background: "#7A2436" }}
            >
              <HiPlus /> Write a Review
            </button>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl p-7 sm:p-8 shadow-card hover:shadow-soft transition-shadow duration-300 flex flex-col justify-between"
              style={{ border: "1px solid #7A243612", background: "#fff" }}
            >
              <div>
                <div className="mb-4 flex gap-1" style={{ color: "#E8B24D" }}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <FaStar
                      key={s}
                      className="h-4 w-4"
                      style={{ opacity: s < t.rating ? 1 : 0.25 }}
                    />
                  ))}
                </div>
                <p
                  className="mb-6 text-sm sm:text-base leading-relaxed italic"
                  style={{ color: "#6B5A5E" }}
                >
                  "{t.quote}"
                </p>
              </div>
              <div
                className="flex items-center gap-3 pt-4 border-t"
                style={{ borderColor: "#7A243610" }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm"
                  style={{
                    background: "linear-gradient(135deg, #7A2436, #C9633A)",
                  }}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <p
                    className="font-bold text-sm truncate"
                    style={{ color: "#2B1014" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs truncate" style={{ color: "#6B5A5E" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
