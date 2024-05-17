import { Inter } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Head from "next/head";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import { theme } from "../theme";
import Navbar from "./component/navbar/Navbar";

export const metadata = {
  title: "Price Pilot",
  // description: "Make Customer Feedback Your Super Power",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <body>
        <MantineProvider theme={theme} >
          <Navbar />
          <Notifications position="top-right" zIndex={1000} />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
