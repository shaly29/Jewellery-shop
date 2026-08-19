import { WHATSAPP_NUMBER, CURRENCY } from "../data/config";

const formatAmount = (n) => n.toLocaleString("en-LK");

export function buildOrderMessage({ form, items, total, paymentLabel }) {
  const productLines = items
    .map((i) => `${i.name} × ${i.qty} - ${CURRENCY} ${formatAmount(i.price * i.qty)}`)
    .join("\n");

  return [
    "New Order - COD",
    "",
    `Customer: ${form.name}`,
    `Phone: ${form.phone}`,
    "",
    "Address:",
    form.address,
    "",
    "Products:",
    productLines,
    "",
    `Total: ${CURRENCY} ${formatAmount(total)}`,
    "",
    `Payment: ${paymentLabel}`,
  ].join("\n");
}

export function sendOrderToWhatsApp({ form, items, total, paymentLabel }) {
  const message = buildOrderMessage({ form, items, total, paymentLabel });
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
