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
import AppTheme from "./theme/app.theme";

const WithTheme = () => (
  <AppTheme>
    <App />
  </AppTheme>
);
const WithRouter = () => (
  <BrowserRouter>
    <WithTheme />
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
