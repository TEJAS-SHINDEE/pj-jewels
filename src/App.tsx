
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/ui/Hero";
import { StorySection } from "./components/ui/StorySection";
import { CollectionsSection } from "./components/ui/CollectionsSection";
import { SignatureProduct } from "./components/ui/SignatureProduct";
import { MostLoved } from "./components/ui/MostLoved";
import { TraditionSection } from "./components/ui/TraditionSection";
import { Features } from "./components/ui/Features";
import { InstagramSection } from "./components/layout/InstagramSection";
import { Testimonials } from "./components/layout/testimonials";
import { CTA } from "./components/ui/CTA";
import { Footer } from "./components/layout/footer";

/* =========================================================
   PJ JEWELS — COMPLETE SINGLE FILE REACT WEBSITE
   ========================================================= */


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