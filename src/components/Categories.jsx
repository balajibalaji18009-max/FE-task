import CategoryCard from "./CategoryCard";
import SectionHeading from "./SectionHeading";
import { categories } from "../data/data";

export default function Categories({ onSelect }) {
  return (
    <section id="categories" className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading title="Browse The Range" text="Find pieces for every room in your home." />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {categories.map((c) => (
          <CategoryCard key={c.id} category={c} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}
