import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchData } from "@/Utils/Helper";
import { PRODUCTS_ALL_URL, MEDIA_HOST_URL } from "@/Utils/Constants";
import { currencyFormat } from "@/Utils/Helper";

const ProductsSection = () => {
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

  return (
    <Box
      display="flex"
      flexDir="column"
      width="80%"
      mx="auto"
      gridGap="2rem"
      padding="2%"
    >
      <Heading>Semua Produk</Heading>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        alignItems="center"
        gridGap="10px"
      >
        {products.map((data, index) => (
          <Box
            minWidth="180px"
            maxWidth="180px"
            minHeight="180px"
            padding="1rem"
            backgroundColor="white"
            shadow="md"
            fontSize="14px"
            borderRadius="lg"
            key={index}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <Image
                boxSize="128px"
                src={MEDIA_HOST_URL + data.media_gallery_entries[0].file}
                alt={data.name.toLowerCase().split(" ").join("-")}
              />
            </Box>
            <Text fontWeight="light" wordBreak="break-word">
              {data.name}
            </Text>
            <Text fontWeight="semibold">{currencyFormat(data.price)}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductsSection;
