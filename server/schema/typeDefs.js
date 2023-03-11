const gql = require('graphql-tag')

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
  }
  
  type Auth {
    token: ID!
  }

  type Query {
    users: [User]
    login(username: String!, password: String!): Auth
  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
  }
##########################

  type Product {
    _id: ID
    name: String
    photo: String
    description: String
    price:Float
  }

  type Query {
    products: [Product]
  }
#############################

`;

module.exports = typeDefs;
