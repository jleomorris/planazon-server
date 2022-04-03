const { ApolloServer, gql } = require("apollo-server");
const { mainCards, products, categories } = require("./data");
const typeDefs = require("./schema");
// Resolvers
// Resolvers
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Category = require("./resolvers/Category");
const Product = require("./resolvers/Product");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers: { Query, Mutation, Category, Product },
  context: {
    mainCards,
    products,
    categories,
  },
  introspection: true,
});

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
