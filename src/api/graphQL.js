import ApolloClient from "apollo-boost"

const gql = new ApolloClient({
    uri: "http://localhost:3001/graphql"
});

export default gql