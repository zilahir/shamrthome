import React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { AppRegistry } from "react-native-web";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./app";
import theme from "./theme/colors";
import { persistor, store } from "./store/configureStore";

const AppLicatoinRoot = () => (
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

AppRegistry.registerComponent("App", () => AppLicatoinRoot);
AppRegistry.runApplication("App", { rootTag: document.querySelector("#root") });
