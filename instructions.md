Apollo Server + Serverless = Graphql Bliss!


serverless create --template aws-nodejs --path al_serverless
cd al_serverless
npm install --save apollo-server-lambda graphql-tools lodash

## write code:
- edit handler
- add schema


## try testing locally:
serverless invoke local --function graphql --data '{"httpMethod": "POST",  "body": {"query":"{posts{id description}}"}}'


## deploy and test on api gateway!

- make sure you have aws credentials installed!

```
export AWS_PROFILE=vessels-lewis.daly
serverless deploy
```

## Now let's graphiql working
- add the graphiql endpoint, and navigate here (make sure to include the 'query' query parameter on the end)
 https://siclwpysu2.execute-api.ap-southeast-2.amazonaws.com/development/graphiql?query=
 https://siclwpysu2.execute-api.ap-southeast-2.amazonaws.com/development/graphiql?query=query%20%7B%0A%20%20posts%20%7B%0A%20%20%20%20id%0A%20%20%7D%0A%7D&operationName=undefined




## How about a database somewhere along the line? Mongo? Dynamo? MySQL?
Next post please
## set up locally using express and docker - to test our resolvers etc:

npm install --save express body-parser
```
# make all docker-compose, Dockerfiles etc.
# make index.local.js
```

now naviate to:
`http://docker.local:3000/graphiql`

## Adding optics

## Adding front end


# references
- Apollo guide for AWS Serverless
https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-lambda
https://medium.com/the-ideal-system/graphql-and-mongodb-a-quick-example-34643e637e49
