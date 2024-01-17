import { useState, useEffect } from "react";

const useSearchProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchProductb = async () => {
      try {
        const response = await fetch("http://localhost:3001/products/search");

        if (!response.ok) {
          throw new Error("failed to search");
        }
        const productsData = await response.json();
        setProducts(productsData);
      } catch(error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchProductb();
  }, []);

  return { products, loading, error };
};

export default useSearchProduct;
