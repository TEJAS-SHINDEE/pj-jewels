
/* =========================================================
   MOST LOVED
   ========================================================= */

import { products } from "../../data/Collections";
import { ProductCard } from "./ProductCard";
import { SectionTitle } from "./SectionTitle";

export function MostLoved() {
  return (
    <section
      id="most-loved"
      className="border-b border-[#dfccb0] bg-[#fffdf9] px-4 py-6 sm:px-8 lg:px-12"
    >
      <SectionTitle title="Most Loved" />

      <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4 lg:gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
          />
        ))}
      </div>

      <div className="mt-4 text-center">
        <a
          href="#collections"
          className="inline-block border border-[#b98a47] px-7 py-2 text-[9px] text-[#73562f] transition hover:bg-[#a77b35] hover:text-white"
        >
          VIEW ALL COLLECTIONS
        </a>
      </div>
    </section>
  );
}