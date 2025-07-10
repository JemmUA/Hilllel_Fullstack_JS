import express from 'express';
import dotenv from 'dotenv';
import {MongoClient, ObjectId} from 'mongodb';

dotenv.config();

console.log('MONGO DB');

// console.log(process.env.NODE_ENV);
// console.log(process.env.MONGO_CONNECTION);
// console.log(process.env.PORT);

const PORT = process.env.PORT || 3033;
const MONGODB_CONNECTION = process.env.MONGO_CONNECTION;
const CURR_DB_NAME = process.env.MONGO_DB_NAME;
let currentDatabase;

const client = new MongoClient(MONGODB_CONNECTION);

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  const collections = await currentDatabase.listCollections().toArray();
  let collectionsHTML = '<h1>Collections</h1>';
    collections.forEach(collection => {
      collectionsHTML += '<a href="/${collection}/">${collection}</a><br>';
  });
  res.send(collectionsHTML);
  // res.send('<a href="/movies/">Movies</a>');
});

app.get('/movies', async (req, res) => {
  const moviesCollection = currentDatabase.collection('movies'); // Object moviesCollection for working with the collection
  console.log('Movies Collection:', moviesCollection);
  const movies = await moviesCollection.find().skip(1).limit(2).toArray();
  // res.send('You will not believe :))) It works!!!!!')
  res.json(movies);
});

app.get('/movies/:movieId', async (req, res) => {
  const { movieId } = req.params;

  if (!ObjectId.isValid(movieId)) {
    return res.status(400).send('Wrong movie Id format');
  }

  const moviesCollection = currentDatabase.collection('movies'); // Object moviesCollection for working with the collection
  console.log('Movies Collection:', moviesCollection);
  // const movies = await moviesCollection.find({ title: 'A Corner in Wheat'}).toArray();
  const movies = await moviesCollection.find({ _id: new ObjectId(movieId)}).toArray();
  res.json(movies);
});

async function startServer() {
  console.log('Starting server...!');
  try {
    await client.connect();
    console.log('Connected to MongoDB!');
    currentDatabase = client.db(CURR_DB_NAME);
    // const anotherDatabase = client.db('another_db');
    // console.log('Current database name:', CURR_DB_NAME);

    const collections = await currentDatabase.listCollections().toArray();
    console.log(`\nList of collections in database ${CURR_DB_NAME}:`);
    collections.forEach(collection => console.log(collection.name));

    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`)
    });
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

startServer();