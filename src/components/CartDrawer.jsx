import { AnimatePresence, motion } from "framer-motion";
import { HiX, HiMinus, HiPlus, HiTrash, HiShoppingBag } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setCartOpen,
    updateQty,
    removeFromCart,
    subtotal,
  } = useCart();
  const navigate = useNavigate();

  const goToCheckout = () => {
    setCartOpen(false);
    navigate("/checkout");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[300]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-wine-900/55 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-soft flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-wine/10">
              <h2 className="font-display font-bold text-lg flex items-center gap-2 text-wine">
                <HiShoppingBag className="h-5 w-5 text-wine" />
                Your Cart
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                className="h-9 w-9 rounded-full flex items-center justify-center hover:bg-wine/5 transition-colors"
                aria-label="Close cart"
              >
                <HiX className="h-5 w-5 text-wine" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-3 py-16">
                  <HiShoppingBag className="h-12 w-12 text-wine/20" />
                  <p className="text-sm text-ink/60">Your cart is empty.</p>
                  <button
                    onClick={() => {
                      setCartOpen(false);
                      navigate("/shop");
                    }}
                    className="btn-gold text-sm px-6 py-2.5 mt-1"
                  >
                    Browse Products
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 border-b border-wine/10 pb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-md object-cover shrink-0 bg-blush"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate text-wine">
                        {item.name}
                      </p>
                      <p className="text-xs text-ink/50">
                        ${item.price.toLocaleString()} each
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center rounded-full border border-wine/25">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="h-7 w-7 flex items-center justify-center text-wine"
                          >
                            <HiMinus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm font-bold text-wine">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="h-7 w-7 flex items-center justify-center text-wine"
                          >
                            <HiPlus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-bold text-sm text-gold-dark">
                          ${(item.price * item.qty).toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="h-7 w-7 shrink-0 flex items-center justify-center text-wine/40 hover:text-wine transition-colors"
                      aria-label={`Remove ${item.name}`}
                    >
                      <HiTrash className="h-4 w-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-5 border-t border-wine/10 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink/60">Subtotal</span>
                  <span className="font-bold text-wine">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-ink/40">
                  Shipping and taxes are calculated at checkout.
                </p>
                <button onClick={goToCheckout} className="btn-gold w-full py-3">
                  Checkout
                </button>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
