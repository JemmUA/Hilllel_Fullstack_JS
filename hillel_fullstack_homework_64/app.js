import express from 'express';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

console.log('MONGO DB');

// console.log(process.env.NODE_ENV);
// console.log(process.env.MONGO_CONNECTION);
// console.log(process.env.PORT);

const client = new MongoClient(process.env.MONGO_CONNECTION);

const app = express();
app.use(express.json());


async function startServer() {
  console.log('Starting server...!');
  try {
    await client.connect();
    console.log('Connected to MongoDB!');

    app.listen(process.env.PORT, () => {
      console.log(`Server started at port ${process.env.PORT}`)
    });
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

startServer();