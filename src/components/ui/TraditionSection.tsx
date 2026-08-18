
/* =========================================================
   TRADITION SECTION
   ========================================================= */

import { IMAGES } from "../../data/Collections";
import { Link } from "react-router-dom";
export function TraditionSection() {
  return (
    <section className="border-b border-[#d9c39c] bg-[#fffdf8]">
      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="aspect-[4/3] min-h-[240px] overflow-hidden sm:aspect-[16/9] md:aspect-auto md:min-h-[300px]">
          <img
            src={IMAGES.tradition}
            alt="Rooted in tradition"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative flex items-center overflow-hidden px-5 py-10 sm:px-10 sm:py-12 lg:px-16">

          <div className="absolute right-0 top-0 opacity-40">
            <svg width="130" height="180" viewBox="0 0 130 180">
              <path
                d="M20 180C50 130 65 85 126 10"
                stroke="#d7bd91"
                fill="none"
              />
              <path
                d="M42 139C25 133 16 120 14 106"
                stroke="#d7bd91"
                fill="none"
              />
              <path
                d="M61 106C45 100 40 89 42 76"
                stroke="#d7bd91"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative z-10 w-full max-w-[470px]">

            <div className="mb-4 text-[#b7863d]">✦</div>

            <p className="text-[9px] tracking-[0.18em] text-[#756148]">
              ROOTED IN TRADITION
            </p>

            <p
              className="mt-2 text-[13px] leading-5 text-[#685949]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Every piece reflects the beauty of Indian craftsmanship,
              designed to preserve tradition while complementing modern
              elegance.
            </p>

            <Link
              to="/about-us"
              className="mt-4 inline-block text-[10px] text-[#9c712f]"
            >
              Discover Our Story
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
