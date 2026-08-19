import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import ProductQuickView from "./components/ProductQuickView";
import Toast from "./components/Toast";
import BackToTop from "./components/BackToTop";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <CartProvider>
      <div className="overflow-x-hidden bg-cream">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </main>
        <Footer />

        {/* Global overlays */}
        <CartDrawer />
        <ProductQuickView />
        <Toast />
        <BackToTop />
      </div>
    </CartProvider>
  );
}

export default App;
