import { ApolloClient, InMemoryCache, from, HttpLink } from "@apollo/client";

const link = from([
  new HttpLink({
    uri: "https://rickandmortyapi.com/graphql",
  }),
]);

export const apolloClient = new ApolloClient({
  // uri: "",
  cache: new InMemoryCache(),
  link,
});
