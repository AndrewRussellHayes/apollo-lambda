Apollo Server + Serverless = Graphql Bliss!


serverless create --template aws-nodejs --path al_serverless
cd al_serverless
npm install --save apollo-server-lambda graphql-tools lodash

## write code:
- edit handler
- add schema




#try testing locally:
serverless invoke local --function graphql --data '{"httpMethod": "POST",  "body": {"query":"{posts{id description}}"}}'
