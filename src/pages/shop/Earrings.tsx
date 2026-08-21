import { Link } from "react-router-dom";
import { Icon } from "../../data/Icon";
import { products } from "../../data/Collections";

export function Earrings() {
  const earrings = products.filter(
    (product) =>
      product.category.toLowerCase().includes("earring") ||
      product.name.toLowerCase().includes("earring")
  );

  // Fallback in case your product data uses different category names
  const displayProducts =
    earrings.length > 0 ? earrings.slice(0, 6) : products.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#fffdf9] text-[#55432e]">

      {/* =========================================================
          01. EDITORIAL HEADER
         ========================================================= */}

      <section className="border-b border-[#dfccb0] bg-[#faf5ed] px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:px-12 lg:pb-12 lg:pt-12">

        <div className="mx-auto max-w-[1250px]">

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-end">

            {/* TITLE */}

            <div>

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-[#c9a768]" />

                <p className="text-[8px] font-medium tracking-[0.28em] text-[#9a8060]">
                  THE EARRING EDIT
                </p>

              </div>

              <h1
                className="
                  mt-3
                  text-[34px]
                  leading-[1.05]
                  text-[#5b4630]
                  sm:text-[42px]
                  lg:text-[52px]
                "
                style={{ fontFamily: "Georgia, serif" }}
              >
                A little detail.
                <br />

                <span className="text-[#a07431]">
                  A lasting impression.
                </span>
              </h1>

            </div>


            {/* DESCRIPTION */}

            <div className="max-w-[330px] lg:pb-1">

              <p className="text-[10px] leading-5 text-[#806d56] sm:text-[11px]">
                Discover earrings crafted to bring subtle elegance to
                everyday moments and a graceful finish to celebrations.
              </p>

              <div className="mt-4 flex items-center gap-2">

                <span className="h-px w-12 bg-[#c9a768]" />

                <Icon
                  name="sparkles"
                  size={13}
                />

              </div>

            </div>

          </div>


          {/* CATEGORY LINKS */}

          <div className="mt-7 flex gap-2 overflow-x-auto pb-1">

            <span
              className="
                shrink-0
                border
                border-[#b98a47]
                bg-[#b18442]
                px-4
                py-2
                text-[7px]
                tracking-[0.12em]
                text-white
              "
            >
              EARRINGS
            </span>

            <Link
              to="/collections/necklaces"
              className="
                shrink-0
                border
                border-[#dfccb0]
                bg-[#fffdfa]
                px-4
                py-2
                text-[7px]
                tracking-[0.12em]
                text-[#73562f]
                transition
                hover:border-[#b98a47]
              "
            >
              NECKLACES
            </Link>

            <Link
              to="/collections/mangalsutra"
              className="
                shrink-0
                border
                border-[#dfccb0]
                bg-[#fffdfa]
                px-4
                py-2
                text-[7px]
                tracking-[0.12em]
                text-[#73562f]
                transition
                hover:border-[#b98a47]
              "
            >
              MANGALSUTRA
            </Link>

            <Link
              to="/collections/bridal"
              className="
                shrink-0
                border
                border-[#dfccb0]
                bg-[#fffdfa]
                px-4
                py-2
                text-[7px]
                tracking-[0.12em]
                text-[#73562f]
                transition
                hover:border-[#b98a47]
              "
            >
              BRIDAL
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          02. FEATURED EARRING
         ========================================================= */}

      {displayProducts[0] && (
        <section className="border-b border-[#dfccb0] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">

          <div className="mx-auto max-w-[1250px]">

            <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.25fr_0.75fr]">

              {/* IMAGE */}

              <Link
                to="/new-arrivals"
                className="
                  group
                  relative
                  min-h-[360px]
                  overflow-hidden
                  bg-[#eee7db]
                  sm:min-h-[430px]
                  lg:min-h-[500px]
                "
              >

                <img
                  src={displayProducts[0].image}
                  alt={displayProducts[0].name}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2e241a]/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">

                  <p className="text-[7px] tracking-[0.2em] text-white/70">
                    FEATURED PIECE
                  </p>

                  <h2
                    className="mt-1 text-[25px] sm:text-[30px]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Designed to shine.
                  </h2>

                  <div className="mt-3 flex items-center gap-2 text-[7px] tracking-[0.15em]">
                    DISCOVER
                    <Icon name="arrowRight" size={12} />
                  </div>

                </div>

              </Link>


              {/* STORY CARD */}

              <div className="flex flex-col justify-between border border-[#dfccb0] bg-[#faf5ed] p-6 sm:p-8">

                <div>

                  <p className="text-[8px] tracking-[0.22em] text-[#9a8060]">
                    SIGNATURE DETAIL
                  </p>

                  <h2
                    className="mt-3 text-[25px] leading-tight text-[#5b4630] sm:text-[30px]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Earrings that
                    <br />
                    <span className="text-[#a07431]">
                      frame your moment.
                    </span>
                  </h2>

                  <p className="mt-4 text-[9px] leading-5 text-[#806d56]">
                    From delicate everyday styles to statement pieces,
                    find a pair that complements your personality without
                    overpowering your look.
                  </p>

                </div>


                <div className="mt-8">

                  <div className="mb-5 flex items-center gap-2">

                    <span className="h-px flex-1 bg-[#d8bd8d]" />

                    <Icon
                      name="diamond"
                      size={14}
                    />

                    <span className="h-px flex-1 bg-[#d8bd8d]" />

                  </div>

                  <Link
                    to="/new-arrivals"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      border
                      border-[#b98a47]
                      px-5
                      py-2.5
                      text-[8px]
                      tracking-[0.12em]
                      text-[#73562f]
                      transition
                      hover:bg-[#a77b35]
                      hover:text-white
                    "
                  >
                    SHOP EARRINGS
                    <Icon name="arrowRight" size={12} />
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>
      )}


      {/* =========================================================
          03. PRODUCT COLLECTION
         ========================================================= */}

      <section className="border-b border-[#dfccb0] px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14">

        <div className="mx-auto max-w-[1250px]">

          {/* HEADER */}

          <div className="mb-6 flex items-end justify-between gap-4">

            <div>

              <p className="text-[8px] tracking-[0.25em] text-[#9a8060]">
                CURATED FOR YOU
              </p>

              <h2
                className="mt-2 text-[25px] text-[#5b4630] sm:text-[30px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Explore the collection
              </h2>

            </div>

            <p className="hidden max-w-[240px] text-right text-[8px] leading-4 text-[#8d795e] sm:block">
              Everyday elegance, festive charm and timeless traditional
              silhouettes.
            </p>

          </div>


          {/* PRODUCTS */}

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">

            {displayProducts.map((product, index) => (

              <Link
                key={`${product.name}-${index}`}
                to="/new-arrivals"
                className="
                  group
                  overflow-hidden
                  border
                  border-[#eadfce]
                  bg-[#fffdfa]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#c8a66b]
                  hover:shadow-[0_8px_25px_rgba(100,70,30,0.08)]
                "
              >

                {/* IMAGE */}

                <div className="relative aspect-[4/5] overflow-hidden bg-[#f1ebe0]">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Number */}

                  <span className="absolute left-2 top-2 border border-white/50 bg-[#fffdf9]/80 px-2 py-1 text-[6px] tracking-[0.12em] text-[#73562f]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                {/* DETAILS */}

                <div className="border-t border-[#eadfce] p-2.5 sm:p-3">

                  <p className="truncate text-[6px] tracking-[0.15em] text-[#a0835d]">
                    {product.category}
                  </p>

                  <p
                    className="mt-1 truncate text-[9px] text-[#55432e] sm:text-[10px]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {product.name}
                  </p>

                  <div className="mt-1.5 flex items-center justify-between">

                    <p className="text-[8px] text-[#73562f]">
                      {product.price}
                    </p>

                    <Icon
                      name="arrowRight"
                      size={11}
                    />

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          04. WHY EARRINGS
         ========================================================= */}

      <section className="border-b border-[#dfccb0] bg-[#faf5ed] px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14">

        <div className="mx-auto max-w-[1050px]">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">

            {/* ITEM 1 */}

            <div className="border border-[#dfccb0] bg-[#fffdf9] p-5">

              <Icon
                name="sparkles"
                size={18}
              />

              <h3
                className="mt-3 text-[16px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Everyday Grace
              </h3>

              <p className="mt-2 text-[8px] leading-4 text-[#806d56]">
                Light and elegant pieces that effortlessly complete
                your everyday style.
              </p>

            </div>


            {/* ITEM 2 */}

            <div className="border border-[#dfccb0] bg-[#fffdf9] p-5">

              <Icon
                name="diamond"
                size={18}
              />

              <h3
                className="mt-3 text-[16px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Festive Moments
              </h3>

              <p className="mt-2 text-[8px] leading-4 text-[#806d56]">
                Traditional silhouettes designed to add a graceful
                touch to celebrations.
              </p>

            </div>


            {/* ITEM 3 */}

            <div className="border border-[#dfccb0] bg-[#fffdf9] p-5">

              <Icon
                name="heart"
                size={18}
              />

              <h3
                className="mt-3 text-[16px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Made to Remember
              </h3>

              <p className="mt-2 text-[8px] leading-4 text-[#806d56]">
                Jewellery chosen for moments you want to keep close
                for years to come.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          05. WHATSAPP CTA
         ========================================================= */}

      <section className="px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14">

        <div className="mx-auto max-w-[1050px] border border-[#d8bd8d] bg-[#fffaf2] px-5 py-7 text-center sm:px-8 sm:py-9">

          <p className="text-[8px] tracking-[0.22em] text-[#9a8060]">
            NEED HELP CHOOSING?
          </p>

          <h2
            className="mt-2 text-[23px] text-[#5b4630] sm:text-[28px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Let us help you find your pair.
          </h2>

          <p className="mx-auto mt-2 max-w-[450px] text-[9px] leading-5 text-[#806d56]">
            Send us a picture or tell us what you are looking for.
            Our team will personally help you with availability,
            pricing and order details.
          </p>

          <a
            href="https://wa.me/919005313005"
            target="_blank"
            rel="noreferrer"
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              bg-[#b18442]
              px-6
              py-3
              text-[8px]
              tracking-[0.12em]
              text-white
              transition
              duration-300
              hover:bg-[#8e682f]
            "
          >
            ASK ON WHATSAPP
            <Icon name="arrowRight" size={12} />
          </a>

        </div>

      </section>

    </main>
  );
}