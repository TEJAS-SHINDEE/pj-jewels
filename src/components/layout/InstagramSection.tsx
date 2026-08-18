/* =========================================================
   INSTAGRAM
   ========================================================= */

import { IMAGES } from "../../data/Collections";

export function InstagramSection() {
  return (
    <section className="border-b border-[#e2ceb0] bg-[#fffdf9] px-4 py-6 sm:px-8">

      <div className="mx-auto flex max-w-[1180px] flex-col gap-5 md:flex-row md:items-center">

        <div className="w-full shrink-0 text-center md:w-[180px] md:text-left lg:w-[220px]">
          <h2
            className="text-[22px] text-[#5b4630]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Follow Our Journey
          </h2>

          <p className="mt-1 text-[9px] text-[#967a57]">
            @pj_jewels_by_meghana
          </p>

          <a
            href="https://www.instagram.com/pj_jewels_by_meghana/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-[9px] text-[#9d7337] transition hover:text-[#7f5a2b]"
          >
            FOLLOW US ON INSTAGRAM
            <span>→</span>
          </a>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
          {IMAGES.instagram.map((image, index) => (
            <a
              href="https://www.instagram.com/pj_jewels_by_meghana/"
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group aspect-square overflow-hidden bg-[#eee7db]"
            >
              <img
                src={image}
                alt={`Instagram ${index + 1}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}