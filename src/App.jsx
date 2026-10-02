import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Inspiration from "./components/Inspiration";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Footer from "./components/Footer";
import useProducts from "./hooks/useProducts";

export default function App() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("All");
  const { products, loading, error, retry } = useProducts();

  const addToCart = (product) => setCart((prev) => [...prev, product]);

  return (
    <>
      <Navbar cartCount={cart.length} />
      <main>
        <Hero />
        <Categories onSelect={setFilter} />
        <Products
          products={products}
          loading={loading}
          error={error}
          onRetry={retry}
          active={filter}
          onFilter={setFilter}
          onAdd={addToCart}
        />
        <Inspiration />
        <Gallery />
        <Features />
      </main>
      <Footer />
    </>
  );
}
