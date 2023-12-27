import { SPACE_ID, TOKEN } from "@/secrets";
import { ApolloClient, HttpLink, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const createApolloClient = () => {

    const httpLink = createHttpLink({
        uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
    });

    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${TOKEN}`,
            }
        }
    });

    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;