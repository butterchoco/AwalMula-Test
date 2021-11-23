import { Box, Heading } from "@chakra-ui/react";

const GridSection = ({ title, children }) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      width="80%"
      mx="auto"
      gridGap="2rem"
      padding="2%"
    >
      <Heading>{title}</Heading>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        alignItems="center"
        gridGap="10px"
      >
        {children}
      </Box>
    </Box>
  );
};

export default GridSection;
