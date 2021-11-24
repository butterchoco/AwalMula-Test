import { Box, Image, Text } from "@chakra-ui/react";
import { MEDIA_HOST_URL } from "@/Utils/Constants";
import { currencyFormat } from "@/Utils/Helper";
import useWindowSize from "./hooks/UseWindowSize";
import Link from "next/link";

const ProductCard = ({ data }) => {
  const { isMobileDisplay } = useWindowSize();

  return (
    <Link
      href={`
        /${data.sku}/${data.name.toLowerCase().split(" ").join("-")}
        `}
      passHref
    >
      <Box
        minWidth={isMobileDisplay ? "160px" : "180px"}
        width="100%"
        minHeight="240px"
        padding="1rem"
        backgroundColor="white"
        shadow="md"
        fontSize="14px"
        borderRadius="lg"
        cursor="pointer"
        _hover={{
          _hover: {
            color: "green.400",
          },
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <Image
            boxSize="128px"
            src={MEDIA_HOST_URL + data["media_gallery_entries"][0].file}
            alt={data.name.toLowerCase().split(" ").join("-")}
          />
        </Box>
        <Text fontWeight="light" wordBreak="break-word">
          {data.name}
        </Text>
        <Text fontWeight="semibold">{currencyFormat(data.price)}</Text>
      </Box>
    </Link>
  );
};

export default ProductCard;
