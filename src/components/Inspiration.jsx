import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import SmartImage from "./SmartImage";
import { slides } from "../data/data";

export default function Inspiration() {
  const [index, setIndex] = useState(0);
  const go = (step) => setIndex((i) => (i + step + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <section id="inspiration" className="bg-beige py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[2fr_3fr] lg:px-10">
        <div>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">50+ Beautiful rooms inspiration</h2>
          <p className="mt-4 font-medium text-ink/70">
            Our designers have put together rooms you can copy as they are or adapt to your own space.
          </p>
          <a href="#shop" className="mt-6 inline-block bg-gold px-10 py-3 font-semibold text-white hover:bg-gold/90">Explore More</a>
        </div>

        <div>
          <div className="relative">
            <SmartImage src={slide.image} alt={slide.title} className="h-80 w-full sm:h-[28rem]" />
            <div className="absolute bottom-6 left-6 bg-white/85 p-5 backdrop-blur">
              <p className="text-sm text-ink/70">{slide.label}</p>
              <h3 className="text-2xl font-semibold">{slide.title}</h3>
            </div>
            <a href="#shop" aria-label="Shop this room" className="absolute bottom-6 left-[11.5rem] hidden bg-gold p-3 text-white sm:block">
              <FiArrowRight size={20} />
            </a>
            <button onClick={() => go(1)} aria-label="Next slide" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow">
              <FiChevronRight />
            </button>
            <button onClick={() => go(-1)} aria-label="Previous slide" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow">
              <FiChevronLeft />
            </button>
          </div>
          <div className="mt-5 flex justify-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-3 rounded-full transition-all ${i === index ? "w-8 bg-gold" : "w-3 bg-gold/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
