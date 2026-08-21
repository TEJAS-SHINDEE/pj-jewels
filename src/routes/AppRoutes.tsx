// src/routes/AppRoutes.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/shop/HomePage";
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
import { OrderTracking } from "../pages/shop/OrderTracking";
import { AboutUs } from "../pages/shop/AboutUs";
import { ContactUs } from "../pages/shop/ContactUs";
import { Collections } from "../pages/shop/Collections";
import Cart from "../pages/shop/CartPage";


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

      {/* IMPORTANT:
          Navbar is fixed, so create space for it.
      */}
      <main className="pt-[80px] lg:pt-[82px] ">
        <Routes>

          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Contact Us */}
          <Route path="/contact-us" element={<ContactUs />} />

         
          {/* Collections */}
          <Route path="/collections" element={<Collections />} />
          
          <Route
            path="/collections/necklaces"
            element={<Necklaces />}
          />

          <Route
            path="/collections/mangalsutra"
            element={<Mangalsutra />}
          />

          <Route
            path="/collections/earrings"
            element={<Earrings />}
          />

          <Route
            path="/collections/bridal"
            element={<Bridal />}
          />

          {/* Products */}
          <Route
            path="/new-arrivals"
            element={<NewArrivals />}
          />

          {/* Customer */}
          <Route
            path="/wishlist"
            element={<Wishlist />}
          />

          {/* <Route
            path="/cart"
            element={<Cart />}
          /> */}

          {/* Information */}
          <Route
            path="/shipping"
            element={<Shipping />}
          />
          {/* Information */}
          <Route
            path="/about-us"
            element={<AboutUs />}
          />

          <Route
            path="/returns"
            element={<Returns />}
          />

          <Route
            path="/faq"
            element={<FAQ />}
          />

          <Route
            path="/order-tracking"
            element={<OrderTracking />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}