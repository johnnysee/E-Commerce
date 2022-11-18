import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "./product";

const URL = "https://localhost:5001/api/Products";

export const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setProducts(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
};
