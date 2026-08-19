import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiX, HiCheckCircle, HiTruck } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { CURRENCY } from "../data/config";
import { sendOrderToWhatsApp } from "../utils/whatsapp";

const SHIPPING = 350;

const PAYMENT_OPTIONS = [{ id: "cod", label: "Cash on Delivery" }];

export default function CheckoutModal() {
  const { items, subtotal, clearCart, isCheckoutOpen, setCheckoutOpen } = useCart();
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "" });

  const total = items.length ? subtotal + SHIPPING : 0;

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const close = () => {
    setCheckoutOpen(false);
    setTimeout(() => setPlaced(false), 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.length === 0) return;

    sendOrderToWhatsApp({
      form,
      items,
      total,
      paymentLabel: PAYMENT_OPTIONS.find((p) => p.id === "cod").label,
    });

    setPlaced(true);
    clearCart();
  };

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-[#2B1014]/60 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-soft"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-primary/5 transition-colors"
              aria-label="Close"
            >
              <HiX className="h-5 w-5" style={{ color: "#2B1014" }} />
            </button>

            {placed ? (
              <div className="p-8 md:p-10 text-center">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                  className="mx-auto mb-6 h-16 w-16 rounded-full flex items-center justify-center"
                  style={{ background: "#3D8B4E15" }}
                >
                  <HiCheckCircle className="h-9 w-9" style={{ color: "#3D8B4E" }} />
                </motion.div>
                <h2 className="font-heading text-2xl font-black mb-2" style={{ color: "#2B1014" }}>
                  Order Sent on WhatsApp!
                </h2>
                <p className="text-sm mb-8" style={{ color: "#6B5A5E" }}>
                  Thanks{form.name ? `, ${form.name}` : ""}! Your order details were opened in WhatsApp —
                  just hit send there and our team will confirm your delivery shortly.
                </p>
                <button onClick={close} className="btn-primary inline-flex px-8 py-3.5">
                  Continue Shopping
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="p-8 md:p-10 text-center">
                <HiTruck className="h-12 w-12 mx-auto mb-4" style={{ color: "#7A243630" }} />
                <h2 className="font-heading text-xl font-black mb-2" style={{ color: "#2B1014" }}>
                  Your cart is empty
                </h2>
                <p className="text-sm mb-8" style={{ color: "#6B5A5E" }}>
                  Add a few products before heading to checkout.
                </p>
                <button onClick={close} className="btn-primary inline-flex px-8 py-3.5">
                  Browse Products
                </button>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                <h2 className="font-heading text-2xl md:text-3xl font-black mb-6" style={{ color: "#2B1014" }}>
                  Checkout
                </h2>

                <div className="grid md:grid-cols-[1.2fr_1fr] gap-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-heading font-bold text-base mb-4" style={{ color: "#2B1014" }}>
                        Delivery Details
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-xs font-semibold mb-1 block" style={{ color: "#6B5A5E" }}>
                            Full Name
                          </label>
                          <input
                            required
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-shadow"
                            style={{ borderColor: "#7A243630" }}
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold mb-1 block" style={{ color: "#6B5A5E" }}>
                            Phone Number
                          </label>
                          <input
                            required
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-shadow"
                            style={{ borderColor: "#7A243630" }}
                            placeholder="07X XXX XXXX"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold mb-1 block" style={{ color: "#6B5A5E" }}>
                            Delivery Address
                          </label>
                          <textarea
                            required
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            rows={3}
                            className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-shadow resize-none"
                            style={{ borderColor: "#7A243630" }}
                            placeholder="Street, house/apartment no., city"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-base mb-4" style={{ color: "#2B1014" }}>
                        Payment Method
                      </h3>
                      <label
                        className="flex items-center gap-3 rounded-xl border px-4 py-3"
                        style={{ borderColor: "#7A2436", background: "#7A243608" }}
                      >
                        <input type="radio" name="payment" checked readOnly className="accent-primary" />
                        <span className="text-sm font-semibold" style={{ color: "#2B1014" }}>
                          Cash on Delivery
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full py-4 mt-2"
                    >
                      <FaWhatsapp className="h-4 w-4" />
                      Place Order — {CURRENCY} {total.toLocaleString("en-LK")}
                    </button>
                    <p className="text-xs text-center -mt-3" style={{ color: "#B9A6AA" }}>
                      Placing your order opens WhatsApp with your order details ready to send.
                    </p>
                  </form>

                  <div className="rounded-2xl p-5 h-fit space-y-5" style={{ background: "#FFF8F5" }}>
                    <h3 className="font-heading font-bold text-base" style={{ color: "#2B1014" }}>
                      Order Summary
                    </h3>
                    <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-3">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold truncate" style={{ color: "#2B1014" }}>
                              {item.name}
                            </p>
                            <p className="text-xs" style={{ color: "#6B5A5E" }}>
                              Qty {item.qty}
                            </p>
                          </div>
                          <span className="text-sm font-bold shrink-0" style={{ color: "#7A2436" }}>
                            {CURRENCY} {(item.price * item.qty).toLocaleString("en-LK")}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4 space-y-2 text-sm" style={{ borderColor: "#7A243615" }}>
                      <div className="flex justify-between" style={{ color: "#6B5A5E" }}>
                        <span>Subtotal</span>
                        <span>
                          {CURRENCY} {subtotal.toLocaleString("en-LK")}
                        </span>
                      </div>
                      <div className="flex justify-between" style={{ color: "#6B5A5E" }}>
                        <span className="flex items-center gap-1.5">
                          <HiTruck className="h-3.5 w-3.5" /> Delivery
                        </span>
                        <span>
                          {CURRENCY} {SHIPPING.toLocaleString("en-LK")}
                        </span>
                      </div>
                      <div
                        className="flex justify-between font-bold text-base pt-2 border-t"
                        style={{ color: "#2B1014", borderColor: "#7A243615" }}
                      >
                        <span>Total</span>
                        <span>
                          {CURRENCY} {total.toLocaleString("en-LK")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
