import React from "react";
import "@site/src/css/common.scss";
import { ThemeProvider } from "@mui/material/styles";
import useMUITheme from "../hooks/useMIUITheme";
import useColorScheme from "../hooks/useColorScheme";

interface Props {
  children: React.ReactNode;
}

export const Page: React.FC<Props> = ({ children }: Props) => {
  const { darkTheme, lightTheme } = useMUITheme();
  const { colorScheme } = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};
