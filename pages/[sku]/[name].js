import useWindowSize from "@/Components/hooks/UseWindowSize";
import LayoutDefault from "@/Components/layout/default";
import Carousel from "@/Components/reusables/Carousel";
import { MEDIA_HOST_URL, PRODUCTS_ALL_URL } from "@/Utils/Constants";
import { currencyFormat, fetchData } from "@/Utils/Helper";
import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Image,
  Skeleton,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductsId = () => {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const { isMobileDisplay } = useWindowSize();
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (query.sku) fetchProducts();
  }, [router]);

  const fetchProducts = async () => {
    const [data, error] = await fetchData(PRODUCTS_ALL_URL);
    if (error) return console.log(error);
    else if (!data.items) return;
    const productFind = data.items.find((data) => {
      return (
        data.sku === query.sku &&
        data.name.toLowerCase().split(" ").join("-") === query.name
      );
    });
    setProduct(productFind);
  };

  if (!product)
    return (
      <LayoutDefault title="Products">
        <Box padding="5%">
          <HStack gridGap="1rem">
            <Skeleton borderRadius="md" width="128px" height="128px"></Skeleton>
            <SkeletonText flex="1"></SkeletonText>
          </HStack>
          <SkeletonText mt="1rem" flex="1"></SkeletonText>
        </Box>
      </LayoutDefault>
    );

  return (
    <LayoutDefault title="Products">
      <Box padding="5%">
        <HStack gridGap="1rem" flexWrap="wrap" alignItems="flex-start">
          <VStack>
            <AspectRatio
              ratio={1 / 1}
              minWidth={isMobileDisplay ? "90vw" : "420px"}
              borderRadius="lg"
              borderWidth="1px"
            >
              <Image
                src={
                  MEDIA_HOST_URL +
                  product["media_gallery_entries"][selectedImage].file
                }
                alt=""
              />
            </AspectRatio>
            <Box maxWidth={isMobileDisplay ? "90vw" : "420px"}>
              <Carousel>
                {product["media_gallery_entries"].map((data, index) => (
                  <Box
                    minWidth="94px"
                    minHeight="94px"
                    maxWidth="94px"
                    maxHeight="94px"
                    borderRadius="lg"
                    borderWidth="1px"
                    borderColor={index === selectedImage ? "green.400" : ""}
                    _hover={{
                      borderColor: "gray.400",
                    }}
                    cursor="pointer"
                    onClick={() => setSelectedImage(index)}
                    key={index}
                  >
                    <Image
                      boxSize="94px"
                      src={
                        MEDIA_HOST_URL +
                        product["media_gallery_entries"][index].file
                      }
                      alt=""
                    />
                  </Box>
                ))}
                {product["media_gallery_entries"].map((data, index) => (
                  <Box
                    minWidth="94px"
                    minHeight="94px"
                    maxWidth="94px"
                    maxHeight="94px"
                    borderRadius="lg"
                    borderWidth="1px"
                    key={index}
                  >
                    <Image
                      boxSize="94px"
                      src={
                        MEDIA_HOST_URL +
                        product["media_gallery_entries"][index].file
                      }
                      alt=""
                    />
                  </Box>
                ))}
              </Carousel>
            </Box>
          </VStack>
          <VStack
            flex="1"
            width={isMobileDisplay ? "100%" : ""}
            height="100%"
            justifyContent="flex-start"
            alignItems="flex-start"
            gridGap="1rem"
          >
            <Heading as="h2" size="xl">
              {product.name}
            </Heading>
            <Heading as="h4" size="lg">
              {currencyFormat(product.price)}
            </Heading>
            <VStack width="100%">
              <Box width="100%" display="flex" justifyContent="space-between">
                <Text>Berat Barang:</Text>
                <Text
                  width="60%"
                  textOverflow="ellipsis"
                  whiteSpace="pre-wrap"
                  textAlign="right"
                  color="gray.400"
                >
                  {product.weight} kg
                </Text>
              </Box>
              <Box width="100%" display="flex" justifyContent="space-between">
                <Text>SKU Barang:</Text>
                <Text
                  width="60%"
                  textOverflow="ellipsis"
                  whiteSpace="pre-wrap"
                  textAlign="right"
                  color="gray.400"
                >
                  {product.sku}
                </Text>
              </Box>
              <Box width="100%" display="flex" justifyContent="space-between">
                <Text>Keyword:</Text>
                <Text
                  width="60%"
                  textOverflow="ellipsis"
                  whiteSpace="pre-wrap"
                  textAlign="right"
                  color="gray.400"
                >
                  {
                    product["custom_attributes"].find(
                      (data) => data["attribute_code"] === "meta_keyword"
                    ).value
                  }{" "}
                  kg
                </Text>
              </Box>
            </VStack>
          </VStack>
        </HStack>
        <Box mt="1rem" px="10px">
          <Text fontWeight="bold" mb="1rem">
            Deskripsi Barang:
          </Text>
          <div
            dangerouslySetInnerHTML={{
              __html: product["custom_attributes"].find(
                (data) => data["attribute_code"] === "description"
              ).value,
            }}
          />
        </Box>
      </Box>
    </LayoutDefault>
  );
};

export default ProductsId;
