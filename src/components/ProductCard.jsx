import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import SmartImage from "./SmartImage";

export default function ProductCard({ product, onAdd }) {
  const [liked, setLiked] = useState(false);
  const { title, price, thumbnail, discountPercentage, brand, category } = product;
  const oldPrice = discountPercentage ? price / (1 - discountPercentage / 100) : null;

  return (
    <article className="group relative overflow-hidden bg-card">
      <div className="relative">
        <SmartImage src={thumbnail} alt={title} className="h-72 w-full bg-white" />
        {discountPercentage > 0 && (
          <span className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E97171] text-sm font-medium text-white">
            -{Math.round(discountPercentage)}%
          </span>
        )}
        <button
          onClick={() => setLiked(!liked)}
          aria-pressed={liked}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute left-4 top-4 rounded-full bg-white p-2 shadow"
        >
          <FiHeart className={liked ? "fill-gold text-gold" : ""} />
        </button>
        <div className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-100 transition md:opacity-0 md:group-hover:opacity-100">
          <button onClick={() => onAdd(product)} className="bg-white px-10 py-3 font-semibold text-gold hover:bg-cream">
            Add to cart
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="truncate text-xl font-semibold">{title}</h3>
        <p className="mt-1 truncate text-muted">{brand || category}</p>
        <p className="mt-2 flex items-baseline gap-3">
          <span className="text-lg font-semibold">${price.toFixed(2)}</span>
          {oldPrice && <span className="text-sm text-muted line-through">${oldPrice.toFixed(2)}</span>}
        </p>
      </div>
    </article>
  );
}
