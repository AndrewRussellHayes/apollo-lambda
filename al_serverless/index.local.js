/**
 * this is the instance to run locally inside of docker - for local testing purposes
 */

const express = require('express');
const bodyParser = require('body-parser');
const graphqlExpress = require('apollo-server-express').graphqlExpress;

console.log("HEY!!");

const schema = require('./Schema');
const PORT = 3000;

const app = express();

app.get('/', function(req, res) {
  res.send("Hello graphql");
});

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }));

app.listen(PORT, function() {
  console.log("server listening on port " + PORT);
});
