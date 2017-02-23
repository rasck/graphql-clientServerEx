import ApolloClient, {createNetworkInterface} from 'apollo-client'

const GRAPHQL_URL = 'http://localhost:8080/graphql'

export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: GRAPHQL_URL
  })
})
