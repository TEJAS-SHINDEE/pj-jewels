import { Link } from "react-router-dom";
import { Icon } from "../../data/Icon";
import { products } from "../../data/Collections";

export function Wishlist() {
  // Temporary wishlist data.
  // Later, replace this with your actual wishlist state/API.
  const wishlistItems = products.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#fffdf9] text-[#55432e]">

      {/* =====================================================
          01. PAGE INTRO
         ===================================================== */}

      <section className="border-b border-[#dfccb0] px-5 pb-10 pt-8 sm:px-8 sm:pb-12 sm:pt-10 lg:px-12 lg:pb-14 lg:pt-12">
        <div className="mx-auto max-w-[1250px]">

          <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">

            <div>
              <p className="text-[8px] font-medium tracking-[0.28em] text-[#9a8060] sm:text-[9px]">
                YOUR COLLECTION
              </p>

              <h1
                className="mt-2 text-[32px] leading-tight text-[#5b4630] sm:text-[40px] lg:text-[46px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Jewellery worth
                <br />
                <span className="text-[#a07431]">
                  keeping close.
                </span>
              </h1>

              <div className="mt-4 flex max-w-[180px] items-center gap-2">
                <span className="h-px flex-1 bg-[#c9a768]" />
                <span className="h-1 w-1 rounded-full bg-[#c9a768]" />
                <span className="h-px flex-1 bg-[#c9a768]" />
              </div>
            </div>

            <div className="max-w-[300px] md:text-right">
              <p className="text-[9px] leading-5 text-[#806d56] sm:text-[10px]">
                Your favourite pieces, saved in one place.
                Keep the designs you love close until you are
                ready to make them yours.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          02. WISHLIST CONTENT
         ===================================================== */}

      <section className="px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[1250px]">

          {wishlistItems.length > 0 ? (
            <>

              {/* TOP BAR */}

              <div className="mb-5 flex items-center justify-between border-b border-[#eadfce] pb-4">

                <p className="text-[8px] tracking-[0.18em] text-[#9a8060]">
                  {wishlistItems.length} SAVED PIECES
                </p>

                <Link
                  to="/collections"
                  className="
                    hidden
                    items-center
                    gap-2
                    text-[8px]
                    tracking-[0.12em]
                    text-[#73562f]
                    transition
                    hover:text-[#a77b35]
                    sm:flex
                  "
                >
                  CONTINUE EXPLORING
                  <Icon name="arrowRight" size={12} />
                </Link>

              </div>


              {/* =================================================
                  PRODUCT GRID
                 ================================================= */}

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">

                {wishlistItems.map((product) => (

                  <article
                    key={product.name}
                    className="
                      group
                      relative
                      overflow-hidden
                      border
                      border-[#eadfce]
                      bg-[#fffdfa]
                      transition
                      duration-300
                      hover:border-[#c9a768]
                      hover:shadow-[0_10px_30px_rgba(100,75,40,0.08)]
                    "
                  >

                    {/* IMAGE */}

                    <Link
                      to="/new-arrivals"
                      className="relative block aspect-[4/5] overflow-hidden bg-[#f3ede3]"
                    >

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

                      {/* SAVED LABEL */}

                      <div className="absolute left-3 top-3 border border-[#dfccb0] bg-[#fffdf9]/90 px-2 py-1 backdrop-blur-sm">
                        <p className="text-[6px] tracking-[0.15em] text-[#9a8060]">
                          SAVED
                        </p>
                      </div>


                      {/* REMOVE */}

                      <button
                        type="button"
                        aria-label={`Remove ${product.name} from wishlist`}
                        className="
                          absolute
                          right-3
                          top-3
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          border
                          border-[#dfccb0]
                          bg-[#fffdf9]/90
                          text-[#806d56]
                          backdrop-blur-sm
                          transition
                          hover:border-[#b98a47]
                          hover:text-[#a77b35]
                        "
                      >
                        <Icon name="close" size={12} />
                      </button>

                    </Link>


                    {/* PRODUCT INFO */}

                    <div className="border-t border-[#eadfce] p-3 sm:p-4">

                      <p className="text-[6px] tracking-[0.16em] text-[#a0835d] sm:text-[7px]">
                        {product.category}
                      </p>

                      <h2
                        className="mt-1 truncate text-[11px] text-[#55432e] sm:text-[12px]"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {product.name}
                      </h2>

                      <div className="mt-2 flex items-center justify-between">

                        <p className="text-[8px] font-medium text-[#73562f] sm:text-[9px]">
                          {product.price}
                        </p>

                        <Link
                          to="/new-arrivals"
                          className="
                            text-[7px]
                            tracking-[0.1em]
                            text-[#9a8060]
                            transition
                            hover:text-[#a77b35]
                          "
                        >
                          VIEW
                        </Link>

                      </div>

                    </div>

                  </article>

                ))}

              </div>


              {/* MOBILE EXPLORE */}

              <div className="mt-6 text-center sm:hidden">
                <Link
                  to="/collections"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    border
                    border-[#b98a47]
                    px-6
                    py-3
                    text-[8px]
                    tracking-[0.12em]
                    text-[#73562f]
                    transition
                    hover:bg-[#a77b35]
                    hover:text-white
                  "
                >
                  CONTINUE EXPLORING
                  <Icon name="arrowRight" size={12} />
                </Link>
              </div>

            </>
          ) : (

            /* =================================================
               EMPTY WISHLIST
               ================================================= */

            <div className="border border-[#dfccb0] bg-[#faf5ed] px-6 py-16 text-center sm:px-10 sm:py-20">

              <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#d8bd8d] bg-[#fffdf9] text-[#a77b35]">
                <Icon name="heart" size={22} />
              </div>

              <p className="mt-6 text-[8px] tracking-[0.2em] text-[#9a8060]">
                YOUR WISHLIST IS WAITING
              </p>

              <h2
                className="mt-2 text-[25px] text-[#5b4630] sm:text-[30px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Nothing saved yet.
              </h2>

              <p className="mx-auto mt-3 max-w-[420px] text-[9px] leading-5 text-[#806d56] sm:text-[10px]">
                Discover something beautiful and save it here.
                Your favourite jewellery will always be waiting
                for you.
              </p>

              <Link
                to="/collections"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  border
                  border-[#b98a47]
                  bg-[#b18442]
                  px-7
                  py-3
                  text-[8px]
                  tracking-[0.12em]
                  text-white
                  transition
                  hover:bg-[#8e682f]
                "
              >
                EXPLORE COLLECTIONS
                <Icon name="arrowRight" size={12} />
              </Link>

            </div>

          )}

        </div>
      </section>


      {/* =====================================================
          03. LITTLE BRAND MESSAGE
         ===================================================== */}

      <section className="border-t border-[#dfccb0] bg-[#faf5ed] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">

          <Icon
            name="sparkles"
            size={18}
          />

          <p
            className="mt-3 max-w-[600px] text-[17px] leading-6 text-[#5b4630] sm:text-[20px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Some pieces are meant to be worn.
            <br />
            <span className="text-[#a07431]">
              Some are meant to be remembered.
            </span>
          </p>

          <p className="mt-3 text-[8px] leading-4 text-[#806d56]">
            Take your time. Choose something that feels like you.
          </p>

        </div>
      </section>

    </main>
  );
} 