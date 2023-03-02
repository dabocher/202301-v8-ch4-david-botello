import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import GlobalStyled from "./GlobalStyled";
import "./index.css";
import { store } from "./store";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyled />
      <App />
    </Provider>
  </React.StrictMode>
);
