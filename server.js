const express = require('express');
const bodyParser = require('body-parser');
const graphqlExpress = require('apollo-server-express').graphqlExpress
const graphiqlExpress = require('apollo-server-express').graphiqlExpress

const schema = require('./schema.js')

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema}));
// app.use('/graphql', bodyParser.json(), graphqlExpress(req => ({ schema: myGraphQLSchema, context: {req} })));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.listen(3000);

console.log('open http://localhost:3000/graphiql')
