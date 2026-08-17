/* =========================================================
   NAVBAR
   ========================================================= */

import { useEffect, useState } from "react";
import { Icon } from "../../data/Icon";

export function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    "Home",
    "Collections",
    "Necklaces",
    "Mangalsutra",
    "Earrings",
    "About Us",
    "Contact",
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "px-0 pt-0"
          : "px-4 pt-4 sm:px-6 lg:px-10"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-300 ${
          scrolled
            ? "w-full rounded-none border-b border-[#dfccb0] bg-[#fffdf9] shadow-md backdrop-blur-md"
            // : "max-w-[1500px] rounded-xl border-b border-white/30 bg-[#fffdf8]/5 backdrop-blur-md"
            : "max-w-[1500px] rounded-xl border-b border-[#dfccb0] bg-[#fffdf9] backdrop-blur-md"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-8 lg:px-12 ${
            scrolled
              ? "min-h-[64px] py-2"
              : "min-h-[72px] py-3"
          }`}
        >

          {/* =====================================================
              LOGO
             ===================================================== */}
          <a
            href="#home"
            className="group flex min-w-0 shrink-0 flex-col items-center leading-none"
          >
            <span
              className={`tracking-[0.02em] transition-all duration-300 ${
                scrolled
                  ? "text-[20px] text-[#9a702d] sm:text-[23px]"
                  : "text-[21px] text-[#9a702d] sm:text-[25px]"
              }`}
              style={{ fontFamily: "Georgia, serif" }}
            >
              पारिजात
            </span>
          </a>

          {/* =====================================================
              DESKTOP NAVIGATION
             ===================================================== */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={`relative py-4 text-[12px] transition-colors duration-300 ${
                  scrolled
                    ? "text-[#514435] hover:text-[#9b702d]"
                    : "text-[#514435] hover:text-[#9b702d]"
                } ${
                  index === 0
                    ? "after:absolute after:bottom-[8px] after:left-1/2 after:h-[1px] after:w-4 after:-translate-x-1/2 after:bg-[#b78a42]"
                    : ""
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* =====================================================
              ACTIONS
             ===================================================== */}
          <div className="flex shrink-0 items-center gap-3 text-[#4b4034] sm:gap-5">

            <button
              type="button"
              className="hidden transition hover:text-[#a77a32] sm:block"
              aria-label="Search"
            >
              <Icon name="search" size={19} />
            </button>

            <button
              type="button"
              className="transition hover:text-[#a77a32]"
              aria-label="Wishlist"
            >
              <Icon name="heart" size={19} />
            </button>

            <button
              type="button"
              className="transition hover:text-[#a77a32]"
              aria-label="Shopping bag"
            >
              <Icon name="bag" size={19} />
            </button>

            <button
              type="button"
              className="lg:hidden"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenu}
            >
              <Icon
                name={mobileMenu ? "close" : "menu"}
                size={22}
              />
            </button>

          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
           ===================================================== */}
        {mobileMenu && (
          <div className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-[#d8bd8d]/50 bg-[#fffdf8] px-5 py-4 sm:px-6 sm:py-5 lg:hidden">
            <nav className="flex flex-col">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMobileMenu(false)}
                  className={`border-b border-[#e8dcc9] py-4 text-sm text-[#544738] transition-colors hover:text-[#9b702d] ${
                    index === 0 ? "text-[#9b702d]" : ""
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}