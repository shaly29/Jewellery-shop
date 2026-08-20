// ---------------------------------------------------------------------------
// Central content file — all copy + placeholder image URLs live here.
// X Dream Jewellery brand colors used for tints:
//   Primary (rose/raspberry pink): #c73051
//   Secondary (gold):              #d5aa5c
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
    title: "Certified Gold & Diamond",
    desc: "Extensive Quality Checks",
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

import vintage from "../assets/images/products/vintage.jpg";
import pendant from "../assets/images/products/pendant.jpg";
import earring from "../assets/images/products/earring.jpg";
import bangle from "../assets/images/products/bangle.jpg";
import temple from "../assets/images/products/temple.jpg";

export const categories = [
  { name: "Rings", image: vintage },
  { name: "Necklaces", image: pendant },
  { name: "Earrings", image: earring },
  { name: "Bangles", image: bangle },
  { name: "Mangalsutra", image: temple },
];

export const promo = {
  eyebrow: "X Dream Heritage Edit",
  heading: "Celebrate Every Occasion",
  paragraph:
    "Celebrate every occasion with beautifully crafted jewellery — from timeless traditional pieces to modern indowestern designs — X Dream Jewellery is renowned for its magnificent craftsmanship.",
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

// Feature badges shown near the top of the site / trust strip
export const trustBadges = [
  {
    icon: "GiDiamondRing",
    title: "Rare Craftsmanship",
    description: "Magnificent pieces, expertly made.",
  },
  {
    icon: "GiGoldBar",
    title: "Certified Gold & Diamond",
    description: "Highest standard, extensively checked.",
  },
  {
    icon: "GiTruck",
    title: "Insured Shipping",
    description: "Delivered safely, fully insured.",
  },
  {
    icon: "GiCheckMark",
    title: "Custom Designs",
    description: "Jewellery made for your occasion.",
  },
];

export const whyChooseUs = [
  {
    icon: "GiDiamondRing",
    title: "Magnificent Craftsmanship",
    description: "Every piece reflects rare, hand-finished craftsmanship built to last a lifetime.",
    tint: "#c73051",
  },
  {
    icon: "GiGoldBar",
    title: "Certified Gold & Diamond",
    description: "We carry out extensive quality checks to maintain the highest standard of Gold and Diamond.",
    tint: "#d5aa5c",
  },
  {
    icon: "GiCheckMark",
    title: "A Pleasing Blend",
    description: "A pleasing combination of modern and traditional jewellery, designed for every generation.",
    tint: "#c73051",
  },
  {
    icon: "GiFemale",
    title: "Women's Pride",
    description: "Jewellery is not just a product — it's considered a woman's pride at X Dream.",
    tint: "#d5aa5c",
  },
];

export const benefits = [
  {
    icon: "GiRing",
    title: "Rings For Every Occasion",
    description: "From engagements to festivals, our rings are crafted around your celebration.",
    tint: "#c73051",
  },
  {
    icon: "GiNecklace",
    title: "Traditional & Indowestern",
    description: "Necklaces and mangalsutras made in traditional and modern indowestern styles.",
    tint: "#d5aa5c",
  },
  {
    icon: "GiGoldBar",
    title: "Certified Gold & Diamond",
    description: "Extensive quality checks maintain the highest standard of Gold and Diamond, every time.",
    tint: "#c73051",
  },
  {
    icon: "GiEarrings",
    title: "Precious Accessories",
    description: "Earrings, bangles and accessories that leave an unforgettable experience.",
    tint: "#d5aa5c",
  },
  {
    icon: "GiPresent",
    title: "Custom & Bulk Orders",
    description: "Dedicated support for weddings, festivals and special bulk requirements.",
    tint: "#c73051",
  },
];

export const processSteps = [
  {
    number: "01",
    icon: "GiGoldBar",
    title: "Sourcing Materials",
    description: "Only certified Gold and Diamond are sourced for every piece we craft.",
  },
  {
    number: "02",
    icon: "GiHammerNails",
    title: "Design & Craft",
    description: "Every design is hand-crafted, blending modern and traditional styles.",
  },
  {
    number: "03",
    icon: "GiDiamondRing",
    title: "Detailing & Finishing",
    description: "Pieces are finished with rare craftsmanship and careful attention to detail.",
  },
  {
    number: "04",
    icon: "GiMagnifyingGlass",
    title: "Extensive Quality Check",
    description: "Each piece undergoes extensive quality checks for gold and diamond standard.",
  },
  {
    number: "05",
    icon: "GiCheckMark",
    title: "Final Inspection",
    description: "Every item is inspected for finish, shine and craftsmanship before it leaves.",
  },
  {
    number: "06",
    icon: "GiTruck",
    title: "Delivered To You",
    description: "Insured delivery, or ready for pickup at our Toongabbie showroom.",
  },
];

export const stats = [
  { value: 10000, suffix: "+", label: "Happy Customers" },
  { value: 100, suffix: "%", label: "Certified Gold & Diamond" },
  { value: 6, suffix: "", label: "Jewellery Categories" },
  { value: 1, suffix: "", label: "Toongabbie Showroom" },
];

export const aboutFeatures = [
  {
    icon: "GiDiamondRing",
    title: "Rare Craftsmanship",
    description: "Magnificent, unforgettable pieces",
  },
  {
    icon: "GiGoldBar",
    title: "Certified Quality",
    description: "Extensive Gold & Diamond checks",
  },
  {
    icon: "GiNecklace",
    title: "Modern & Traditional",
    description: "A pleasing blend of both styles",
  },
  {
    icon: "GiFemale",
    title: "Women's Pride",
    description: "Jewellery made for feminine beauty",
  },
];