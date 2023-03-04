import React from "react";

type ColorScheme = "light" | "dark";

function useColorScheme() {
  const colorSchemeStorage = localStorage.getItem("theme");
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>("light");

  React.useEffect(() => {
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
  }, []);

  return {
    colorScheme,
    setColorScheme: (value: ColorScheme) => {
      localStorage.setItem("theme", value);
    },
  };
}

export default useColorScheme;
