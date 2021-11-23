import GridSection from "@/Components/GridSection";
import HorizontalSection from "@/Components/HorizontalSection";
import LayoutDefault from "@/Components/layout/default";
import ProductList from "@/Components/ProductList";
import { Text } from "@chakra-ui/layout";

const Home = () => {
  return (
    <LayoutDefault title="Home | Awal Mula">
      <HorizontalSection>
        <ProductList />
      </HorizontalSection>
      <GridSection title="Semua Produk">
        <ProductList />
      </GridSection>
    </LayoutDefault>
  );
};

export default Home;
