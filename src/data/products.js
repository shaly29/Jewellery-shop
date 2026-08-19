// ---------------------------------------------------------------------------
// Central product catalog — single source of truth for the whole storefront
// (home page best sellers, /shop grid, cart, wishlist, checkout, quick view).
// Swap the picsum.photos URLs for real product photography whenever ready.
// ---------------------------------------------------------------------------
import flowerRing from "../assets/images/products/flower.jpg";
import solia from "../assets/images/products/solia.jpg";
import vintage from "../assets/images/products/vintage.jpg";
import pendant from "../assets/images/products/pendant.jpg";
import pendant1 from "../assets/images/products/pendant1.jpg";
import pendant2 from "../assets/images/products/pendant2.jpg";
import earring from "../assets/images/products/earring.jpg";
import earring1 from "../assets/images/products/earring2.jpg";
import bangle from "../assets/images/products/bangle.jpg";

import bangle1 from "../assets/images/products/bangle1.jpg";
import temple from "../assets/images/products/temple.jpg";

const img = (seed, w = 700, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const CATEGORIES = [
  "Rings",
  "Necklaces",
  "Earrings",
  "Bangles",
  "Mangalsutra",
];

export const products = [
  {
    id: "floral-diamond-ring",
    name: "Floral Diamond Ring",
    category: "Rings",
    price: 1250,
    oldPrice: 1450,
    rating: 4.5,
    reviews: 124,
    tag: "NEW",
  image: flowerRing,
    description:
      "A delicate floral halo ring set with brilliant-cut diamonds on an 18k gold band.",
  },
  {
    id: "solitaire-promise-ring",
    name: "Solitaire Promise Ring",
    category: "Rings",
    price: 980,
    rating: 4.7,
    reviews: 87,
  image: solia,
    description:
      "A timeless single-stone solitaire ring, hand-set in polished 18k white gold.",
  },
  {
    id: "vintage-rose-ring",
    name: "Vintage Rose Gold Ring",
    category: "Rings",
    price: 1120,
    rating: 4.4,
    reviews: 63,
    tag: "BESTSELLER",
  image: vintage,
    description:
      "Intricately engraved rose gold band inspired by vintage bridal design.",
  },
  {
    id: "emerald-glow-pendant",
    name: "Emerald Glow Pendant",
    category: "Necklaces",
    price: 1480,
    rating: 4.5,
    reviews: 98,
  image: pendant,
    description:
      "A statement emerald pendant framed with pavé diamonds on a fine gold chain.",
  },
  {
    id: "heritage-layered-necklace",
    name: "Heritage Layered Necklace",
    category: "Necklaces",
    price: 1990,
    oldPrice: 2250,
    rating: 4.6,
    reviews: 71,
    tag: "NEW",
  image: pendant1,
    description:
      "Multi-layer gold necklace with heritage-inspired motifs, perfect for celebrations.",
  },
  {
    id: "pearl-drop-necklace",
    name: "Pearl Drop Necklace",
    category: "Necklaces",
    price: 860,
    rating: 4.3,
    reviews: 54,
  image: pendant2,
    description:
      "Freshwater pearl pendant on a delicate gold-plated chain for everyday elegance.",
  },
  {
    id: "royal-diamond-earrings",
    name: "Royal Diamond Earrings",
    category: "Earrings",
    price: 1620,
    rating: 4.5,
    reviews: 156,
    tag: "BESTSELLER",
  image: earring,
    description:
      "Chandelier-style diamond earrings crafted for weddings and grand occasions.",
  },
  {
    id: "gold-hoop-earrings",
    name: "Classic Gold Hoop Earrings",
    category: "Earrings",
    price: 540,
    rating: 4.4,
    reviews: 112,
  image: earring1,
    description:
      "Everyday polished gold hoops with a lightweight, comfortable fit.",
  },
  {
    id: "sapphire-stud-earrings",
    name: "Sapphire Stud Earrings",
    category: "Earrings",
    price: 720,
    rating: 4.6,
    reviews: 45,
    tag: "NEW",
  image: earring,
    description:
      "Rich blue sapphire studs bordered with a fine halo of diamonds.",
  },
  {
    id: "heritage-diamond-bangle",
    name: "Heritage Diamond Bangle",
    category: "Bangles",
    price: 2350,
    rating: 4.5,
    reviews: 89,
  image: bangle,
    description:
      "A bold, diamond-studded bangle finished in 22k gold with heritage engraving.",
  },
  {
    id: "twin-tone-bangle",
    name: "Twin Tone Bangle Set",
    category: "Bangles",
    price: 1340,
    oldPrice: 1500,
    rating: 4.2,
    reviews: 38,
  image: bangle1,
    description:
      "A pair of rose and yellow gold bangles designed to be stacked or worn solo.",
  },
  {
    id: "temple-mangalsutra",
    name: "Temple Design Mangalsutra",
    category: "Mangalsutra",
    price: 1780,
    rating: 4.7,
    reviews: 67,
    tag: "BESTSELLER",
  image: temple,
    description:
      "Traditional temple-inspired mangalsutra with black beads and a gold pendant.",
  },
  {
    id: "diamond-mangalsutra",
    name: "Diamond Drop Mangalsutra",
    category: "Mangalsutra",
    price: 2150,
    rating: 4.6,
    reviews: 41,
    tag: "NEW",
  image: temple,
    description:
      "Modern mangalsutra design featuring a diamond drop pendant on a black bead chain.",
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);
