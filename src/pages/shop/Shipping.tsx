import { Link } from "react-router-dom";
import { Icon } from "../../data/Icon";

export function Shipping() {
  const whatsappNumber = "919005313005";

  const whatsappMessage = encodeURIComponent(
    "Hello PJ Jewels, I would like to know more about a jewellery item."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const steps = [
    {
      number: "01",
      title: "Find Your Jewellery",
      description:
        "Browse our collections and choose the jewellery piece you love. You can also send us a screenshot or image of any piece you are interested in.",
    },
    {
      number: "02",
      title: "Message Us on WhatsApp",
      description:
        "Simply send the product image to our WhatsApp. Our team will personally respond and help you with the next steps.",
    },
    {
      number: "03",
      title: "Receive Product Details",
      description:
        "We will share the available details, price, availability and other information about the jewellery with you.",
    },
    {
      number: "04",
      title: "Confirm Your Order",
      description:
        "Once you are happy with the product and details, confirm your order with our team on WhatsApp.",
    },
    {
      number: "05",
      title: "Complete Payment",
      description:
        "After your order is confirmed, we will share the payment details. Complete the payment and send us the payment screenshot.",
    },
    {
      number: "06",
      title: "Payment Verification",
      description:
        "Our team manually verifies the payment and confirms that the amount has been successfully credited on our side.",
    },
    {
      number: "07",
      title: "Your Jewellery Is Dispatched",
      description:
        "After successful payment verification, your jewellery is carefully prepared and handed over to our courier partner.",
    },
    {
      number: "08",
      title: "Receive Tracking Details",
      description:
        "Once your order is shipped, we send the courier name, tracking ID and relevant delivery details directly to you on WhatsApp.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffdf9] text-[#55432e]">

      {/* =====================================================
          HERO
         ===================================================== */}
      <section className="relative overflow-hidden border-b border-[#dfccb0] bg-[#faf5ed]">

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#d8bd8d]/40 sm:h-80 sm:w-80" />

        <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-[#d8bd8d]/30" />

        <div className="relative mx-auto max-w-[1200px] px-5 pb-14 pt-[100px] sm:px-8 sm:pb-16 sm:pt-[105px] lg:px-12 lg:pb-20 lg:pt-[120px]">

          <div className="mx-auto max-w-[760px] text-center">

            <p className="text-[8px] font-medium tracking-[0.3em] text-[#9a8060] sm:text-[9px]">
              A PERSONAL WAY TO SHOP
            </p>

            <h1
              className="mt-3 text-[32px] leading-[1.15] text-[#9d702f] sm:text-[40px] lg:text-[52px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Your jewellery journey,
              <br />
              made personal.
            </h1>

            <div className="mx-auto mt-5 flex max-w-[190px] items-center gap-2">
              <span className="h-px flex-1 bg-[#c9a768]" />
              <span className="h-1 w-1 shrink-0 rounded-full bg-[#c9a768]" />
              <span className="h-px flex-1 bg-[#c9a768]" />
            </div>

            <p className="mx-auto mt-5 max-w-[570px] text-[10px] leading-5 text-[#806d56] sm:text-[11px] sm:leading-6">
              At PJ Jewels, your order is handled personally through
              WhatsApp. From choosing your jewellery to receiving your
              shipping details, we stay connected with you at every step.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                border
                border-[#b98a47]
                bg-[#b18442]
                px-6
                py-3
                text-[8px]
                font-medium
                tracking-[0.13em]
                text-white
                transition
                duration-300
                hover:bg-[#8e682f]
                sm:px-7
              "
            >
              START ON WHATSAPP
              <span className="text-[12px]">→</span>
            </a>

          </div>

        </div>
      </section>


      {/* =====================================================
          QUICK FLOW
         ===================================================== */}
      <section className="border-b border-[#dfccb0] bg-[#fffdf9]">

        <div className="mx-auto max-w-[1150px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">

          <div className="grid grid-cols-2 gap-px overflow-hidden border border-[#dfccb0] bg-[#dfccb0] sm:grid-cols-4">

            {[
              {
                number: "01",
                title: "Choose",
                text: "Find your jewellery",
              },
              {
                number: "02",
                title: "WhatsApp",
                text: "Send us the image",
              },
              {
                number: "03",
                title: "Confirm",
                text: "Complete your order",
              },
              {
                number: "04",
                title: "Receive",
                text: "Get shipping details",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="bg-[#fffdf9] px-4 py-6 text-center sm:px-5 sm:py-7"
              >
                <p className="text-[8px] tracking-[0.15em] text-[#b28a4b]">
                  {item.number}
                </p>

                <h3
                  className="mt-2 text-[13px] text-[#5b4630] sm:text-[14px]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {item.title}
                </h3>

                <p className="mt-1 text-[8px] leading-4 text-[#8a765d]">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          MAIN PROCESS
         ===================================================== */}
      <section className="border-b border-[#dfccb0] bg-[#fffdf9] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-[1100px]">

          {/* Section header */}
          <div className="mb-10 max-w-[650px]">

            <p className="text-[8px] font-medium tracking-[0.28em] text-[#a0835d] sm:text-[9px]">
              HOW YOUR ORDER WORKS
            </p>

            <h2
              className="mt-2 text-[27px] leading-[1.2] text-[#5b4630] sm:text-[33px] lg:text-[38px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              From your screen
              <br className="sm:hidden" /> to your doorstep.
            </h2>

            <p className="mt-4 max-w-[560px] text-[10px] leading-5 text-[#806d56] sm:text-[11px] sm:leading-6">
              We keep the ordering experience simple and personal. You don't
              need to go through a complicated checkout process.
            </p>

          </div>


          {/* Steps */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map((step, index) => (
              <div
                key={step.number}
                className="
                  group
                  relative
                  border
                  border-[#e3cfad]
                  bg-[#fffdfa]
                  p-5
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#c9a768]
                  hover:shadow-[0_10px_30px_rgba(90,65,35,0.07)]
                  sm:p-6
                "
              >

                {/* Number */}
                <div className="flex items-center justify-between">

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      border
                      border-[#c9a768]
                      bg-[#faf3e8]
                      text-[8px]
                      text-[#9b702d]
                    "
                  >
                    {step.number}
                  </span>

                  {index < steps.length - 1 && (
                    <span className="hidden text-[14px] text-[#c9a768] lg:block">
                      →
                    </span>
                  )}

                </div>


                {/* Title */}
                <h3
                  className="mt-5 text-[14px] leading-5 text-[#5b4630]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {step.title}
                </h3>


                {/* Description */}
                <p className="mt-2 text-[9px] leading-5 text-[#806d56]">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          WHATSAPP EXPERIENCE
         ===================================================== */}
      <section className="border-b border-[#dfccb0] bg-[#faf5ed] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-[1050px]">

          <div className="grid grid-cols-1 overflow-hidden border border-[#dfccb0] bg-[#fffdf9] lg:grid-cols-[0.8fr_1.2fr]">

            {/* Left */}
            <div className="relative flex items-center justify-center bg-[#f4ecdf] px-7 py-12 sm:px-10 lg:min-h-[420px]">

              {/* Decorative rings */}
              <div className="absolute h-52 w-52 rounded-full border border-[#c9a768]/50" />
              <div className="absolute h-36 w-36 rounded-full border border-[#c9a768]/40" />

              <div className="relative text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#c9a768] bg-[#fffdf9] text-[#9b702d] shadow-sm">
                  <Icon name="phone" size={24} />
                </div>

                <p className="mt-5 text-[8px] tracking-[0.2em] text-[#9a8060]">
                  PERSONAL ASSISTANCE
                </p>

                <h2
                  className="mt-2 text-[23px] text-[#5b4630] sm:text-[27px]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Talk to us directly.
                </h2>

                <p className="mx-auto mt-3 max-w-[300px] text-[9px] leading-5 text-[#806d56]">
                  Have a question about a product? Simply send us the image
                  and our team will personally assist you.
                </p>

              </div>

            </div>


            {/* Right */}
            <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-12">

              <p className="text-[8px] font-medium tracking-[0.25em] text-[#a0835d]">
                WHY WHATSAPP?
              </p>

              <h2
                className="mt-2 text-[25px] text-[#5b4630] sm:text-[30px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                A more personal way to shop.
              </h2>

              <p className="mt-3 max-w-[500px] text-[10px] leading-5 text-[#806d56] sm:text-[11px] sm:leading-6">
                Instead of an automated checkout, we currently prefer to
                connect with you directly. It lets us understand what you are
                looking for and provide the information you need before you
                place your order.
              </p>


              {/* Benefits */}
              <div className="mt-7 space-y-4">

                {[
                  "Send a product image or screenshot",
                  "Get product details and pricing directly",
                  "Ask questions before confirming your order",
                  "Receive payment instructions personally",
                  "Get shipping and tracking details on WhatsApp",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <span className="mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center border border-[#c9a768] bg-[#faf3e8] text-[7px] text-[#9b702d]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-[9px] leading-5 text-[#6f5c46] sm:text-[10px]">
                      {item}
                    </p>

                  </div>
                ))}

              </div>


              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  border
                  border-[#b98a47]
                  px-6
                  py-3
                  text-[8px]
                  tracking-[0.12em]
                  text-[#73562f]
                  transition
                  duration-300
                  hover:bg-[#a77a35]
                  hover:text-white
                "
              >
                CHAT WITH PJ JEWELS
                <span>→</span>
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PAYMENT + VERIFICATION
         ===================================================== */}
      <section className="border-b border-[#dfccb0] bg-[#fffdf9] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-[1000px]">

          <div className="text-center">

            <p className="text-[8px] tracking-[0.25em] text-[#a0835d]">
              AFTER YOU CONFIRM
            </p>

            <h2
              className="mt-2 text-[26px] text-[#5b4630] sm:text-[32px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Payment made simple.
            </h2>

            <p className="mx-auto mt-3 max-w-[550px] text-[10px] leading-5 text-[#806d56] sm:text-[11px]">
              Once you confirm your jewellery, we guide you through the
              payment process personally.
            </p>

          </div>


          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-3">

            {/* Payment */}
            <div className="border border-[#dfccb0] bg-[#faf5ed] p-6">

              <span className="text-[8px] tracking-[0.15em] text-[#b28a4b]">
                STEP 01
              </span>

              <h3
                className="mt-3 text-[16px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Payment Details
              </h3>

              <p className="mt-2 text-[9px] leading-5 text-[#806d56]">
                We share the required payment details with you after your
                order is confirmed.
              </p>

            </div>


            {/* Screenshot */}
            <div className="border border-[#dfccb0] bg-[#faf5ed] p-6">

              <span className="text-[8px] tracking-[0.15em] text-[#b28a4b]">
                STEP 02
              </span>

              <h3
                className="mt-3 text-[16px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Send Screenshot
              </h3>

              <p className="mt-2 text-[9px] leading-5 text-[#806d56]">
                After completing the payment, simply send the payment
                screenshot to us through WhatsApp.
              </p>

            </div>


            {/* Verification */}
            <div className="border border-[#dfccb0] bg-[#faf5ed] p-6">

              <span className="text-[8px] tracking-[0.15em] text-[#b28a4b]">
                STEP 03
              </span>

              <h3
                className="mt-3 text-[16px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                We Verify
              </h3>

              <p className="mt-2 text-[9px] leading-5 text-[#806d56]">
                Our team manually checks that the payment has been received
                successfully before processing your order.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SHIPPING
         ===================================================== */}
      <section className="border-b border-[#dfccb0] bg-[#faf5ed] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-[1050px]">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">

            {/* Left */}
            <div>

              <p className="text-[8px] font-medium tracking-[0.25em] text-[#a0835d]">
                ONCE YOUR ORDER IS READY
              </p>

              <h2
                className="mt-3 text-[28px] leading-[1.2] text-[#5b4630] sm:text-[35px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                From our hands
                <br />
                to your doorstep.
              </h2>

              <p className="mt-5 max-w-[550px] text-[10px] leading-5 text-[#806d56] sm:text-[11px] sm:leading-6">
                After your payment is successfully verified, we prepare your
                order for dispatch. Once it has been handed over to the
                courier, we share the shipping information with you directly.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="border border-[#d8bd8d] bg-[#fffdf9] px-4 py-2 text-[8px] text-[#73562f]">
                  COURIER DETAILS
                </span>

                <span className="border border-[#d8bd8d] bg-[#fffdf9] px-4 py-2 text-[8px] text-[#73562f]">
                  TRACKING ID
                </span>

                <span className="border border-[#d8bd8d] bg-[#fffdf9] px-4 py-2 text-[8px] text-[#73562f]">
                  DELIVERY DETAILS
                </span>

              </div>

            </div>


            {/* Right timeline */}
            <div className="border border-[#dfccb0] bg-[#fffdf9] p-6 sm:p-8">

              <div className="space-y-6">

                <div className="flex gap-4">

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c9a768] bg-[#faf3e8] text-[8px] text-[#9b702d]">
                    01
                  </div>

                  <div>
                    <h3
                      className="text-[13px] text-[#5b4630]"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Order Prepared
                    </h3>

                    <p className="mt-1 text-[8px] leading-4 text-[#806d56]">
                      Your jewellery is prepared for dispatch.
                    </p>
                  </div>

                </div>


                <div className="ml-4 h-px bg-[#dfccb0]" />


                <div className="flex gap-4">

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c9a768] bg-[#faf3e8] text-[8px] text-[#9b702d]">
                    02
                  </div>

                  <div>
                    <h3
                      className="text-[13px] text-[#5b4630]"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Handed to Courier
                    </h3>

                    <p className="mt-1 text-[8px] leading-4 text-[#806d56]">
                      Your package is handed over to the courier partner.
                    </p>
                  </div>

                </div>


                <div className="ml-4 h-px bg-[#dfccb0]" />


                <div className="flex gap-4">

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c9a768] bg-[#faf3e8] text-[8px] text-[#9b702d]">
                    03
                  </div>

                  <div>
                    <h3
                      className="text-[13px] text-[#5b4630]"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Tracking Shared
                    </h3>

                    <p className="mt-1 text-[8px] leading-4 text-[#806d56]">
                      Courier and tracking information is sent to you on
                      WhatsApp.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FAQ / IMPORTANT NOTE
         ===================================================== */}
      <section className="border-b border-[#dfccb0] bg-[#fffdf9] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">

        <div className="mx-auto max-w-[850px]">

          <div className="border border-[#dfccb0] bg-[#faf5ed] px-6 py-7 sm:px-8">

            <p className="text-[8px] font-medium tracking-[0.22em] text-[#a0835d]">
              GOOD TO KNOW
            </p>

            <h2
              className="mt-2 text-[20px] text-[#5b4630] sm:text-[23px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Your order is always handled personally.
            </h2>

            <div className="mt-5 space-y-3">

              <div className="flex gap-3">
                <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-[#b98a47]" />
                <p className="text-[9px] leading-5 text-[#806d56]">
                  Orders are currently confirmed through WhatsApp.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-[#b98a47]" />
                <p className="text-[9px] leading-5 text-[#806d56]">
                  Payment screenshots are manually checked against the
                  payment received on our side.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-[#b98a47]" />
                <p className="text-[9px] leading-5 text-[#806d56]">
                  Shipping and tracking information is shared with you
                  directly through WhatsApp.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-[#b98a47]" />
                <p className="text-[9px] leading-5 text-[#806d56]">
                  If you have any question about your order, you can contact
                  us directly on WhatsApp.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
         ===================================================== */}
      <section className="bg-[#faf5ed] px-5 py-14 text-center sm:px-8 sm:py-16 lg:py-20">

        <p className="text-[8px] font-medium tracking-[0.28em] text-[#9a8060]">
          READY TO FIND YOUR PIECE?
        </p>

        <h2
          className="mt-3 text-[27px] text-[#5b4630] sm:text-[34px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Let us help you choose.
        </h2>

        <p className="mx-auto mt-3 max-w-[500px] text-[9px] leading-5 text-[#806d56] sm:text-[10px]">
          Explore our collections or send us a message with the jewellery
          you have in mind.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">

          <Link
            to="/collections"
            className="
              border
              border-[#b98a47]
              px-6
              py-3
              text-[8px]
              tracking-[0.12em]
              text-[#73562f]
              transition
              duration-300
              hover:bg-[#a77a35]
              hover:text-white
            "
          >
            EXPLORE COLLECTIONS
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="
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
            "
          >
            MESSAGE ON WHATSAPP
          </a>

        </div>

      </section>

    </main>
  );
}