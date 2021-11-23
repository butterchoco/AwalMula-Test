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
import Link from "next/link";
import LoginDialog from "@/Components/LoginDialog";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

const Navbar = ({ trigger }) => {
  const { isTabletDisplay } = useWindowSize();
  const { isOpen, onToggle } = useDisclosure();
  const [cookie, _, removeCookie] = useCookies(["authUser"]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onLogout = () => {
    removeCookie("_t");
    location.reload();
  };

  if (!isClient) return null;

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
          ? "green.400"
          : "white"
      }
      shadow={isTabletDisplay && !isOpen && !trigger ? "none" : "md"}
    >
      <HStack zIndex="9999">
        {!isTabletDisplay && (
          <Link href="/" passHref>
            <Heading as="h4" size="md" color="green.400" cursor="pointer">
              AwalMula.
            </Heading>
          </Link>
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
        {!cookie["_t"] ? (
          <LoginDialog isCategoryShow={isOpen} trigger={trigger} />
        ) : (
          <Button size="sm" colorScheme="red" onClick={onLogout}>
            Logout
          </Button>
        )}
      </HStack>
      <Categories isOpen={isOpen} />
    </Box>
  );
};

export default Navbar;
