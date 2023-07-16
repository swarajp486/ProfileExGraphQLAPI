const { ApolloServer } = require("apollo-server");
const { mongoose } = require("mongoose");
{
  /* <username>:<password> */
}

const MONGODB = "mongodb+srv://swarajp486:codes@cluster0.c4lhbbx.mongodb.net/";

//Apollo Server
//typedef: Graphql type definition
//resolvers: How do we resolve queries/mutations

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connection successful");
    return server.listen({ port: 4000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
