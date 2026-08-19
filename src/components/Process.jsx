import { useState } from "react";
import { motion } from "framer-motion";
import * as GiIcons from "react-icons/gi";
import { GiWhisk } from "react-icons/gi";
import Reveal from "./Reveal";
import { processSteps } from "../data/content";

function FlipCard({ step, index }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = GiIcons[step.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      style={{ perspective: "1000px", height: "160px", cursor: "pointer" }}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #7A2436 0%, #C9633A 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "16px",
            boxShadow: "0 8px 24px rgba(122,36,54,0.22)",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: 8,
              right: 12,
              fontSize: 44,
              fontWeight: 900,
              color: "rgba(255,255,255,0.14)",
              lineHeight: 1,
            }}
          >
            {index + 1}
          </span>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1.5px solid rgba(255,255,255,0.3)",
            }}
          >
            <Icon style={{ width: 26, height: 26, color: "#fff" }} />
          </div>
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: "#fff",
              textAlign: "center",
              lineHeight: 1.3,
            }}
          >
            {step.title}
          </span>
          <span
            style={{
              position: "absolute",
              bottom: 10,
              fontSize: 10,
              color: "rgba(255,255,255,0.6)",
              fontWeight: 600,
            }}
          >
            tap to reveal ↻
          </span>
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "20px",
            background: "#fff",
            border: "2px solid #7A243622",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "20px 16px",
            boxShadow: "0 8px 24px rgba(122,36,54,0.1)",
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#7A2436",
            }}
          >
            Step {index + 1}
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: "#2B1014",
              textAlign: "center",
            }}
          >
            {step.title}
          </span>
          <p
            style={{
              fontSize: 12,
              color: "#6B5A5E",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            {step.description}
          </p>
          <span style={{ fontSize: 10, color: "#6B5A5E80", fontWeight: 600 }}>
            tap to flip back ↻
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section id="process" className="overflow-hidden bg-white py-10 md:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className=" mb-5 md:mb-10 text-center">
          <span className="eyebrow mb-4 justify-center">
            <GiWhisk /> Our Process
          </span>
          <h2
            className="text-3xl md:text-5xl font-black"
            style={{ color: "#2B1014" }}
          >
            From Oven to <span style={{ color: "#7A2436" }}>Your Table</span>
          </h2>
          <p
            className="mt-3 text-sm font-medium lg:hidden"
            style={{ color: "#6B5A5E" }}
          >
            Tap each card to learn more ✨
          </p>
        </Reveal>

        {/* Mobile / tablet: flip cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:hidden">
          {processSteps.map((step, i) => (
            <FlipCard step={step} index={i} key={step.number} />
          ))}
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative hidden lg:block">
          <div
            className="absolute left-0 right-0 h-0.5 top-10"
            style={{
              background:
                "linear-gradient(90deg, #7A243620, #C9633A80, #7A243620)",
            }}
          />
          <div className="grid grid-cols-6 gap-8">
            {processSteps.map((step, i) => {
              const Icon = GiIcons[step.icon];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div
                    className="relative z-10 mb-4 flex h-20 w-20 items-center justify-center rounded-full shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #7A2436, #C9633A)",
                    }}
                  >
                    <Icon className="h-9 w-9 text-white" />
                    <span
                      className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ background: "#2B1014" }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <h3
                    className="mb-1 text-sm font-bold"
                    style={{ color: "#2B1014" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#6B5A5E" }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
