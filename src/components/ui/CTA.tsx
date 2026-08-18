
/* =========================================================
   CTA
   ========================================================= */

import { IMAGES } from "../../data/Collections";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="px-4 pb-5 sm:px-8">

      <div className="relative mx-auto max-w-[1250px] overflow-hidden rounded-[14px] border border-[#c79b58] bg-[#eee1ca]">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url(${IMAGES.hero})`,
          }}
        />

        <div className="relative z-10 px-5 py-8 text-center sm:px-6 sm:py-10">

          <h2
            className="text-[24px] leading-tight text-[#4f3e2b] sm:text-[32px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Find Something Beautiful
          </h2>

          <p className="mt-1 text-[10px] text-[#665744]">
            Discover jewellery that becomes part of your story.
          </p>

          <Link
            to="/collections"
            className="mt-4 inline-block bg-[#b18442] px-6 py-2 text-[9px] tracking-wide text-white transition hover:bg-[#8e682f]"
          >
            EXPLORE COLLECTION
          </Link>

        </div>
      </div>
    </section>
  );
}