import { Link } from "react-router-dom";
import { products } from "../../data/Collections";
import { Icon } from "../../data/Icon";


function Cart() {
  // Temporary cart items.
  // Later replace this with your actual cart state/context.
  const cartItems = products.slice(0, 2);

  const subtotal = cartItems.reduce((total, product) => {
    const numericPrice = Number(
      product.price.replace(/[^\d]/g, "")
    );

    return total + numericPrice;
  }, 0);

  const whatsappMessage = encodeURIComponent(
    `Hello PJ Jewels,

I would like to enquire about the following jewellery:

${cartItems
  .map(
    (product, index) =>
      `${index + 1}. ${product.name} - ${product.price}`
  )
  .join("\n")}

Please share the availability, final price and order details.`
  );

  return (
    <main className="min-h-screen bg-[#fffdf9] text-[#55432e]">

      {/* =====================================================
          01. PAGE HEADER
         ===================================================== */}

      <section className="border-b border-[#dfccb0] bg-[#faf5ed] px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-12">

        <div className="mx-auto max-w-[1200px]">

          <p className="text-[8px] font-medium tracking-[0.28em] text-[#9a8060]">
            YOUR SELECTION
          </p>

          <div className="mt-2 flex items-end justify-between gap-5">

            <div>
              <h1
                className="text-[30px] leading-tight text-[#5b4630] sm:text-[38px] lg:text-[42px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Your Jewellery
                <br />
                <span className="text-[#a07431]">
                  selection.
                </span>
              </h1>

              <div className="mt-4 flex max-w-[170px] items-center gap-2">
                <span className="h-px flex-1 bg-[#c9a768]" />
                <span className="h-1 w-1 shrink-0 rounded-full bg-[#c9a768]" />
                <span className="h-px flex-1 bg-[#c9a768]" />
              </div>
            </div>

            <div className="hidden max-w-[300px] text-right sm:block">

              <p className="text-[9px] leading-5 text-[#806d56]">
                Review the pieces you love and send your
                selection to us on WhatsApp. We will personally
                confirm availability and pricing.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          02. CART CONTENT
         ===================================================== */}

      <section className="px-5 py-9 sm:px-8 sm:py-12 lg:px-12 lg:py-14">

        <div className="mx-auto max-w-[1200px]">

          {cartItems.length > 0 ? (

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">


              {/* =================================================
                  LEFT - CART ITEMS
                 ================================================= */}

              <div>

                <div className="mb-4 flex items-center justify-between border-b border-[#dfccb0] pb-3">

                  <p className="text-[8px] tracking-[0.18em] text-[#9a8060]">
                    {cartItems.length} SELECTED PIECES
                  </p>

                  <Link
                    to="/collections"
                    className="
                      hidden
                      items-center
                      gap-2
                      text-[8px]
                      tracking-[0.1em]
                      text-[#73562f]
                      transition
                      hover:text-[#a77b35]
                      sm:flex
                    "
                  >
                    CONTINUE SHOPPING
                    <Icon name="arrowRight" size={12} />
                  </Link>

                </div>


                {/* ITEMS */}

                <div className="space-y-3">

                  {cartItems.map((product) => (

                    <article
                      key={product.name}
                      className="
                        group
                        flex
                        gap-4
                        border
                        border-[#eadfce]
                        bg-[#fffdfa]
                        p-3
                        transition
                        hover:border-[#c9a768]
                        sm:p-4
                      "
                    >

                      {/* IMAGE */}

                      <Link
                        to="/new-arrivals"
                        className="
                          h-28
                          w-24
                          shrink-0
                          overflow-hidden
                          bg-[#f2ece2]
                          sm:h-32
                          sm:w-28
                        "
                      >

                        <img
                          src={product.image}
                          alt={product.name}
                          className="
                            h-full
                            w-full
                            object-cover
                            transition
                            duration-500
                            group-hover:scale-105
                          "
                        />

                      </Link>


                      {/* DETAILS */}

                      <div className="flex min-w-0 flex-1 flex-col justify-between">

                        <div>

                          <p className="text-[6px] tracking-[0.16em] text-[#a0835d] sm:text-[7px]">
                            {product.category}
                          </p>

                          <h2
                            className="mt-1 text-[13px] text-[#55432e] sm:text-[15px]"
                            style={{ fontFamily: "Georgia, serif" }}
                          >
                            {product.name}
                          </h2>

                          <p className="mt-1 text-[8px] leading-4 text-[#8d795e]">
                            Availability and final pricing will be
                            confirmed personally.
                          </p>

                        </div>


                        <div className="mt-3 flex items-end justify-between gap-3">

                          <p className="text-[9px] font-medium text-[#73562f]">
                            {product.price}
                          </p>

                          <button
                            type="button"
                            className="
                              text-[7px]
                              tracking-[0.1em]
                              text-[#9a8060]
                              transition
                              hover:text-[#a77b35]
                            "
                          >
                            REMOVE
                          </button>

                        </div>

                      </div>

                    </article>

                  ))}

                </div>


                {/* MOBILE CONTINUE */}

                <div className="mt-5 sm:hidden">

                  <Link
                    to="/collections"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-[8px]
                      tracking-[0.1em]
                      text-[#73562f]
                    "
                  >
                    <Icon name="arrowLeft" size={12} />
                    CONTINUE SHOPPING
                  </Link>

                </div>

              </div>


              {/* =================================================
                  RIGHT - ORDER SUMMARY
                 ================================================= */}

              <aside className="h-fit border border-[#dfccb0] bg-[#faf5ed] p-5 sm:p-6 lg:sticky lg:top-24">

                <p className="text-[8px] font-medium tracking-[0.2em] text-[#9a8060]">
                  ORDER ENQUIRY
                </p>

                <h2
                  className="mt-2 text-[22px] text-[#5b4630]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Almost yours.
                </h2>

                <p className="mt-2 text-[9px] leading-5 text-[#806d56]">
                  Send your selected jewellery to us on WhatsApp.
                  We will confirm availability, final pricing and
                  delivery details personally.
                </p>


                {/* SUMMARY */}

                <div className="mt-6 border-t border-[#dfccb0] pt-4">

                  <div className="flex justify-between text-[9px]">

                    <span className="text-[#806d56]">
                      Selected pieces
                    </span>

                    <span className="text-[#55432e]">
                      {cartItems.length}
                    </span>

                  </div>


                  <div className="mt-3 flex justify-between text-[9px]">

                    <span className="text-[#806d56]">
                      Estimated selection value
                    </span>

                    <span className="font-medium text-[#73562f]">
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>

                  </div>

                </div>


                {/* NOTE */}

                <div className="mt-5 border border-[#dfccb0] bg-[#fffdf9] p-3">

                  <div className="flex gap-2">

                    <Icon
                      name="shield"
                      size={14}
                    />

                    <p className="text-[8px] leading-4 text-[#806d56]">
                      No payment is required here. Your order will
                      only be confirmed after we personally verify
                      the details with you.
                    </p>

                  </div>

                </div>


                {/* WHATSAPP */}

                <a
                  href={`https://wa.me/919005313005?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    mt-5
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    bg-[#b18442]
                    px-5
                    py-3.5
                    text-[8px]
                    tracking-[0.12em]
                    text-white
                    transition
                    duration-300
                    hover:bg-[#8e682f]
                  "
                >
                  SEND ENQUIRY ON WHATSAPP
                  <span>→</span>
                </a>

                <p className="mt-3 text-center text-[7px] leading-4 text-[#9a8060]">
                  Our team will reply with availability,
                  price and order instructions.
                </p>

              </aside>

            </div>

          ) : (

            /* =================================================
               EMPTY CART
               ================================================= */

            <div className="border border-[#dfccb0] bg-[#faf5ed] px-6 py-16 text-center sm:px-10 sm:py-20">

              <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#d8bd8d] bg-[#fffdf9] text-[#a77b35]">

                <Icon
                  name="bag"
                  size={22}
                />

              </div>

              <p className="mt-6 text-[8px] tracking-[0.2em] text-[#9a8060]">
                YOUR SELECTION IS EMPTY
              </p>

              <h2
                className="mt-2 text-[25px] text-[#5b4630] sm:text-[30px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Nothing here yet.
              </h2>

              <p className="mx-auto mt-3 max-w-[420px] text-[9px] leading-5 text-[#806d56] sm:text-[10px]">
                Explore our collections and find something
                beautiful to take home.
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
          03. BRAND MESSAGE
         ===================================================== */}

      <section className="border-t border-[#dfccb0] bg-[#fffdf9] px-5 py-10 sm:px-8 sm:py-12">

        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <Icon
            name="sparkles"
            size={18}
          />

          <p
            className="mt-3 text-[17px] leading-6 text-[#5b4630] sm:text-[20px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Every piece deserves
            <br />
            <span className="text-[#a07431]">
              the right moment.
            </span>
          </p>

          <p className="mt-3 max-w-[450px] text-[8px] leading-4 text-[#806d56]">
            We personally handle every enquiry so your jewellery
            journey feels as special as the piece itself.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Cart;