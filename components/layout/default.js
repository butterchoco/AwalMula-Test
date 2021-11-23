import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { useRef, useState } from "react";
import useEventListener from "@/Hooks/UseEventListener";
import useWindowSize from "@/Hooks/UseWindowSize";
import Navbar from "./Navbar";

const LayoutDefault = ({ children, title, heads }) => {
  const { isTabletDisplay } = useWindowSize();
  const [trigger, setTrigger] = useState(false);
  const containerRef = useRef(null);

  useEventListener("scroll", () => {
    setTrigger(window.scrollY > 50);
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {heads}
      </Head>
      <Navbar trigger={trigger} />
      <Box
        position="relative"
        backgroundColor="#fafafa"
        pt={isTabletDisplay ? "15vh" : "10vh"}
        zIndex="1"
      >
        {isTabletDisplay && (
          <Box
            position="absolute"
            zIndex="0"
            top="0"
            left="50%"
            transform="translateX(-50%)"
            width="110%"
            height="15vh"
            backgroundColor="green.400"
            borderBottomRadius="full"
          />
        )}
        <Box ref={containerRef} position="relative">
          {children}
        </Box>
      </Box>
    </>
  );
};

export default LayoutDefault;
