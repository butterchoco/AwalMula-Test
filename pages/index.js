import LayoutDefault from "@/Components/layout/default";
import ProductsSection from "../components/ProductsSection";
import { fetchData } from "../utils/Helper";

const Home = () => {
  return (
    <LayoutDefault title="Home | Awal Mula">
      <ProductsSection />
    </LayoutDefault>
  );
};

export default Home;
