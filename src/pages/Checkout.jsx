import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheckCircle, FiLock } from "react-icons/fi";
import { HiShoppingBag } from "react-icons/hi";
import { useCart } from "../context/CartContext";

const SHIPPING_FEE = 25;

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    payment: "card",
  });
  const [placed, setPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  const shipping = items.length > 0 ? SHIPPING_FEE : 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = `AUR-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(num);
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <div className="bg-cream min-h-screen pt-36 md:pt-40 pb-24 flex items-center">
        <div className="container-px mx-auto max-w-8xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card-surface max-w-lg mx-auto p-10 text-center flex flex-col items-center gap-4"
          >
            <FiCheckCircle className="text-5xl text-gold" />
            <h1 className="section-heading text-2xl sm:text-3xl">
              Order Placed!
            </h1>
            <p className="text-ink/60 text-sm">
              Thank you, {form.fullName || "valued customer"}. Your order{" "}
              <span className="font-semibold text-wine">{orderNumber}</span> has
              been confirmed and a receipt has been sent to{" "}
              <span className="font-semibold text-wine">
                {form.email || "your email"}
              </span>
              .
            </p>
            <div className="flex gap-3 mt-4">
              <Link to="/shop" className="btn-outline-dark">
                Continue Shopping
              </Link>
              <Link to="/" className="btn-gold">
                Back Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="bg-cream min-h-screen pt-36 md:pt-40 pb-24 flex items-center">
        <div className="container-px mx-auto max-w-8xl">
          <div className="card-surface max-w-lg mx-auto p-10 text-center flex flex-col items-center gap-4">
            <HiShoppingBag className="text-5xl text-wine/20" />
            <h1 className="section-heading text-2xl sm:text-3xl">
              Your cart is empty
            </h1>
            <p className="text-ink/60 text-sm">
              Add a few pieces to your cart before proceeding to checkout.
            </p>
            <Link to="/shop" className="btn-gold mt-2">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen pt-36 md:pt-40 pb-24">
      <div className="container-px mx-auto max-w-8xl">
        <div className="text-center mb-10">
          <span className="eyebrow justify-center">Almost There</span>
          <h1 className="section-heading mt-3">Checkout</h1>
          <div className="divider-orn mt-4">✦</div>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-10">
          {/* Shipping / payment form */}
          <form
            onSubmit={handleSubmit}
            className="card-surface p-6 sm:p-8 space-y-8"
          >
            <div>
              <h2 className="font-display font-semibold text-lg text-wine mb-4">
                Shipping Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Full Name"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="City"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="sm:col-span-2"
                  required
                />
                <Field
                  label="Postal Code"
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <h2 className="font-display font-semibold text-lg text-wine mb-4">
                Payment Method
              </h2>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { id: "card", label: "Credit / Debit Card" },
                  { id: "cod", label: "Cash on Delivery" },
                  { id: "bank", label: "Bank Transfer" },
                ].map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex items-center gap-2 text-sm rounded-sm border px-4 py-3 cursor-pointer transition-colors ${
                      form.payment === opt.id
                        ? "border-gold bg-blush text-wine font-semibold"
                        : "border-wine/15 text-ink/60 hover:border-wine/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={opt.id}
                      checked={form.payment === opt.id}
                      onChange={handleChange}
                      className="accent-gold"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="btn-gold w-full py-3.5">
              <FiLock />
              Place Order — ${total.toLocaleString()}
            </button>
          </form>

          {/* Order summary */}
          <div className="card-surface p-6 sm:p-8 h-fit lg:sticky lg:top-36">
            <h2 className="font-display font-semibold text-lg text-wine mb-5">
              Order Summary
            </h2>
            <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-md object-cover bg-blush shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-wine truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-ink/50">Qty {item.qty}</p>
                  </div>
                  <span className="text-sm font-semibold text-gold-dark shrink-0">
                    ${(item.price * item.qty).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-6 border-t border-wine/10 space-y-2 text-sm">
              <div className="flex justify-between text-ink/60">
                <span>Subtotal</span>
                <span className="text-wine font-medium">
                  ${subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-ink/60">
                <span>Shipping</span>
                <span className="text-wine font-medium">
                  ${shipping.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-base pt-2 border-t border-wine/10 mt-2">
                <span className="font-semibold text-wine">Total</span>
                <span className="font-bold text-gold-dark text-lg">
                  ${total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  className = "",
}) {
  return (
    <label className={`flex flex-col gap-1.5 text-sm ${className}`}>
      <span className="text-ink/60 font-medium">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-sm border border-wine/15 px-4 py-2.5 outline-none focus:border-gold transition-colors text-wine"
      />
    </label>
  );
}
