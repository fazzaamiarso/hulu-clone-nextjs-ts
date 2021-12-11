import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#06202A",
        color: "white",
      },
    },
  },
});

export default customTheme;
