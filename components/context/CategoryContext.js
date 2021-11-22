import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "@/Utils/Helper";
import { CATEGORIES_URL } from "@/Utils/Constants";

const initialData = {
  categories: null,
};

const CategoryContext = createContext(initialData);

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const [data, error] = await fetchData(CATEGORIES_URL);
    if (error) console.log(error);
    setCategories(data);
  };

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useDataAPI = () => useContext(CategoryContext);
