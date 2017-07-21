const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
let users = [
  { name: 'justin', email: 'justin@auth0.com', age: '99' },
  { name: 'alex', email: 'alex@auth0.com', age: '99' }

]

const typeDefs = `
  # A User account. It *may* return an:
  # - \`name\`
  # - or other stuff
  type User {
    name: String,
    email: String
    age: Int
    posts: [Post]
  }

  input UserInput {
    name: String!,
    email: String
    age: Int
  }

  type Post {
    id: Int,
    title: String
  }

  type Query {
    serverStatus: String,
    getUsers: [User],
    getUser(name: String):  User
  }

  type Mutation {
    addUser(newUser: UserInput): User
  }
`;

const resolvers = {
  Query: {
    serverStatus: (root, args, context) => {
      return 'OK';
    },
    getUsers: (root, args, context) => {
      return users
    },
    getUser: (root, args, context) => {
      return users.find(u => u.name === args.name)
    }
  },
  User: {
    posts: (root, args, context) => {
      return getPostsForUser(root)
    }
  },
  Mutation: {
    addUser: (root, args, context) => {
      console.log(args)
      const newUser = args.newUser
      users.push(newUser)
      return users.find(u => u.name === newUser.name)
    }
  }
};

function getPostsForUser(user) {
  return [{ id: 1, title: 'blog 1 by ' + user.name }]
}

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
