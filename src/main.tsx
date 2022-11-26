import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "font-awesome/css/font-awesome.css";
import { store } from "./store/store";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./clients/apollo";

const WithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const WithStore = () => (
  <Provider store={store}>
    <WithRouter />
  </Provider>
);

const WithApollo = () => (
  <ApolloProvider client={apolloClient}>
    <WithStore />
  </ApolloProvider>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <WithApollo />
);
