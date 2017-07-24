'use strict';

const server = require("apollo-server-lambda");
const schema = require('./Schema');




exports.graphql = (event, context, cb) => {
//TODO: refactor to make sense

  schema.setUp()
  .then(_schema => {
    cb(null, {"statusCode": 200, "body": "results"});
  })
  .catch(err => {
    cb(err);
  });
  
  // .then(_schema => {
  //   const functionName = context.functionName;
  //   const headers = event.headers;
  //
  //   return server.graphqlLambda({
  //     schema: _schema,
  //     context: {
  //       headers,
  //       functionName,
  //       event,
  //       context
  //     }
  //   });
  // });
}
  // .then(() => {
  //   const headers = event.headers;
  //   const functionName = context.functionName;
  //
  //   console.log("graphqlLambda");
  //
  //   return {
  //      schema: _schema,
  //      context: {
  //          headers,
  //          functionName,
  //          event,
  //          context
  //      }
  //   };
  // });
//
exports.graphiql = server.graphiqlLambda({
  endpointURL: '/development/graphql'
});

exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};
