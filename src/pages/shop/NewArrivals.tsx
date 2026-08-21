import { useMemo, useState } from "react";
import { Icon } from "../../data/Icon";
import { Link } from "react-router-dom";
import { IMAGES, products } from "../../data/Collections";

interface NewArrivalProduct {
  id: number;
  category: string;
  name: string;
  price: string;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

const newArrivalProducts: NewArrivalProduct[] = [
  {
    id: 1,
    category: "NECKLACE",
    name: "Rajwada Gold Necklace",
    price: "₹18,500",
    image: IMAGES.collections.necklaces,
    isNew: true,
  },
  {
    id: 2,
    category: "MANGALSUTRA",
    name: "Aarohi Mangalsutra",
    price: "₹12,800",
    image: IMAGES.collections.mangalsutra,
    isNew: true,
  },
  {
    id: 3,
    category: "EARRINGS",
    name: "Parijaat Jhumka",
    price: "₹7,900",
    image: IMAGES.collections.earrings,
    isNew: true,
  },
  {
    id: 4,
    category: "BANGLE",
    name: "Meera Gold Bangles",
    price: "₹15,200",
    image: IMAGES.collections.necklaces,
    isNew: true,
  },
  {
    id: 5,
    category: "NECKLACE",
    name: "Kalyani Temple Necklace",
    price: "₹21,500",
    image: IMAGES.collections.necklaces,
    isNew: true,
  },
  {
    id: 6,
    category: "EARRINGS",
    name: "Sitara Drop Earrings",
    price: "₹6,800",
    image: IMAGES.collections.earrings,
    isNew: true,
  },
  {
    id: 7,
    category: "MANGALSUTRA",
    name: "Saanvi Pearl Mangalsutra",
    price: "₹14,600",
    image: IMAGES.collections.mangalsutra,
    isNew: true,
  },
  {
    id: 8,
    category: "BANGLE",
    name: "Rajsi Kada",
    price: "₹11,900",
    image: IMAGES.collections.bridal,
    isNew: true,
  },
];

const categories = [
  "ALL",
  "NECKLACE",
  "MANGALSUTRA",
  "EARRINGS",
  "BANGLE",
];

export function NewArrivals() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [likedProducts, setLikedProducts] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result =
      activeCategory === "ALL"
        ? [...newArrivalProducts]
        : newArrivalProducts.filter(
          (product) => product.category === activeCategory
        );

    if (sortBy === "price-low") {
      result.sort(
        (a, b) =>
          Number(a.price.replace(/[₹,]/g, "")) -
          Number(b.price.replace(/[₹,]/g, ""))
      );
    }

    if (sortBy === "price-high") {
      result.sort(
        (a, b) =>
          Number(b.price.replace(/[₹,]/g, "")) -
          Number(a.price.replace(/[₹,]/g, ""))
      );
    }

    return result;
  }, [activeCategory, sortBy]);

  const toggleWishlist = (id: number) => {
    setLikedProducts((current) =>
      current.includes(id)
        ? current.filter((productId) => productId !== id)
        : [...current, id]
    );
  };

  return (
    <main className="min-h-screen bg-[#fffdf9] text-[#55432e]">

      {/* =====================================================
          HERO / INTRO
         ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-[#dfccb0]
          bg-[#faf5ed]
          px-5
          pb-10
          pt-28
          sm:px-8
          sm:pb-12
          sm:pt-32
          lg:px-12
          lg:pb-16
          lg:pt-36
        "
      >
        {/* Decorative elements */}

        <div
          className="
            pointer-events-none
            absolute
            -left-20
            top-10
            h-44
            w-44
            rounded-full
            border
            border-[#d6bd91]/40
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-16
            bottom-0
            h-52
            w-52
            rounded-full
            border
            border-[#d6bd91]/30
          "
        />

        <div className="relative mx-auto max-w-[1000px] text-center">

          {/* Breadcrumb */}

          {/* <div className="mb-6 flex items-center justify-center gap-2 text-[8px] tracking-[0.22em] text-[#927957]">
            <Link
              to="/"
              className="transition hover:text-[#a77b35]"
            >
              HOME
            </Link>

            <span className="text-[#c4a875]">/</span>

            <span className="text-[#a77b35]">
              NEW ARRIVALS
            </span>
          </div> */}

          {/* Small heading */}

          <p className="mb-3 text-[9px] font-medium tracking-[0.35em] text-[#927957] sm:text-[10px]">
            JUST ARRIVED
          </p>

          {/* Main heading */}

          <h1
            className="
              text-[34px]
              leading-tight
              text-[#9d702f]
              sm:text-[42px]
              md:text-[50px]
              lg:text-[58px]
            "
            style={{ fontFamily: "Georgia, serif" }}
          >
            New Arrivals
          </h1>

          {/* Decorative divider */}

          <div className="mx-auto mt-5 flex max-w-[180px] items-center gap-3">
            <span className="h-px flex-1 bg-[#c9a768]" />

            <span className="h-1 w-1 rounded-full bg-[#c9a768]" />

            <span className="h-px flex-1 bg-[#c9a768]" />
          </div>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[540px]
              text-[11px]
              leading-6
              text-[#66594b]
              sm:text-[12px]
              lg:text-[13px]
            "
            style={{ fontFamily: "Georgia, serif" }}
          >
            Discover our newest expressions of Indian craftsmanship —
            thoughtfully designed to bring timeless tradition into
            contemporary celebrations.
          </p>

        </div>
      </section>

      {/* =====================================================
          COLLECTION INTRO
         ===================================================== */}

      <section className="border-b border-[#e5d8c5] bg-[#fffdf9] px-5 py-8 sm:px-8 lg:px-12">

        <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="text-[8px] tracking-[0.25em] text-[#9b805d]">
              THE LATEST EDIT
            </p>

            <h2
              className="mt-2 text-[24px] text-[#80602f] sm:text-[28px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Crafted for what comes next
            </h2>

            <p className="mt-2 max-w-[520px] text-[10px] leading-5 text-[#776b5d] sm:text-[11px]">
              Fresh designs inspired by heritage, refined for the
              modern woman.
            </p>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-[9px] text-[#8d795f]">
              Showing
            </p>

            <p className="mt-1 text-[11px] font-medium text-[#80602f]">
              {filteredProducts.length} NEW DESIGNS
            </p>
          </div>

        </div>

      </section>

      {/* =====================================================
          FILTER + SORT
         ===================================================== */}

      <section className="sticky top-0 z-30 border-b border-[#e4d6c1] bg-[#fffdf9]/95 backdrop-blur-md">

        <div
          className="
            mx-auto
            flex
            max-w-[1180px]
            flex-col
            gap-4
            px-5
            py-4
            sm:px-8
            md:flex-row
            md:items-center
            md:justify-between
            lg:px-0
          "
        >

          {/* Categories */}

          <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide">

            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    shrink-0
                    px-3
                    py-2
                    text-[8px]
                    tracking-[0.12em]
                    transition-all
                    duration-300
                    sm:px-4
                    ${active
                      ? "bg-[#a77b35] text-white"
                      : "border border-transparent text-[#766956] hover:border-[#d8bd8d] hover:text-[#9b702d]"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}

          </div>

          {/* Sort */}

          <div className="flex shrink-0 items-center gap-2">

            <span className="text-[8px] tracking-[0.12em] text-[#8a7963]">
              SORT BY
            </span>

            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="
                cursor-pointer
                border
                border-[#dfccb0]
                bg-[#fffdf9]
                px-3
                py-2
                text-[9px]
                text-[#66594b]
                outline-none
                focus:border-[#b98a47]
              "
              aria-label="Sort products"
            >
              <option value="featured">
                Featured
              </option>

              <option value="price-low">
                Price: Low to High
              </option>

              <option value="price-high">
                Price: High to Low
              </option>
            </select>

          </div>

        </div>

      </section>

      {/* =====================================================
          PRODUCT GRID
         ===================================================== */}

      <section
        className="
          bg-[#fffdf9]
          px-4
          py-8
          sm:px-8
          sm:py-10
          lg:px-12
          lg:py-14
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-[1180px]
            grid-cols-2
            gap-3
            sm:gap-4
            md:grid-cols-3
            lg:grid-cols-4
          "
        >

          {filteredProducts.map((product) => (
            <NewArrivalCard
              key={product.id}
              product={product}
              liked={likedProducts.includes(product.id)}
              onWishlist={() => toggleWishlist(product.id)}
            />
          ))}

        </div>

        {/* Empty state */}

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">

            <p className="text-[10px] tracking-[0.15em] text-[#927957]">
              NO DESIGNS FOUND
            </p>

            <button
              type="button"
              onClick={() => setActiveCategory("ALL")}
              className="mt-4 border border-[#b98a47] px-6 py-2 text-[9px] tracking-wide text-[#73562f] transition hover:bg-[#a77b35] hover:text-white"
            >
              VIEW ALL NEW ARRIVALS
            </button>

          </div>
        )}

      </section>

      {/* =====================================================
          CRAFTSMANSHIP BANNER
         ===================================================== */}

      <section className="border-y border-[#dfccb0] bg-[#faf5ed] px-5 py-12 sm:px-8 sm:py-14 lg:px-12">

        <div className="mx-auto grid max-w-[1000px] items-center gap-8 md:grid-cols-[1fr_auto_1fr]">

          <div className="text-center md:text-right">
            <p className="text-[8px] tracking-[0.25em] text-[#9b805d]">
              ROOTED IN HERITAGE
            </p>

            <h3
              className="mt-2 text-[21px] text-[#80602f]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Tradition
            </h3>

            <p className="mt-2 text-[10px] leading-5 text-[#716354]">
              Inspired by generations of Indian jewellery
              craftsmanship.
            </p>
          </div>

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a768]">
            <span className="text-[16px] text-[#a77b35]">
              ✦
            </span>
          </div>

          <div className="text-center md:text-left">
            <p className="text-[8px] tracking-[0.25em] text-[#9b805d]">
              DESIGNED FOR TODAY
            </p>

            <h3
              className="mt-2 text-[21px] text-[#80602f]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Modernity
            </h3>

            <p className="mt-2 text-[10px] leading-5 text-[#716354]">
              Elegant silhouettes created for contemporary
              celebrations.
            </p>
          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
         ===================================================== */}

      <section className="bg-[#fffdf9] px-5 py-12 text-center sm:px-8 sm:py-14">

        <p className="text-[8px] tracking-[0.3em] text-[#9b805d]">
          FIND YOUR NEXT FAVOURITE
        </p>

        <h2
          className="mt-3 text-[25px] text-[#80602f] sm:text-[30px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Something new awaits
        </h2>

        <p className="mx-auto mt-3 max-w-[420px] text-[10px] leading-5 text-[#75695c]">
          Explore the complete collection and discover jewellery
          made to become part of your story.
        </p>

        <Link
          to="/collections"
          className="
    mt-6
    inline-block
    border
    border-[#b98a47]
    px-7
    py-3
    text-[9px]
    tracking-[0.12em]
    text-[#73562f]
    transition
    duration-300
    hover:bg-[#a77b35]
    hover:text-white
  "
        >
          EXPLORE ALL COLLECTIONS
        </Link>

      </section>

    </main>
  );
}


/* =========================================================
   NEW ARRIVAL CARD
   ========================================================= */

interface NewArrivalCardProps {
  product: NewArrivalProduct;
  liked: boolean;
  onWishlist: () => void;
}

function NewArrivalCard({
  product,
  liked,
  onWishlist,
}: NewArrivalCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[6px] border border-[#e6d7bf] bg-[#fffdfa]">

      {/* =====================================================
          IMAGE
         ===================================================== */}

      <div className="relative aspect-[1/1.08] overflow-hidden bg-[#f2ece2]">

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
            transition
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
        />

        {/* New badge */}

        {product.isNew && (
          <span
            className="
              absolute
              left-2
              top-2
              bg-[#a77b35]
              px-2
              py-1
              text-[7px]
              tracking-[0.12em]
              text-white
            "
          >
            NEW
          </span>
        )}

        {/* Wishlist */}

        <button
          type="button"
          onClick={onWishlist}
          aria-label={
            liked
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          aria-pressed={liked}
          className={`
            absolute
            right-2
            top-2
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            bg-white/85
            backdrop-blur
            transition-all
            duration-300
            hover:scale-105
            ${liked
              ? "text-[#a87532]"
              : "text-[#766956] hover:text-[#a87532]"
            }
          `}
        >
          <Icon
            name="heart"
            size={15}
            strokeWidth={liked ? 2 : 1.4}
          />
        </button>

        {/* Desktop hover action */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            hidden
            translate-y-full
            bg-[#fffdf9]/95
            px-3
            py-3
            text-center
            backdrop-blur
            transition-transform
            duration-300
            group-hover:translate-y-0
            md:block
          "
        >
          <button
            type="button"
            className="text-[8px] tracking-[0.15em] text-[#73562f] transition hover:text-[#a77b35]"
          >
            VIEW DETAILS
          </button>
        </div>

      </div>

      {/* =====================================================
          PRODUCT INFO
         ===================================================== */}

      <div className="px-3 py-3 sm:px-3.5">

        <p className="text-[7px] tracking-[0.15em] text-[#9a8060]">
          {product.category}
        </p>

        <h3
          className="
            mt-1
            line-clamp-2
            min-h-[25px]
            text-[10px]
            leading-4
            text-[#55432e]
            sm:text-[11px]
          "
          style={{ fontFamily: "Georgia, serif" }}
        >
          {product.name}
        </h3>

        <div className="mt-2 flex items-center justify-between gap-2">

          <p className="text-[10px] font-medium text-[#57442d]">
            {product.price}
          </p>

          <button
            type="button"
            className="
              hidden
              text-[8px]
              tracking-wide
              text-[#987548]
              transition
              hover:text-[#a77b35]
              sm:block
            "
          >
            SHOP
          </button>

        </div>

      </div>

    </article>
  );
}