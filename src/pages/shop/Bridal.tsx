import { Link } from "react-router-dom";
import { Icon } from "../../data/Icon";
import { products } from "../../data/Collections";

export function Bridal() {
  const bridalProducts = products.filter(
    (product) =>
      product.category.toLowerCase().includes("bridal") ||
      product.name.toLowerCase().includes("bridal") ||
      product.category.toLowerCase().includes("wedding")
  );

  const displayProducts =
    bridalProducts.length > 0
      ? bridalProducts.slice(0, 6)
      : products.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#fffdf9] text-[#55432e]">

      {/* =========================================================
          01. BRIDAL INTRO
         ========================================================= */}

      <section className="border-b border-[#dfccb0] bg-[#faf5ed] px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:px-12 lg:pb-12 lg:pt-12">

        <div className="mx-auto max-w-[1250px]">

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_380px] lg:items-end">

            {/* LEFT */}

            <div>

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-[#c9a768]" />

                <p className="text-[8px] font-medium tracking-[0.28em] text-[#9a8060]">
                  THE BRIDAL COLLECTION
                </p>

              </div>

              <h1
                className="
                  mt-3
                  max-w-[700px]
                  text-[35px]
                  leading-[1.04]
                  text-[#5b4630]
                  sm:text-[44px]
                  lg:text-[56px]
                "
                style={{ fontFamily: "Georgia, serif" }}
              >
                For the day
                <br />
                <span className="text-[#a07431]">
                  you will always remember.
                </span>
              </h1>

            </div>


            {/* RIGHT */}

            <div>

              <p className="text-[10px] leading-5 text-[#806d56] sm:text-[11px]">
                Traditional jewellery for brides who want their
                celebration to feel beautifully, unmistakably theirs.
              </p>

              <div className="mt-4 flex items-center gap-2">

                <span className="h-px w-12 bg-[#c9a768]" />

                <Icon
                  name="sparkles"
                  size={13}
                />

                <span className="h-px flex-1 bg-[#c9a768]" />

              </div>

            </div>

          </div>


          {/* QUICK NAV */}

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
              BRIDAL
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
              to="/collections/earrings"
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
              EARRINGS
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          02. BRIDAL FEATURE
         ========================================================= */}

      {displayProducts[0] && (
        <section className="border-b border-[#dfccb0] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">

          <div className="mx-auto max-w-[1250px]">

            <div className="grid grid-cols-1 gap-3 md:grid-cols-[1.45fr_0.55fr]">

              {/* LARGE FEATURE */}

              <Link
                to="/new-arrivals"
                className="
                  group
                  relative
                  min-h-[390px]
                  overflow-hidden
                  bg-[#eee7db]
                  sm:min-h-[480px]
                  lg:min-h-[540px]
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

                <div className="absolute inset-0 bg-gradient-to-t from-[#2c2117]/80 via-[#2c2117]/10 to-transparent" />

                <div className="absolute bottom-6 left-6 max-w-[500px] text-white sm:bottom-8 sm:left-8">

                  <p className="text-[7px] tracking-[0.25em] text-white/70">
                    BRIDAL SIGNATURE
                  </p>

                  <h2
                    className="mt-2 text-[28px] leading-tight sm:text-[36px]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Jewellery for
                    <br />
                    your forever moment.
                  </h2>

                  <div className="mt-4 flex items-center gap-2 text-[8px] tracking-[0.14em]">

                    EXPLORE BRIDAL

                    <Icon
                      name="arrowRight"
                      size={13}
                    />

                  </div>

                </div>

              </Link>


              {/* SIDE STORY */}

              <div className="grid grid-cols-2 gap-3 md:grid-cols-1">

                <div className="border border-[#dfccb0] bg-[#faf5ed] p-5 sm:p-6">

                  <span className="text-[7px] tracking-[0.2em] text-[#9a8060]">
                    01
                  </span>

                  <h3
                    className="mt-3 text-[19px] text-[#5b4630]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Tradition
                    <br />
                    meets you.
                  </h3>

                  <p className="mt-3 text-[8px] leading-4 text-[#806d56]">
                    Heritage-inspired designs created for
                    modern bridal celebrations.
                  </p>

                </div>


                <div className="border border-[#d8bd8d] bg-[#fffaf2] p-5 sm:p-6">

                  <Icon
                    name="diamond"
                    size={18}
                  />

                  <h3
                    className="mt-3 text-[19px] text-[#5b4630]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Made for
                    <br />
                    the moment.
                  </h3>

                  <p className="mt-3 text-[8px] leading-4 text-[#806d56]">
                    Choose pieces that become part of
                    your most treasured memories.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>
      )}


      {/* =========================================================
          03. BRIDAL MOODBOARD
         ========================================================= */}

      <section className="border-b border-[#dfccb0] px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14">

        <div className="mx-auto max-w-[1250px]">

          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-[8px] tracking-[0.25em] text-[#9a8060]">
                YOUR BRIDAL STORY
              </p>

              <h2
                className="mt-2 text-[26px] text-[#5b4630] sm:text-[31px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Choose the feeling.
              </h2>

            </div>

            <p className="max-w-[300px] text-[9px] leading-5 text-[#806d56] sm:text-right">
              Every bride has her own style. Find the jewellery mood
              that feels most like you.
            </p>

          </div>


          {/* BENTO */}

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">

            {/* CLASSIC */}

            <Link
              to="/collections/necklaces"
              className="
                group
                relative
                col-span-2
                min-h-[260px]
                overflow-hidden
                bg-[#eee7db]
                sm:min-h-[330px]
              "
            >

              <div className="absolute inset-0 bg-gradient-to-t from-[#302419]/75 to-transparent" />

              {displayProducts[1] && (
                <img
                  src={displayProducts[1].image}
                  alt="Classic bridal jewellery"
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
              )}

              <div className="absolute bottom-5 left-5 text-white">

                <p className="text-[7px] tracking-[0.2em] text-white/70">
                  CLASSIC
                </p>

                <h3
                  className="mt-1 text-[21px]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Timeless Bride
                </h3>

              </div>

            </Link>


            {/* STATEMENT */}

            <Link
              to="/collections/necklaces"
              className="
                group
                relative
                min-h-[260px]
                overflow-hidden
                bg-[#eee7db]
                sm:min-h-[330px]
              "
            >

              {displayProducts[2] && (
                <img
                  src={displayProducts[2].image}
                  alt="Statement bridal jewellery"
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
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#302419]/75 to-transparent" />

              <div className="absolute bottom-5 left-5 text-white">

                <p className="text-[7px] tracking-[0.2em] text-white/70">
                  STATEMENT
                </p>

                <h3
                  className="mt-1 text-[18px]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Make an entrance
                </h3>

              </div>

            </Link>


            {/* MINIMAL */}

            <div className="flex min-h-[260px] flex-col justify-between border border-[#dfccb0] bg-[#faf5ed] p-5 sm:min-h-[330px] sm:p-6">

              <Icon
                name="sparkles"
                size={19}
              />

              <div>

                <p className="text-[7px] tracking-[0.2em] text-[#9a8060]">
                  MINIMAL
                </p>

                <h3
                  className="mt-2 text-[19px] leading-tight text-[#5b4630]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Less,
                  <br />
                  but unforgettable.
                </h3>

                <p className="mt-3 text-[8px] leading-4 text-[#806d56]">
                  Delicate pieces for brides who prefer
                  quiet elegance.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          04. BRIDAL PRODUCTS
         ========================================================= */}

      <section className="border-b border-[#dfccb0] bg-[#faf5ed] px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14">

        <div className="mx-auto max-w-[1250px]">

          <div className="mb-6">

            <p className="text-[8px] tracking-[0.25em] text-[#9a8060]">
              BRIDAL FAVOURITES
            </p>

            <div className="mt-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">

              <h2
                className="text-[26px] text-[#5b4630] sm:text-[31px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Pieces worth remembering.
              </h2>

              <Link
                to="/new-arrivals"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[8px]
                  tracking-[0.12em]
                  text-[#73562f]
                  hover:text-[#a07431]
                "
              >
                VIEW ALL
                <Icon name="arrowRight" size={11} />
              </Link>

            </div>

          </div>


          {/* PRODUCT GRID */}

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">

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

                  <span className="absolute left-2 top-2 border border-white/50 bg-[#fffdf9]/85 px-2 py-1 text-[6px] tracking-[0.12em] text-[#73562f]">
                    BRIDAL
                  </span>

                </div>

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
          05. BRIDAL CONSULTATION
         ========================================================= */}

      <section className="border-b border-[#dfccb0] px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14">

        <div className="mx-auto max-w-[1050px]">

          <div className="grid grid-cols-1 border border-[#d8bd8d] bg-[#fffaf2] sm:grid-cols-[1fr_auto] sm:items-center">

            <div className="p-6 sm:p-8">

              <p className="text-[8px] tracking-[0.22em] text-[#9a8060]">
                BRIDAL ASSISTANCE
              </p>

              <h2
                className="mt-2 text-[24px] leading-tight text-[#5b4630] sm:text-[29px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Not sure what to choose?
              </h2>

              <p className="mt-3 max-w-[500px] text-[9px] leading-5 text-[#806d56]">
                Send us your outfit, wedding style or a jewellery
                reference on WhatsApp. We can personally help you
                choose pieces that complete your bridal look.
              </p>

            </div>


            <div className="border-t border-[#dfccb0] p-5 sm:border-l sm:border-t-0 sm:p-8">

              <a
                href="https://wa.me/919005313005"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  bg-[#b18442]
                  px-6
                  py-3
                  text-[8px]
                  tracking-[0.12em]
                  text-white
                  transition
                  hover:bg-[#8e682f]
                  sm:w-auto
                "
              >
                TALK TO US
                <Icon name="arrowRight" size={12} />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          06. CLOSING STATEMENT
         ========================================================= */}

      <section className="px-5 py-10 text-center sm:px-8 sm:py-12">

        <div className="mx-auto max-w-[650px]">

          <Icon
            name="flower"
            size={18}
          />

          <h2
            className="mt-4 text-[25px] leading-tight text-[#5b4630] sm:text-[31px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Some jewellery completes
            <br />
            <span className="text-[#a07431]">
              more than just an outfit.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[460px] text-[9px] leading-5 text-[#806d56]">
            It becomes part of the photographs, the celebrations,
            the traditions and the memories that stay with you.
          </p>

        </div>

      </section>

    </main>
  );
}