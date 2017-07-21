// With nested objects
// query {
//   getUsers {
//     name
//     email
//     age
//     posts {
//       id
//       title
//     }
//   }
// }

const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
let users = [
  {name: 'justin', email: 'justin@auth0.com', age: '99'},
  {name: 'alex', email: 'alex@auth0.com', age: '99'}
  
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

  type Post {
    id: Int,
    title: String
  }

  type Query {
    serverStatus: String,
    getUsers: [User],
    getUser(name: String):  User
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
  },
  User: {
    posts: (root, args, context) => {
      return getPostsForUser(root)
    }
  }
};

function getPostsForUser(user){
  return [{id: 1, title: 'blog 1 by ' + user.name}]
}

module.exports  = makeExecutableSchema({
  typeDefs,
  resolvers,
});
