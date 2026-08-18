// src/routes/AppRoutes.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./HomePage";
import { NewArrivals } from "../pages/shop/NewArrivals";
import { CollectionsSection } from "../components/ui/CollectionsSection";
import { FAQ } from "../pages/shop/FAQ";
import { Returns } from "../pages/shop/Returns";
import { Shipping } from "../pages/shop/Shipping";
import { Bridal } from "../pages/shop/Bridal";
import { Earrings } from "../pages/shop/Earrings";
import { Necklaces } from "../pages/shop/Necklaces";
import { Mangalsutra } from "../pages/shop/Mangalsutra";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Wishlist } from "../pages/shop/Wishlist";
import { PageTitle } from "../components/layout/PageTitle";

function Shop() {
  return <div>Shop Page</div>;
}

function Cart() {
  return <div>Cart Page</div>;
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fffdf9]">
      <div className="text-center">
        <h1
          className="text-4xl text-[#9d702f]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          404
        </h1>

        <p className="mt-2 text-sm text-[#66594b]">
          Page not found
        </p>
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <PageTitle />
      <Navbar />

      <Routes>

        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* New Arrivals */}
        <Route path="/new-arrivals" element={<NewArrivals />} />

        {/* Other pages */}
        <Route path="/shop" element={<Shop />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/collections" element={<CollectionsSection />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />

        <Route path="/collections/necklaces" element={<Necklaces />} />

        <Route path="/collections/mangalsutra" element={<Mangalsutra />} />

        <Route path="/collections/earrings" element={<Earrings />} />

        <Route path="/collections/bridal" element={<Bridal />} />

        <Route path="/shipping" element={<Shipping />} />

        <Route path="/returns" element={<Returns />} />

        <Route path="/faq" element={<FAQ />} />

        {/* <Route path="/order-tracking" element={<OrderTracking />} /> */}
        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}