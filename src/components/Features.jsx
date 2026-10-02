import { FiAward, FiCheckCircle, FiTruck, FiHeadphones } from "react-icons/fi";
import { features } from "../data/data";

const icons = { quality: FiAward, warranty: FiCheckCircle, shipping: FiTruck, support: FiHeadphones };

export default function Features() {
  return (
    <section id="features" className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {features.map((f) => {
          const Icon = icons[f.icon];
          return (
            <div key={f.id} className="flex items-center gap-4">
              <Icon size={38} className="shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-muted">{f.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
