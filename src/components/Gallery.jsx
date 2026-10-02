import SmartImage from "./SmartImage";
import { gallery } from "../data/data";

export default function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
      <div className="mb-10 text-center">
        <p className="font-semibold text-muted">Share your setup with</p>
        <h2 className="text-2xl font-bold sm:text-3xl">#FurniroFurniture</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {gallery.map((src, i) => (
          <SmartImage key={src} src={src} alt={`Customer setup ${i + 1}`} className="h-44 w-full sm:h-64" />
        ))}
      </div>
    </section>
  );
}
