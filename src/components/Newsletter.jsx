import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiMail, FiCheck } from "react-icons/fi";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-blush border-y border-wine/10">
      <div className="container-px mx-auto max-w-8xl py-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-between">
        <div className="flex items-center gap-4 text-center md:text-left">
          <span className="hidden sm:grid place-items-center w-12 h-12 rounded-full bg-white text-wine text-xl shrink-0">
            <FiMail />
          </span>
          <div>
            <h3 className="font-display text-lg sm:text-xl font-semibold text-wine">
              Join Our Exclusive Circle
            </h3>
            <p className="text-sm text-wine/55 mt-0.5">
              Be the first to know about new collections, special offers & more.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full md:w-auto max-w-md gap-3"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 rounded-sm border border-wine/15 bg-white px-4 py-3 text-sm text-wine placeholder:text-wine/35 focus:outline-none focus:ring-2 focus:ring-gold/50"
          />
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="shrink-0 inline-flex items-center gap-2 rounded-sm bg-wine px-6 py-3 text-sm font-semibold text-gold-light hover:bg-wine-600 transition-colors"
          >
            {submitted ? (
              <>
                <FiCheck /> Subscribed
              </>
            ) : (
              <>
                Subscribe <FiArrowRight />
              </>
            )}
          </motion.button>
        </form>
      </div>
    </section>
  );
}