import { ChakraProvider, extendTheme, ColorMode } from "@chakra-ui/react";
import { mode, GlobalStyleProps, Styles, createBreakpoints } from "@chakra-ui/theme-tools";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { navy } from "./colors";
import * as serviceWorker from "./serviceWorker";

export interface ChakraConfig {
  initialColorMode: ColorMode;
  useSystemColorMode: boolean;
}

const config: ChakraConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "72em",
  xl: "80em",
  "2xl": "96em",
})

const styles: Styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("white", navy)(props),
    },
  }),
};

const theme = extendTheme({
  styles,
  config,
  breakpoints
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
