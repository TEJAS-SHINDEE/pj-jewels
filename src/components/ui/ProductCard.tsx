
/* =========================================================
   PRODUCT CARD
   ========================================================= */

import { useState } from "react";
import { Icon } from "../../data/Icon";

interface Product {
  category: string;
  name: string;
  price: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-[6px] border border-[#e6d7bf] bg-[#fffdfa]">

      <div className="relative aspect-[1.25/1] overflow-hidden bg-[#f2ece2]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <button
          onClick={() => setLiked(!liked)}
          className={`absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 backdrop-blur transition ${liked
              ? "text-[#a87532]"
              : "text-[#766956] hover:text-[#a87532]"
            }`}
        >
          <Icon
            name="heart"
            size={16}
            strokeWidth={liked ? 2 : 1.4}
          />
        </button>
      </div>

      <div className="px-3 py-2.5">
        <p className="text-[7px] tracking-[0.15em] text-[#9a8060]">
          {product.category}
        </p>

        <h3
          className="mt-1 text-[10px] text-[#55432e]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {product.name}
        </h3>

        <p className="mt-1 text-[10px] font-medium text-[#57442d]">
          {product.price}
        </p>
      </div>
    </div>
  );
}