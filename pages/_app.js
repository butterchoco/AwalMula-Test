import "../styles/globals.css";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import { CategoryProvider } from "@/Context/CategoryContext";

const theme = extendTheme({
  colors: {
    accent: {
      100: "#fc586c",
      200: "#f54e62",
      300: "#f54055",
      400: "#f72d45",
      500: "#ef233c",
      600: "#db1f36",
      700: "#cc182e",
      800: "#bf1328",
      900: "#bf1328",
    },
  },
  fonts: {
    heading: "poppins",
    body: "poppins",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <CategoryProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </CategoryProvider>
    </>
  );
}

export default MyApp;
