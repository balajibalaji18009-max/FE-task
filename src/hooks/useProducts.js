import { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/products/category/furniture";

// Fetches furniture products once and exposes loading / error state.
export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");

    fetch(API_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        return res.json();
      })
      .then((data) => setProducts(data.products || []))
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message || "Could not load products.");
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [attempt]);

  return { products, loading, error, retry: () => setAttempt((n) => n + 1) };
}
