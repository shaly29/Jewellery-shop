import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const CART_KEY = "aurelia_cart_v1";
const WISHLIST_KEY = "aurelia_wishlist_v1";

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStorage(CART_KEY, []));
  const [wishlist, setWishlist] = useState(() => readStorage(WISHLIST_KEY, []));

  const [isCartOpen, setCartOpen] = useState(false);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable, ignore */
    }
  }, [items]);

  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    } catch {
      /* storage unavailable, ignore */
    }
  }, [wishlist]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  // ---- Cart -----------------------------------------------------------
  const addToCart = (product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { ...product, qty }];
    });
    setToast(`${product.name} added to cart`);
  };

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const clearCart = () => setItems([]);

  const isInCart = (id) => items.some((i) => i.id === id);

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items]
  );
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [items]
  );

  // ---- Wishlist / Favourites -------------------------------------------
  const isFavorite = (id) => wishlist.some((w) => w.id === id);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((w) => w.id === product.id);
      if (exists) {
        setToast(`${product.name} removed from wishlist`);
        return prev.filter((w) => w.id !== product.id);
      }
      setToast(`${product.name} added to wishlist`);
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((w) => w.id !== id));
  };

  const clearWishlist = () => setWishlist([]);

  const wishlistCount = wishlist.length;

  // ---- Quick view -------------------------------------------------------
  const openQuickView = (product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  const value = {
    // cart
    items,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    isInCart,
    totalItems,
    subtotal,
    isCartOpen,
    setCartOpen,
    isCheckoutOpen,
    setCheckoutOpen,
    // wishlist
    wishlist,
    isFavorite,
    toggleWishlist,
    removeFromWishlist,
    clearWishlist,
    wishlistCount,
    // quick view
    quickViewProduct,
    openQuickView,
    closeQuickView,
    // toast
    toast,
    setToast,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
