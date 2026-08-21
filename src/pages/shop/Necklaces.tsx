import { Link } from "react-router-dom";
import { Icon } from "../../data/Icon";
import { products } from "../../data/Collections";

export function Necklaces() {
  const necklaceProducts = products.filter(
    (product) =>
      product.category.toLowerCase().includes("necklace") ||
      product.category.toLowerCase().includes("haar") ||
      product.name.toLowerCase().includes("necklace")
  );

  const displayProducts =
    necklaceProducts.length > 0
      ? necklaceProducts.slice(0, 8)
      : products.slice(0, 8);

  return (
    <main className="bg-[#fffdf9] text-[#55432e]">

      {/* =========================================================
          01. COLLECTION HERO
         ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-[#dfccb0]
          bg-[#faf5ed]
          px-5
          pb-10
          pt-8
          sm:px-8
          sm:pb-12
          sm:pt-10
          lg:px-12
          lg:pb-14
          lg:pt-12
        "
      >

        {/* Decorative circles */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-56
            w-56
            rounded-full
            border
            border-[#d8bd8d]/40
            sm:h-72
            sm:w-72
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-24
            -left-20
            h-48
            w-48
            rounded-full
            border
            border-[#d8bd8d]/30
          "
        />

        <div className="relative mx-auto max-w-[1250px]">

          {/* Breadcrumb */}

          {/* <div className="mb-7 flex items-center gap-2 text-[7px] tracking-[0.15em] text-[#9a8060]">
            <Link to="/" className="hover:text-[#9b702d]">
              HOME
            </Link>

            <span>/</span>

            <Link to="/collections" className="hover:text-[#9b702d]">
              COLLECTIONS
            </Link>

            <span>/</span>

            <span className="text-[#73562f]">
              NECKLACES
            </span>
          </div> */}


          {/* Hero content */}

          <div
            className="
              grid
              grid-cols-1
              gap-7
              lg:grid-cols-[1.1fr_0.9fr]
              lg:items-end
              lg:gap-12
            "
          >

            {/* Left */}

            <div>

              <div className="flex items-center gap-2">

                <span className="h-px w-8 bg-[#c9a768]" />

                <p className="text-[8px] font-medium tracking-[0.25em] text-[#9a8060]">
                  THE NECKLACE EDIT
                </p>

              </div>

              <h1
                className="
                  mt-3
                  max-w-[650px]
                  text-[35px]
                  leading-[1.08]
                  text-[#5b4630]
                  sm:text-[45px]
                  lg:text-[56px]
                "
                style={{ fontFamily: "Georgia, serif" }}
              >
                Jewellery that
                <br />
                <span className="text-[#a07431]">
                  completes the moment.
                </span>
              </h1>

              <p
                className="
                  mt-5
                  max-w-[500px]
                  text-[10px]
                  leading-5
                  text-[#806d56]
                  sm:text-[11px]
                  sm:leading-6
                "
              >
                Discover traditional Indian necklaces created for
                celebrations, meaningful occasions and the moments
                you want to remember forever.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <a
                  href="https://wa.me/919005313005"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    bg-[#b18442]
                    px-5
                    py-3
                    text-[8px]
                    tracking-[0.12em]
                    text-white
                    transition
                    hover:bg-[#8e682f]
                  "
                >
                  ENQUIRE ON WHATSAPP
                  <Icon name="arrowRight" size={12} />
                </a>

                <a
                  href="#necklace-products"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    border
                    border-[#b98a47]
                    px-5
                    py-3
                    text-[8px]
                    tracking-[0.12em]
                    text-[#73562f]
                    transition
                    hover:bg-[#faf3e8]
                  "
                >
                  EXPLORE PIECES
                </a>

              </div>

            </div>


            {/* Right editorial block */}

            <div
              className="
                relative
                border
                border-[#ddc8a7]
                bg-[#fffdf9]
                p-5
                sm:p-6
              "
            >

              <div className="absolute right-4 top-4 text-[#b98a47]">
                <Icon name="sparkles" size={20} />
              </div>

              <p className="text-[7px] tracking-[0.2em] text-[#a0835d]">
                A PIECE TO REMEMBER
              </p>

              <p
                className="
                  mt-4
                  max-w-[330px]
                  text-[22px]
                  leading-7
                  text-[#5b4630]
                "
                style={{ fontFamily: "Georgia, serif" }}
              >
                Tradition,
                <br />
                worn beautifully.
              </p>

              <div className="mt-5 flex items-center gap-2">

                <span className="h-px w-12 bg-[#c9a768]" />

                <span className="h-1 w-1 rounded-full bg-[#c9a768]" />

              </div>

              <p className="mt-4 text-[8px] leading-4 text-[#806d56]">
                From graceful everyday designs to statement
                bridal pieces, find a necklace that feels
                distinctly yours.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          02. COLLECTION INTRO
         ========================================================= */}

      <section
        className="
          border-b
          border-[#dfccb0]
          bg-[#fffdf9]
          px-5
          py-9
          sm:px-8
          sm:py-11
          lg:px-12
          lg:py-12
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-[1100px]
            grid-cols-2
            gap-3
            sm:grid-cols-4
          "
        >

          {[
            {
              number: "01",
              title: "Traditional",
              text: "Inspired by Indian heritage.",
            },
            {
              number: "02",
              title: "Elegant",
              text: "Designed for timeless beauty.",
            },
            {
              number: "03",
              title: "Celebration",
              text: "Made for meaningful moments.",
            },
            {
              number: "04",
              title: "Personal",
              text: "Chosen especially for you.",
            },
          ].map((item) => (

            <div
              key={item.number}
              className="
                border
                border-[#e6d8c4]
                bg-[#faf5ed]
                p-4
                sm:p-5
              "
            >

              <p className="text-[7px] tracking-[0.15em] text-[#b28a4b]">
                {item.number}
              </p>

              <h3
                className="mt-2 text-[14px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {item.title}
              </h3>

              <p className="mt-1 text-[7px] leading-4 text-[#806d56]">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          03. PRODUCT COLLECTION
         ========================================================= */}

      <section
        id="necklace-products"
        className="
          border-b
          border-[#dfccb0]
          px-5
          py-11
          sm:px-8
          sm:py-14
          lg:px-12
          lg:py-16
        "
      >

        <div className="mx-auto max-w-[1250px]">

          {/* Header */}

          <div
            className="
              mb-7
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >

            <div>

              <p className="text-[8px] tracking-[0.25em] text-[#9a8060]">
                EXPLORE THE COLLECTION
              </p>

              <h2
                className="
                  mt-2
                  text-[27px]
                  text-[#5b4630]
                  sm:text-[32px]
                "
                style={{ fontFamily: "Georgia, serif" }}
              >
                Find your necklace.
              </h2>

            </div>

            <p className="max-w-[340px] text-[8px] leading-5 text-[#806d56] sm:text-right">
              Browse our selected pieces and send us the
              design you love. We'll personally share the
              details, price and availability with you.
            </p>

          </div>


          {/* Product grid */}

          <div
            className="
              grid
              grid-cols-2
              gap-2
              sm:grid-cols-3
              sm:gap-3
              lg:grid-cols-4
            "
          >

            {displayProducts.map((product, index) => (

              <Link
                key={product.name}
                to="/new-arrivals"
                className="
                  group
                  overflow-hidden
                  border
                  border-[#e5d7c2]
                  bg-[#fffdfa]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#c9a768]
                "
              >

                {/* Image */}

                <div className="relative aspect-[0.85/1] overflow-hidden bg-[#f1ebe0]">

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

                  <span
                    className="
                      absolute
                      left-2
                      top-2
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      bg-[#fffdf9]/85
                      text-[6px]
                      text-[#73562f]
                      backdrop-blur-sm
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Wishlist */}

                  <span
                    className="
                      absolute
                      right-2
                      top-2
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      bg-[#fffdf9]/85
                      text-[#806d56]
                      opacity-0
                      backdrop-blur-sm
                      transition
                      group-hover:opacity-100
                    "
                  >
                    <Icon name="heart" size={13} />
                  </span>

                </div>


                {/* Details */}

                <div className="border-t border-[#e9ddcd] p-2.5 sm:p-3">

                  <p className="text-[6px] tracking-[0.14em] text-[#a0835d]">
                    {product.category}
                  </p>

                  <p
                    className="
                      mt-1
                      truncate
                      text-[9px]
                      text-[#55432e]
                      sm:text-[10px]
                    "
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {product.name}
                  </p>

                  <div className="mt-1 flex items-center justify-between">

                    <p className="text-[8px] text-[#73562f]">
                      {product.price}
                    </p>

                    <span className="text-[9px] text-[#b28a4b]">
                      →
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          04. OCCASION EDIT
         ========================================================= */}

      <section
        className="
          border-b
          border-[#dfccb0]
          bg-[#faf5ed]
          px-5
          py-11
          sm:px-8
          sm:py-14
          lg:px-12
          lg:py-16
        "
      >

        <div className="mx-auto max-w-[1100px]">

          <div className="mb-6">

            <p className="text-[8px] tracking-[0.25em] text-[#9a8060]">
              CHOOSE BY MOMENT
            </p>

            <h2
              className="mt-2 text-[27px] text-[#5b4630] sm:text-[32px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              One necklace, many moments.
            </h2>

          </div>


          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

            {[
              {
                number: "01",
                title: "Everyday Grace",
                text: "Subtle designs that bring a touch of tradition to everyday dressing.",
              },
              {
                number: "02",
                title: "Festive Moments",
                text: "Statement pieces made to complement celebrations and special occasions.",
              },
              {
                number: "03",
                title: "Bridal Grandeur",
                text: "Rich traditional designs for weddings and unforgettable ceremonies.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="
                  group
                  border
                  border-[#ddc8a7]
                  bg-[#fffdf9]
                  p-5
                  transition
                  duration-300
                  hover:border-[#b98a47]
                "
              >

                <div className="flex items-center justify-between">

                  <span className="text-[7px] tracking-[0.15em] text-[#b28a4b]">
                    {item.number}
                  </span>

                  <Icon
                    name="diamond"
                    size={15}
                  />

                </div>

                <h3
                  className="mt-5 text-[17px] text-[#5b4630]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {item.title}
                </h3>

                <p className="mt-2 text-[8px] leading-5 text-[#806d56]">
                  {item.text}
                </p>

                <div className="mt-4 h-px w-10 bg-[#c9a768] transition-all duration-300 group-hover:w-20" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          05. WHATSAPP ENQUIRY
         ========================================================= */}

      <section
        className="
          border-b
          border-[#dfccb0]
          px-5
          py-10
          sm:px-8
          sm:py-12
          lg:px-12
          lg:py-14
        "
      >

        <div
          className="
            mx-auto
            max-w-[1000px]
            border
            border-[#cdb68e]
            bg-[#fffaf2]
            px-5
            py-8
            text-center
            sm:px-10
            sm:py-10
          "
        >

          <div className="mx-auto flex h-9 w-9 items-center justify-center border border-[#d8bd8d] bg-[#faf3e8] text-[#a07431]">
            <Icon name="phone" size={16} />
          </div>

          <p className="mt-4 text-[8px] tracking-[0.2em] text-[#9a8060]">
            FOUND SOMETHING YOU LOVE?
          </p>

          <h2
            className="
              mt-2
              text-[23px]
              text-[#5b4630]
              sm:text-[28px]
            "
            style={{ fontFamily: "Georgia, serif" }}
          >
            Let's make it yours.
          </h2>

          <p className="mx-auto mt-3 max-w-[500px] text-[9px] leading-5 text-[#806d56]">
            Send us a screenshot or the name of the necklace
            on WhatsApp. We'll personally share the price,
            availability and order details with you.
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
              hover:bg-[#8e682f]
            "
          >
            <Icon name="phone" size={12} />
            ENQUIRE ON WHATSAPP
            <Icon name="arrowRight" size={12} />
          </a>

        </div>

      </section>


      {/* =========================================================
          06. CLOSING STATEMENT
         ========================================================= */}

      <section
        className="
          bg-[#fffdf9]
          px-5
          py-10
          text-center
          sm:px-8
          sm:py-12
        "
      >

        <Icon
          name="sparkles"
          size={19}
        />

        <p
          className="
            mx-auto
            mt-4
            max-w-[650px]
            text-[20px]
            leading-7
            text-[#5b4630]
            sm:text-[25px]
            sm:leading-8
          "
          style={{ fontFamily: "Georgia, serif" }}
        >
          Some jewellery is worn.
          <br />
          <span className="text-[#a07431]">
            Some becomes part of your story.
          </span>
        </p>

        <div className="mx-auto mt-4 flex max-w-[120px] items-center gap-2">
          <span className="h-px flex-1 bg-[#c9a768]" />
          <span className="h-1 w-1 shrink-0 rounded-full bg-[#c9a768]" />
          <span className="h-px flex-1 bg-[#c9a768]" />
        </div>

      </section>

    </main>
  );
}