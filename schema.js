// Starting Schema
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

const typeDefs = `
  type Query {
    serverStatus: String,
  }
`;

const resolvers = {
  Query: {
    serverStatus: (root, args, context) => {
      return 'OK';
    }
  }
};


module.exports  = makeExecutableSchema({
  typeDefs,
  resolvers,
});
