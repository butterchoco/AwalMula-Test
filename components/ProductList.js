import { useEffect, useState } from "react";
import { fetchData } from "@/Utils/Helper";
import { PRODUCTS_ALL_URL } from "@/Utils/Constants";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const [data, error] = await fetchData(PRODUCTS_ALL_URL);
    if (error) console.log(error);
    if (data.items) setProducts(data.items);
  };

  if (!products) return null;

  return products.map((data, index) => <ProductCard data={data} key={index} />);
};

export default ProductList;
