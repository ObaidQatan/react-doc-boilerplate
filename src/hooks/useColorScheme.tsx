import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import React from "react";

type ColorScheme = "light" | "dark";
function useColorScheme() {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>("light");

  React.useEffect(() => {
    if (
      ExecutionEnvironment.canUseDOM &&
      ExecutionEnvironment.canUseEventListeners
    ) {
      const colorSchemeStorage = localStorage.getItem("theme");
      if (colorSchemeStorage) {
        setColorScheme(colorSchemeStorage as ColorScheme);
      }

      window.addEventListener("storage", (event) => {
        if (event.key === "theme") {
          setColorScheme(event.newValue as ColorScheme);
        }
      });

      return () => {
        window.removeEventListener("storage", () => {});
      };
    }
  }, []);

  return {
    colorScheme,
    setColorScheme: (value: ColorScheme) => {
      localStorage.setItem("theme", value);
    },
  };
}

export default useColorScheme;
