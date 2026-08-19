import { motion } from "framer-motion";
import { FiHeart, FiShoppingBag, FiStar, FiEye } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product, index = 0 }) {
  const { addToCart, toggleWishlist, isFavorite, openQuickView } = useCart();
  const liked = isFavorite(product.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.1 }}
      whileHover={{ y: -6 }}
      className="group card-surface overflow-hidden flex flex-col"
    >
      <div className="relative overflow-hidden aspect-[6/7] bg-blush">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 rounded-sm bg-wine px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase text-gold-light">
            {product.tag}
          </span>
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            onClick={() => toggleWishlist(product)}
            aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
            aria-pressed={liked}
            className={`grid place-items-center w-9 h-9 rounded-full backdrop-blur shadow-soft transition-all duration-300 hover:scale-110 ${
              liked ? "bg-wine text-gold-light" : "bg-white/90 text-wine"
            }`}
          >
            <FiHeart className={liked ? "fill-current" : ""} />
          </button>
          <button
            onClick={() => openQuickView(product)}
            aria-label={`Quick view ${product.name}`}
            className="grid place-items-center w-9 h-9 rounded-full bg-white/90 backdrop-blur text-wine shadow-soft transition-all duration-300 hover:scale-110 hover:bg-wine hover:text-gold-light"
          >
            <FiEye />
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
          <button
            onClick={() => addToCart(product, 1)}
            className="w-full flex items-center justify-center gap-2 bg-wine text-gold-light text-xs font-semibold tracking-[0.15em] uppercase py-3 hover:bg-wine-600 transition-colors"
          >
            <FiShoppingBag />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-1.5">
        {product.category && (
          <span className="text-[10px] font-semibold tracking-widest uppercase text-gold-dark">
            {product.category}
          </span>
        )}
        <button
          onClick={() => openQuickView(product)}
          className="text-left font-display text-base sm:text-lg font-semibold text-wine hover:text-wine-400 transition-colors"
        >
          {product.name}
        </button>
        <div className="flex items-center gap-2">
          <p className="text-gold-dark font-semibold">
            Rs {product.price.toLocaleString()}
          </p>
          {product.oldPrice && (
            <p className="text-wine/35 text-sm line-through">
              Rs {product.oldPrice.toLocaleString()}
            </p>
          )}
        </div>
        <div className="flex items-center gap-1.5 text-gold text-xs mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <FiStar
              key={i}
              className={i < Math.round(product.rating) ? "fill-current" : "opacity-25"}
            />
          ))}
          <span className="text-wine/40 ml-1">({product.reviews})</span>
        </div>
      </div>
    </motion.article>
  );
}
