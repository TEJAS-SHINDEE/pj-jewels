import { Link } from "react-router-dom";
import { IMAGES, collections, products } from "../../data/Collections";
import { Icon } from "../../data/Icon";

export function Collections() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="bg-[#fffdf9] text-[#514435]">

      {/* =========================================================
          01. EDITORIAL HERO
         ========================================================= */}

      <section className="relative overflow-hidden border-b border-[#dfccb0]">

        <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-[42%_58%]">

          {/* LEFT CONTENT */}

          <div className="relative flex items-center bg-[#faf5ed] px-6 py-14 sm:px-10 md:px-14 lg:px-16 xl:px-20">

            {/* Decorative circles */}

            <div className="pointer-events-none absolute -left-20 top-20 h-48 w-48 rounded-full border border-[#d8bd8d]/30" />

            <div className="pointer-events-none absolute -left-12 top-32 h-24 w-24 rounded-full border border-[#d8bd8d]/20" />

            <div className="relative z-10 max-w-[500px]">

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-10 bg-[#b98a47]" />

                <p className="text-[8px] font-medium tracking-[0.3em] text-[#967850]">
                  THE PJ JEWELS COLLECTION
                </p>

              </div>

              <h1
                className="
                  text-[38px]
                  leading-[1.15]
                  text-[#5b4630]
                  sm:text-[48px]
                  md:text-[55px]
                  lg:text-[52px]
                  xl:text-[62px]
                "
                style={{ fontFamily: "Georgia, serif" }}
              >
                Jewellery that
                <br />
                <span className="text-[#a07431]">
                  tells your story.
                </span>
              </h1>

              <p className="mt-6 max-w-[410px] text-[11px] leading-6 text-[#766451] sm:text-[12px]">
                Discover thoughtfully selected jewellery inspired by
                Indian tradition, crafted to become part of your
                everyday moments and celebrations.
              </p>

              <div className="mt-7 flex items-center gap-2">

                <span className="h-px w-16 bg-[#c9a768]" />

                <span className="h-1 w-1 rounded-full bg-[#c9a768]" />

                <span className="h-px w-16 bg-[#c9a768]" />

              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <a
                  href="#shop-all"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    border
                    border-[#b98a47]
                    bg-[#b18442]
                    px-6
                    py-3
                    text-[8px]
                    tracking-[0.14em]
                    text-white
                    transition
                    duration-300
                    hover:bg-[#8e682f]
                  "
                >
                  EXPLORE COLLECTION
                  <Icon name="arrowRight" size={13} />
                </a>

                <Link
                  to="/new-arrivals"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    border
                    border-[#c8a66b]
                    px-6
                    py-3
                    text-[8px]
                    tracking-[0.14em]
                    text-[#73562f]
                    transition
                    duration-300
                    hover:bg-[#f5ecde]
                  "
                >
                  NEW ARRIVALS
                </Link>

              </div>

            </div>

          </div>


          {/* RIGHT IMAGE */}

          <div className="relative min-h-[420px] overflow-hidden bg-[#f3eee5] lg:min-h-[620px]">

            <img
              src={IMAGES.hero}
              alt="PJ Jewels collection"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#5b4630]/10 via-transparent to-[#5b4630]/20" />

            {/* Floating label */}

            <div
              className="
                absolute
                bottom-6
                left-5
                border
                border-white/50
                bg-[#fffdf9]/90
                px-5
                py-4
                backdrop-blur-sm
                sm:bottom-8
                sm:left-8
              "
            >

              <p className="text-[7px] tracking-[0.2em] text-[#9a8060]">
                CURATED FOR YOU
              </p>

              <p
                className="mt-1 text-[16px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Timeless Elegance
              </p>

            </div>

          </div>

        </div>

      </section>


{/* =========================================================
    02. BENTO COLLECTIONS
   ========================================================= */}

<section
  id="shop-all"
  className="
    border-b
    border-[#dfccb0]
    bg-[#fffdf9]
    px-4
    py-10
    sm:px-6
    sm:py-12
    md:px-8
    md:py-14
    lg:px-10
    lg:py-16
  "
>
  <div className="mx-auto max-w-[1350px]">

    {/* =====================================================
        HEADER
       ===================================================== */}

    <div
      className="
        mb-7
        flex
        flex-col
        gap-3
        sm:mb-8
        sm:flex-row
        sm:items-end
        sm:justify-between
        lg:mb-10
      "
    >

      <div>

        <p
          className="
            text-[7px]
            font-medium
            tracking-[0.28em]
            text-[#9a8060]
            sm:text-[8px]
          "
        >
          OUR COLLECTIONS
        </p>

        <h2
          className="
            mt-1.5
            text-[25px]
            leading-tight
            text-[#5b4630]
            sm:text-[30px]
            lg:text-[36px]
          "
          style={{ fontFamily: "Georgia, serif" }}
        >
          Find something
          <span className="text-[#a07431]">
            {" "}made for you.
          </span>
        </h2>

      </div>

      <p
        className="
          max-w-[330px]
          text-[9px]
          leading-5
          text-[#806d56]
          sm:text-right
        "
      >
        From everyday elegance to timeless bridal pieces,
        explore jewellery created to become part of your story.
      </p>

    </div>


    {/* =====================================================
        COLLECTION GRID
       ===================================================== */}

    <div
      className="
        grid
        grid-cols-2
        gap-2
        sm:gap-3
        lg:grid-cols-4
        lg:grid-rows-[210px_210px]
      "
    >

      {/* ===================================================
          01. NECKLACES — FEATURE CARD
         =================================================== */}

      <Link
        to="/collections/necklaces"
        className="
          group
          relative
          col-span-2
          min-h-[300px]
          overflow-hidden
          bg-[#eee7db]
          sm:min-h-[360px]
          lg:row-span-2
          lg:min-h-0
        "
      >

        <img
          src={collections[0].image}
          alt={collections[0].title}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-[1.04]
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#21180f]/80
            via-[#21180f]/10
            to-transparent
          "
        />

        {/* Content */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            p-5
            sm:p-7
          "
        >

          <div className="flex items-center gap-2">

            <span className="text-[7px] tracking-[0.2em] text-white/65">
              01
            </span>

            <span className="h-px w-8 bg-[#d8bd8d]" />

            <span className="text-[7px] tracking-[0.18em] text-white/65">
              SIGNATURE
            </span>

          </div>

          <h3
            className="
              mt-2
              text-[23px]
              text-white
              sm:text-[29px]
            "
            style={{ fontFamily: "Georgia, serif" }}
          >
            Traditional
            <br className="sm:hidden" />
            {" "}Necklaces
          </h3>

          <div
            className="
              mt-3
              inline-flex
              items-center
              gap-2
              text-[7px]
              tracking-[0.16em]
              text-white
              transition
              group-hover:gap-3
            "
          >
            EXPLORE COLLECTION
            <Icon name="arrowRight" size={12} />
          </div>

        </div>

      </Link>


      {/* ===================================================
          02. MANGALSUTRA
         =================================================== */}

      <Link
        to="/collections/mangalsutra"
        className="
          group
          relative
          min-h-[180px]
          overflow-hidden
          bg-[#eee7db]
          sm:min-h-[210px]
          lg:min-h-0
        "
      >

        <img
          src={collections[1].image}
          alt={collections[1].title}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-[1.05]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#21180f]/75
            via-transparent
            to-transparent
          "
        />

        <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">

          <span className="text-[7px] tracking-[0.18em] text-white/60">
            02
          </span>

          <h3
            className="
              mt-1
              text-[17px]
              text-white
              sm:text-[20px]
            "
            style={{ fontFamily: "Georgia, serif" }}
          >
            Mangalsutra
          </h3>

          <div
            className="
              mt-2
              flex
              items-center
              gap-1.5
              text-[7px]
              tracking-[0.12em]
              text-white/80
            "
          >
            SHOP NOW
            <Icon name="arrowRight" size={10} />
          </div>

        </div>

      </Link>


      {/* ===================================================
          03. EARRINGS
         =================================================== */}

      <Link
        to="/collections/earrings"
        className="
          group
          relative
          min-h-[180px]
          overflow-hidden
          bg-[#eee7db]
          sm:min-h-[210px]
          lg:min-h-0
        "
      >

        <img
          src={collections[2].image}
          alt={collections[2].title}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-[1.05]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#21180f]/75
            via-transparent
            to-transparent
          "
        />

        <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">

          <span className="text-[7px] tracking-[0.18em] text-white/60">
            03
          </span>

          <h3
            className="
              mt-1
              text-[17px]
              text-white
              sm:text-[20px]
            "
            style={{ fontFamily: "Georgia, serif" }}
          >
            Earrings
          </h3>

          <div
            className="
              mt-2
              flex
              items-center
              gap-1.5
              text-[7px]
              tracking-[0.12em]
              text-white/80
            "
          >
            SHOP NOW
            <Icon name="arrowRight" size={10} />
          </div>

        </div>

      </Link>


      {/* ===================================================
          04. BRIDAL
         =================================================== */}

      <Link
        to="/collections/bridal"
        className="
          group
          relative
          min-h-[180px]
          overflow-hidden
          bg-[#eee7db]
          sm:min-h-[210px]
          lg:min-h-0
        "
      >

        <img
          src={collections[3].image}
          alt={collections[3].title}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-[1.05]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#21180f]/75
            via-transparent
            to-transparent
          "
        />

        <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">

          <span className="text-[7px] tracking-[0.18em] text-white/60">
            04
          </span>

          <h3
            className="
              mt-1
              text-[17px]
              text-white
              sm:text-[20px]
            "
            style={{ fontFamily: "Georgia, serif" }}
          >
            Bridal Jewellery
          </h3>

          <div
            className="
              mt-2
              flex
              items-center
              gap-1.5
              text-[7px]
              tracking-[0.12em]
              text-white/80
            "
          >
            DISCOVER
            <Icon name="arrowRight" size={10} />
          </div>

        </div>

      </Link>


      {/* ===================================================
          05. BRAND MESSAGE
         =================================================== */}

      <div
        className="
          flex
          min-h-[180px]
          flex-col
          justify-between
          border
          border-[#dfccb0]
          bg-[#faf5ed]
          p-4
          sm:min-h-[210px]
          sm:p-5
          lg:min-h-0
        "
      >

        <div className="flex items-start justify-between">

          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              border
              border-[#d8bd8d]
              bg-[#fffdf9]
              text-[#a07431]
            "
          >
            <Icon name="sparkles" size={15} />
          </div>

          <span className="text-[7px] tracking-[0.15em] text-[#a0835d]">
            PJ JEWELS
          </span>

        </div>


        <div>

          <h3
            className="
              text-[18px]
              leading-6
              text-[#5b4630]
              sm:text-[20px]
            "
            style={{ fontFamily: "Georgia, serif" }}
          >
            Jewellery
            <br />
            <span className="text-[#a07431]">
              with meaning.
            </span>
          </h3>

          <p className="mt-2 text-[8px] leading-4 text-[#806d56]">
            Pieces made to be worn,
            cherished and remembered.
          </p>

        </div>

      </div>


      {/* ===================================================
          06. SHOP ALL CTA
         =================================================== */}

      <Link
        to="/new-arrivals"
        className="
          group
          relative
          col-span-2
          flex
          min-h-[150px]
          items-center
          justify-between
          overflow-hidden
          border
          border-[#c9a768]
          bg-[#b18442]
          px-5
          py-5
          text-white
          transition
          duration-300
          hover:bg-[#956d32]
          sm:min-h-[180px]
          sm:px-7
        "
      >

        {/* Decorative background */}

        <div
          className="
            pointer-events-none
            absolute
            -right-10
            -top-16
            h-40
            w-40
            rounded-full
            border
            border-white/15
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-5
            -top-10
            h-28
            w-28
            rounded-full
            border
            border-white/10
          "
        />


        <div className="relative">

          <p className="text-[7px] tracking-[0.22em] text-white/65">
            NEW & TIMELESS
          </p>

          <h3
            className="
              mt-1
              text-[21px]
              sm:text-[25px]
            "
            style={{ fontFamily: "Georgia, serif" }}
          >
            Find your next favourite.
          </h3>

          <p className="mt-2 max-w-[280px] text-[8px] leading-4 text-white/75">
            Explore our latest pieces and discover
            jewellery that feels uniquely yours.
          </p>

        </div>


        <div
          className="
            relative
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            border
            border-white/40
            transition
            duration-300
            group-hover:translate-x-1
            sm:h-12
            sm:w-12
          "
        >
          <Icon name="arrowRight" size={17} />
        </div>

      </Link>

    </div>


    {/* =====================================================
        BOTTOM MICRO CTA
       ===================================================== */}

    <div className="mt-5 flex items-center justify-between">

      <div className="flex items-center gap-2">

        <span className="h-px w-8 bg-[#c9a768]" />

        <p className="text-[7px] tracking-[0.14em] text-[#9a8060]">
          CRAFTED FOR EVERY OCCASION
        </p>

      </div>

      <Link
        to="/new-arrivals"
        className="
          text-[7px]
          tracking-[0.12em]
          text-[#73562f]
          transition
          hover:text-[#a07431]
        "
      >
        VIEW ALL →
      </Link>

    </div>

  </div>
</section>


{/* =========================================================
    03. SIGNATURE PIECES
   ========================================================= */}

<section
  className="
    border-b
    border-[#dfccb0]
    bg-[#fffdf9]
    px-4
    py-10
    sm:px-6
    sm:py-12
    lg:px-10
    lg:py-14
    xl:px-12
  "
>
  <div className="mx-auto max-w-[1350px]">

    {/* =====================================================
        SECTION HEADER
       ===================================================== */}

    <div
      className="
        mb-6
        flex
        flex-col
        gap-4
        sm:mb-7
        sm:flex-row
        sm:items-end
        sm:justify-between
      "
    >

      {/* LEFT TITLE */}

      <div className="max-w-[520px]">

        <div className="flex items-center gap-2">

          <span className="h-px w-7 bg-[#c9a768]" />

          <p
            className="
              text-[7px]
              font-medium
              tracking-[0.25em]
              text-[#9a8060]
              sm:text-[8px]
            "
          >
            SIGNATURE EDIT
          </p>

        </div>

        <h2
          className="
            mt-2
            text-[25px]
            leading-[1.15]
            text-[#5b4630]
            sm:text-[31px]
            lg:text-[36px]
          "
          style={{ fontFamily: "Georgia, serif" }}
        >
          Pieces that{" "}
          <span className="text-[#a07431]">
            steal the moment.
          </span>
        </h2>

      </div>


      {/* RIGHT DESCRIPTION */}

      <div className="flex items-end gap-4 sm:max-w-[330px]">

        <p
          className="
            text-[8px]
            leading-4
            text-[#806d56]
            sm:text-[9px]
            sm:leading-5
          "
        >
          A carefully chosen edit of distinctive pieces
          created for celebrations, traditions and
          everyday elegance.
        </p>

        <Link
          to="/new-arrivals"
          className="
            hidden
            shrink-0
            items-center
            gap-1.5
            border-b
            border-[#b98a47]
            pb-1
            text-[7px]
            tracking-[0.12em]
            text-[#73562f]
            transition
            hover:text-[#9b702d]
            sm:inline-flex
          "
        >
          VIEW ALL
          <Icon name="arrowRight" size={11} />
        </Link>

      </div>

    </div>


    {/* =====================================================
        FEATURED PRODUCTS
       ===================================================== */}

    <div
      className="
        grid
        grid-cols-2
        gap-2
        sm:gap-3
        lg:grid-cols-4
      "
    >

      {featuredProducts.slice(0, 4).map((product, index) => (

        <Link
          key={product.name}
          to="/new-arrivals"
          className="
            group
            relative
            overflow-hidden
            border
            border-[#e6d8c4]
            bg-[#f5efe5]
            transition
            duration-300
            hover:-translate-y-1
            hover:border-[#c9a768]
          "
        >

          {/* =================================================
              IMAGE
             ================================================= */}

          <div
            className="
              relative
              aspect-[0.9/1]
              overflow-hidden
              bg-[#eee7db]
              sm:aspect-[1/1.05]
              lg:aspect-[0.9/1]
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
                border
                border-white/50
                bg-[#fffdf9]/80
                text-[6px]
                tracking-[0.1em]
                text-[#73562f]
                backdrop-blur-sm
              "
            >
              0{index + 1}
            </span>


            {/* Hover CTA */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                translate-y-full
                bg-[#382b20]/80
                px-3
                py-2
                text-center
                text-[7px]
                tracking-[0.15em]
                text-white
                backdrop-blur-sm
                transition
                duration-300
                group-hover:translate-y-0
              "
            >
              VIEW PIECE
            </div>

          </div>


          {/* =================================================
              PRODUCT INFO
             ================================================= */}

          <div
            className="
              border-t
              border-[#e6d8c4]
              bg-[#fffdfa]
              px-2.5
              py-2.5
              sm:px-3
              sm:py-3
            "
          >

            <p
              className="
                text-[6px]
                tracking-[0.14em]
                text-[#a0835d]
                sm:text-[7px]
              "
            >
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

              <p
                className="
                  text-[7px]
                  font-medium
                  text-[#73562f]
                  sm:text-[8px]
                "
              >
                {product.price}
              </p>

              <span
                className="
                  text-[9px]
                  text-[#b28a4b]
                  transition
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </div>

          </div>

        </Link>

      ))}

    </div>


    {/* =====================================================
        MOBILE VIEW ALL
       ===================================================== */}

    <div className="mt-5 flex justify-center sm:hidden">

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
          text-[7px]
          tracking-[0.12em]
          text-[#73562f]
          transition
          hover:bg-[#a77b35]
          hover:text-white
        "
      >
        VIEW ALL PIECES
        <Icon name="arrowRight" size={11} />
      </Link>

    </div>

  </div>
</section>


      {/* =========================================================
          04. SHOP BY MOOD
         ========================================================= */}

      <section className="border-b border-[#dfccb0] bg-[#faf5ed] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-[1100px] text-center">

          <p className="text-[8px] tracking-[0.28em] text-[#9a8060]">
            SHOP BY MOOD
          </p>

          <h2
            className="mt-2 text-[29px] text-[#5b4630] sm:text-[35px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            What are you dressing for?
          </h2>

          <p className="mx-auto mt-3 max-w-[450px] text-[9px] leading-5 text-[#806d56]">
            Choose a feeling. We'll take care of the sparkle.
          </p>


          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">

            {/* Everyday */}

            <Link
              to="/collections/necklaces"
              className="
                group
                border
                border-[#dfccb0]
                bg-[#fffdf9]
                px-6
                py-9
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_15px_35px_rgba(100,70,30,0.08)]
              "
            >

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#d8bd8d] bg-[#faf5ed] text-[#a77b35]">

                <Icon name="flower" size={20} />

              </div>

              <h3
                className="mt-5 text-[18px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Everyday Grace
              </h3>

              <p className="mt-2 text-[8px] leading-4 text-[#806d56]">
                Delicate pieces for everyday elegance.
              </p>

              <span className="mt-5 inline-flex text-[7px] tracking-[0.15em] text-[#a07431]">
                SHOP EVERYDAY →
              </span>

            </Link>


            {/* Celebration */}

            <Link
              to="/collections/earrings"
              className="
                group
                border
                border-[#dfccb0]
                bg-[#fffdf9]
                px-6
                py-9
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_15px_35px_rgba(100,70,30,0.08)]
              "
            >

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#d8bd8d] bg-[#faf5ed] text-[#a77b35]">

                <Icon name="sparkles" size={20} />

              </div>

              <h3
                className="mt-5 text-[18px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Celebration
              </h3>

              <p className="mt-2 text-[8px] leading-4 text-[#806d56]">
                Statement pieces for special occasions.
              </p>

              <span className="mt-5 inline-flex text-[7px] tracking-[0.15em] text-[#a07431]">
                SHOP CELEBRATION →
              </span>

            </Link>


            {/* Bridal */}

            <Link
              to="/collections/bridal"
              className="
                group
                border
                border-[#dfccb0]
                bg-[#fffdf9]
                px-6
                py-9
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_15px_35px_rgba(100,70,30,0.08)]
              "
            >

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#d8bd8d] bg-[#faf5ed] text-[#a77b35]">

                <Icon name="diamond" size={20} />

              </div>

              <h3
                className="mt-5 text-[18px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Bridal Moments
              </h3>

              <p className="mt-2 text-[8px] leading-4 text-[#806d56]">
                Traditional jewellery for unforgettable days.
              </p>

              <span className="mt-5 inline-flex text-[7px] tracking-[0.15em] text-[#a07431]">
                SHOP BRIDAL →
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          05. MOST LOVED
         ========================================================= */}

      <section className="border-b border-[#dfccb0] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-[1250px]">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>

              <p className="text-[8px] tracking-[0.25em] text-[#9a8060]">
                CUSTOMER FAVOURITES
              </p>

              <h2
                className="mt-2 text-[29px] text-[#5b4630] sm:text-[35px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Most Loved
              </h2>

            </div>

            <Link
              to="/new-arrivals"
              className="text-[8px] tracking-[0.12em] text-[#9a8060] transition hover:text-[#9b702d]"
            >
              VIEW ALL →
            </Link>

          </div>


          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {products.slice(0, 8).map((product) => (

              <Link
                key={product.name}
                to="/new-arrivals"
                className="group"
              >

                <div className="relative aspect-[4/5] overflow-hidden border border-[#eadfce] bg-[#f3eee5]">

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

                  {/* Wishlist */}

                  <button
                    type="button"
                    onClick={(e) => e.preventDefault()}
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
                      border-[#d8bd8d]
                      bg-[#fffdf9]/90
                      text-[#8d795e]
                      backdrop-blur-sm
                      transition
                      hover:text-[#a77b35]
                    "
                    aria-label="Add to wishlist"
                  >
                    <Icon name="heart" size={13} />
                  </button>

                </div>

                <div className="pt-3">

                  <p className="text-[6px] tracking-[0.15em] text-[#a0835d]">
                    {product.category}
                  </p>

                  <h3
                    className="mt-1 truncate text-[10px] text-[#55432e] sm:text-[11px]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {product.name}
                  </h3>

                  <p className="mt-1 text-[8px] font-medium text-[#73562f]">
                    {product.price}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          06. WHATSAPP CONCIERGE
         ========================================================= */}

      <section className="relative overflow-hidden bg-[#5b4630] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        {/* Decorative rings */}

        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#d8bd8d]/20" />

        <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-[#d8bd8d]/20" />

        <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full border border-[#d8bd8d]/10" />


        <div className="relative mx-auto max-w-[900px] text-center">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#d8bd8d]/50 bg-[#fffdf9]/10 text-[#d8bd8d]">

            <Icon name="phone" size={19} />

          </div>

          <p className="mt-5 text-[8px] tracking-[0.3em] text-[#d8bd8d]">
            PERSONAL JEWELLERY CONCIERGE
          </p>

          <h2
            className="mt-3 text-[28px] text-[#fffdf9] sm:text-[36px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Found something you love?
          </h2>

          <p className="mx-auto mt-4 max-w-[500px] text-[9px] leading-5 text-[#eadfce] sm:text-[10px]">
            Send us a screenshot or image of the jewellery you like.
            Our team will personally share its price, availability
            and details with you on WhatsApp.
          </p>

          <a
            href="https://wa.me/919005313005"
            target="_blank"
            rel="noreferrer"
            className="
              mt-7
              inline-flex
              items-center
              gap-3
              border
              border-[#d8bd8d]
              bg-[#b18442]
              px-7
              py-3
              text-[8px]
              tracking-[0.14em]
              text-white
              transition
              duration-300
              hover:bg-[#8e682f]
            "
          >
            CHAT WITH US ON WHATSAPP
            <Icon name="arrowRight" size={13} />
          </a>

          <p className="mt-5 text-[7px] text-[#cbb99c]">
            Personal assistance • Product details • Order support
          </p>

        </div>

      </section>

    </main>
  );
}