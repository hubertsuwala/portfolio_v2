"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "var(--font-lato), var(--font-poppins), sans-serif",
  },
  palette: {
    text: {
      primary: "#e2e8f0",
      secondary: "#969bb7",
    },
  },
});
