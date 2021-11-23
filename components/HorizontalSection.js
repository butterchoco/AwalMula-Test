import { Box, Heading } from "@chakra-ui/react";
import { GliderCarousel } from "./reusables/gliderJS/GliderCarousel";

const HorizontalSection = ({ title, children }) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      width="80%"
      mx="auto"
      gridGap="2rem"
      padding="2%"
      overflowX="hidden"
    >
      <Heading>{title}</Heading>
      <GliderCarousel>{children}</GliderCarousel>
    </Box>
  );
};

export default HorizontalSection;
