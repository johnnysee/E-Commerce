import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import { ProductList } from "./ProductList";

const URL = "https://localhost:5001/api/Products";

export const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setProducts(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <ProductList products={products} />
    </>
  );
};
