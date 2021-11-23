import GridSection from "@/Components/GridSection";
import useWindowSize from "@/Components/hooks/UseWindowSize";
import HorizontalSection from "@/Components/HorizontalSection";
import LayoutDefault from "@/Components/layout/default";
import ProductList from "@/Components/ProductList";
import { Box, Heading, Text } from "@chakra-ui/layout";

const Home = () => {
  const { isTabletDisplay, isLaptopDisplay } = useWindowSize();

  return (
    <LayoutDefault title="Home | Awal Mula">
      <Box width={isLaptopDisplay ? "90%" : "50%"} m="auto">
        <HorizontalSection>
          {Array(5)
            .fill(null)
            .map((data, index) => (
              <Box
                backgroundColor={
                  Array.from(["green.400", "purple.400", "blue.400"])[index % 3]
                }
                color="white"
                height={isTabletDisplay ? "100px" : "250px"}
                minWidth={isTabletDisplay ? "250px" : "70%"}
                borderRadius="md"
                p="5%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                key={index}
              >
                <Heading as="h4" size={isTabletDisplay ? "md" : "lg"}>
                  Test
                </Heading>
                <Text
                  width="100%"
                  whiteSpace="pre-wrap"
                  wordBreak="break-all"
                  textOverflow="ellipsis"
                  overflow="hidden"
                  marginBottom="4px"
                  fontSize={isTabletDisplay ? "12px" : "15px"}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque convalli
                </Text>
              </Box>
            ))}
        </HorizontalSection>
        <HorizontalSection title="Untuk Kamu">
          <ProductList />
        </HorizontalSection>
        <GridSection title="Semua Produk">
          <ProductList />
        </GridSection>
      </Box>
    </LayoutDefault>
  );
};

export default Home;
