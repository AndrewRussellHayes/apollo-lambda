const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_NAME}`

const connectMongo = () => {
  return new Promise((resolve, reject) => {

    MongoClient.connect(MONGO_URL, (err, db) => {
      return err ? reject(err) : resolve(db);
    });
  });
}

const prepare = (o) => {
  o._id = o._id.toString()
  return o
}

const setUp = () => {
  console.log(`Connecting to Mongo at: ${MONGO_URL}`);

  let db = null;
  let Posts = null;

  return connectMongo()
  //TODO: we shouldn't drop the collection each time, better to just check that it has or hasn't been seeded.
  .then(_db => {
    db = _db;

    Posts = db.collection('posts');
    return Posts.drop()
      .catch(err => console.log(err));
  })
  .then(() => {
    Posts = db.collection('posts');

    const postData = [
      { imageUrl: 1, description: 'Introduction to GraphQL'},
      { imageUrl: 2, description: 'Welcome to Meteor'},
      { imageUrl: 2, description: 'Advanced GraphQL'},
      { imageUrl: 3, description: 'Launchpad is Cool'},
    ];

    return Posts.insertMany(postData);
  })
  .then(() => {
    const typeDefs = `
      type Post {
        description: String!
        _id: ID! @isUnique
        imageUrl: String!
      }

      type Query {
        post(_id: String): Post
        posts: [Post]
      }
    `;

    const resolvers = {
      Query: {
        posts: () => {
          return Posts.find({}).toArray()
            .then(_posts => {
              return _posts.map(prepare);
            });
        }
      },
    };


    return makeExecutableSchema({
      typeDefs,
      resolvers,
    });
  })
  .catch(err => {
    console.log(err);
    return Promise.reject(err);
  });
}

module.exports = {
  setUp: setUp
};
