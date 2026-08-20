import * as GiIcons from "react-icons/gi";
import { GiDiamondRing, GiWheat } from "react-icons/gi";
import Reveal from "./Reveal";
import { aboutFeatures } from "../data/content";

// X Dream Jewellery brand colors (defined in tailwind.config.js)
// wine  -> #c73051  (primary rose/raspberry pink)
// gold  -> #d5aa5c  (secondary gold)
// ink   -> dark text
// muted -> #6B5A5E  (body/secondary text — add to tailwind.config.js if not present)

export default function About() {
  return (
    <section id="about" className="section-pad bg-cream overflow-hidden py-10 md:py-20">
      <div className="container-px mx-auto max-w-7xl grid items-center gap-14 lg:grid-cols-2">
        {/* ================= IMAGE / VISUAL SIDE ================= */}
        <Reveal direction="right">
          <div className="relative">
            <div
              className="absolute -right-6 -top-6 h-full w-full rounded-3xl"
              style={{
                background: "linear-gradient(135deg, #c7305115, #d5aa5c10)",
              }}
            />
            <div
              className="relative overflow-hidden rounded-3xl shadow-soft h-[380px] sm:h-[440px] flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #c73051, #4A1220)",
              }}
            >
              <GiDiamondRing className="text-white/90 text-[8rem] sm:text-[10rem]" />
            </div>

            <div className="glass absolute -bottom-6 -right-6 rounded-2xl px-6 py-4 shadow-card">
              <p className="text-3xl font-black text-wine">10,000+</p>
              <p className="text-sm font-medium text-muted">Happy Customers</p>
            </div>
          </div>
        </Reveal>

        {/* ================= TEXT SIDE ================= */}
        <Reveal direction="left" delay={0.1}>
          <span className="eyebrow mb-4">
            <GiWheat /> X Dream
          </span>

          <h2 className="mb-6 text-3xl md:text-5xl font-black leading-tight text-ink">
            Story
            <br />
            <span className="text-wine">About Us</span>
          </h2>

          <p className="mb-5 text-base sm:text-lg leading-relaxed text-muted">
            We present you the exquisite jewellery that leaves unforgettable
            experience. X Dream jewellery is renowned for its magnificent
            pieces and rare craftsmanship, we produce a pleasing combination
            of modern and traditional jewellery.
          </p>

          <p className="mb-8 text-sm sm:text-base leading-relaxed text-muted">
            By carrying extensive quality checks we maintain highest standard
            and quality of Gold and Diamond. Every piece of our jewellery is
            associated to feminine beauty. We understand the evolving needs
            and desires of Women. At X Dream Jewellery, jewellery is not just
            a product, it is considered as Women's pride.
          </p>

          {/* ================= FEATURE GRID ================= */}
          <div className="grid grid-cols-2 gap-4">
            {aboutFeatures.map((f) => {
              const Icon = GiIcons[f.icon];
              return (
                <div
                  key={f.title}
                  className="flex items-start gap-3 rounded-2xl p-4 bg-wine/[0.03]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-wine/10">
                    <Icon className="text-lg text-wine" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">{f.title}</p>
                    <p className="text-xs text-muted">{f.description}</p>
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