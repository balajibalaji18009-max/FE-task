import { heroImage } from "../data/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[34rem] items-center justify-center bg-cover bg-center px-5 py-12 md:justify-end md:px-16 lg:min-h-[44rem]"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.08), rgba(0,0,0,.08)), url(${heroImage})`, backgroundColor: "#E9DFD0" }}
    >
      <div className="max-w-xl rounded-xl bg-cream p-8 sm:p-12">
        <p className="font-semibold tracking-[0.2em] text-ink/80">New Arrival</p>
        <h1 className="mt-2 text-4xl font-bold leading-tight text-gold sm:text-5xl">Discover Our New Collection</h1>
        <p className="mt-4 font-medium text-ink/80">
          Pieces built from solid materials, shaped to fit calm everyday living.
        </p>
        <a href="#shop" className="mt-8 inline-block bg-gold px-12 py-4 font-bold text-white hover:bg-gold/90">
          BUY NOW
        </a>
      </div>
    </section>
  );
}
