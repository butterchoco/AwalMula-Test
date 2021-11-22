import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "./Navbar";

const LayoutDefault = ({ children, title, heads }) => {
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
      <Navbar />
      <Box backgroundColor="#fafafa" pt="10vh">
        {children}
      </Box>
    </>
  );
};

export default LayoutDefault;
