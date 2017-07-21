const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
let users = [
  {name: 'alex', email: 'alex@auth0.com', age: '99'},
  {name: 'justin', email: 'justin@auth0.com', age: '99'}
]

const typeDefs = `
  # A User account. It *may* return an:
  # - \`name\`
  # - or other stuff
  type User {
    name: String,
    email: String
    age: Int
  }

  type Query {
    serverStatus: String,
    getUsers: [User]
  }
`;

const resolvers = {
  Query: {
    serverStatus: (root, args, context) => {
      return 'OK';
    },
    getUsers: (root, args, context) => {
      return users
    }
  }
};


module.exports  = makeExecutableSchema({
  typeDefs,
  resolvers,
});
