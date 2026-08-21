/* =========================================================
   FAQ
   ========================================================= */

import { useState } from "react";
import { Icon } from "../../data/Icon";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What types of jewellery do you offer?",
    answer:
      "We offer a curated range of traditional and contemporary jewellery including necklaces, mangalsutras, earrings, bridal jewellery and heritage-inspired designs.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can browse our collections, select your favourite piece and follow the ordering process provided on the product page.",
  },
  {
    question: "Are the jewellery pieces suitable for everyday wear?",
    answer:
      "Yes. We have a selection of designs suitable for everyday occasions as well as special celebrations. Product details can help you choose the right piece for your needs.",
  },
  {
    question: "Do you offer bridal jewellery?",
    answer:
      "Yes. Our bridal collection features traditional designs created for weddings, ceremonies and other important celebrations.",
  },
  {
    question: "How should I take care of my jewellery?",
    answer:
      "Keep your jewellery away from perfumes, cosmetics, water and harsh chemicals. Store each piece separately in a dry, soft-lined box or pouch when not in use.",
  },
  {
    question: "Do you offer jewellery gift packaging?",
    answer:
      "Yes. Our jewellery is carefully prepared and packaged to make it suitable for gifting and special occasions.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery times may vary depending on your location and the availability of the selected product. You will receive the relevant delivery information during the ordering process.",
  },
  {
    question: "Can I return or exchange my jewellery?",
    answer:
      "Returns and exchanges are subject to our applicable return policy. Please check the product and order information for the conditions that apply to your purchase.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has been dispatched, the available tracking information will be shared with you so that you can follow your shipment.",
  },
  {
    question: "Are the product images accurate?",
    answer:
      "We make every effort to display our jewellery as accurately as possible. However, slight differences in colour or appearance may occur depending on lighting and screen settings.",
  },
  {
    question: "How can I contact PJ Jewels?",
    answer:
      "You can reach us through our contact page, WhatsApp or the contact details provided on our website. Our team will be happy to assist you.",
  },
  {
    question: "Can I get help choosing a jewellery piece?",
    answer:
      "Absolutely. If you are unsure which design to choose, you can contact us and our team can help you select a piece based on the occasion, style and collection you prefer.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="border-b border-[#dfccb0] bg-[#fffdf9] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14"
    >
      <div className="mx-auto max-w-[900px]">

        {/* =================================================
            SECTION HEADER
           ================================================= */}

        <div className="mb-8 text-center">
          <h2
            className="text-[27px] text-[#5b4630] sm:text-[32px] lg:text-[36px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Frequently Asked Questions
          </h2>

          <div className="mx-auto mt-3 flex max-w-[180px] items-center gap-2">
            <span className="h-px flex-1 bg-[#c9a768]" />

            <span className="h-1 w-1 shrink-0 rounded-full bg-[#c9a768]" />

            <span className="h-px flex-1 bg-[#c9a768]" />
          </div>

          <p className="mx-auto mt-4 max-w-[520px] text-[10px] leading-5 text-[#806d56] sm:text-[11px]">
            Find answers to some of the most common questions about our
            jewellery, orders, care and services.
          </p>

        </div>


        {/* =================================================
            FAQ LIST
           ================================================= */}

        <div className="border-t border-[#dfccb0]">

          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="border-b border-[#dfccb0]"
              >

                {/* Question */}

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    py-4
                    text-left
                    transition
                    duration-300
                    hover:text-[#9b702d]
                    sm:py-5
                  "
                  aria-expanded={isOpen}
                >

                  <div className="flex items-start gap-3">

                    {/* Number */}

                    <span
                      className="
                        mt-[2px]
                        shrink-0
                        text-[8px]
                        tracking-[0.1em]
                        text-[#b28a4b]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}

                    <span
                      className={`
                        text-[11px]
                        transition-colors
                        duration-300
                        sm:text-[12px]
                        ${
                          isOpen
                            ? "text-[#9b702d]"
                            : "text-[#55432e]"
                        }
                      `}
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {item.question}
                    </span>

                  </div>


                  {/* Plus / Minus */}

                  <span
                    className={`
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-[#d8bd8d]
                      text-[#9b702d]
                      transition
                      duration-300
                      ${
                        isOpen
                          ? "rotate-180 bg-[#faf3e8]"
                          : ""
                      }
                    `}
                  >
                    <Icon
                      name={isOpen ? "minus" : "plus"}
                      size={13}
                    />
                  </span>

                </button>


                {/* Answer */}

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >

                  <div className="overflow-hidden">

                    <div className="pb-5 pl-[35px] pr-8 sm:pl-[38px]">

                      <p className="max-w-[720px] text-[9px] leading-5 text-[#766451] sm:text-[10px] sm:leading-6">
                        {item.answer}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>


        {/* =================================================
            CONTACT CTA
           ================================================= */}

        <div className="mt-8 text-center">

          <p className="text-[9px] text-[#8d795e]">
            Still have a question?
          </p>

          <a
            href="/contact-us"
            className="
              mt-2
              inline-block
              border
              border-[#b98a47]
              px-6
              py-2.5
              text-[8px]
              tracking-[0.12em]
              text-[#73562f]
              transition
              duration-300
              hover:bg-[#a77a35]
              hover:text-white
            "
          >
            CONTACT US
          </a>

        </div>

      </div>
    </section>
  );
}