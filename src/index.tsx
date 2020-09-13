import React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { AppRegistry } from "react-native-web";

import "./index.css";
import App from "./app";
import theme from "./theme/colors";

const AppLicatoinRoot = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

AppRegistry.registerComponent("App", () => AppLicatoinRoot);
AppRegistry.runApplication("App", { rootTag: document.querySelector("#root") });
