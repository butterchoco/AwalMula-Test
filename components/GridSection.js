import { Box, Heading } from "@chakra-ui/react";
import useWindowSize from "./hooks/UseWindowSize";

const GridSection = ({ title, children }) => {
  const { isMobileDisplay, isTabletDisplay } = useWindowSize();

  return (
    <Box display="flex" flexDir="column" mx="auto" gridGap="2rem" padding="2%">
      <Heading as="h4" size={isTabletDisplay ? "md" : "lg"}>
        {title}
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={
          isMobileDisplay
            ? "repeat(2, 1fr)"
            : "repeat(auto-fit, minmax(180px, 1fr))"
        }
        gridGap="10px"
      >
        {children}
      </Box>
    </Box>
  );
};

export default GridSection;
