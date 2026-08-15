/* =========================================================
   TESTIMONIALS
   ========================================================= */

import { Icon } from "../../data/Icon";
import { SectionTitle } from "../ui/SectionTitle";

export function Testimonials() {
  const testimonials = [
    {
      text: "Beautiful finishing and exactly as shown. Absolutely loved the necklace.",
      author: "Happy Customer",
    },
    {
      text: "Very elegant jewellery with premium quality. Packaging was excellent too!",
      author: "Priya S.",
    },
    {
      text: "PJ Jewels never disappoints. Truly timeless designs.",
      author: "Sneha R.",
    },
  ];

  return (
    <section className="bg-[#fffdf9] px-4 py-6 sm:px-8">

      <SectionTitle title="Loved By You" />

      <div className="mx-auto grid max-w-[1050px] grid-cols-1 md:grid-cols-3">

        {testimonials.map((item, index) => (
          <div
            key={item.author}
            className={`relative px-6 py-3 text-center ${index !== 0
                ? "border-t border-[#e2ceb0] md:border-l md:border-t-0"
                : ""
              }`}
          >
            <div className="absolute left-4 top-0 text-[24px] text-[#bd8d43]">
              “
            </div>

            <p
              className="mx-auto max-w-[260px] text-[10px] leading-5 text-[#66594b]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {item.text}
            </p>

            <p className="mt-2 text-[9px] text-[#806b4d]">
              — {item.author}
            </p>

            <div className="mt-1 flex justify-center gap-0.5 text-[#b27e32]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon
                  key={star}
                  name="star"
                  size={8}
                  strokeWidth={1}
                />
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}