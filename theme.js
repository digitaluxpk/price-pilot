"use client";
import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontFamily: "Urbanist, sans-serif",
  primaryColor: "blue",
  fontSmoothing: true,
  breakpoints: {
    xs: '20em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  
});
