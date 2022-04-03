const { gql } = require("apollo-server");

const typeDefs = gql`
  type MainCard {
    title: String!
    image: String!
  }

  type Product {
    id: ID!
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]!
    slug: String!
    stock: Int!
    onSale: Boolean
    category: Category!
  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    products: [Product!]!
  }

  type Query {
    mainCards: [MainCard]
    products: [Product!]!
    product(slug: String!): Product
    productSearch(searchTerm: String!): [Product!]
    categories: [Category!]!
    category(slug: String!): Category
  }

  type Mutation {
    addProduct(
      image: String!
      title: String!
      rating: Float
      price: String!
      description: [String!]!
      slug: String!
      stock: Int!
      onSale: Boolean
      category: String!
    ): Product
    removeProduct(id: ID!): Boolean!
    updateProduct(
      id: ID!
      image: String
      title: String
      rating: Float
      price: String
      description: [String!]
      slug: String
      stock: Int
      onSale: Boolean
      category: String
    ): Product
  }
`;

module.exports = typeDefs;
