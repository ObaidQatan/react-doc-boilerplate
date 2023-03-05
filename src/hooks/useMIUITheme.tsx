import React from "react";
import { createTheme } from "@mui/material/styles";

function useMUITheme() {
  const darkTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          primary: {
            main: "#7b6dc8",
          },
          secondary: {
            main: "#6e61b6",
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
              },
            },
          },
        },
      }),
    []
  );
  const lightTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
          primary: { main: "#8b7ce1" },
          secondary: { main: "#7b6dc8" },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
              },
            },
          },
        },
      }),
    []
  );

  return {
    lightTheme,
    darkTheme,
  };
}

export default useMUITheme;
