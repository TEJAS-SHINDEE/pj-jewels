import { Link } from "react-router-dom";
import { Icon } from "../../data/Icon";
import { products } from "../../data/Collections";

export function Mangalsutra() {
  const mangalsutras = products
    .filter((product) =>
      product.category.toLowerCase().includes("mangalsutra")
    )
    .slice(0, 6);

  return (
    <main className="bg-[#fffdf9] text-[#55432e]">

      {/* =========================================================
          01. EDITORIAL INTRO
         ========================================================= */}

      <section className="border-b border-[#dfccb0] px-5 pb-10 pt-8 sm:px-8 sm:pb-12 sm:pt-10 lg:px-12 lg:pb-14 lg:pt-12">

        <div className="mx-auto max-w-[1250px]">

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <p className="text-[8px] font-medium tracking-[0.3em] text-[#9a8060]">
                THE MANGALSUTRA EDIT
              </p>

              <h1
                className="
                  mt-2
                  max-w-[700px]
                  text-[31px]
                  leading-[1.1]
                  text-[#5b4630]
                  sm:text-[40px]
                  lg:text-[48px]
                "
                style={{ fontFamily: "Georgia, serif" }}
              >
                A symbol of love,
                <br />
                <span className="text-[#a07431]">
                  beautifully worn.
                </span>
              </h1>

            </div>

            <div className="max-w-[330px] lg:pb-1">

              <p className="text-[10px] leading-5 text-[#806d56]">
                Discover mangalsutras that bring together traditional
                symbolism and graceful everyday design — created for
                the woman who carries her story with pride.
              </p>

              <div className="mt-4 flex items-center gap-2">

                <span className="h-px w-12 bg-[#c9a768]" />

                <span className="h-1 w-1 rounded-full bg-[#c9a768]" />

                <span className="text-[7px] tracking-[0.2em] text-[#a0835d]">
                  PJ JEWELS
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          02. VISUAL COLLECTION WALL
         ========================================================= */}

      <section className="border-b border-[#dfccb0] px-4 py-5 sm:px-6 lg:px-8 lg:py-7">

        <div className="mx-auto max-w-[1250px]">

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">

            {/* Large visual */}

            <div className="group relative col-span-2 row-span-2 min-h-[330px] overflow-hidden bg-[#eee7db] sm:min-h-[430px]">

              <div className="absolute inset-0 bg-[#eee7db]" />

              {mangalsutras[0] && (
                <img
                  src={mangalsutras[0].image}
                  alt={mangalsutras[0].name}
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

              <div className="absolute inset-0 bg-gradient-to-t from-[#261d15]/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-7 sm:left-7">

                <p className="text-[7px] tracking-[0.25em] text-white/70">
                  SIGNATURE
                </p>

                <h2
                  className="mt-1 text-[23px] sm:text-[28px]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  The Mangalsutra
                </h2>

                <p className="mt-2 max-w-[300px] text-[8px] leading-4 text-white/75">
                  Timeless black beads, delicate gold details and
                  designs made to become part of your everyday story.
                </p>

              </div>

            </div>


            {/* Small visual 1 */}

            <div className="group relative min-h-[165px] overflow-hidden bg-[#f2ece2] sm:min-h-[210px]">

              {mangalsutras[1] && (
                <img
                  src={mangalsutras[1].image}
                  alt={mangalsutras[1].name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />
              )}

            </div>


            {/* Quote */}

            <div className="flex min-h-[165px] flex-col justify-center border border-[#dfccb0] bg-[#faf5ed] p-5 sm:min-h-[210px] sm:p-6">

              <Icon
                name="sparkles"
                size={18}
              />

              <p
                className="mt-3 text-[16px] leading-5 text-[#5b4630] sm:text-[18px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Tradition,
                <br />
                <span className="text-[#a07431]">
                  worn your way.
                </span>
              </p>

            </div>


            {/* Small visual 2 */}

            <div className="group relative min-h-[165px] overflow-hidden bg-[#f2ece2] sm:min-h-[210px]">

              {mangalsutras[2] && (
                <img
                  src={mangalsutras[2].image}
                  alt={mangalsutras[2].name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />
              )}

            </div>


            {/* Information card */}

            <div className="flex min-h-[165px] flex-col justify-between border border-[#dfccb0] bg-[#fffdfa] p-5 sm:min-h-[210px] sm:p-6">

              <div>

                <p className="text-[7px] tracking-[0.2em] text-[#9a8060]">
                  DESIGNED FOR
                </p>

                <h3
                  className="mt-2 text-[17px] text-[#5b4630]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Everyday moments
                </h3>

              </div>

              <p className="text-[8px] leading-4 text-[#806d56]">
                Lightweight silhouettes for work, celebrations
                and everything between.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          03. SHOP BY MOOD
         ========================================================= */}

      <section className="border-b border-[#dfccb0] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">

        <div className="mx-auto max-w-[1250px]">

          <div className="flex items-end justify-between gap-4">

            <div>

              <p className="text-[8px] tracking-[0.25em] text-[#9a8060]">
                FIND YOUR STYLE
              </p>

              <h2
                className="mt-1 text-[25px] text-[#5b4630] sm:text-[30px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Choose your mood.
              </h2>

            </div>

            <span className="hidden text-[8px] text-[#9a8060] sm:block">
              03 COLLECTIONS
            </span>

          </div>


          <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">

            <Link
              to="/collections/mangalsutra"
              className="group border border-[#dfccb0] bg-[#faf5ed] p-5 transition hover:border-[#b98a47]"
            >
              <div className="flex items-center justify-between">

                <span className="text-[7px] tracking-[0.2em] text-[#a0835d]">
                  01
                </span>

                <Icon
                  name="arrowRight"
                  size={13}
                />

              </div>

              <h3
                className="mt-7 text-[18px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Everyday
              </h3>

              <p className="mt-2 text-[8px] leading-4 text-[#806d56]">
                Subtle designs that sit beautifully with your
                everyday wardrobe.
              </p>
            </Link>


            <Link
              to="/collections/mangalsutra"
              className="group border border-[#dfccb0] bg-[#fffdfa] p-5 transition hover:border-[#b98a47]"
            >
              <div className="flex items-center justify-between">

                <span className="text-[7px] tracking-[0.2em] text-[#a0835d]">
                  02
                </span>

                <Icon
                  name="arrowRight"
                  size={13}
                />

              </div>

              <h3
                className="mt-7 text-[18px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Classic
              </h3>

              <p className="mt-2 text-[8px] leading-4 text-[#806d56]">
                Traditional proportions with a refined
                contemporary finish.
              </p>
            </Link>


            <Link
              to="/collections/mangalsutra"
              className="group border border-[#dfccb0] bg-[#f6eee2] p-5 transition hover:border-[#b98a47]"
            >
              <div className="flex items-center justify-between">

                <span className="text-[7px] tracking-[0.2em] text-[#a0835d]">
                  03
                </span>

                <Icon
                  name="arrowRight"
                  size={13}
                />

              </div>

              <h3
                className="mt-7 text-[18px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Celebration
              </h3>

              <p className="mt-2 text-[8px] leading-4 text-[#806d56]">
                More detail, more presence — made for special
                occasions and meaningful moments.
              </p>
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          04. PRODUCTS
         ========================================================= */}

      <section className="border-b border-[#dfccb0] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">

        <div className="mx-auto max-w-[1250px]">

          <div className="mb-6 flex items-end justify-between">

            <div>

              <p className="text-[8px] tracking-[0.25em] text-[#9a8060]">
                THE COLLECTION
              </p>

              <h2
                className="mt-1 text-[26px] text-[#5b4630] sm:text-[31px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Mangalsutras worth keeping.
              </h2>

            </div>

            <span className="hidden text-[8px] text-[#9a8060] sm:block">
              {mangalsutras.length.toString().padStart(2, "0")} PIECES
            </span>

          </div>


          {mangalsutras.length > 0 ? (

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">

              {mangalsutras.map((product, index) => (

                <Link
                  key={product.name}
                  to="/new-arrivals"
                  className="
                    group
                    overflow-hidden
                    border
                    border-[#eadfce]
                    bg-[#fffdfa]
                  "
                >

                  <div className="relative aspect-[4/5] overflow-hidden bg-[#f2ece2]">

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

                    {index === 0 && (
                      <span className="absolute left-2 top-2 border border-white/60 bg-[#fffdf9]/90 px-2 py-1 text-[6px] tracking-[0.15em] text-[#73562f]">
                        SIGNATURE
                      </span>
                    )}

                  </div>


                  <div className="p-3 sm:p-4">

                    <p className="text-[6px] tracking-[0.15em] text-[#a0835d]">
                      {product.category}
                    </p>

                    <h3
                      className="mt-1 truncate text-[10px] text-[#55432e] sm:text-[11px]"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {product.name}
                    </h3>

                    <div className="mt-2 flex items-center justify-between">

                      <span className="text-[8px] text-[#73562f]">
                        {product.price}
                      </span>

                      <span className="text-[#a77b35]">
                        <Icon
                          name="arrowRight"
                          size={12}
                        />
                      </span>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          ) : (

            <div className="border border-[#dfccb0] bg-[#faf5ed] px-6 py-12 text-center">

              <Icon
                name="diamond"
                size={22}
              />

              <h3
                className="mt-3 text-[18px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                New pieces are coming soon.
              </h3>

              <p className="mx-auto mt-2 max-w-[400px] text-[9px] leading-5 text-[#806d56]">
                Our latest mangalsutra designs will appear here.
                In the meantime, contact us on WhatsApp for available
                designs.
              </p>

              <a
                href="https://wa.me/+919005313005"
                target="_blank"
                rel="noreferrer"
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  bg-[#b18442]
                  px-5
                  py-2.5
                  text-[8px]
                  tracking-[0.1em]
                  text-white
                  transition
                  hover:bg-[#8e682f]
                "
              >
                ASK ON WHATSAPP
                <span>→</span>
              </a>

            </div>

          )}

        </div>

      </section>


      {/* =========================================================
          05. WHATSAPP SHOPPING
         ========================================================= */}

      <section className="px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">

        <div className="mx-auto max-w-[900px]">

          <div className="relative overflow-hidden border border-[#d8bd8d] bg-[#faf3e8] px-6 py-9 text-center sm:px-10 sm:py-11">

            {/* Decorative circles */}

            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border border-[#d8bd8d]/50" />

            <div className="pointer-events-none absolute -bottom-14 -left-10 h-32 w-32 rounded-full border border-[#d8bd8d]/40" />


            <Icon
              name="phone"
              size={20}
            />

            <p className="mt-4 text-[7px] tracking-[0.25em] text-[#9a8060]">
              PERSONAL SHOPPING
            </p>

            <h2
              className="mt-2 text-[23px] text-[#5b4630] sm:text-[28px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Found something you love?
            </h2>

            <p className="mx-auto mt-3 max-w-[480px] text-[9px] leading-5 text-[#806d56]">
              Send us a screenshot or image of the jewellery you like.
              We'll personally share the price, availability and
              complete order details with you.
            </p>

            <a
              href="https://wa.me/+919005313005"
              target="_blank"
              rel="noreferrer"
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                border
                border-[#b98a47]
                bg-[#b18442]
                px-6
                py-3
                text-[8px]
                tracking-[0.12em]
                text-white
                transition
                hover:bg-[#8e682f]
              "
            >
              SHOP VIA WHATSAPP
              <span>→</span>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}