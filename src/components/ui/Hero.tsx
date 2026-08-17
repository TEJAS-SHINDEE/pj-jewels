/* =========================================================
   HERO
   ========================================================= */

import { IMAGES } from "../../data/Collections";
import { DecorativeArt } from "./DecorativeArt";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#d5b87c] pt-[64px] lg:pt-[90px]"
    >
      <div className="relative grid grid-cols-1 lg:min-h-[500px] lg:grid-cols-[42%_58%]">

        {/* =====================================================
            LEFT / TEXT CONTENT
           ===================================================== */}
        <div
          className="
            relative
            flex
            items-center
            bg-[#fffdf8]
            px-5
            py-10
            sm:px-8
            sm:py-12
            md:px-12
            md:py-14
            lg:px-16
            lg:py-16
            xl:px-20
          "
        >

          {/* Decorative Art - Desktop Only */}
          <div className="hidden lg:block">
            <DecorativeArt />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[500px]">

            {/* Small Label */}
            <p
              className="
                mb-3
                text-[8px]
                font-medium
                tracking-[0.22em]
                text-[#76634a]
                sm:mb-4
                sm:text-[9px]
                sm:tracking-[0.28em]
                lg:text-[10px]
                lg:tracking-[0.32em]
              "
            >
              TIMELESS INDIAN ELEGANCE
            </p>

            {/* Main Heading */}
            <h1
              className="
                max-w-[520px]
                font-bold
                text-[30px]
                leading-[1.2]
                text-[#a07431]
                sm:text-[38px]
                md:text-[46px]
                lg:text-[48px]
                xl:text-[54px]
              "
              style={{ fontFamily: "Georgia, serif" }}
            >
              परंपरा आमची,
              <br />
              विश्वास तुमचा
            </h1>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-[300px]
                text-[11px]
                leading-5
                text-[#66594b]
                sm:mt-5
                sm:text-[12px]
                sm:leading-6
                lg:text-[13px]
              "
              style={{ fontFamily: "Georgia, serif" }}
            >
              Jewellery that carries tradition,
              <br />
              crafted for the woman of today.
            </p>

            {/* Divider */}
            <div className="mt-5 flex max-w-[300px] items-center gap-2 sm:mt-6">
              <span className="h-px flex-1 bg-[#c9a768]" />

              <span className="h-1 w-1 shrink-0 rounded-full bg-[#c9a768]" />

              <span className="h-px flex-1 bg-[#c9a768]" />
            </div>

            {/* =================================================
                BUTTONS
               ================================================= */}
            <div
              className="
                mt-6
                flex
                w-full
                flex-col
                gap-2.5
                sm:mt-7
                sm:flex-row
                sm:flex-wrap
                sm:gap-3
              "
            >

              <a
                href="#collections"
                className="
                  w-full
                  border
                  border-[#bd9556]
                  px-5
                  py-3
                  text-center
                  text-[9px]
                  tracking-wide
                  text-[#73572f]
                  transition
                  hover:bg-[#a77b35]
                  hover:text-white
                  sm:w-auto
                  sm:px-6
                  sm:text-[10px]
                "
              >
                EXPLORE COLLECTION
              </a>

              <a
                href="#most-loved"
                className="
                  w-full
                  border
                  border-[#bd9556]
                  px-5
                  py-3
                  text-center
                  text-[9px]
                  tracking-wide
                  text-[#73572f]
                  transition
                  hover:bg-[#a77b35]
                  hover:text-white
                  sm:w-auto
                  sm:px-6
                  sm:text-[10px]
                "
              >
                VIEW NEW ARRIVALS
              </a>

            </div>
          </div>
        </div>


        {/* =====================================================
            HERO IMAGE
           ===================================================== */}
        <div
          className="
            relative
            flex
            min-h-[320px]
            items-center
            justify-center
            overflow-hidden
            bg-[#fffdf8]
            px-4
            py-6
            sm:min-h-[400px]
            sm:px-6
            sm:py-8
            md:min-h-[450px]
            lg:min-h-[500px]
            lg:px-0
            lg:py-0
          "
        >

          <img
            src={IMAGES.hero}
            alt="PJ Jewels traditional necklace"
            className="
              h-full
              max-h-[420px]
              w-full
              object-contain
              object-center
              sm:max-h-[500px]
              lg:absolute
              lg:right-0
              lg:top-0
              lg:max-h-none
              lg:object-right
            "
          />

        </div>


        {/* =====================================================
            DECORATIVE CURVE
            Desktop ONLY
           ===================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            left-[42%]
            top-0
            z-30
            hidden
            h-full
            w-[180px]
            -translate-x-[35%]
            lg:block
          "
        >

          {/* Soft blurred cream transition */}
          <div
            className="
              absolute
              inset-y-0
              left-0
              w-[150px]
              bg-gradient-to-r
              from-[#fffdf8]
              via-[#fffdf8]/95
              to-[#fffdf8]/0
              blur-[10px]
            "
          />

          {/* Curve */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 180 600"
            fill="none"
            preserveAspectRatio="none"
          >

            {/* Outer curve */}
            <path
              d="
                M165 0

                C145 10 138 25 136 45
                C134 65 130 78 117 91
                C104 104 99 119 101 138

                L101 238

                C101 252 97 263 87 271
                L78 279
                L87 287

                C97 295 101 306 101 320

                L101 454

                C101 475 108 489 122 498
                C135 507 140 521 142 540
                C144 558 152 577 169 590

                C173 593 176 597 176 600
              "
              stroke="#c9a768"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Inner curve */}
            <path
              d="
                M157 0

                C138 11 132 26 130 46
                C128 66 124 80 111 94
                C98 108 94 122 95 140

                L95 237

                C95 253 91 265 81 274
                L73 281
                L81 288

                C91 297 95 308 95 322

                L95 453

                C95 476 102 492 116 502
                C129 511 134 525 136 543
                C138 562 146 581 161 594
              "
              stroke="#e2c993"
              strokeWidth="0.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

          </svg>
        </div>

      </div>
    </section>
  );
}