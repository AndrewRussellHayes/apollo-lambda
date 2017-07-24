/**
 * this is the instance to run locally inside of docker - for local testing purposes
 */

const express = require('express');
const bodyParser = require('body-parser');
const apolloServerExpress = require('apollo-server-express')
const graphqlExpress = apolloServerExpress.graphqlExpress;
const graphiqlExpress = apolloServerExpress.graphiqlExpress;

const PORT = 3000;
const app = express();


//TODO: promise/resolveify
const schema = require('./Schema');

schema.setUp()
.then(_schema => {
  app.get('/', function(req, res) {
    res.send("Hello graphql");
  });

  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: _schema }));
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
  }));

  app.listen(PORT, function() {
    console.log("server listening on port " + PORT);
  });
});
