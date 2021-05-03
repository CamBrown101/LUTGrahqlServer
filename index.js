const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Slide {
    header: String
    title: String
    description: String
  }
`;
