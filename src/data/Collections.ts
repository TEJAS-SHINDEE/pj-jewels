// import heroImage from "../assets/images/hero-necklace.jpg";
import heroImage from "../assets/images/hero-necklace-2.png";
// import heroImage from "../assets/images/hero-necklace.png";
import collectionNecklace from "../assets/images/collection-necklace.jpg";
import collectionMangalsutra from "../assets/images/collection-mangalsutra.jpg";
import collectionEarrings from "../assets/images/collection-earrings.jpg";
import collectionBridal from "../assets/images/collection-bridal.jpg";

import signatureNecklace from "../assets/images/signature-necklace.jpg";

import antiqueCoin from "../assets/images/product-antique-coin.jpg";
import classicLakshmi from "../assets/images/product-classic-lakshmi.jpg";
import rubyElegance from "../assets/images/product-ruby-elegance.jpg";
import greenStone from "../assets/images/product-green-stone.jpg";
import traditionalEarrings from "../assets/images/product-traditional-earrings.jpg";
import pearlHeritage from "../assets/images/product-pearl-heritage.jpg";
import templeCharm from "../assets/images/product-temple-charm.jpg";
import royalAntique from "../assets/images/product-royal-antique.jpg";

import traditionImage from "../assets/images/tradition.jpg";
import instagram1 from "../assets/instagram/instagram-1.jpg";
import instagram2 from "../assets/instagram/instagram-2.jpg";
import instagram3 from "../assets/instagram/instagram-3.jpg";
import instagram4 from "../assets/instagram/instagram-4.jpg";
import instagram5 from "../assets/instagram/instagram-5.jpg";


/* =========================================================
   IMAGE CONFIGURATION
   Replace these paths with your actual images.
   ========================================================= */

export const IMAGES = {
  hero: heroImage,

  collections: {
    necklaces: collectionNecklace,
    mangalsutra: collectionMangalsutra,
    earrings: collectionEarrings,
    bridal: collectionBridal,
  },

  signature: signatureNecklace,

  products: {
    antiqueCoin,
    classicLakshmi,
    rubyElegance,
    greenStone,
    traditionalEarrings,
    pearlHeritage,
    templeCharm,
    royalAntique,
  },

  tradition: traditionImage,

  instagram: [
    instagram1,
    instagram2,
    instagram3,
    instagram4,
    instagram5,
  ],
  logo: "/images/logo.png",
};

/* =========================================================
   DATA
   ========================================================= */

export const collections = [
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

export const products = [
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