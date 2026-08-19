import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import ShopByCategory from "../components/ShopByCategory";
import BestSellers from "../components/BestSellers";
import PromoBanner from "../components/PromoBanner";
import Newsletter from "../components/Newsletter";
import { promo, finalPromo } from "../data/content";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ShopByCategory />
      <BestSellers />
      <PromoBanner data={promo} />
      <PromoBanner data={finalPromo} reverse />
      <Newsletter />
    </>
  );
}
