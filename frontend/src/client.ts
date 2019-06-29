import ApolloClient from 'apollo-boost'

export const createClient = () =>
  new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_SERVER_URL,
  })
