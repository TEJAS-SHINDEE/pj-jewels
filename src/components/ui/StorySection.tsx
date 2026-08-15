
/* =========================================================
   STORY SECTION
   ========================================================= */

import { DecorativeArt } from "./DecorativeArt";

export function StorySection() {
  return (
    <section
      id="about-us"
      className="relative overflow-hidden border-b border-[#eadbc0] bg-[#fffdf8] px-6 py-8 sm:py-10"
    >
      <DecorativeArt />
      <div className="mx-auto w-full max-w-[650px] text-center">

        <p className="text-[9px] tracking-[0.28em] text-[#8b714d]">
          OUR STORY
        </p>

        <h2
          className="mt-2 text-[22px] leading-tight text-[#73542b] sm:text-[28px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Tradition, Crafted With Grace
        </h2>

        <div className="my-3 flex items-center justify-center gap-2 text-[#bd8b3d]">
          <span className="h-px w-7 bg-[#c8a366]" />
          <span>✦</span>
          <span className="h-px w-7 bg-[#c8a366]" />
        </div>

        <p
          className="mx-auto max-w-[540px] text-[12px] leading-5 text-[#716457] sm:text-[12px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          PJ Jewels celebrates the timeless beauty of Indian jewellery
          <br className="hidden sm:block" />
          through elegant designs inspired by tradition,
          <br className="hidden sm:block" />
          culture and contemporary women.
        </p>
      </div>
    </section>
  );
}
