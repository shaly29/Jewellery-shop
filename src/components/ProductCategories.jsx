import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { GiCakeSlice } from "react-icons/gi";

export default function ProductCategories() {
  const categories = useMemo(
    () => ["All", ...new Set(products.map((p) => p.category))],
    [],
  );
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="bg-white py-10 md:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className=" mb-5 md:mb-10 text-center">
          <span className="eyebrow mb-4 justify-center">
            <GiCakeSlice /> Our Menu
          </span>
          <h2
            className="text-3xl md:text-5xl font-black"
            style={{ color: "#2B1014" }}
          >
            Our Menu <span style={{ color: "#7A2436" }}>Categories</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-sm md:text-base"
            style={{ color: "#6B5A5E" }}
          >
            Explore our freshly baked range, made in small batches every day.
            Pick your favourites and order today.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={
                active === cat
                  ? {
                      background: "linear-gradient(135deg, #7A2436, #C9633A)",
                      color: "#fff",
                    }
                  : { background: "#7A243608", color: "#6B5A5E" }
              }
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product, i) => (
            <ProductCard product={product} index={i} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
