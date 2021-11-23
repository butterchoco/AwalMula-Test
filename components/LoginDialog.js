import {
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Modal,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import useWindowSize from "@/Hooks/UseWindowSize";
import { useState } from "react";
import { fetchData } from "@/Utils/Helper";
import { API_FRONTEND_URL } from "@/Utils/Constants";
import { useCookies } from "react-cookie";

const LoginDialog = ({ isCategoryShow, trigger }) => {
  const { isTabletDisplay } = useWindowSize();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [_, setCookie] = useCookies(["authUser"]);

  const onSubmit = async () => {
    setLoading(true);
    const [data, error] = await fetchData(API_FRONTEND_URL + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    setLoading(false);
    if (error) {
      alert("Error Masuk ke Akun");
      console.log(error);
      return;
    }
    setCookie("_t", data.data, { path: "/" });
    location.reload();
  };

  return (
    <>
      <Button
        size="sm"
        px="1rem"
        variant={
          isTabletDisplay && !isCategoryShow && !trigger ? "ghost" : "outline"
        }
        borderColor={
          isTabletDisplay && !isCategoryShow && !trigger ? "white" : "green.400"
        }
        color={
          isTabletDisplay && !isCategoryShow && !trigger ? "white" : "green.400"
        }
        colorScheme={
          isTabletDisplay && !isCategoryShow && !trigger ? "white" : "green"
        }
        onClick={onOpen}
      >
        Login
      </Button>
      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody mb="1rem">
            <Box display="flex" flexDirection="column" gridGap="1rem">
              <FormControl size="sm" id="email">
                <FormLabel fontSize="14px">Username</FormLabel>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyUp={(e) => e.code === "Enter" && onSubmit()}
                />
              </FormControl>
              <FormControl size="sm" id="password">
                <FormLabel fontSize="14px">Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyUp={(e) => e.code === "Enter" && onSubmit()}
                />
              </FormControl>
              <Button
                mt="1rem"
                width="100%"
                borderColor="green.400"
                color="green.400"
                variant="outline"
                colorScheme="green"
                isLoading={isLoading}
                onClick={onSubmit}
              >
                Masuk
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginDialog;
