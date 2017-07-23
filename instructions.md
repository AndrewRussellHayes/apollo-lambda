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


## How about a database somewhere along the line? Mongo? Dynamo? MySQL?



# references
- Apollo guide for AWS Serverless 
https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-lambda
