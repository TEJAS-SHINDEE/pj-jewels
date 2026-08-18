import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageTitles: Record<string, string> = {
  "/": "PJ Jewels | Home",
  "/collections": "PJ Jewels | Collections",
  "/new-arrivals": "PJ Jewels | New Arrivals",
  "/wishlist": "PJ Jewels | Wishlist",
  "/cart": "PJ Jewels | Shopping Bag",
  "/about-us": "PJ Jewels | About Us",
  "/contact": "PJ Jewels | Contact",

  "/collections/necklaces": "PJ Jewels | Necklaces",
  "/collections/mangalsutra": "PJ Jewels | Mangalsutra",
  "/collections/earrings": "PJ Jewels | Earrings",
};

export function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const title =
      pageTitles[location.pathname] ||
      "PJ Jewels";

    document.title = title;
  }, [location.pathname]);

  return null;
}