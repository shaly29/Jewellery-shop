import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function BestSellers() {
  const featured = products.slice(0, 8);

  return (
    <section id="shop" className="section-pad bg-blush">
      <div className="container-px mx-auto max-w-8xl">
      
    <Reveal className="text-center">
          <h2 className="section-heading">Best Sellers</h2>
          <div className="divider-orn mt-4">✦</div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {featured.map((product, i) => (
            <ProductCard product={product} index={i} key={product.id} />
          ))}
        </div>

        <div className="mt-10 flex sm:fhidden justify-center">
          <Link to="/shop" className="btn-outline-dark">
            View All
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
