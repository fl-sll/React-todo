import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./styles/GlobalStyles.css";
import { stage } from "./app/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stage}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
