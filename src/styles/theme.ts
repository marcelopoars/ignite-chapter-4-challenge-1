import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "500": "#47585B",
      "400": "#999999",
      "300": "rgba(153, 153, 153, 0.5)",
      "200": "#DADADA",
      "100": "#F5F8FA",
    },
    yellow: {
      "500": "#FFBA08",
      "300": "rgba(255, 186, 8,0.5)",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.500",
      },
    },
  },
});
