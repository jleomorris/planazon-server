const { ApolloServer, gql } = require("apollo-server");
const { books } = require("./data");
const typeDefs = require("./schema");
// Resolvers
const Query = require("./resolvers/Query");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers: { Query },
  introspection: true,
  context: { books },
});

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
