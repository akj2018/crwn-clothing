import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// For Routing
import { BrowserRouter } from "react-router-dom";

// for using redux in our app
import { Provider } from "react-redux";

import { store, persistor } from "./redux/store";

// TO get PersistGate component specific for react
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
