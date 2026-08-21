import { Link } from "react-router-dom";
import { IMAGES } from "../../data/Collections";
import { Icon } from "../../data/Icon";

export function AboutUs() {
  return (
    <main className="min-h-screen bg-[#fffdf9] text-[#55432e]">

      {/* =====================================================
          HERO / BRAND INTRO
         ===================================================== */}
      <section className="border-b border-[#dfccb0] bg-[#faf5ed]">

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 lg:grid-cols-[45%_55%]">

          {/* LEFT CONTENT */}
          <div className="flex items-center px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">

            <div className="max-w-[480px]">

              <p className="text-[8px] font-medium tracking-[0.28em] text-[#9a8060] sm:text-[9px]">
                THE STORY OF PJ JEWELS
              </p>

              <h1
                className="mt-3 text-[34px] leading-[1.15] text-[#9d702f] sm:text-[42px] lg:text-[48px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Jewellery with
                <br />
                a story to tell.
              </h1>

              <div className="mt-5 flex max-w-[180px] items-center gap-2">
                <span className="h-px flex-1 bg-[#c9a768]" />
                <span className="h-1 w-1 shrink-0 rounded-full bg-[#c9a768]" />
                <span className="h-px flex-1 bg-[#c9a768]" />
              </div>

              <p
                className="mt-6 text-[11px] leading-6 text-[#766451] sm:text-[12px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                At PJ Jewels, we believe jewellery is more than something
                you wear. It is a reflection of tradition, memories,
                celebrations and the moments that become a part of your story.
              </p>

              <p className="mt-4 text-[10px] leading-5 text-[#8a765d] sm:text-[11px]">
                Inspired by the timeless beauty of Indian jewellery, we bring
                together traditional elegance and a touch of contemporary
                simplicity.
              </p>

            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="relative min-h-[350px] overflow-hidden border-t border-[#dfccb0] lg:min-h-[500px] lg:border-l lg:border-t-0">

            <img
              src={IMAGES.hero}
              alt="PJ Jewels jewellery"
              className="h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#6b4d2b]/5" />

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR PHILOSOPHY
         ===================================================== */}
      <section className="border-b border-[#dfccb0] bg-[#fffdf9] px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-[1000px]">

          {/* HEADER */}
          <div className="text-center">

            <p className="text-[8px] font-medium tracking-[0.25em] text-[#a0835d] sm:text-[9px]">
              WHAT WE BELIEVE
            </p>

            <h2
              className="mt-2 text-[27px] text-[#5b4630] sm:text-[32px] lg:text-[36px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Tradition, beautifully carried forward.
            </h2>

            <p className="mx-auto mt-4 max-w-[600px] text-[10px] leading-5 text-[#806d56] sm:text-[11px] sm:leading-6">
              Our philosophy is simple — create jewellery that feels
              meaningful today while preserving the beauty of Indian
              craftsmanship and tradition.
            </p>

          </div>


          {/* VALUES */}
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-[#dfccb0] bg-[#dfccb0] sm:grid-cols-3">

            {/* VALUE 1 */}
            <div className="bg-[#fffdf9] px-6 py-8 text-center">

              <div className="mx-auto flex h-10 w-10 items-center justify-center border border-[#d8bd8d] bg-[#faf3e8] text-[#9b702d]">
                <Icon name="sparkles" size={17} />
              </div>

              <h3
                className="mt-4 text-[15px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Timeless Beauty
              </h3>

              <p className="mt-2 text-[9px] leading-5 text-[#806d56]">
                Designs inspired by the elegance of Indian traditions and
                created to remain beautiful beyond seasons.
              </p>

            </div>


            {/* VALUE 2 */}
            <div className="bg-[#fffdf9] px-6 py-8 text-center">

              <div className="mx-auto flex h-10 w-10 items-center justify-center border border-[#d8bd8d] bg-[#faf3e8] text-[#9b702d]">
                <Icon name="heart" size={17} />
              </div>

              <h3
                className="mt-4 text-[15px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Made with Meaning
              </h3>

              <p className="mt-2 text-[9px] leading-5 text-[#806d56]">
                Every piece is chosen with care because jewellery often
                becomes part of life's most special moments.
              </p>

            </div>


            {/* VALUE 3 */}
            <div className="bg-[#fffdf9] px-6 py-8 text-center">

              <div className="mx-auto flex h-10 w-10 items-center justify-center border border-[#d8bd8d] bg-[#faf3e8] text-[#9b702d]">
                <Icon name="users" size={17} />
              </div>

              <h3
                className="mt-4 text-[15px] text-[#5b4630]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Personal Connection
              </h3>

              <p className="mt-2 text-[9px] leading-5 text-[#806d56]">
                We believe buying jewellery should feel personal, warm and
                trustworthy — not simply transactional.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BRAND STATEMENT
         ===================================================== */}
      <section className="border-b border-[#dfccb0] bg-[#faf5ed] px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-[850px] text-center">

          <p className="text-[8px] tracking-[0.28em] text-[#a0835d]">
            OUR PROMISE
          </p>

          <h2
            className="mt-3 text-[27px] leading-[1.25] text-[#9d702f] sm:text-[34px] lg:text-[40px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            “परंपरा आमची,
            <br />
            विश्वास तुमचा”
          </h2>

          <div className="mx-auto mt-5 flex max-w-[170px] items-center gap-2">
            <span className="h-px flex-1 bg-[#c9a768]" />
            <span className="h-1 w-1 shrink-0 rounded-full bg-[#c9a768]" />
            <span className="h-px flex-1 bg-[#c9a768]" />
          </div>

          <p
            className="mx-auto mt-6 max-w-[620px] text-[11px] leading-6 text-[#766451] sm:text-[12px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Tradition is where we come from.
            <br />
            Trust is what we build.
            <br />
            Jewellery is how we bring the two together.
          </p>

        </div>

      </section>


      {/* =====================================================
          HOW WE SERVE YOU
         ===================================================== */}
      <section className="border-b border-[#dfccb0] bg-[#fffdf9] px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-[1000px]">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* LEFT */}
            <div>

              <p className="text-[8px] font-medium tracking-[0.25em] text-[#a0835d]">
                A PERSONAL EXPERIENCE
              </p>

              <h2
                className="mt-3 text-[28px] leading-[1.2] text-[#5b4630] sm:text-[34px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Jewellery shopping,
                <br />
                the personal way.
              </h2>

              <p className="mt-5 text-[10px] leading-5 text-[#806d56] sm:text-[11px] sm:leading-6">
                We currently offer a personal ordering experience through
                WhatsApp. This allows us to communicate directly with you,
                answer your questions and help you choose the right piece.
              </p>

              <Link
                to="/collections"
                className="
                  mt-6
                  inline-flex
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
                EXPLORE COLLECTION
              </Link>

            </div>


            {/* RIGHT STEPS */}
            <div className="border border-[#e3cfad] bg-[#faf5ed] p-6 sm:p-8">

              {[
                {
                  number: "01",
                  title: "Discover",
                  text: "Browse our jewellery and send us the piece you love.",
                },
                {
                  number: "02",
                  title: "Connect",
                  text: "Talk directly with our team and receive product details.",
                },
                {
                  number: "03",
                  title: "Confirm",
                  text: "Complete your order after confirming the details.",
                },
                {
                  number: "04",
                  title: "Receive",
                  text: "We dispatch your jewellery and share the tracking details.",
                },
              ].map((step, index) => (

                <div
                  key={step.number}
                  className={`flex gap-4 ${
                    index !== 3
                      ? "border-b border-[#dfccb0] pb-5 mb-5"
                      : ""
                  }`}
                >

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#c9a768] bg-[#fffdf9] text-[8px] text-[#9b702d]">
                    {step.number}
                  </span>

                  <div>

                    <h3
                      className="text-[13px] text-[#5b4630]"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-1 text-[9px] leading-5 text-[#806d56]">
                      {step.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
         ===================================================== */}
      <section className="bg-[#faf5ed] px-6 py-14 text-center sm:px-10 sm:py-16">

        <p className="text-[8px] tracking-[0.25em] text-[#9a8060]">
          FIND SOMETHING BEAUTIFUL
        </p>

        <h2
          className="mt-2 text-[25px] text-[#5b4630] sm:text-[30px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Let your story begin with PJ Jewels.
        </h2>

        <p className="mx-auto mt-3 max-w-[500px] text-[9px] leading-5 text-[#806d56] sm:text-[10px]">
          Explore our collections and discover jewellery created for
          celebrations, traditions and everyday elegance.
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
            VIEW COLLECTIONS
          </Link>

          <Link
            to="/contact-us"
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
            CONTACT US
          </Link>

        </div>

      </section>

    </main>
  );
}