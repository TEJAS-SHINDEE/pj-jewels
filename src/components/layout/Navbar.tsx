/* =========================================================
   NAVBAR
   ========================================================= */

import { useEffect, useState } from "react";
import { Icon } from "../../data/Icon";
import { Link } from "react-router-dom";
import { products } from "../../data/Collections";

export function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Collections",
      path: "/collections",
    },
    {
      label: "Necklaces",
      path: "/collections/necklaces",
    },
    {
      label: "Mangalsutra",
      path: "/collections/mangalsutra",
    },
    {
      label: "Earrings",
      path: "/collections/earrings",
    },
    {
      label: "About Us",
      path: "/about-us",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  /* =========================================================
   SEARCH RESULTS
   ========================================================= */
  const searchResults =
    searchQuery.trim().length > 0
      ? products.filter((product) => {
        const query = searchQuery.toLowerCase();
        return (
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        );
      })
      : [];


  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "px-0 pt-0"
        : "px-4 pt-4 sm:px-6 lg:px-10"
        }`}
    >
      <div
        className={`mx-auto transition-all duration-300 ${scrolled
          ? "w-full rounded-none border-b border-[#dfccb0] bg-[#fffdf9] shadow-md backdrop-blur-md"
          : "max-w-[1500px] rounded-xl border border-[#d8bd8d] bg-[#fffdf9] shadow-sm backdrop-blur-md"
          }`}
      >
        <div
          className={`mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-8 lg:px-12 ${scrolled
            ? "min-h-[56px] py-2"
            : "min-h-[62px] py-3"
            }`}
        >

          {/* =====================================================
              LOGO
             ===================================================== */}
          <Link
            to="/"
            className="group flex min-w-0 shrink-0 flex-col items-center leading-none"
          >
            <span
              className={`tracking-[0.02em] transition-all duration-300 ${scrolled
                ? "text-[20px] text-[#9a702d] sm:text-[23px]"
                : "text-[21px] text-[#9a702d] sm:text-[25px]"
                }`}
              style={{ fontFamily: "Georgia, serif" }}
            >
              पारिजात
            </span>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
             ===================================================== */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.path}
                className={`relative py-4 text-[12px] transition-colors duration-300 ${scrolled
                  ? "text-[#514435] hover:text-[#9b702d]"
                  : "text-[#514435] hover:text-[#9b702d]"
                  } ${index === 0
                    ? "after:absolute after:bottom-[8px] after:left-1/2 after:h-[1px] after:w-4 after:-translate-x-1/2 after:bg-[#b78a42]"
                    : ""
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* =====================================================
              ACTIONS
             ===================================================== */}
          <div className="flex shrink-0 items-center gap-3 text-[#4b4034] sm:gap-5">

            <button
              type="button"
              onClick={() => {
                setSearchOpen(!searchOpen);
                setMobileMenu(false);
              }}
              className="transition hover:text-[#a77a32]"
              aria-label="Search"
              aria-expanded={searchOpen}
            >
              <Icon name="search" size={19} />
            </button>

            <Link
              to="/wishlist"
              className="transition hover:text-[#a77a32]"
              aria-label="Wishlist"
            >
              <Icon name="heart" size={19} />
            </Link>

            <Link
              to="/cart"
              className="transition hover:text-[#a77a32]"
              aria-label="Shopping bag"
            >
              <Icon name="bag" size={19} />
            </Link>

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
            SEARCH PANEL
           ===================================================== */}
        {/* =====================================================
    SEARCH OVERLAY
   ===================================================== */}

        {searchOpen && (
          <div
            className="fixed inset-0 z-[60] bg-[#382a1d]/30 backdrop-blur-[3px]"
            onClick={() => {
              setSearchOpen(false);
              setSearchQuery("");
            }}
          >

            {/* =================================================
        SEARCH MODAL
       ================================================= */}

            <div
              className="
        absolute
        left-0
        right-0
        top-0
        bg-[#fffdf9]
        shadow-[0_12px_40px_rgba(80,60,35,0.15)]
      "
              onClick={(e) => e.stopPropagation()}
            >

              {/* =================================================
          SEARCH HEADER
         ================================================= */}

              <div className="border-b border-[#dfccb0]">

                <div className="mx-auto flex max-w-[1100px] items-center gap-4 px-5 py-5 sm:px-8">

                  {/* Search Icon */}

                  <div className="shrink-0 text-[#8d795e]">
                    <Icon
                      name="search"
                      size={19}
                    />
                  </div>


                  {/* Search Input */}

                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    placeholder="Search jewellery..."
                    className="
              min-w-0
              flex-1
              bg-transparent
              text-[13px]
              text-[#514435]
              outline-none
              placeholder:text-[#a89579]
              sm:text-[14px]
            "
                  />


                  {/* Close */}

                  <button
                    type="button"
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="
              shrink-0
              text-[#766956]
              transition
              hover:text-[#9b702d]
            "
                    aria-label="Close search"
                  >
                    <Icon
                      name="close"
                      size={19}
                    />
                  </button>

                </div>

              </div>


              {/* =================================================
          SEARCH CONTENT
         ================================================= */}

              <div className="mx-auto max-h-[70vh] max-w-[1100px] overflow-y-auto px-5 py-5 sm:px-8 sm:py-6">

                {/* =================================================
            EMPTY SEARCH
           ================================================= */}

                {!searchQuery.trim() && (

                  <div className="py-8 text-center">

                    <p
                      className="text-[18px] text-[#66513a]"
                      style={{
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      Discover Your Perfect Jewellery
                    </p>

                    <p className="mt-2 text-[9px] tracking-[0.08em] text-[#9a8060]">
                      Search by necklace, earrings, mangalsutra or product name
                    </p>

                    {/* Popular Searches */}

                    <div className="mt-5 flex flex-wrap justify-center gap-2">

                      {[
                        "Necklaces",
                        "Mangalsutra",
                        "Earrings",
                        "Antique",
                        "Lakshmi",
                      ].map((item) => (

                        <button
                          key={item}
                          type="button"
                          onClick={() => setSearchQuery(item)}
                          className="
                    border
                    border-[#dfccb0]
                    bg-[#fffdfa]
                    px-4
                    py-2
                    text-[8px]
                    text-[#73562f]
                    transition
                    hover:border-[#b98a47]
                    hover:bg-[#faf3e8]
                  "
                        >
                          {item}
                        </button>

                      ))}

                    </div>

                  </div>

                )}


                {/* =================================================
            SEARCH RESULTS
           ================================================= */}

                {searchQuery.trim() && (

                  <div>

                    {searchResults.length > 0 ? (

                      <>

                        {/* Result Heading */}

                        <div className="mb-4 flex items-center gap-3">

                          <span className="h-px flex-1 bg-[#eadfce]" />

                          <p className="shrink-0 text-[8px] tracking-[0.2em] text-[#9a8060]">
                            SEARCH RESULTS
                          </p>

                          <span className="h-px flex-1 bg-[#eadfce]" />

                        </div>


                        {/* Products */}

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

                          {searchResults.map((product) => (

                            <Link
                              key={product.name}
                              to="/new-arrivals"
                              onClick={() => {
                                setSearchOpen(false);
                                setSearchQuery("");
                              }}
                              className="
                        group
                        flex
                        items-center
                        gap-3
                        border
                        border-[#eadfce]
                        bg-[#fffdfa]
                        p-2
                        transition
                        duration-300
                        hover:border-[#c8a66b]
                        hover:bg-[#fffaf2]
                      "
                            >

                              {/* Image */}

                              <div
                                className="
                          h-16
                          w-16
                          shrink-0
                          overflow-hidden
                          bg-[#f1ebe0]
                        "
                              >

                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="
                            h-full
                            w-full
                            object-cover
                            transition
                            duration-500
                            group-hover:scale-105
                          "
                                />

                              </div>


                              {/* Details */}

                              <div className="min-w-0">

                                <p className="text-[7px] tracking-[0.15em] text-[#9a8060]">
                                  {product.category}
                                </p>

                                <p
                                  className="
                            mt-1
                            truncate
                            text-[11px]
                            text-[#55432e]
                          "
                                  style={{
                                    fontFamily: "Georgia, serif",
                                  }}
                                >
                                  {product.name}
                                </p>

                                <p className="mt-1 text-[9px] font-medium text-[#73562f]">
                                  {product.price}
                                </p>

                              </div>

                            </Link>

                          ))}

                        </div>

                      </>

                    ) : (

                      /* =================================================
                         NO RESULTS
                         ================================================= */

                      <div className="py-10 text-center">

                        <p
                          className="text-[16px] text-[#66513a]"
                          style={{
                            fontFamily: "Georgia, serif",
                          }}
                        >
                          No jewellery found
                        </p>

                        <p className="mt-2 text-[9px] text-[#9a8060]">
                          Try searching for necklaces, earrings or mangalsutra.
                        </p>

                      </div>

                    )}

                  </div>

                )}

              </div>

            </div>

          </div>
        )}


        {/* =====================================================
            MOBILE MENU
           ===================================================== */}
        {mobileMenu && (
          <div className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-[#d8bd8d]/50 bg-[#fffdf8] px-5 py-4 sm:px-6 sm:py-5 lg:hidden">
            <nav className="flex flex-col">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  className={`border-b border-[#e8dcc9] py-4 text-sm text-[#544738] transition-colors hover:text-[#9b702d] ${index === 0 ? "text-[#9b702d]" : ""
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}