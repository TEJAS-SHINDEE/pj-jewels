import { DecorativeArt } from "./DecorativeArt";


export function DecorativeCurve() {

    return (
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
    )

}