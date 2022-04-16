import { ApolloClient, createHttpLink, InMemoryCache, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { env } from './config/config';
import { getToken } from './common/utils';

const createApolloClient = async () => {
  const httpLink = createHttpLink({
    uri: env.api,
    credentials: 'include',
  });

  const client = new SubscriptionClient(
    env.wsApi, {
      reconnect: true,
      connectionParams: async () => {
        const token = await getToken();
        return { authorization: token ? `Bearer ${token}` : '' };
      }
    }
  );
  const wsLink = new WebSocketLink(client);
  const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink,
  );


  return new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;