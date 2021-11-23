import {
  Button,
  Box,
  Heading,
  HStack,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import useWindowSize from "../hooks/UseWindowSize";
import Categories from "./Categories";

const Navbar = ({ trigger }) => {
  const { isTabletDisplay } = useWindowSize();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="9999"
      padding="1rem"
      backgroundColor={
        isTabletDisplay && !isOpen && !trigger && !trigger
          ? "transparent"
          : "white"
      }
      shadow={isTabletDisplay && !isOpen && !trigger ? "none" : "md"}
    >
      <HStack zIndex="9999">
        {!isTabletDisplay && (
          <Heading as="h4" size="md" color="green.400">
            AwalMula.
          </Heading>
        )}
        <Button
          variant="ghost"
          colorScheme="green"
          color={
            isTabletDisplay && !isOpen && !trigger ? "white" : "blackAlpha.700"
          }
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
        <Input
          type="text"
          size="sm"
          borderRadius="lg"
          placeholder="Cari Food & Beverages . . ."
          fontSize="xs"
          backgroundColor={
            isTabletDisplay && !isOpen && !trigger ? "white" : "transparent"
          }
        />
        <Button
          size="sm"
          variant={isTabletDisplay && !isOpen && !trigger ? "ghost" : "outline"}
          borderColor={
            isTabletDisplay && !isOpen && !trigger ? "white" : "green.400"
          }
          color={isTabletDisplay && !isOpen && !trigger ? "white" : "green.400"}
          colorScheme={
            isTabletDisplay && !isOpen && !trigger ? "white" : "green"
          }
        >
          Login
        </Button>
      </HStack>
      <Categories isOpen={isOpen} />
    </Box>
  );
};

export default Navbar;
