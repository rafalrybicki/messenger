import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { TOKEN } from '@env';

const httpLink = createHttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphiql/',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: TOKEN ? `Bearer ${TOKEN}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client