
// ---------------------------------------------------------------------------
// Central content file — all copy + placeholder image URLs live here.
// Swap picsum.photos URLs for real photography via src/assets/images/...
// ---------------------------------------------------------------------------

const img = (seed, w = 800, h = 900) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const topBar = [
  "Free Shipping on Orders Above $500",
  "30-Day Easy Returns",
  "Certified Jewellery",
];

// `href` is used for in-page anchors on the Home page.
// `to` (when present) is an actual route handled by React Router.
export const nav = [
  { label: "Home", href: "#home", to: "/" },
  { label: "Shop", href: "#shop", to: "/shop" },
  { label: "Collections", href: "#collections" },
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const trustFeatures = [
  {
    title: "Certified Diamonds",
    desc: "IGI / GIA Certified",
    icon: "gem",
  },
  {
    title: "Secure Payments",
    desc: "100% Protected",
    icon: "shield",
  },
  {
    title: "Free Insured Shipping",
    desc: "On All Orders",
    icon: "truck",
  },
  {
    title: "Lifetime Exchange",
    desc: "Peace of Mind",
    icon: "refresh",
  },
];
import flowerRing from "../assets/images/products/flower.jpg";
import vintage from "../assets/images/products/vintage.jpg";
import pendant from "../assets/images/products/pendant.jpg";
import earring from "../assets/images/products/earring.jpg";
import bangle from "../assets/images/products/bangle.jpg";

import temple from "../assets/images/products/temple.jpg";
export const categories = [
  { name: "Rings", image: vintage},
  { name: "Necklaces", image: pendant },
  { name: "Earrings", image: earring},
  { name: "Bangles", image:bangle },
  { name: "Mangalsutra", image: temple },
];


export const promo = {
  eyebrow: "Aurelia Heritage Edit",
  heading: "Celebrate Every Occasion",
  paragraph:
    "Celebrate every occasion with beautifully crafted silk sarees, elegant ethnic wear, and timeless traditional collections — paired perfectly with Aurelia's heritage jewellery.",
  cta: "Discover The Edit",
  image: img("promo-saree-jewellery", 1400, 900),
};

export const finalPromo = {
  eyebrow: "Timeless Craftsmanship",
  heading: "Crafted for Life's Special Moments",
  paragraph: "Timeless designs for weddings, celebrations & beyond.",
  cta: "Discover Our Collection",
  image: img("final-promo-necklace", 1400, 900),
};

export const footerLinks = {
  quickLinks: nav,
  customerService: [
    { label: "Track Your Order", href: "#" },
    { label: "Shipping Policy", href: "#" },
    { label: "Returns & Exchange", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
};

// export const heroImage = img("./assets/images/hero/hero.png", 900, 1200);



export const navLinks = [
  { label: "Menu", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#benefits" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#footer" },
];

export const trustBadges = [
  { icon: "GiCakeSlice", title: "Since 1985", description: "Four decades of baking tradition." },
  { icon: "GiWheat", title: "Freshly Baked", description: "Everything baked fresh, daily." },
  { icon: "GiTruck", title: "Jaffna-wide", description: "Delivery across the peninsula." },
  { icon: "GiCheckMark", title: "Custom Orders", description: "Cakes made to your occasion." },
];

export const whyChooseUs = [
  {
    icon: "GiCakeSlice",
    title: "Handcrafted Cakes",
    description: "Every cake is shaped, iced and decorated by hand for your special occasion.",
    tint: "#3D8B4E",
  },
  {
    icon: "GiWheat",
    title: "Baked Fresh Daily",
    description: "Buns, doughnuts and short eats come out of the oven fresh every single morning.",
    tint: "#7A2436",
  },
  {
    icon: "GiCheckMark",
    title: "Trusted Since 1985",
    description: "Four decades of consistent quality have made us Jaffna Town's favourite bakery.",
    tint: "#3B6FB6",
  },
  {
    icon: "GiIsland",
    title: "Proudly Jaffna",
    description: "A homegrown Northern Province bakery serving the community for generations.",
    tint: "#C9633A",
  },
];

export const benefits = [
  {
    icon: "GiCakeSlice",
    title: "Cakes For Every Occasion",
    description: "From birthdays to weddings, our custom cakes are designed around your celebration.",
    tint: "#E11D48",
  },
  {
    icon: "GiSandwich",
    title: "Authentic Jaffna Short Eats",
    description: "Savoury rolls, patties and bites made the traditional Jaffna way, fresh each day.",
    tint: "#F97316",
  },
  {
    icon: "GiWheat",
    title: "Freshly Baked Every Morning",
    description: "Buns, breads and doughnuts leave our ovens fresh and are baked in small batches.",
    tint: "#7A2436",
  },
  {
    icon: "GiHoneycomb",
    title: "Traditional Sweets",
    description: "Classic Sri Lankan sweets made with time-honoured recipes passed down since 1985.",
    tint: "#3B82F6",
  },
  {
    icon: "GiChocolateBar",
    title: "Catering & Bulk Orders",
    description: "Special discounts and dedicated support for parties, events and bulk orders.",
    tint: "#EAB308",
  },
];

export const processSteps = [
  {
    number: "01",
    icon: "GiWheat",
    title: "Selecting Ingredients",
    description: "Quality flour, fresh eggs and dairy sourced daily for every bake.",
  },
  {
    number: "02",
    icon: "GiWhisk",
    title: "Mixing & Kneading",
    description: "Doughs and batters are prepared fresh in-house every morning.",
  },
  {
    number: "03",
    icon: "GiCakeSlice",
    title: "Shaping & Decorating",
    description: "Cakes are hand-shaped, iced and decorated by our in-house bakers.",
  },
  {
    number: "04",
    icon: "GiFire",
    title: "Baked to Perfection",
    description: "Every item is baked fresh in small batches for the best taste and texture.",
  },
  {
    number: "05",
    icon: "GiCheckMark",
    title: "Quality Check",
    description: "Each bake is checked for taste, texture and presentation before it leaves the kitchen.",
  },
  {
    number: "06",
    icon: "GiTruck",
    title: "Fresh to You",
    description: "Delivered island-wide or ready for pickup at our Jaffna Town showroom.",
  },
];

export const stats = [
  { value: 41, suffix: "+", label: "Years of Baking" },
  { value: 10000, suffix: "+", label: "Happy Customers" },
  { value: 60, suffix: "+", label: "Cakes & Bakes" },
  { value: 6, suffix: "", label: "Menu Categories" },
];

export const aboutFeatures = [
  { icon: "GiCakeSlice", title: "Since 1985", description: "Four decades of tradition" },
  { icon: "GiWheat", title: "Baked Fresh", description: "Everything made daily" },
  { icon: "GiTruck", title: "Jaffna-wide", description: "Delivery across the peninsula" },
  { icon: "GiCheckMark", title: "Custom Cakes", description: "Designed for your occasion" },
];
