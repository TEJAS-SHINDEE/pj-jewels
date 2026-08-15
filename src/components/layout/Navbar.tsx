/* =========================================================
   NAVBAR
   ========================================================= */

import { useState } from "react";
import { Icon } from "../../data/Icon";

export function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

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
    <>
      <header className="sticky top-0 z-50 border-b border-[#cda45e]/70 bg-[#fffdf8]/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-[64px] max-w-[1400px] items-center justify-between gap-3 px-4 py-3 sm:min-h-[72px] sm:px-8 lg:px-12">

          {/* Logo */}
          <a
            href="#home"
            className="group flex min-w-0 shrink-0 flex-col items-center leading-none"
          >
            <span
              className="text-[21px] tracking-[0.02em] text-[#9a702d] sm:text-[25px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              पारिजात
            </span>

            <span
              className="mt-1 text-[11px] tracking-wide text-[#795b32] sm:text-[14px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              PJ jewels
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={`relative py-6 text-[12px] text-[#514435] transition-colors duration-300 hover:text-[#9b702d] ${index === 0
                    ? "after:absolute after:bottom-[8px] after:left-1/2 after:h-[1px] after:w-4 after:-translate-x-1/2 after:bg-[#b78a42]"
                    : ""
                  }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-3 text-[#4b4034] sm:gap-5">
            <button className="hidden transition hover:text-[#a77a32] sm:block">
              <Icon name="search" size={19} />
            </button>

            <button className="transition hover:text-[#a77a32]">
              <Icon name="heart" size={19} />
            </button>

            <button className="transition hover:text-[#a77a32]">
              <Icon name="bag" size={19} />
            </button>

            <button
              className="lg:hidden"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <Icon name={mobileMenu ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenu && (
          <div className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-[#d8bd8d]/50 bg-[#fffdf8] px-5 py-4 sm:px-6 sm:py-5 lg:hidden">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMobileMenu(false)}
                  className="border-b border-[#e8dcc9] py-4 text-sm text-[#544738]"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}