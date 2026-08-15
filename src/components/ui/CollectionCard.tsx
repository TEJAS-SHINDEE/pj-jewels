/* =========================================================
   COLLECTION CARD
   ========================================================= */

interface Collection {
  title: string;
  subtitle: string;
  image: string;
}

interface CollectionCardProps {
  collection: Collection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
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