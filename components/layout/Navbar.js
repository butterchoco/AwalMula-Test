import { Button, Box, HStack, useDisclosure } from "@chakra-ui/react";
import Categories from "./Categories";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="9999"
      padding="1rem"
      backgroundColor="white"
      shadow="md"
    >
      <HStack zIndex="9999">
        <Button
          variant="ghost"
          colorScheme="green"
          color="blackAlpha.700"
          size="md"
          fontSize="12px"
          textTransform="capitalize"
          padding="1rem"
          _hover={{
            color: "green",
            backgroundColor: "green.50",
          }}
          onClick={onToggle}
        >
          Kategori
        </Button>
      </HStack>
      <Categories isOpen={isOpen} />
    </Box>
  );
};

export default Navbar;
