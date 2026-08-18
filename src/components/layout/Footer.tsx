/* =========================================================
   FOOTER
   ========================================================= */

import { Icon } from "../../data/Icon";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#382a1d] text-[#e9d7b7]">

      <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-7 px-5 py-8 sm:grid-cols-2 sm:px-8 md:grid-cols-3 lg:grid-cols-5 lg:px-10">

        {/* =====================================================
            BRAND
           ===================================================== */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1">

          <Link
            to="/"
            className="inline-block"
          >
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
          </Link>

          <p className="mt-2 text-[8px] leading-4 text-[#bba98e]">
            परंपरा आमची, विश्वास तुमचा
          </p>

          {/* Social Icons */}
          <div className="mt-3 flex gap-3 text-[#c8a267]">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/pj_jewels_by_meghana/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition hover:text-[#e1bd7d]"
            >
              <Icon name="instagram" size={15} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition hover:text-[#e1bd7d]"
            >
              <Icon name="phone" size={15} />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="transition hover:text-[#e1bd7d]"
            >
              <Icon name="youtube" size={15} />
            </a>

          </div>

        </div>


        {/* =====================================================
            SHOP
           ===================================================== */}
        <div>

          <h3 className="mb-3 text-[9px] tracking-[0.15em] text-[#d2aa68]">
            SHOP
          </h3>

          <div className="flex flex-col gap-2 text-[8px] text-[#c0ae92]">

            <Link
              to="/new-arrivals"
              className="transition hover:text-[#d2aa68]"
            >
              New Arrivals
            </Link>

            <Link
              to="/collections/necklaces"
              className="transition hover:text-[#d2aa68]"
            >
              Necklaces
            </Link>

            <Link
              to="/collections/mangalsutra"
              className="transition hover:text-[#d2aa68]"
            >
              Mangalsutra
            </Link>

            <Link
              to="/collections/earrings"
              className="transition hover:text-[#d2aa68]"
            >
              Earrings
            </Link>

            <Link
              to="/collections/bridal"
              className="transition hover:text-[#d2aa68]"
            >
              Bridal
            </Link>

          </div>

        </div>


        {/* =====================================================
            ABOUT
           ===================================================== */}
        <div>

          <h3 className="mb-3 text-[9px] tracking-[0.15em] text-[#d2aa68]">
            ABOUT
          </h3>

          <div className="flex flex-col gap-2 text-[8px] text-[#c0ae92]">

            <Link
              to="/about-us"
              className="transition hover:text-[#d2aa68]"
            >
              Our Story
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-[#d2aa68]"
            >
              Contact Us
            </Link>

          </div>

        </div>


        {/* =====================================================
            HELP
           ===================================================== */}
        <div>

          <h3 className="mb-3 text-[9px] tracking-[0.15em] text-[#d2aa68]">
            HELP
          </h3>

          <div className="flex flex-col gap-2 text-[8px] text-[#c0ae92]">

            <Link
              to="/shipping"
              className="transition hover:text-[#d2aa68]"
            >
              Shipping
            </Link>

            <Link
              to="/returns"
              className="transition hover:text-[#d2aa68]"
            >
              Returns
            </Link>

            <Link
              to="/faq"
              className="transition hover:text-[#d2aa68]"
            >
              FAQ
            </Link>

            <Link
              to="/order-tracking"
              className="transition hover:text-[#d2aa68]"
            >
              Order Tracking
            </Link>

          </div>

        </div>


        {/* =====================================================
            CONTACT
           ===================================================== */}
        <div id="contact">

          <h3 className="mb-3 text-[9px] tracking-[0.15em] text-[#d2aa68]">
            CONTACT
          </h3>

          <div className="flex flex-col gap-2 text-[8px] text-[#c0ae92]">

            <a
              href="https://www.instagram.com/pj_jewels_by_meghana/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#d2aa68]"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/919005313005"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#d2aa68]"
            >
              WhatsApp
            </a>

            <a
              href="tel:+919005313005"
              className="transition hover:text-[#d2aa68]"
            >
              +91 90053 13005
            </a>

            <a
              href="mailto:support@pjjewels.com"
              className="transition hover:text-[#d2aa68]"
            >
              support@pjjewels.com
            </a>

          </div>

        </div>

      </div>


      {/* =====================================================
          COPYRIGHT
         ===================================================== */}
      <div className="border-t border-[#5a4733] px-6 py-3 text-center text-[7px] text-[#9d8c73]">
        © {new Date().getFullYear()} PJ Jewels. All Rights Reserved.
      </div>

    </footer>
  );
}