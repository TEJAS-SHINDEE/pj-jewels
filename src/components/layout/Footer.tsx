
/* =========================================================
   FOOTER
   ========================================================= */

import { Icon } from "../../data/Icon";

export function Footer() {
  return (
    <footer className="bg-[#382a1d] text-[#e9d7b7]">

      <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-7 px-5 py-8 sm:grid-cols-2 sm:px-8 md:grid-cols-3 lg:grid-cols-5 lg:px-10">

        {/* Brand */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1">

          <div
            className="text-[23px] text-[#d2aa68]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            पारिजात
          </div>

          <div
            className="text-[13px] text-[#d2aa68]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            PJ jewels
          </div>

          <p className="mt-2 text-[8px] leading-4 text-[#bba98e]">
            परंपरा आमची, विश्वास तुमचा
          </p>

          <div className="mt-3 flex gap-3 text-[#c8a267]">
            <a href="#instagram">
              <Icon name="instagram" size={15} />
            </a>
            <a href="#contact">
              <Icon name="phone" size={15} />
            </a>
          </div>

        </div>

        {/* Shop */}
        <div>
          <h3 className="mb-3 text-[9px] tracking-[0.15em] text-[#d2aa68]">
            SHOP
          </h3>

          <div className="flex flex-col gap-2 text-[8px] text-[#c0ae92]">
            <a href="#collections">New Arrivals</a>
            <a href="#collections">Necklaces</a>
            <a href="#collections">Mangalsutra</a>
            <a href="#collections">Earrings</a>
            <a href="#collections">Bridal</a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="mb-3 text-[9px] tracking-[0.15em] text-[#d2aa68]">
            ABOUT
          </h3>

          <div className="flex flex-col gap-2 text-[8px] text-[#c0ae92]">
            <a href="#about-us">Our Story</a>
            <a href="#about-us">Our Philosophy</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>

        {/* Help */}
        <div>
          <h3 className="mb-3 text-[9px] tracking-[0.15em] text-[#d2aa68]">
            HELP
          </h3>

          <div className="flex flex-col gap-2 text-[8px] text-[#c0ae92]">
            <a href="#contact">Shipping</a>
            <a href="#contact">Returns</a>
            <a href="#contact">FAQ</a>
            <a href="#contact">Order Tracking</a>
          </div>
        </div>

        {/* Contact */}
        <div id="contact">
          <h3 className="mb-3 text-[9px] tracking-[0.15em] text-[#d2aa68]">
            CONTACT
          </h3>

          <div className="flex flex-col gap-2 text-[8px] text-[#c0ae92]">
            <p>Instagram</p>
            <p>WhatsApp</p>
            <p>+91 00000 00000</p>
            <p>support@pjjewels.com</p>
          </div>
        </div>

      </div>

      <div className="border-t border-[#5a4733] px-6 py-3 text-center text-[7px] text-[#9d8c73]">
        © {new Date().getFullYear()} PJ Jewels. All Rights Reserved.
      </div>

    </footer>
  );
}