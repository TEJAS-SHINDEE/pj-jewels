// import AppRoutes from "./routes/AppRoutes";

// function App() {
//   return <AppRoutes />;
// }

// export default App;



// import AppRoutes from "./routes/AppRoutes";

// function App() {
//   return <AppRoutes />;
// }

// export default App;



import React, { useState } from "react";

/* =========================================================
   PJ JEWELS — COMPLETE SINGLE FILE REACT WEBSITE
   ========================================================= */

/* =========================================================
   ICONS
   ========================================================= */

const Icon = ({ name, size = 20, strokeWidth = 1.5 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),

    heart: (
      <path d="M20.8 8.9c0 5.1-8.8 10.1-8.8 10.1S3.2 14 3.2 8.9A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.6Z" />
    ),

    bag: (
      <>
        <path d="M5 8h14l-1 13H6L5 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </>
    ),

    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),

    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),

    arrowRight: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),

    arrowLeft: (
      <>
        <path d="M19 12H5" />
        <path d="m11 18-6-6 6-6" />
      </>
    ),

    star: (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    ),

    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" />
      </>
    ),

    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L9 10.9a16 16 0 0 0 4.1 4.1l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z" />
    ),

    shield: (
      <>
        <path d="M12 3 20 6v6c0 5-3.4 8.5-8 9-4.6-.5-8-4-8-9V6l8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),

    diamond: (
      <>
        <path d="m2 9 4-5h12l4 5-10 11L2 9Z" />
        <path d="M2 9h20" />
        <path d="m8 4 4 16 4-16" />
      </>
    ),

    flower: (
      <>
        <path d="M12 21c-1.5-4.2-4.5-5.3-4.5-8.4 0-2.4 1.8-4.1 4.5-4.1s4.5 1.7 4.5 4.1C16.5 15.7 13.5 16.8 12 21Z" />
        <path d="M12 8.5c-2.8-2.5-2.5-5.2 0-6.5 2.5 1.3 2.8 4 0 6.5Z" />
        <path d="M8.3 11.5C4.6 11.7 2.5 9.8 3 7c2.8-.2 4.5 1.4 5.3 4.5Z" />
        <path d="M15.7 11.5C19.4 11.7 21.5 9.8 21 7c-2.8-.2-4.5 1.4-5.3 4.5Z" />
      </>
    ),
  };

  return <svg {...common}>{icons[name]}</svg>;
};

/* =========================================================
   IMAGE CONFIGURATION
   Replace these paths with your actual images.
   ========================================================= */

const IMAGES = {
  hero: "/images/hero-necklace.jpg",

  collections: {
    necklaces: "/images/collection-necklace.jpg",
    mangalsutra: "/images/collection-mangalsutra.jpg",
    earrings: "/images/collection-earrings.jpg",
    bridal: "/images/collection-bridal.jpg",
  },

  signature: "/images/signature-necklace.jpg",

  products: {
    antiqueCoin: "/images/product-antique-coin.jpg",
    classicLakshmi: "/images/product-classic-lakshmi.jpg",
    rubyElegance: "/images/product-ruby-elegance.jpg",
    greenStone: "/images/product-green-stone.jpg",
    traditionalEarrings: "/images/product-traditional-earrings.jpg",
    pearlHeritage: "/images/product-pearl-heritage.jpg",
    templeCharm: "/images/product-temple-charm.jpg",
    royalAntique: "/images/product-royal-antique.jpg",
  },

  tradition: "/images/tradition.jpg",

  instagram: [
    "/images/instagram-1.jpg",
    "/images/instagram-2.jpg",
    "/images/instagram-3.jpg",
    "/images/instagram-4.jpg",
    "/images/instagram-5.jpg",
  ],

  logo: "/images/logo.png",
};

/* =========================================================
   DATA
   ========================================================= */

const collections = [
  {
    title: "Traditional Necklaces",
    subtitle: "Explore Collection",
    image: IMAGES.collections.necklaces,
  },
  {
    title: "Mangalsutra Collection",
    subtitle: "Explore Collection",
    image: IMAGES.collections.mangalsutra,
  },
  {
    title: "Elegant Earrings",
    subtitle: "Explore Collection",
    image: IMAGES.collections.earrings,
  },
  {
    title: "Bridal Jewellery",
    subtitle: "Explore Collection",
    image: IMAGES.collections.bridal,
  },
];

const products = [
  {
    category: "NECKLACES",
    name: "Antique Coin Necklace",
    price: "₹ 2,199",
    image: IMAGES.products.antiqueCoin,
  },
  {
    category: "NECKLACES",
    name: "Classic Lakshmi Haar",
    price: "₹ 2,499",
    image: IMAGES.products.classicLakshmi,
  },
  {
    category: "NECKLACES",
    name: "Ruby Elegance Necklace",
    price: "₹ 2,399",
    image: IMAGES.products.rubyElegance,
  },
  {
    category: "MANGALSUTRA",
    name: "Green Stone Mangalsutra",
    price: "₹ 1,899",
    image: IMAGES.products.greenStone,
  },
  {
    category: "EARRINGS",
    name: "Traditional Coin Earrings",
    price: "₹ 1,199",
    image: IMAGES.products.traditionalEarrings,
  },
  {
    category: "NECKLACES",
    name: "Pearl Heritage Set",
    price: "₹ 2,699",
    image: IMAGES.products.pearlHeritage,
  },
  {
    category: "NECKLACES",
    name: "Temple Charm Necklace",
    price: "₹ 2,299",
    image: IMAGES.products.templeCharm,
  },
  {
    category: "NECKLACES",
    name: "Royal Antique Necklace",
    price: "₹ 2,799",
    image: IMAGES.products.royalAntique,
  },
];

/* =========================================================
   NAVBAR
   ========================================================= */

function Navbar() {
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
                className={`relative py-6 text-[12px] text-[#514435] transition-colors duration-300 hover:text-[#9b702d] ${
                  index === 0
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

/* =========================================================
   HERO
   ========================================================= */

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#d5b87c]"
    >
      <div className="grid grid-cols-1 lg:min-h-[500px] lg:grid-cols-[42%_58%]">

        {/* Left Content */}
        <div className="relative flex items-center bg-[#fffdf8] px-5 py-12 sm:px-10 sm:py-14 md:px-14 lg:px-16 lg:py-16 xl:px-20">

          {/* Decorative flower */}
          <div className="pointer-events-none absolute bottom-0 left-0 opacity-40">
            <svg
              width="120"
              height="170"
              viewBox="0 0 120 170"
              fill="none"
            >
              <path
                d="M13 168C31 131 47 90 67 60C84 35 100 20 117 7"
                stroke="#d9c6a1"
                strokeWidth="1"
              />
              <path
                d="M31 126C18 116 10 104 8 91"
                stroke="#d9c6a1"
              />
              <path
                d="M43 102C30 93 26 83 28 72"
                stroke="#d9c6a1"
              />
              <path
                d="M57 77C47 67 46 57 50 48"
                stroke="#d9c6a1"
              />
            </svg>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[500px]">

            <p className="mb-4 text-[9px] font-medium tracking-[0.22em] text-[#76634a] sm:mb-5 sm:text-[10px] sm:tracking-[0.32em]">
              TIMELESS INDIAN ELEGANCE
            </p>

            <h1
              className="max-w-[520px] text-[34px] leading-[1.16] text-[#a07431] sm:text-[44px] md:text-[50px] lg:text-[48px] xl:text-[54px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              परंपरा आमची,
              <br />
              विश्वास तुमचा
            </h1>

            <p
              className="mt-5 max-w-[310px] text-[12px] leading-5 text-[#66594b] sm:mt-6 sm:text-[13px] sm:leading-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Jewellery that carries tradition,
              <br />
              crafted for the woman of today.
            </p>

            <div className="mt-6 flex w-full flex-col gap-2.5 sm:mt-7 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3">
              <a
                href="#collections"
                className="w-full border border-[#bd9556] px-4 py-2.5 text-center text-[10px] tracking-wide text-[#73572f] transition hover:bg-[#a77b35] hover:text-white sm:w-auto sm:px-5"
              >
                EXPLORE COLLECTION
              </a>

              <a
                href="#most-loved"
                className="w-full border border-[#bd9556] px-4 py-2.5 text-center text-[10px] tracking-wide text-[#73572f] transition hover:bg-[#a77b35] hover:text-white sm:w-auto sm:px-5"
              >
                VIEW NEW ARRIVALS
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[4/3] min-h-[300px] overflow-hidden bg-[#eee7db] sm:aspect-[16/10] sm:min-h-[380px] lg:aspect-auto lg:min-h-[500px]">

          <img
            src={IMAGES.hero}
            alt="PJ Jewels traditional necklace"
            className="h-full w-full object-cover"
          />

          {/* Decorative curved border */}
          <div className="pointer-events-none absolute left-[-20px] top-0 hidden h-full w-[60px] lg:block">
            <svg
              width="80"
              height="100%"
              viewBox="0 0 80 500"
              preserveAspectRatio="none"
            >
              <path
                d="M79 0C50 12 61 35 35 49C9 63 14 87 35 104C59 123 59 139 29 158C4 174 7 201 34 220C59 238 59 261 34 280C9 299 7 326 34 342C60 359 58 379 35 397C11 416 9 440 37 457C61 471 58 489 79 500"
                fill="none"
                stroke="#c89d5a"
                strokeWidth="1.2"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STORY SECTION
   ========================================================= */

function StorySection() {
  return (
    <section
      id="about-us"
      className="relative overflow-hidden border-b border-[#eadbc0] bg-[#fffdf8] px-6 py-8 sm:py-10"
    >
      <div className="mx-auto w-full max-w-[650px] text-center">

        <p className="text-[9px] tracking-[0.28em] text-[#8b714d]">
          OUR STORY
        </p>

        <h2
          className="mt-2 text-[22px] leading-tight text-[#73542b] sm:text-[28px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Tradition, Crafted With Grace
        </h2>

        <div className="my-3 flex items-center justify-center gap-2 text-[#bd8b3d]">
          <span className="h-px w-7 bg-[#c8a366]" />
          <span>✦</span>
          <span className="h-px w-7 bg-[#c8a366]" />
        </div>

        <p
          className="mx-auto max-w-[540px] text-[12px] leading-5 text-[#716457] sm:text-[12px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          PJ Jewels celebrates the timeless beauty of Indian jewellery
          <br className="hidden sm:block" />
          through elegant designs inspired by tradition,
          <br className="hidden sm:block" />
          culture and contemporary women.
        </p>
      </div>
    </section>
  );
}

/* =========================================================
   SECTION TITLE
   ========================================================= */

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-6 text-center">
      {eyebrow && (
        <p className="mb-1 text-[9px] tracking-[0.22em] text-[#95774c]">
          {eyebrow}
        </p>
      )}

      <div className="flex items-center justify-center gap-3">
        <span className="hidden h-px w-8 bg-[#c6a167] sm:block" />
        <span className="text-[#bc8b42]">→</span>

        <h2
          className="text-[25px] text-[#59462f] sm:text-[28px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {title}
        </h2>

        <span className="text-[#bc8b42]">←</span>
        <span className="hidden h-px w-8 bg-[#c6a167] sm:block" />
      </div>

      {subtitle && (
        <p className="mt-0.5 text-[11px] text-[#806e59]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   COLLECTION CARD
   ========================================================= */

function CollectionCard({ collection }) {
  return (
    <a
      href="#most-loved"
      className="group block overflow-hidden rounded-[6px] border border-[#e3cfad] bg-[#fffdfa]"
    >
      <div className="aspect-[1.45/1] overflow-hidden bg-[#f1ebe0]">
        <img
          src={collection.image}
          alt={collection.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="px-4 py-3">
        <h3
          className="text-[12px] text-[#66513a]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {collection.title}
        </h3>

        <p className="mt-1 text-[10px] text-[#a67a37]">
          {collection.subtitle}
          <span className="ml-2 inline-block transition group-hover:translate-x-1">
            →
          </span>
        </p>
      </div>
    </a>
  );
}

/* =========================================================
   COLLECTIONS
   ========================================================= */

function CollectionsSection() {
  return (
    <section
      id="collections"
      className="border-b border-[#e4d1ae] bg-[#fffdf9] px-4 py-7 sm:px-8 lg:px-16"
    >
      <SectionTitle
        title="Explore Our Collections"
        subtitle="Timeless designs for every beautiful occasion."
      />

      <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4 lg:gap-4">
        {collections.map((collection) => (
          <CollectionCard
            key={collection.title}
            collection={collection}
          />
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   SIGNATURE PRODUCT
   ========================================================= */

function SignatureProduct() {
  return (
    <section className="border-b border-[#dfc99f] bg-[#fffdf9]">
      <div className="grid grid-cols-1 lg:grid-cols-[57%_43%]">

        <div className="aspect-[4/3] overflow-hidden bg-[#eee7db] sm:aspect-[3/2] lg:aspect-auto lg:min-h-[320px]">
          <img
            src={IMAGES.signature}
            alt="Antique Lakshmi Necklace"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center px-5 py-9 sm:px-10 sm:py-10 lg:px-10 xl:px-14">
          <div className="max-w-[420px]">

            <p className="text-[10px] tracking-[0.18em] text-[#987a52]">
              Signature Collection
            </p>

            <h2
              className="mt-2 text-[24px] leading-tight text-[#4d3d2b] sm:text-[31px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Antique Lakshmi Necklace
            </h2>

            <p
              className="mt-3 max-w-[300px] text-[12px] leading-5 text-[#756658]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              An elegant expression of traditional
              <br />
              Indian craftsmanship.
            </p>

            <p
              className="mt-2 text-[14px] text-[#54432d]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              ₹ 2,499
            </p>

            <div className="mt-4 flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <button className="w-full border border-[#c9a365] px-5 py-2.5 text-[9px] tracking-wide text-[#6e5432] transition hover:bg-[#a97b36] hover:text-white sm:w-auto">
                VIEW DETAILS
              </button>

              <button className="w-full bg-[#b4853e] px-5 py-2.5 text-[9px] tracking-wide text-white transition hover:bg-[#8e672f] sm:w-auto">
                ADD TO BAG
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[9px] text-[#75644f] sm:gap-5">
              <span>◇ Premium Finish</span>
              <span>♢ Carefully Crafted</span>
              <span>♧ Elegant Gift Packaging</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PRODUCT CARD
   ========================================================= */

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-[6px] border border-[#e6d7bf] bg-[#fffdfa]">

      <div className="relative aspect-[1.25/1] overflow-hidden bg-[#f2ece2]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <button
          onClick={() => setLiked(!liked)}
          className={`absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 backdrop-blur transition ${
            liked
              ? "text-[#a87532]"
              : "text-[#766956] hover:text-[#a87532]"
          }`}
        >
          <Icon
            name="heart"
            size={16}
            strokeWidth={liked ? 2 : 1.4}
          />
        </button>
      </div>

      <div className="px-3 py-2.5">
        <p className="text-[7px] tracking-[0.15em] text-[#9a8060]">
          {product.category}
        </p>

        <h3
          className="mt-1 text-[10px] text-[#55432e]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {product.name}
        </h3>

        <p className="mt-1 text-[10px] font-medium text-[#57442d]">
          {product.price}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   MOST LOVED
   ========================================================= */

function MostLoved() {
  return (
    <section
      id="most-loved"
      className="border-b border-[#dfccb0] bg-[#fffdf9] px-4 py-6 sm:px-8 lg:px-12"
    >
      <SectionTitle title="Most Loved" />

      <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4 lg:gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
          />
        ))}
      </div>

      <div className="mt-4 text-center">
        <a
          href="#collections"
          className="inline-block border border-[#b98a47] px-7 py-2 text-[9px] text-[#73562f] transition hover:bg-[#a77b35] hover:text-white"
        >
          VIEW ALL COLLECTIONS
        </a>
      </div>
    </section>
  );
}

/* =========================================================
   TRADITION SECTION
   ========================================================= */

function TraditionSection() {
  return (
    <section className="border-b border-[#d9c39c] bg-[#fffdf8]">
      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="aspect-[4/3] min-h-[240px] overflow-hidden sm:aspect-[16/9] md:aspect-auto md:min-h-[300px]">
          <img
            src={IMAGES.tradition}
            alt="Rooted in tradition"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative flex items-center overflow-hidden px-5 py-10 sm:px-10 sm:py-12 lg:px-16">

          <div className="absolute right-0 top-0 opacity-40">
            <svg width="130" height="180" viewBox="0 0 130 180">
              <path
                d="M20 180C50 130 65 85 126 10"
                stroke="#d7bd91"
                fill="none"
              />
              <path
                d="M42 139C25 133 16 120 14 106"
                stroke="#d7bd91"
                fill="none"
              />
              <path
                d="M61 106C45 100 40 89 42 76"
                stroke="#d7bd91"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative z-10 w-full max-w-[470px]">

            <div className="mb-4 text-[#b7863d]">✦</div>

            <p className="text-[9px] tracking-[0.18em] text-[#756148]">
              ROOTED IN TRADITION
            </p>

            <p
              className="mt-2 text-[13px] leading-5 text-[#685949]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Every piece reflects the beauty of Indian craftsmanship,
              designed to preserve tradition while complementing modern
              elegance.
            </p>

            <a
              href="#about-us"
              className="mt-4 inline-block text-[10px] text-[#9c712f]"
            >
              Discover Our Story
              <span className="ml-2">→</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURES
   ========================================================= */

function Features() {
  const features = [
    {
      icon: "flower",
      title: "Timeless Designs",
      text: "Elegant jewellery inspired by Indian tradition.",
    },
    {
      icon: "diamond",
      title: "Premium Finish",
      text: "Crafted with attention to every detail.",
    },
    {
      icon: "shield",
      title: "Trusted Quality",
      text: "Designed with care and confidence.",
    },
    {
      icon: "heart",
      title: "Made For You",
      text: "Jewellery for celebrations, moments and memories.",
    },
  ];

  return (
    <section className="border-b border-[#e3ceb0] bg-[#fffdf9]">
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex items-center gap-3 px-5 py-5 sm:gap-4 sm:px-8 sm:py-6 ${
              index !== 0 ? "border-l border-[#e2cfb0]" : ""
            }`}
          >
            <div className="shrink-0 text-[#b78338]">
              <Icon name={feature.icon} size={30} strokeWidth={1.1} />
            </div>

            <div>
              <h3
                className="text-[11px] text-[#5d4931]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {feature.title}
              </h3>

              <p className="mt-1 text-[8px] leading-4 text-[#80705e]">
                {feature.text}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

/* =========================================================
   INSTAGRAM
   ========================================================= */

function InstagramSection() {
  return (
    <section className="border-b border-[#e2ceb0] bg-[#fffdf9] px-4 py-6 sm:px-8">

      <div className="mx-auto flex max-w-[1180px] flex-col gap-5 md:flex-row md:items-center">

        <div className="w-full shrink-0 text-center md:w-[180px] md:text-left lg:w-[220px]">
          <h2
            className="text-[22px] text-[#5b4630]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Follow Our Journey
          </h2>

          <p className="mt-1 text-[9px] text-[#967a57]">
            @pj_jewels_by_meghana
          </p>

          <a
            href="#instagram"
            className="mt-3 inline-flex items-center gap-2 text-[9px] text-[#9d7337]"
          >
            FOLLOW US ON INSTAGRAM
            <span>→</span>
          </a>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
          {IMAGES.instagram.map((image, index) => (
            <a
              href="#instagram"
              key={index}
              className="group aspect-square overflow-hidden bg-[#eee7db]"
            >
              <img
                src={image}
                alt={`Instagram ${index + 1}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

/* =========================================================
   TESTIMONIALS
   ========================================================= */

function Testimonials() {
  const testimonials = [
    {
      text: "Beautiful finishing and exactly as shown. Absolutely loved the necklace.",
      author: "Happy Customer",
    },
    {
      text: "Very elegant jewellery with premium quality. Packaging was excellent too!",
      author: "Priya S.",
    },
    {
      text: "PJ Jewels never disappoints. Truly timeless designs.",
      author: "Sneha R.",
    },
  ];

  return (
    <section className="bg-[#fffdf9] px-4 py-6 sm:px-8">

      <SectionTitle title="Loved By You" />

      <div className="mx-auto grid max-w-[1050px] grid-cols-1 md:grid-cols-3">

        {testimonials.map((item, index) => (
          <div
            key={item.author}
            className={`relative px-6 py-3 text-center ${
              index !== 0
                ? "border-t border-[#e2ceb0] md:border-l md:border-t-0"
                : ""
            }`}
          >
            <div className="absolute left-4 top-0 text-[24px] text-[#bd8d43]">
              “
            </div>

            <p
              className="mx-auto max-w-[260px] text-[10px] leading-5 text-[#66594b]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {item.text}
            </p>

            <p className="mt-2 text-[9px] text-[#806b4d]">
              — {item.author}
            </p>

            <div className="mt-1 flex justify-center gap-0.5 text-[#b27e32]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon
                  key={star}
                  name="star"
                  size={8}
                  strokeWidth={1}
                />
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

/* =========================================================
   CTA
   ========================================================= */

function CTA() {
  return (
    <section className="px-4 pb-5 sm:px-8">

      <div className="relative mx-auto max-w-[1250px] overflow-hidden rounded-[14px] border border-[#c79b58] bg-[#eee1ca]">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url(${IMAGES.hero})`,
          }}
        />

        <div className="relative z-10 px-5 py-8 text-center sm:px-6 sm:py-10">

          <h2
            className="text-[24px] leading-tight text-[#4f3e2b] sm:text-[32px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Find Something Beautiful
          </h2>

          <p className="mt-1 text-[10px] text-[#665744]">
            Discover jewellery that becomes part of your story.
          </p>

          <a
            href="#collections"
            className="mt-4 inline-block bg-[#b18442] px-6 py-2 text-[9px] tracking-wide text-white transition hover:bg-[#8e682f]"
          >
            EXPLORE COLLECTION
          </a>

        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FOOTER
   ========================================================= */

function Footer() {
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

/* =========================================================
   MAIN APP
   ========================================================= */

export default function App() {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[#fffdf9] text-[#514435]"
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <Navbar />

      <main>
        <Hero />

        <StorySection />

        <CollectionsSection />

        <SignatureProduct />

        <MostLoved />

        <TraditionSection />

        <Features />

        <InstagramSection />

        <Testimonials />

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
