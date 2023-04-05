import { GraphQLClient } from 'graphql-request';
export const graphClient = new GraphQLClient(
  'https://api-sa-east-1.hygraph.com/v2/clfbmmx7432ss01t8hpvxd6aa/master',
  { fetch }
);
