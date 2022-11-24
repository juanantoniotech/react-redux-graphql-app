import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "font-awesome/css/font-awesome.css";
import { store } from "./redux/store";

let WithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

let WithStore = () => (
  <Provider store={store}>
    <WithRouter />
  </Provider>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <WithStore />
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
