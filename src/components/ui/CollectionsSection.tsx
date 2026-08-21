/* =========================================================
   COLLECTIONS
   ========================================================= */

import { collections } from "../../data/Collections";
import { CollectionCard } from "./CollectionCard";
import { SectionTitle } from "./SectionTitle";

export function CollectionsSection() {
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