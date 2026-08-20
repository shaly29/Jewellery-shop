import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FiSearch, FiX, FiSliders } from "react-icons/fi";
import ProductCard from "../components/ProductCard";
import { products, CATEGORIES } from "../data/products";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "name", label: "Name: A to Z" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "All");
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(3000);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const priceCeiling = useMemo(
    () => Math.max(...products.map((p) => p.price)),
    []
  );

  // Keep local state in sync if the URL changes (e.g. navbar search / category click)
  useEffect(() => {
    setSearch(searchParams.get("q") || "");
    setCategory(searchParams.get("category") || "All");
  }, [searchParams]);

  useEffect(() => {
    setMaxPrice(priceCeiling);
  }, [priceCeiling]);

  const updateParams = (next) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(next).forEach(([key, value]) => {
      if (value && value !== "All") params.set(key, value);
      else params.delete(key);
    });
    setSearchParams(params);
  };

  const filtered = useMemo(() => {
    let list = [...products];

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (category !== "All") {
      list = list.filter((p) => p.category === category);
    }

    list = list.filter((p) => p.price <= maxPrice);

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return list;
  }, [search, category, sort, maxPrice]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setSort("featured");
    setMaxPrice(priceCeiling);
    setSearchParams({});
  };

  const hasActiveFilters =
    search.trim() !== "" || category !== "All" || maxPrice < priceCeiling;

  return (
    <div className="bg-cream min-h-screen pt-36 md:pt-40 pb-24">
      <div className="container-px mx-auto max-w-8xl">
        <div className="text-center mb-10">
          <span className="eyebrow justify-center">Our Collection</span>
          <h1 className="section-heading mt-3">Shop Fine Jewellery</h1>
          <div className="divider-orn mt-4">✦</div>
        </div>

        {/* Search + sort bar */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateParams({ q: search });
            }}
            className="relative flex-1 max-w-md"
          >
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-wine/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                updateParams({ q: e.target.value });
              }}
              placeholder="Search by name, category..."
              className="w-full rounded-sm border border-wine/15 bg-white pl-11 pr-10 py-3 text-sm text-wine placeholder:text-wine/35 outline-none focus:border-gold transition-colors"
            />
            {search && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  updateParams({ q: "" });
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-wine/40 hover:text-wine"
                aria-label="Clear search"
              >
                <FiX />
              </button>
            )}
          </form>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setFiltersOpen((v) => !v)}
              className="lg:hidden inline-flex items-center gap-2 text-sm font-semibold text-wine border border-wine/20 rounded-sm px-4 py-2.5"
            >
              <FiSliders />
              Filters
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-sm border border-wine/15 bg-white px-4 py-3 text-sm text-wine outline-none focus:border-gold transition-colors"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-10">
          {/* Filters sidebar */}
          <aside
            className={`${
              filtersOpen ? "block" : "hidden"
            } lg:block card-surface p-6 h-fit lg:sticky lg:top-36`}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-semibold text-wine">Filters</h3>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-gold-dark hover:text-wine font-semibold uppercase tracking-wide"
                >
                  Clear all
                </button>
              )}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-wine/50 mb-3">
                Category
              </p>
              <div className="flex flex-col gap-1">
                {["All", ...CATEGORIES].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setCategory(cat);
                      updateParams({ category: cat });
                    }}
                    className={`text-left text-sm px-3 py-2 rounded-sm transition-colors ${
                      category === cat
                        ? "bg-wine text-gold-light font-semibold"
                        : "text-ink/70 hover:bg-blush"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-wine/50 mb-3">
                Max Price: ${maxPrice.toLocaleString()}
              </p>
              <input
                type="range"
                min={0}
                max={priceCeiling}
                step={10}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-gold"
              />
              <div className="flex justify-between text-[11px] text-ink/40 mt-1">
                <span>$0</span>
                <span>${priceCeiling.toLocaleString()}</span>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div>
            <p className="text-sm text-ink/50 mb-5">
              Showing {filtered.length} of {products.length} products
            </p>

            {filtered.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="card-surface py-20 flex flex-col items-center gap-4 text-center"
              >
                <p className="text-wine font-display text-xl">No products found</p>
                <p className="text-ink/50 text-sm max-w-sm">
                  Try adjusting your search, category, or price filters.
                </p>
                <button onClick={clearFilters} className="btn-outline-dark mt-2">
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
                {filtered.map((product, i) => (
                  <ProductCard product={product} index={i} key={product.id} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
