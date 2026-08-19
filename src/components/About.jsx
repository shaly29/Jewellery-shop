import { motion } from "framer-motion";
import * as GiIcons from "react-icons/gi";
import { GiCakeSlice, GiWheat } from "react-icons/gi";
import Reveal from "./Reveal";
import { aboutFeatures } from "../data/content";

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-white py-10 md:py-20">
      <div className="container-px mx-auto max-w-7xl grid items-center gap-14 lg:grid-cols-2">
        <Reveal direction="right">
          <div className="relative">
            <div
              className="absolute -right-6 -top-6 h-full w-full rounded-3xl"
              style={{
                background: "linear-gradient(135deg, #7A243615, #E8B24D10)",
              }}
            />
            <div
              className="relative overflow-hidden rounded-3xl shadow-soft h-[380px] sm:h-[440px] flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #7A2436, #2B1014)",
              }}
            >
              <GiCakeSlice className="text-white/90 text-[8rem] sm:text-[10rem]" />
            </div>
            <div className="glass absolute -bottom-6 -right-6 rounded-2xl px-6 py-4 shadow-card">
              <p className="text-3xl font-black" style={{ color: "#7A2436" }}>
                10,000+
              </p>
              <p className="text-sm font-medium" style={{ color: "#6B5A5E" }}>
                Happy Customers
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <span className="eyebrow mb-4">
            <GiWheat /> About Us
          </span>
          <h2
            className="mb-6 text-3xl md:text-5xl font-black leading-tight"
            style={{ color: "#2B1014" }}
          >
            Baking Tradition
            <br />
            <span style={{ color: "#7A2436" }}>Since 1985</span>
          </h2>
          <p
            className="mb-5 text-base sm:text-lg leading-relaxed"
            style={{ color: "#6B5A5E" }}
          >
            Rolex's Bake Mart is a proudly Jaffna-born bakery based in Jaffna
            Town, dedicated to baking fresh cakes, buns, doughnuts and
            traditional short eats every single day.
          </p>
          <p
            className="mb-8 text-sm sm:text-base leading-relaxed"
            style={{ color: "#6B5A5E" }}
          >
            From custom celebration cakes to everyday bakes, homemade ice cream
            and full event catering, every item that leaves our kitchen reflects
            four decades of hands-on craftsmanship and a commitment to quality
            our community has trusted since 1985.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {aboutFeatures.map((f) => {
              const Icon = GiIcons[f.icon];
              return (
                <div
                  key={f.title}
                  className="flex items-start gap-3 rounded-2xl p-4"
                  style={{ background: "#7A243608" }}
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "#7A243618" }}
                  >
                    <Icon style={{ color: "#7A2436" }} className="text-lg" />
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: "#2B1014" }}
                    >
                      {f.title}
                    </p>
                    <p className="text-xs" style={{ color: "#6B5A5E" }}>
                      {f.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
