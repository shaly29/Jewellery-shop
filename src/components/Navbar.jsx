import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiMapPin,
  FiUser,
} from "react-icons/fi";
import { GiLotus } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { nav, topBar } from "../data/content";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setActive] = useState("#home");

  const { totalItems, wishlistCount, setCartOpen } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (href) => {
    setActive(href);
    setOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    setSearchOpen(false);
    navigate(`/shop?q=${encodeURIComponent(searchTerm.trim())}`);
  };

  // Render a nav item as a router Link when it points to a real route,
  // otherwise as an in-page anchor (only meaningful on the Home page).
  const NavItem = ({ item, className, onClick }) => {
    if (item.to) {
      return (
        <Link to={item.to} onClick={onClick} className={className}>
          {item.label}
        </Link>
      );
    }
    const href = location.pathname === "/" ? item.href : `/${item.href}`;
    return (
      <a href={href} onClick={onClick} className={className}>
        {item.label}
      </a>
    );
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Announcement bar */}
      <div
        className={`hidden md:block overflow-hidden bg-wine-900 text-white/80 text-xs tracking-wide transition-all duration-500 ${
          scrolled ? "h-0 opacity-0" : "h-9 opacity-100"
        }`}
      >
        <div className="container-px mx-auto max-w-8xl h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {topBar.map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold" />
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <FiMapPin className="text-gold" /> Store Locator
            </span>
            <span className="flex items-center gap-1.5">
              <FiUser className="text-gold" /> My Account
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-wine/95 backdrop-blur-md shadow-[0_6px_30px_-10px_rgba(0,0,0,0.4)] py-3"
            : "bg-wine/40 backdrop-blur-[2px] py-5"
        }`}
      >
        <nav className="container-px mx-auto max-w-8xl flex items-center justify-between gap-6">
          <Link
            to="/"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2.5 shrink-0"
          >
            <GiLotus className="text-gold text-3xl" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl sm:text-2xl tracking-[0.15em] text-white">
                AURELIA
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-gold-light mt-0.5">
                FINE JEWELLERY
              </span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.label}>
                <NavItem
                  item={item}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative text-sm tracking-wide transition-colors duration-300 hover:text-gold-light ${
                    active === item.href ? "text-gold-light" : "text-white/85"
                  }`}
                />
                {active === item.href && (
                  <motion.span
                    layoutId="nav-underline-jewel"
                    className="block h-px bg-gold mt-1.5"
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 sm:gap-5 text-white">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              className="hover:text-gold-light transition-colors"
            >
              <FiSearch className="text-lg" />
            </button>
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="relative hidden sm:block hover:text-gold-light transition-colors"
            >
              <FiHeart className="text-lg" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 grid place-items-center min-w-4 h-4 px-0.5 rounded-full bg-gold text-[9px] font-bold text-wine-900">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <button
              aria-label="Cart"
              onClick={() => setCartOpen(true)}
              className="relative hover:text-gold-light transition-colors"
            >
              <FiShoppingBag className="text-lg" />
              <span className="absolute -top-2 -right-2 grid place-items-center min-w-4 h-4 px-0.5 rounded-full bg-gold text-[9px] font-bold text-wine-900">
                {totalItems}
              </span>
            </button>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden"
            >
              {open ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <form
                onSubmit={handleSearchSubmit}
                className="container-px mx-auto max-w-8xl pt-4"
              >
                <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-sm px-4 py-2.5">
                  <FiSearch className="text-white/70" />
                  <input
                    autoFocus
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search rings, necklaces, earrings..."
                    className="flex-1 bg-transparent text-sm text-white placeholder:text-white/50 outline-none"
                  />
                  <button
                    type="submit"
                    className="text-xs font-semibold tracking-widest uppercase text-gold-light hover:text-white transition-colors"
                  >
                    Search
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-[78%] max-w-sm bg-wine shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <span className="font-display text-xl tracking-widest text-white">
                  AURELIA
                </span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid place-items-center w-10 h-10 rounded-full bg-white/10 text-white"
                >
                  <HiX className="w-5 h-5" />
                </button>
              </div>
              <ul className="flex flex-col px-6 py-8 gap-1">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
                  >
                    <NavItem
                      item={item}
                      onClick={() => handleNavClick(item.href)}
                      className="block py-3 text-lg text-white/85 hover:text-gold-light border-b border-white/10"
                    />
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + nav.length * 0.05, duration: 0.35 }}
                >
                  <Link
                    to="/wishlist"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 text-lg text-white/85 hover:text-gold-light border-b border-white/10"
                  >
                    Wishlist
                    {wishlistCount > 0 && (
                      <span className="grid place-items-center min-w-5 h-5 px-1 rounded-full bg-gold text-[10px] font-bold text-wine-900">
                        {wishlistCount}
                      </span>
                    )}
                  </Link>
                </motion.li>
              </ul>
              <div className="mt-auto px-6 py-8">
                <Link to="/shop" onClick={() => setOpen(false)} className="btn-gold w-full">
                  Explore Collection
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
