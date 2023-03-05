import React from "react";
import "@site/src/css/common.scss";
import useMUITheme from "../hooks/useMIUITheme";
import useColorScheme from "../hooks/useColorScheme";
import { ThemeProvider } from "@mui/material/styles";

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
