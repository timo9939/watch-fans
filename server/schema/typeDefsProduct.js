const gql = require('graphql-tag')

const typeDefs = gql`
  type Product {
    _id: ID
    name: String
    photo: String
    description: String
    price: Number
  }

  type Query {
    Products: [Product]
  }
`;

module.exports = typeDefs;
