// import ApolloClient from "apollo-boost";
import { ApolloClient, createHttpLink } from "@apollo/client";
import { InMemoryCache } from "apollo-boost";

const httpLink = createHttpLink({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
});

export default new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
