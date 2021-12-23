import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
import { overrideConfigs } from '../../common';
import React from 'react';

const client = new ApolloClient({
  uri: overrideConfigs.backEndApi,
  cache: new InMemoryCache(),
  credentials: 'include',
});
interface Props {
  children: React.ReactNode;
}
export const ApolloClientComponent = ({ children }: Props) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
