
/* =========================================================
   FEATURES
   ========================================================= */

import { Icon, type IconName } from "./../../data/Icon";

export function Features() {
  const features: Array<{
    icon: IconName;
    title: string;
    text: string;
  }> = [
      {
        icon: "flower",
        title: "Timeless Designs",
        text: "Elegant jewellery inspired by Indian tradition.",
      },
      {
        icon: "diamond",
        title: "Premium Finish",
        text: "Crafted with attention to every detail.",
      },
      {
        icon: "shield",
        title: "Trusted Quality",
        text: "Designed with care and confidence.",
      },
      {
        icon: "heart",
        title: "Made For You",
        text: "Jewellery for celebrations, moments and memories.",
      },
    ];

  return (
    <section className="border-b border-[#e3ceb0] bg-[#fffdf9]">
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex items-center gap-3 px-5 py-5 sm:gap-4 sm:px-8 sm:py-6 ${index !== 0 ? "border-l border-[#e2cfb0]" : ""
              }`}
          >
            <div className="shrink-0 text-[#b78338]">
              <Icon name={feature.icon} size={30} strokeWidth={1.1} />
            </div>

            <div>
              <h3
                className="text-[11px] text-[#5d4931]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {feature.title}
              </h3>

              <p className="mt-1 text-[8px] leading-4 text-[#80705e]">
                {feature.text}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

