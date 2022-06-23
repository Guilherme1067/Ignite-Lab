import { ApolloClient, InMemoryCache, DefaultOptions } from "@apollo/client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
}; //remover o cache de todas as chamadas
export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o6qqz70s6a01xr0vy7dof4/master",
  cache: new InMemoryCache(),
  // defaultOptions: defaultOptions,
});
