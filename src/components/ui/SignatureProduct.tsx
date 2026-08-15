/* =========================================================
   SIGNATURE PRODUCT
   ========================================================= */

import { IMAGES } from "../../data/Collections";

export function SignatureProduct() {
  return (
    <section className="border-b border-[#dfc99f] bg-[#fffdf9]">
      <div className="grid grid-cols-1 lg:grid-cols-[57%_43%]">

        <div className="aspect-[4/3] overflow-hidden bg-[#eee7db] sm:aspect-[3/2] lg:aspect-auto lg:min-h-[320px]">
          <img
            src={IMAGES.signature}
            alt="Antique Lakshmi Necklace"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center px-5 py-9 sm:px-10 sm:py-10 lg:px-10 xl:px-14">
          <div className="max-w-[420px]">

            <p className="text-[10px] tracking-[0.18em] text-[#987a52]">
              Signature Collection
            </p>

            <h2
              className="mt-2 text-[24px] leading-tight text-[#4d3d2b] sm:text-[31px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Antique Lakshmi Necklace
            </h2>

            <p
              className="mt-3 max-w-[300px] text-[12px] leading-5 text-[#756658]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              An elegant expression of traditional
              <br />
              Indian craftsmanship.
            </p>

            <p
              className="mt-2 text-[14px] text-[#54432d]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              ₹ 2,499
            </p>

            <div className="mt-4 flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <button className="w-full border border-[#c9a365] px-5 py-2.5 text-[9px] tracking-wide text-[#6e5432] transition hover:bg-[#a97b36] hover:text-white sm:w-auto">
                VIEW DETAILS
              </button>

              <button className="w-full bg-[#b4853e] px-5 py-2.5 text-[9px] tracking-wide text-white transition hover:bg-[#8e672f] sm:w-auto">
                ADD TO BAG
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[9px] text-[#75644f] sm:gap-5">
              <span>◇ Premium Finish</span>
              <span>♢ Carefully Crafted</span>
              <span>♧ Elegant Gift Packaging</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}