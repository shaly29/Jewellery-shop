import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

export default function Wishlist() {
  const { wishlist } = useCart();

  return (
    <div className="bg-cream min-h-screen pt-36 md:pt-40 pb-24">
      <div className="container-px mx-auto max-w-8xl">
        <div className="text-center mb-10">
          <span className="eyebrow justify-center">Saved For Later</span>
          <h1 className="section-heading mt-3">Your Wishlist</h1>
          <div className="divider-orn mt-4">✦</div>
        </div>

        {wishlist.length === 0 ? (
          <div className="card-surface max-w-lg mx-auto p-10 text-center flex flex-col items-center gap-4">
            <FiHeart className="text-5xl text-wine/20" />
            <p className="text-wine font-display text-xl">Your wishlist is empty</p>
            <p className="text-ink/50 text-sm">
              Tap the heart icon on any product to save it here.
            </p>
            <Link to="/shop" className="btn-gold mt-2">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {wishlist.map((product, i) => (
              <ProductCard product={product} index={i} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
