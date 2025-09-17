"use client";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@theme";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
