// src/pages/shop/Contact.tsx

import { type FormEvent, useState } from "react";
import { Icon } from "../../data/Icon";

export function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("General Enquiry");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /*
      =========================================================
      GOOGLE FORM SUBMISSION
      =========================================================

      Connect your existing Google Form submission logic here.

      For example, if you already have:
      
      const formData = new FormData(e.currentTarget);

      then send it to your Google Form endpoint.

      Do NOT remove the preventDefault() unless you are
      intentionally submitting directly to the Google Form URL.
    */

    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-[#fffdf9] text-[#514435]">

      {/* =====================================================
          HERO
         ===================================================== */}

      <div className="relative overflow-hidden border-b border-[#dfccb0] bg-[#faf5ed]">

        {/* Decorative circles */}

        <div className="pointer-events-none absolute -left-24 top-10 h-48 w-48 rounded-full border border-[#d8bd8d]/30" />

        <div className="pointer-events-none absolute -right-24 bottom-[-80px] h-64 w-64 rounded-full border border-[#d8bd8d]/30" />

        <div className="pointer-events-none absolute left-[42%] top-10 hidden h-2 w-2 rounded-full bg-[#c9a768]/50 lg:block" />

        <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 ">

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

            {/* =================================================
                HERO CONTENT
               ================================================= */}

            <div>

              <p className="text-[8px] font-medium tracking-[0.3em] text-[#9a8060] sm:text-[9px]">
                PJ JEWELS · WE ARE HERE FOR YOU
              </p>

              <h1
                className="
                  mt-3
                  max-w-[650px]
                  text-[35px]
                  leading-[1.12]
                  text-[#5b4630]
                  sm:text-[43px]
                  md:text-[48px]
                  lg:text-[54px]
                "
                style={{ fontFamily: "Georgia, serif" }}
              >
                Let's talk about
                <br />

                <span className="text-[#a07431]">
                  your jewellery.
                </span>
              </h1>

              <div className="mt-5 flex max-w-[210px] items-center gap-2">

                <span className="h-px flex-1 bg-[#c9a768]" />

                <span className="h-1 w-1 shrink-0 rounded-full bg-[#c9a768]" />

                <span className="h-px flex-1 bg-[#c9a768]" />

              </div>

              <p className="mt-5 max-w-[560px] text-[10px] leading-5 text-[#806d56] sm:text-[11px] sm:leading-6">
                Looking for a jewellery piece, checking an order,
                asking about availability or simply need some help?
                Send us a message and our team will personally get back
                to you.
              </p>

              {/* WhatsApp */}

              <a
                href="https://wa.me/+919005313005"
                target="_blank"
                rel="noreferrer"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  border
                  border-[#b98a47]
                  bg-[#b18442]
                  px-6
                  py-3
                  text-[8px]
                  tracking-[0.12em]
                  text-white
                  transition
                  duration-300
                  hover:bg-[#8e682f]
                  sm:px-7
                "
              >
                CHAT WITH US ON WHATSAPP

                <span>→</span>
              </a>

            </div>


            {/* =================================================
                HERO CONTACT CARD
               ================================================= */}

            <div className="mx-auto w-full max-w-[370px]">

              <div className="border border-[#d8bd8d] bg-[#fffdf9] p-2">

                <div className="border border-[#eadcc7] px-6 py-8 sm:px-8 sm:py-10">

                  <div className="flex items-center justify-between">

                    <span className="text-[8px] tracking-[0.2em] text-[#a0835d]">
                      CONTACT PJ
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d8bd8d] bg-[#faf3e8] text-[#9b702d]">
                      <Icon name="phone" size={16} />
                    </div>

                  </div>

                  <h2
                    className="mt-7 text-[24px] leading-tight text-[#5b4630]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Personal attention,
                    <br />
                    every time.
                  </h2>

                  <p className="mt-4 text-[9px] leading-5 text-[#806d56]">
                    Our jewellery orders are currently handled personally.
                    Whether you're buying your first piece or need help with
                    an existing order, we're happy to assist.
                  </p>

                  <div className="mt-7 h-px bg-[#e5d7c2]" />

                  <div className="mt-5 flex items-center gap-3">

                    <div className="flex h-8 w-8 items-center justify-center border border-[#d8bd8d] bg-[#faf3e8] text-[#9b702d]">
                      <Icon name="sparkles" size={14} />
                    </div>

                    <div>

                      <p className="text-[8px] tracking-[0.1em] text-[#9a8060]">
                        RESPONSE
                      </p>

                      <p className="mt-1 text-[10px] text-[#5b4630]">
                        We will get back to you personally.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


    

      {/* =====================================================
          WHAT WE CAN HELP WITH
         ===================================================== */}

      <div className="border-y border-[#dfccb0] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">

        <div className="mx-auto max-w-[1050px]">

          <div className="text-center">

            <p className="text-[8px] font-medium tracking-[0.25em] text-[#a0835d]">
              WE CAN HELP WITH
            </p>

            <h2
              className="mt-2 text-[27px] text-[#5b4630] sm:text-[32px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Whatever you need.
            </h2>

          </div>


          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: "diamond" as const,
                title: "Product Enquiries",
                text: "Ask about jewellery, availability, price or details.",
              },
              {
                icon: "bag" as const,
                title: "Order Support",
                text: "Need help with an existing PJ Jewels order?",
              },
              {
                icon: "shield" as const,
                title: "Payment Help",
                text: "Questions about payment confirmation or status.",
              },
              {
                icon: "sparkles" as const,
                title: "Something Else",
                text: "Have another question? We are happy to help.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="
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

                <div className="flex h-9 w-9 items-center justify-center border border-[#d8bd8d] bg-[#faf3e8] text-[#9b702d]">
                  <Icon name={item.icon} size={15} />
                </div>

                <h3
                  className="mt-5 text-[14px] text-[#5b4630]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {item.title}
                </h3>

                <p className="mt-2 text-[8px] leading-5 text-[#806d56]">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* =====================================================
          FINAL CTA
         ===================================================== */}

      <div className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 border-b border-[#dfccb0] bg-[#faf5ed]">

        <div className="mx-auto max-w-[750px] text-center">

          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#d8bd8d] bg-[#faf3e8] text-[#9b702d]">
            <Icon name="phone" size={16} />
          </div>

          <h2
            className="mt-5 text-[24px] text-[#5b4630] sm:text-[30px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Prefer WhatsApp?
          </h2>

          <p className="mx-auto mt-3 max-w-[500px] text-[9px] leading-5 text-[#806d56] sm:text-[10px]">
            For jewellery enquiries and order updates, you can always
            reach us directly on WhatsApp.
          </p>

          <a
            href="https://wa.me/+919005313005"
            target="_blank"
            rel="noreferrer"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              border
              border-[#b98a47]
              px-7
              py-3
              text-[8px]
              tracking-[0.12em]
              text-[#73562f]
              transition
              duration-300
              hover:bg-[#b18442]
              hover:text-white
            "
          >
            START A WHATSAPP CHAT
            <span>→</span>
          </a>

        </div>

      </div>

        {/* =====================================================
          MAIN CONTACT AREA
         ===================================================== */}

      <div className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-[1100px]">

          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">

            {/* =================================================
                LEFT INFORMATION
               ================================================= */}

            <div>

              <p className="text-[8px] font-medium tracking-[0.25em] text-[#a0835d]">
                GET IN TOUCH
              </p>

              <h2
                className="mt-2 text-[27px] text-[#5b4630] sm:text-[31px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                How can we help?
              </h2>

              <div className="mt-4 h-px w-20 bg-[#c9a768]" />

              <p className="mt-5 max-w-[360px] text-[10px] leading-6 text-[#806d56]">
                Choose what you need help with, fill in the details and
                send us your enquiry. If your enquiry is related to an
                existing order, you can also provide your order ID.
              </p>


              {/* =================================================
                  CONTACT METHODS
                 ================================================= */}

              <div className="mt-8 space-y-3">

                {/* WhatsApp */}

                <a
                  href="https://wa.me/+919005313005"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    border
                    border-[#e3cfad]
                    bg-[#fffdfa]
                    p-4
                    transition
                    duration-300
                    hover:border-[#c9a768]
                    hover:bg-[#faf5ed]
                  "
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#d8bd8d] bg-[#faf3e8] text-[#9b702d]">
                    <Icon name="phone" size={15} />
                  </div>

                  <div className="min-w-0">

                    <p className="text-[8px] tracking-[0.15em] text-[#a0835d]">
                      WHATSAPP
                    </p>

                    <p className="mt-1 text-[10px] text-[#5b4630]">
                      +91 90053 13005
                    </p>

                  </div>

                  <span className="ml-auto text-[#b28a4b] transition group-hover:translate-x-1">
                    →
                  </span>

                </a>


                {/* Email */}

                <div className="flex items-center gap-4 border border-[#e3cfad] bg-[#fffdfa] p-4">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#d8bd8d] bg-[#faf3e8] text-[#9b702d]">
                    <Icon name="diamond" size={15} />
                  </div>

                  <div>

                    <p className="text-[8px] tracking-[0.15em] text-[#a0835d]">
                      EMAIL
                    </p>

                    <p className="mt-1 break-all text-[10px] text-[#5b4630]">
                      support@pjjewels.com
                    </p>

                  </div>

                </div>

              </div>


              {/* =================================================
                  SMALL NOTE
                 ================================================= */}

              <div className="mt-5 border-l border-[#c9a768] pl-4">

                <p className="text-[9px] leading-5 text-[#806d56]">
                  For urgent order updates, WhatsApp is usually the
                  quickest way to reach us.
                </p>

              </div>

            </div>


            {/* =================================================
                CONTACT FORM
               ================================================= */}

            <div className="border border-[#dfccb0] bg-[#faf5ed] p-5 sm:p-7 lg:p-9">

              {!submitted ? (

                <>

                  <div className="flex items-start justify-between gap-5">

                    <div>

                      <p className="text-[8px] font-medium tracking-[0.22em] text-[#a0835d]">
                        SEND AN ENQUIRY
                      </p>

                      <h2
                        className="mt-2 text-[23px] text-[#5b4630] sm:text-[27px]"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        Tell us what you need.
                      </h2>

                    </div>

                    <div className="hidden h-10 w-10 shrink-0 items-center justify-center border border-[#d8bd8d] bg-[#fffdf9] text-[#9b702d] sm:flex">
                      <Icon name="sparkles" size={16} />
                    </div>

                  </div>


                  <div className="mt-3 h-px bg-[#dfccb0]" />


                  {/* FORM */}

                  <form
                    onSubmit={handleSubmit}
                    className="mt-6"
                  >

                    {/* Name + Email */}

                    <div className="grid gap-4 sm:grid-cols-2">

                      <div>

                        <label
                          htmlFor="name"
                          className="mb-2 block text-[8px] tracking-[0.12em] text-[#806d56]"
                        >
                          YOUR NAME *
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Enter your name"
                          className="
                            h-11
                            w-full
                            border
                            border-[#d8bd8d]
                            bg-[#fffdf9]
                            px-4
                            text-[10px]
                            text-[#514435]
                            outline-none
                            transition
                            placeholder:text-[#ad9a80]
                            focus:border-[#a77b35]
                          "
                        />

                      </div>


                      <div>

                        <label
                          htmlFor="email"
                          className="mb-2 block text-[8px] tracking-[0.12em] text-[#806d56]"
                        >
                          EMAIL ADDRESS *
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="
                            h-11
                            w-full
                            border
                            border-[#d8bd8d]
                            bg-[#fffdf9]
                            px-4
                            text-[10px]
                            text-[#514435]
                            outline-none
                            transition
                            placeholder:text-[#ad9a80]
                            focus:border-[#a77b35]
                          "
                        />

                      </div>

                    </div>


                    {/* Phone + Order ID */}

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">

                      <div>

                        <label
                          htmlFor="phone"
                          className="mb-2 block text-[8px] tracking-[0.12em] text-[#806d56]"
                        >
                          PHONE NUMBER *
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+91"
                          className="
                            h-11
                            w-full
                            border
                            border-[#d8bd8d]
                            bg-[#fffdf9]
                            px-4
                            text-[10px]
                            text-[#514435]
                            outline-none
                            transition
                            placeholder:text-[#ad9a80]
                            focus:border-[#a77b35]
                          "
                        />

                      </div>


                      <div>

                        <label
                          htmlFor="orderId"
                          className="mb-2 block text-[8px] tracking-[0.12em] text-[#806d56]"
                        >
                          ORDER ID
                          <span className="ml-1 text-[#ad9a80]">
                            (OPTIONAL)
                          </span>
                        </label>

                        <input
                          id="orderId"
                          name="orderId"
                          type="text"
                          placeholder="Example: PJ1024"
                          className="
                            h-11
                            w-full
                            border
                            border-[#d8bd8d]
                            bg-[#fffdf9]
                            px-4
                            text-[10px]
                            text-[#514435]
                            outline-none
                            transition
                            placeholder:text-[#ad9a80]
                            focus:border-[#a77b35]
                          "
                        />

                      </div>

                    </div>


                    {/* Topic */}

                    <div className="mt-4">

                      <label className="mb-2 block text-[8px] tracking-[0.12em] text-[#806d56]">
                        WHAT CAN WE HELP WITH? *
                      </label>

                      <div className="flex flex-wrap gap-2">

                        {[
                          "General Enquiry",
                          "Product Enquiry",
                          "Order Help",
                          "Payment",
                          "Returns",
                          "Other",
                        ].map((topic) => (

                          <button
                            key={topic}
                            type="button"
                            onClick={() => setSelectedTopic(topic)}
                            className={`
                              border
                              px-3
                              py-2
                              text-[8px]
                              transition
                              duration-200
                              ${
                                selectedTopic === topic
                                  ? "border-[#b98a47] bg-[#b18442] text-white"
                                  : "border-[#d8bd8d] bg-[#fffdf9] text-[#73562f] hover:border-[#b98a47]"
                              }
                            `}
                          >
                            {topic}
                          </button>

                        ))}

                      </div>

                      <input
                        type="hidden"
                        name="topic"
                        value={selectedTopic}
                      />

                    </div>


                    {/* Message */}

                    <div className="mt-4">

                      <label
                        htmlFor="message"
                        className="mb-2 block text-[8px] tracking-[0.12em] text-[#806d56]"
                      >
                        YOUR MESSAGE *
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        className="
                          w-full
                          resize-none
                          border
                          border-[#d8bd8d]
                          bg-[#fffdf9]
                          px-4
                          py-3
                          text-[10px]
                          leading-5
                          text-[#514435]
                          outline-none
                          transition
                          placeholder:text-[#ad9a80]
                          focus:border-[#a77b35]
                        "
                      />

                    </div>


                    {/* Submit */}

                    <button
                      type="submit"
                      className="
                        mt-5
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        bg-[#b18442]
                        px-6
                        py-3.5
                        text-[8px]
                        font-medium
                        tracking-[0.15em]
                        text-white
                        transition
                        duration-300
                        hover:bg-[#8e682f]
                      "
                    >
                      SEND ENQUIRY

                      <span>→</span>

                    </button>


                    <p className="mt-3 text-center text-[8px] leading-4 text-[#9a8060]">
                      Your enquiry will be sent to the PJ Jewels team.
                    </p>

                  </form>

                </>

              ) : (

                /* =================================================
                   SUCCESS STATE
                   ================================================= */

                <div className="flex min-h-[450px] flex-col items-center justify-center px-5 text-center">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a768] bg-[#fffdf9] text-[#9b702d]">

                    <Icon
                      name="check"
                      size={22}
                    />

                  </div>

                  <p className="mt-6 text-[8px] font-medium tracking-[0.25em] text-[#a0835d]">
                    MESSAGE RECEIVED
                  </p>

                  <h2
                    className="mt-3 text-[27px] text-[#5b4630]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Thank you for reaching out.
                  </h2>

                  <p className="mt-3 max-w-[420px] text-[10px] leading-5 text-[#806d56]">
                    Your message has been received by the PJ Jewels team.
                    We will review your enquiry and get back to you.
                  </p>

                  <div className="mt-7 flex flex-col gap-2 sm:flex-row">

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
                        px-6
                        py-3
                        text-[8px]
                        tracking-[0.1em]
                        text-white
                      "
                    >
                      CHAT ON WHATSAPP
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="
                        border
                        border-[#b98a47]
                        px-6
                        py-3
                        text-[8px]
                        tracking-[0.1em]
                        text-[#73562f]
                      "
                    >
                      SEND ANOTHER MESSAGE
                    </button>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>


    </section>
  );
}