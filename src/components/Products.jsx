import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";
import { filterOptions } from "../data/data";

const PAGE_SIZE = 4;

export default function Products({ products, loading, error, onRetry, active, onFilter, onAdd }) {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => setShowAll(false), [active]);

  const filtered =
    active === "All" ? products : products.filter((p) => p.title.toLowerCase().includes(active.toLowerCase()));
  const visible = showAll ? filtered : filtered.slice(0, PAGE_SIZE);

  return (
    <section id="shop" className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
      <SectionHeading title="Our Products" />

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filterOptions.map((f) => (
          <button
            key={f}
            onClick={() => onFilter(f)}
            aria-pressed={active === f}
            className={`px-5 py-2 text-sm font-medium ${active === f ? "bg-gold text-white" : "bg-beige hover:bg-cream"}`}
          >
            {f}
          </button>
        ))}
      </div>

      {loading && (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" aria-busy="true">
          {[...Array(4)].map((_, i) => <div key={i} className="h-96 animate-pulse bg-card" />)}
        </div>
      )}

      {error && !loading && (
        <div role="alert" className="bg-card p-8 text-center">
          <p className="font-medium">We could not load the products. {error}</p>
          <button onClick={onRetry} className="mt-4 bg-gold px-8 py-3 font-semibold text-white">Try again</button>
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <p className="bg-card p-8 text-center">No products match this filter. Choose All to see everything.</p>
      )}

      {!loading && !error && filtered.length > 0 && (
        <>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((p) => <ProductCard key={p.id} product={p} onAdd={onAdd} />)}
          </div>
          {filtered.length > PAGE_SIZE && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="border border-gold px-16 py-3 font-semibold text-gold hover:bg-gold hover:text-white"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
