import { Box, Image, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
import { MEDIA_HOST_URL } from "@/Utils/Constants";
import { currencyFormat } from "@/Utils/Helper";
import useWindowSize from "./hooks/UseWindowSize";

const SkeletonCard = () => {
  const { isMobileDisplay } = useWindowSize();

  return (
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
    >
      <Skeleton width="100%" height="120px" borderRadius="md" />
      <SkeletonText mt="4" noOfLines={3} spacing="4" />
    </Box>
  );
};

export default SkeletonCard;
