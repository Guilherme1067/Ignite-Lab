import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o6qqz70s6a01xr0vy7dof4/master",
  cache: new InMemoryCache(),
});
