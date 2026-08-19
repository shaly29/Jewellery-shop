import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiX,
  HiMinus,
  HiPlus,
  HiShoppingCart,
} from "react-icons/hi";
import { FiHeart, FiStar } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function ProductQuickView() {
  const {
    quickViewProduct: product,
    closeQuickView,
    addToCart,
    toggleWishlist,
    isFavorite,
  } = useCart();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(1);
    document.body.style.overflow = product ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeQuickView();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeQuickView]);

  const liked = product ? isFavorite(product.id) : false;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 bg-wine-900/60 backdrop-blur-sm"
          onClick={closeQuickView}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-md bg-white shadow-soft grid md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeQuickView}
              className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-white/90 shadow-card flex items-center justify-center text-wine hover:bg-wine hover:text-gold-light transition-colors"
              aria-label="Close"
            >
              <HiX className="h-5 w-5" />
            </button>

            <div className="relative h-72 md:h-full bg-blush overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.tag && (
                <span className="absolute top-4 left-4 rounded-sm bg-wine px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase text-gold-light">
                  {product.tag}
                </span>
              )}
            </div>

            <div className="p-6 md:p-6 flex flex-col gap-4">
              <div>
                {product.category && (
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                    {product.category}
                  </p>
                )}
                <h2 className="font-display font-bold text-2xl mt-1 text-wine">
                  {product.name}
                </h2>
              </div>

              <div className="flex items-center gap-1.5 text-gold text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar
                    key={i}
                    className={
                      i < Math.round(product.rating) ? "fill-current" : "opacity-25"
                    }
                  />
                ))}
                <span className="text-wine/40 ml-1">({product.reviews} reviews)</span>
              </div>

              <p className="text-sm leading-relaxed text-ink/70">
                {product.description}
              </p>

              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-3xl text-gold-dark">
                  Rs {product.price.toLocaleString()}
                </span>
                {product.oldPrice && (
                  <span className="text-base line-through text-wine/35">
                    Rs {product.oldPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center rounded-full border border-wine/25">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="h-10 w-10 flex items-center justify-center text-wine"
                    aria-label="Decrease quantity"
                  >
                    <HiMinus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-bold text-wine">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="h-10 w-10 flex items-center justify-center text-wine"
                    aria-label="Increase quantity"
                  >
                    <HiPlus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  onClick={() => {
                    addToCart(product, qty);
                    closeQuickView();
                  }}
                  className="btn-gold flex-1 py-3"
                >
                  <HiShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
                  aria-pressed={liked}
                  className={`h-11 w-11 shrink-0 rounded-full border flex items-center justify-center transition-colors ${
                    liked
                      ? "bg-wine text-gold-light border-wine"
                      : "border-wine/25 text-wine hover:bg-wine hover:text-gold-light"
                  }`}
                >
                  <FiHeart className={liked ? "fill-current" : ""} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
