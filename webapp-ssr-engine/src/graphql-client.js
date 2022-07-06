import getConfig from "next/config";

import { GraphQLClient } from "graphql-request";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const NEXT_PUBLIC_GRAPHQL_URL =
  publicRuntimeConfig?.NEXT_PUBLIC_GRAPHQL_URL ??
  serverRuntimeConfig?.NEXT_PUBLIC_GRAPHQL_URL ??
  process.env.NEXT_PUBLIC_GRAPHQL_URL;

const client = new GraphQLClient(NEXT_PUBLIC_GRAPHQL_URL);

export default client;
