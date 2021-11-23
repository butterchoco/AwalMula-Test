import { Box, Heading } from "@chakra-ui/react";
import useWindowSize from "./hooks/UseWindowSize";

const HorizontalSection = ({ title, children }) => {
  const { isTabletDisplay } = useWindowSize();

  return (
    <Box display="flex" flexDir="column" mx="auto" gridGap="1rem" padding="2%">
      {title && (
        <Heading as="h4" size={isTabletDisplay ? "md" : "lg"}>
          {title}
        </Heading>
      )}
      <Box
        display="flex"
        justifyContent="flex-start"
        overflowX="auto"
        alignItems="center"
        gridGap="10px"
        p="1rem"
      >
        {children}
      </Box>
    </Box>
  );
};

export default HorizontalSection;
