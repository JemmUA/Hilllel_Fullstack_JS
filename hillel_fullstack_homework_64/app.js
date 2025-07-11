import express from 'express';
import dotenv from 'dotenv';
import {MongoClient, ObjectId} from 'mongodb';

dotenv.config();

console.log('MONGO DB');

// console.log(process.env.NODE_ENV);
// console.log(process.env.MONGO_CONNECTION);
// console.log(process.env.PORT);

const PORT = process.env.PORT;
const MONGODB_CONNECTION = process.env.MONGO_CONNECTION;
const CURR_DB_NAME = process.env.MONGO_DB_NAME;
let currentDatabase;

const client = new MongoClient(MONGODB_CONNECTION);

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  const collections = await currentDatabase.listCollections().toArray();
  let collectionsHTML = `<p>Database:</p> <h1>${CURR_DB_NAME}</h1><h2>Collections</h2><hr>`;
    collections.forEach(collection => {
      collectionsHTML += `<h3><a href="/${collection.name}/">${collection.name.toUpperCase()}</a></h3>`;
  });
  res.send(collectionsHTML);
  // res.send('<a href="/movies/">Movies</a>');
});

app.get('/users', async (req, res) => {
  const usersCollection = currentDatabase.collection('users'); // Object moviesCollection for working with the collection
  console.log('Users Collection:', usersCollection);
  const users = await usersCollection.find().skip(1).limit(5).toArray();
  res.json(users);
});

app.get('/movies', async (req, res) => {
  const moviesCollection = currentDatabase.collection('movies'); // Object moviesCollection for working with the collection
  console.log('Movies Collection:', moviesCollection);
  const movies = await moviesCollection.find().skip(1).limit(2).toArray();
  // res.send('You will not believe :))) It works!!!!!')
  res.json(movies);
});

app.get('/embedded_movies', async (req, res) => {
  const embeddedMoviesCollection = currentDatabase.collection('embedded_movies'); // Object moviesCollection for working with the collection
  console.log('Embedded movies Collection:', embeddedMoviesCollection);
  const embeddedMovies = await embeddedMoviesCollection.find().skip(3).limit(2).toArray();
  res.json(embeddedMovies);
});

app.get('/sessions', async (req, res) => {
  const sessionsCollection = currentDatabase.collection('sessions'); // Object moviesCollection for working with the collection
  console.log('Sessions Collection:', sessionsCollection);
  const sessions = await sessionsCollection.find().limit(1).toArray();
  res.json(sessions);
});

app.get('/theaters', async (req, res) => {
  const theatersCollection = currentDatabase.collection('theaters'); // Object moviesCollection for working with the collection
  console.log('Theaters Collection:', theatersCollection);
  const theaters = await theatersCollection.find().skip(1).limit(2).toArray();
  res.json(theaters);
});

app.get('/comments', async (req, res) => {
  const commentsCollection = currentDatabase.collection('comments'); // Object moviesCollection for working with the collection
  console.log('Comments Collection:', commentsCollection);
  const comments = await commentsCollection.find().skip(1).limit(3).toArray();
  res.json(comments);
});


app.get('/users/:userId', async (req, res) => {
  const { userId } = req.params;
  if (!ObjectId.isValid(userId)) {
    return res.status(400).send('Wrong user Id format');
  }
  const usersCollection = currentDatabase.collection('users'); // Object moviesCollection for working with the collection
  console.log('Users Collection:', usersCollection);
  const users = await usersCollection.find({ _id: new ObjectId(userId)}).toArray();
  res.json(users);
});

// routes by Id

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

app.get('/embedded_movies/:embeddedMovieId', async (req, res) => {
  const { embeddedMovieId } = req.params;
  if (!ObjectId.isValid(embeddedMovieId)) {
    return res.status(400).send('Wrong embedded movie Id format');
  }
  const embeddedMoviesCollection = currentDatabase.collection('embedded_movies'); // Object moviesCollection for working with the collection
  console.log('Embedded movies Collection:', embeddedMoviesCollection);
  const embeddedMovies = await embeddedMoviesCollection.find({ _id: new ObjectId(embeddedMovieId)}).toArray();
  res.json(embeddedMovies);
});

app.get('/sessions/:sessionId', async (req, res) => {
  const { sessionId } = req.params;
  if (!ObjectId.isValid(sessionId)) {
    return res.status(400).send('Wrong session Id format');
  }
  const sessionsCollection = currentDatabase.collection('sessions'); // Object moviesCollection for working with the collection
  console.log('Sessions Collection:', sessionsCollection);
  const sessions = await sessionsCollection.find({ _id: new ObjectId(sessionId)}).toArray();
  res.json(sessions);
});

app.get('/theaters/:theaterId', async (req, res) => {
  const { theaterId } = req.params;
  if (!ObjectId.isValid(theaterId)) {
    return res.status(400).send('Wrong theater Id format');
  }
  const theatersCollection = currentDatabase.collection('theaters'); // Object moviesCollection for working with the collection
  console.log('Theaters Collection:', theatersCollection);
  const theaters = await theatersCollection.find({ _id: new ObjectId(theaterId)}).toArray();
  res.json(theaters);
});

app.get('/comments/:commentId', async (req, res) => {
  const { commentId } = req.params;
  if (!ObjectId.isValid(commentId)) {
    return res.status(400).send('Wrong comment Id format');
  }
  const commentsCollection = currentDatabase.collection('comments'); // Object moviesCollection for working with the collection
  console.log('Comments Collection:', commentsCollection);
  const comments = await commentsCollection.find({ _id: new ObjectId(commentId)}).toArray();
  res.json(comments);
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