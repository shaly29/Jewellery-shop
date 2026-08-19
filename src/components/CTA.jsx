import { motion } from "framer-motion";
import { HiShoppingCart, HiPhone } from "react-icons/hi";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-white" id="cta">
      <div className="container-px mx-auto max-w-4xl">
        <Reveal>
          <div
            className="p-[2.5px] rounded-[2rem] md:rounded-[2.4rem] shadow-soft"
            style={{ background: "linear-gradient(90deg, #7A243670, #C9633A50, #E8B24D70)" }}
          >
            <div
              className="relative overflow-hidden rounded-[calc(2rem-2.5px)] md:rounded-[calc(2.4rem-2.5px)] min-h-[300px] md:min-h-[380px] flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #2B1014, #4E1420)" }}
            >
              <div
                aria-hidden="true"
                className="absolute -top-16 -left-16 w-64 h-64 rounded-full blur-3xl opacity-30"
                style={{ background: "#C9633A" }}
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full blur-3xl opacity-20"
                style={{ background: "#E8B24D" }}
              />

              <div className="relative z-10 max-w-xl px-6 sm:px-8 py-10 text-center">
                <h2 className="mb-3 text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                  Taste Tradition.
                  <br />
                  Choose Rolex's.
                </h2>
                <p className="mb-8 text-xs sm:text-sm md:text-base text-white/90 font-medium max-w-md mx-auto leading-relaxed">
                  Join thousands of families across Jaffna who trust Rolex's Bake Mart for
                  freshly baked cakes and treats, since 1985.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold shadow-xl hover:scale-105 active:scale-95 transition-all"
                    style={{ color: "#7A2436" }}
                  >
                    <HiShoppingCart /> Order Now
                  </button>
                  <a
                    href="tel:+94212229402"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/80 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/20 active:scale-95 transition-all"
                  >
                    <HiPhone /> Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
