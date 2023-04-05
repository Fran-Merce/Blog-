import { GraphQLClient } from "graphql-request";

export const graphClient = new GraphQLClient(
  `${process.env.API_BASE_URL}/master`,
  {
    fetch,
  },
);
