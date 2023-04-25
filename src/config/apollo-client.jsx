import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://amazing-cow-44.hasura.app/v1/graphql",
  cache: new InMemoryCache({ addTypename: false }),
  headers: {
    "x-hasura-admin-secret": "m9pHteCDSKCOu7BFtjiCoFaQpVXmC775NUXFUweq9Jr3cALsryLNQSLe1DbyKqqf",
  },
});
