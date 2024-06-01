import { Raleway } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript, Flex, MantineProvider } from "@mantine/core";
import Head from "next/head";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import { theme } from "../theme";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";

export const metadata = {
  title: "Price Pilot",
  // description: "Make Customer Feedback Your Super Power",
};
const raleway = Raleway({subsets: ['latin']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <body className="">
        <ColorSchemeScript defaultColorScheme="light" />
        <MantineProvider theme={
          {
            ...theme,
            breakpoints: {
              xs: '5em',
              sm: '5em',
              md: '44em',
              lg: '74em',
              xl: '90em',
            },
            fontFamily: raleway.style.fontFamily,
          }
        }>
           <Flex bg={"#FBFCFE"}  w={"100%"} justify={"center"}>
           <Flex  w={{ xs: "100%", xl: "1440px" }}  >
            <Navbar />
            </Flex> 
            </Flex>
          <Flex w={"100%"} justify={"center"}>
            <Flex
              direction={"column"}
              bg={"#fff"}
              w={{ xs: "100%", xl: "1440px" }}
              // px={12}
              style={{
                overflow:"hidden"
              }}
            >
              <Notifications position="top-right" zIndex={1000} />
              {children}
              <Footer />
            </Flex>
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}
