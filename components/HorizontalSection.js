import { Box, Heading } from "@chakra-ui/react";
import useWindowSize from "./hooks/UseWindowSize";
import Carousel from "./reusables/Carousel";

const HorizontalSection = ({ title, children }) => {
  const { isTabletDisplay } = useWindowSize();

  return (
    <Box display="flex" flexDir="column" mx="auto" gridGap="1rem" padding="2%">
      {title && (
        <Heading as="h4" size={isTabletDisplay ? "md" : "lg"}>
          {title}
        </Heading>
      )}
      <Carousel>{children}</Carousel>
    </Box>
  );
};

export default HorizontalSection;
