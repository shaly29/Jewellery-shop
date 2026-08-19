import { AnimatePresence, motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import { useCart } from "../context/CartContext";

export default function Toast() {
  const { toast } = useCart();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[400] flex items-center gap-2 rounded-full bg-wine-900 text-white text-sm font-semibold px-5 py-3 shadow-soft"
        >
          <HiCheckCircle className="h-4 w-4 text-gold-light" />
          {toast}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
