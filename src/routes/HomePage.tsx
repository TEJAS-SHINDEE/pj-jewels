// src/routes/HomePage.tsx

import { Hero } from "../components/ui/Hero";
import { StorySection } from "../components/ui/StorySection";
import { CollectionsSection } from "../components/ui/CollectionsSection";
import { SignatureProduct } from "../components/ui/SignatureProduct";
import { MostLoved } from "../components/ui/MostLoved";
import { TraditionSection } from "../components/ui/TraditionSection";
import { Features } from "../components/ui/Features";
import { InstagramSection } from "../components/layout/InstagramSection";
import { Testimonials } from "../components/layout/Testimonials";
import { CTA } from "../components/ui/CTA";

export function HomePage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[#fffdf9] text-[#514435]"
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
     
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

    </div>
  );
}