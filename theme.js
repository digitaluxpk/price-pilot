"use client";
import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontFamily: "Urbanist, sans-serif",
  primaryColor: "violet",

  fontSmoothing: true,
  breakpoints: {
    xs: '20em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  colors: {
    black: [
      "#646584",
      "#0A083A",
      "#0E1314",
      "#727E81",
      "#12181A",
      "#586164",
      "#09ADC3",
      "#B3C1C4",
      "#128797",
      "#147885",
    ],
   
  },
});
