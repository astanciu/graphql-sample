### GraphQL Example

1. Install dependencies with `npm install`
2. Run the server with `node server.js`
3. Open the GraphiQL UI at `http://localhost:3000/graphiql`

#### Schemas
There are other schema files that demonstrate different things:
<table>
<tr>
<td>
   schema.js
</td>
<td>
Default schema, just returns a value. Sample query:
<pre lang="graphql">
query {
  serverStatus
}
</pre>
</td>
</tr>
<tr>
<td>
   schema1.js
</td>
<td>
Plain query with resolvers
<pre lang="graphql">
query {
  getUsers {
    name
    email
    age
  }
}
</pre>
</td>
</tr>
<tr>
<td>
   schema2.js
</td>
<td>
Query With nested objects
<pre lang="graphql">
query {
  getUsers {
    name
    email
    age
    posts {
      id
      title
    }
  }
}
</pre>
</td>
</tr>
<tr>
<td>
   schema3.js
</td>
<td>
Query with parameters
<pre lang="graphql">
query {
  getUser(name: "alex") {
    name
    email
    age
  }
}
</pre>
</td>
</tr>
<tr>
<td>
   schema4.js
</td>
<td>
Query with Mutations
<pre lang="graphql">
mutation{
  addUser(newUser: {name: "steve", email: "steve@auth0.com"}) {
    name
    email
    age
  }
}
</pre>

or using Variable parameters:
Query: 
<pre lang="graphql">
mutation addAUser($user: UserInput){
  addUser(newUser: $user ) {
    name
    email
    age
  }
}
</pre>
Parameters:
<pre lang="graphql">
{"user":{"name": "steve", "email": "steve@auth0.com"}}
</pre>
</td>
</tr>
