// src/pages/shop/Returns.tsx

import { Icon, type IconName } from "../../data/Icon";
import { Link } from "react-router-dom";

export function Returns() {
  const returnSteps: { number: string, title: string, description: string, icon:IconName}[] = [
    {
      number: "01",
      title: "Contact Us",
      description:
        "Message us on WhatsApp with your order reference and explain the reason for your return request.",
      icon: "phone",
    },
    {
      number: "02",
      title: "Share Order Details",
      description:
        "Our team will review your order details and guide you through the return process.",
      icon: "search",
    },
    {
      number: "03",
      title: "Return Approval",
      description:
        "Once your request is reviewed and approved, we will share the return instructions with you.",
      icon: "check",
    },
    {
      number: "04",
      title: "Send the Item",
      description:
        "Pack the jewellery securely and send it using the courier instructions provided by our team.",
      icon: "bag",
    },
    {
      number: "05",
      title: "Return Verification",
      description:
        "After receiving the item, our team will inspect it and confirm the return status.",
      icon: "sparkles",
    },
  ];

  const conditions = [
    "The jewellery should be unused and in its original condition.",
    "Original packaging, tags and accompanying items should be retained.",
    "The item should not show signs of damage, alteration or wear.",
    "Return requests must be communicated to us through WhatsApp.",
    "Return approval is subject to verification by our team.",
    "Customised or specially prepared jewellery may not be eligible for return.",
  ];

  return (
    <section className="min-h-screen border-b border-[#dfccb0] bg-[#fffdf9] text-[#514435]">

      {/* =====================================================
          HERO / PAGE HEADER
         ===================================================== */}

      <div className="relative overflow-hidden border-b border-[#dfccb0] bg-[#faf5ed]">

        {/* Decorative side elements */}

        <div className="pointer-events-none absolute -left-20 top-10 h-40 w-40 rounded-full border border-[#d8bd8d]/30" />

        <div className="pointer-events-none absolute -right-20 bottom-0 h-48 w-48 rounded-full border border-[#d8bd8d]/30" />

        <div className="relative mx-auto max-w-[1100px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.7fr]">

            {/* LEFT */}

            <div>

              <p className="text-[8px] font-medium tracking-[0.3em] text-[#9a8060] sm:text-[9px]">
                PJ JEWELS · CUSTOMER CARE
              </p>

              <h1
                className="mt-3 max-w-[650px] text-[34px] leading-[1.15] text-[#5b4630] sm:text-[42px] lg:text-[50px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Returns &amp;
                <br />
                <span className="text-[#a07431]">
                  Exchange
                </span>
              </h1>

              <div className="mt-5 flex max-w-[210px] items-center gap-2">
                <span className="h-px flex-1 bg-[#c9a768]" />
                <span className="h-1 w-1 shrink-0 rounded-full bg-[#c9a768]" />
                <span className="h-px flex-1 bg-[#c9a768]" />
              </div>

              <p className="mt-5 max-w-[560px] text-[10px] leading-5 text-[#806d56] sm:text-[11px] sm:leading-6">
                We want you to feel confident with every PJ Jewels purchase.
                Since our orders are currently handled personally through
                WhatsApp, our return process is also managed directly by our
                team.
              </p>

            </div>


            {/* RIGHT - DECORATIVE CARD */}

            <div className="relative mx-auto w-full max-w-[330px]">

              <div className="border border-[#d8bd8d] bg-[#fffdf9] p-2">

                <div className="border border-[#eadcc7] px-6 py-8 text-center">

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a768] bg-[#faf3e8] text-[#9b702d]">
                    <Icon name="refresh" size={20} />
                  </div>

                  <p
                    className="mt-5 text-[20px] text-[#5b4630]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Simple &amp; Personal
                  </p>

                  <p className="mx-auto mt-2 max-w-[220px] text-[9px] leading-5 text-[#806d56]">
                    Every return request is personally reviewed by our team.
                  </p>

                  <div className="mx-auto mt-5 h-px w-16 bg-[#c9a768]" />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          IMPORTANT NOTE
         ===================================================== */}

      <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12">

        <div className="mx-auto max-w-[1000px]">

          <div className="border border-[#d8bd8d] bg-[#faf3e8] px-5 py-5 sm:px-7">

            <div className="flex items-start gap-4">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#c9a768] bg-[#fffdf9] text-[#9b702d]">
                <Icon name="info" size={16} />
              </div>

              <div>

                <p
                  className="text-[14px] text-[#5b4630]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Returns are handled personally through WhatsApp.
                </p>

                <p className="mt-2 text-[9px] leading-5 text-[#806d56] sm:text-[10px]">
                  Please do not send an item back before receiving confirmation
                  from our team. Contact us first so that we can review your
                  request and provide the correct return instructions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          RETURN ELIGIBILITY
         ===================================================== */}

      <div className="px-5 pb-10 sm:px-8 sm:pb-14 lg:px-12">

        <div className="mx-auto max-w-[1000px]">

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT */}

            <div>

              <p className="text-[8px] font-medium tracking-[0.25em] text-[#a0835d]">
                BEFORE YOU RETURN
              </p>

              <h2
                className="mt-2 text-[25px] text-[#5b4630] sm:text-[29px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Return Conditions
              </h2>

              <div className="mt-4 h-px w-20 bg-[#c9a768]" />

              <p className="mt-5 max-w-[350px] text-[10px] leading-6 text-[#806d56]">
                To keep the return process smooth, please make sure your
                jewellery meets the following conditions before contacting us.
              </p>

            </div>


            {/* RIGHT */}

            <div className="border border-[#e3cfad] bg-[#fffdfa]">

              {conditions.map((condition, index) => (
                <div
                  key={condition}
                  className="flex gap-4 border-b border-[#eadfce] px-5 py-4 last:border-b-0 sm:px-6"
                >

                  <span className="shrink-0 text-[8px] tracking-[0.1em] text-[#b28a4b]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-[9px] leading-5 text-[#66594b] sm:text-[10px]">
                    {condition}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          HOW RETURNS WORK
         ===================================================== */}

      <div className="border-y border-[#dfccb0] bg-[#faf5ed] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">

        <div className="mx-auto max-w-[1050px]">

          {/* HEADER */}

          <div className="text-center">

            <p className="text-[8px] font-medium tracking-[0.25em] text-[#a0835d]">
              THE PROCESS
            </p>

            <h2
              className="mt-2 text-[27px] text-[#5b4630] sm:text-[32px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              How Returns Work
            </h2>

            <div className="mx-auto mt-4 flex max-w-[170px] items-center gap-2">
              <span className="h-px flex-1 bg-[#c9a768]" />
              <span className="h-1 w-1 shrink-0 rounded-full bg-[#c9a768]" />
              <span className="h-px flex-1 bg-[#c9a768]" />
            </div>

            <p className="mx-auto mt-4 max-w-[500px] text-[9px] leading-5 text-[#806d56] sm:text-[10px]">
              Our team will guide you through every step once you contact us
              on WhatsApp.
            </p>

          </div>


          {/* STEPS */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {returnSteps.map((step) => (

              <div
                key={step.number}
                className="
                  group
                  relative
                  border
                  border-[#e3cfad]
                  bg-[#fffdf9]
                  p-5
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#c9a768]
                "
              >

                <div className="flex items-center justify-between">

                  <span className="text-[8px] tracking-[0.15em] text-[#b28a4b]">
                    {step.number}
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center border border-[#d8bd8d] bg-[#faf3e8] text-[#9b702d]">
                    <Icon name={step.icon} size={14} />
                  </div>

                </div>

                <h3
                  className="mt-5 text-[14px] text-[#5b4630]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {step.title}
                </h3>

                <p className="mt-2 text-[8px] leading-5 text-[#806d56]">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* =====================================================
          NON-RETURNABLE / SPECIAL ITEMS
         ===================================================== */}

      <div className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">

        <div className="mx-auto max-w-[1000px]">

          <div className="grid gap-8 md:grid-cols-2">

            {/* LEFT */}

            <div className="border border-[#e3cfad] bg-[#fffdfa] p-6 sm:p-8">

              <div className="flex h-9 w-9 items-center justify-center border border-[#d8bd8d] bg-[#faf3e8] text-[#9b702d]">
                <Icon name="sparkles" size={16} />
              </div>

              <h2
                className="mt-5 text-[20px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Special Orders
              </h2>

              <p className="mt-3 text-[9px] leading-5 text-[#806d56]">
                Jewellery that has been specially customised, modified or
                prepared specifically for a customer may have different return
                conditions. Please confirm the return eligibility with our
                team before placing such an order.
              </p>

            </div>


            {/* RIGHT */}

            <div className="border border-[#e3cfad] bg-[#faf5ed] p-6 sm:p-8">

              <div className="flex h-9 w-9 items-center justify-center border border-[#d8bd8d] bg-[#fffdf9] text-[#9b702d]">
                <Icon name="package" size={16} />
              </div>

              <h2
                className="mt-5 text-[20px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Packaging Matters
              </h2>

              <p className="mt-3 text-[9px] leading-5 text-[#806d56]">
                Please keep the jewellery safely packed in its original
                packaging. Proper packaging helps protect the item while it
                is being returned to us.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          WHATSAPP CTA
         ===================================================== */}

      <div className="border-t border-[#dfccb0] bg-[#fffdf9] px-5 py-12 sm:px-8 sm:py-14 lg:px-12">

        <div className="mx-auto max-w-[700px] text-center">

          <p className="text-[8px] font-medium tracking-[0.25em] text-[#9a8060]">
            NEED HELP?
          </p>

          <h2
            className="mt-3 text-[24px] text-[#5b4630] sm:text-[29px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Let us help you personally.
          </h2>

          <p className="mx-auto mt-3 max-w-[500px] text-[9px] leading-5 text-[#806d56] sm:text-[10px]">
            If you have questions about a return or exchange, simply message
            our team on WhatsApp. We will review your order and guide you
            through the next steps.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row">

            <a
              href="https://wa.me/+919005313005"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                bg-[#b18442]
                px-7
                py-3
                text-[8px]
                tracking-[0.12em]
                text-white
                transition
                duration-300
                hover:bg-[#8e682f]
              "
            >
              MESSAGE US ON WHATSAPP
              <span>→</span>
            </a>

            <Link
              to="/faq"
              className="
                inline-flex
                items-center
                justify-center
                border
                border-[#b98a47]
                px-7
                py-3
                text-[8px]
                tracking-[0.12em]
                text-[#73562f]
                transition
                duration-300
                hover:bg-[#faf3e8]
              "
            >
              VIEW FAQ
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}   