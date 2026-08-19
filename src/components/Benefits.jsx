import { motion } from "framer-motion";
import * as GiIcons from "react-icons/gi";
import { GiCakeSlice } from "react-icons/gi";
import Reveal from "./Reveal";
import { benefits } from "../data/content";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-10 md:py-20"
      style={{ background: "#FFF8F5" }}
    >
      <div className="container-px mx-auto max-w-7xl grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, #7A243610, #E8B24D08)",
              }}
            />
            <div
              className="relative overflow-hidden rounded-3xl h-[380px] sm:h-[440px] flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #C9633A, #7A2436)",
              }}
            >
              <GiCakeSlice className="text-white/90 text-[8rem] sm:text-[10rem]" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(43,16,20,0.6))",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-2xl font-black text-white">Since 1985</p>
                <p className="mt-1 text-sm text-white/80">
                  Cakes · Bakes · Sweets · Savories
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <span className="eyebrow mb-4">
            <GiCakeSlice /> Why Rolex's
          </span>
          <h2
            className="mb-8 text-3xl md:text-5xl font-black"
            style={{ color: "#2B1014" }}
          >
            Why Bake
            <br />
            <span style={{ color: "#7A2436" }}>With Us?</span>
          </h2>

          <div className="space-y-4">
            {benefits.map((item, i) => {
              const Icon = GiIcons[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 rounded-2xl p-5 bg-white border border-primary/10 transition-shadow hover:shadow-card"
                >
                  <div
                    className="p-2.5 rounded-xl shrink-0"
                    style={{ background: `${item.tint}18` }}
                  >
                    <Icon className="text-xl" style={{ color: item.tint }} />
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: "#2B1014" }}>
                      {item.title}
                    </p>
                    <p
                      className="mt-1 text-sm leading-relaxed"
                      style={{ color: "#6B5A5E" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
