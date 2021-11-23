import { useEffect, useState } from "react";
import { fetchData } from "@/Utils/Helper";
import { PRODUCTS_ALL_URL } from "@/Utils/Constants";
import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";

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

  if (!products)
    return Array(10)
      .fill(null)
      .map((_, index) => <SkeletonCard key={index} />);

  return products.map((data, index) => <ProductCard data={data} key={index} />);
};

export default ProductList;
