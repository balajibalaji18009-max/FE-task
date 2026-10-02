import SmartImage from "./SmartImage";

export default function CategoryCard({ category, onSelect }) {
  return (
    <a href="#shop" onClick={() => onSelect(category.id)} className="group block text-center">
      <div className="overflow-hidden rounded-xl">
        <SmartImage src={category.image} alt={category.name} className="h-96 w-full transition duration-500 group-hover:scale-105" />
      </div>
      <h3 className="mt-6 text-xl font-semibold">{category.name}</h3>
    </a>
  );
}
