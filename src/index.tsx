import * as React from "react";
import { render } from "react-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { Provider } from "react-redux";

import App from "./App";
// import configureStore, { history } from "./store/store";
import store, { history } from "./store/store";

import "./styles.css";

// const store = configureStore();

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  rootElement
);
