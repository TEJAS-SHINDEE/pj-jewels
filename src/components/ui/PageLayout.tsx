import { Footer } from "../layout/Footer";
import { Navbar } from "../layout/Navbar";

export function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#fffdf9]/95">
      <Navbar />

      <main  >
        {children}
      </main>

      <Footer />


    </div>
  );
}