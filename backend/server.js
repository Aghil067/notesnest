const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const dbName = 'notesApp';
const url = process.env.MONGODB_CONNECT_URI;
const PORT = process.env.PORT || 3000;

const client = new MongoClient(url);

app.use(cors());
app.use(bodyParser.json());

client.connect();

app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('notes');
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

app.post('/', async (req, res) => {
  const notes = { ...req.body, createdAt: new Date().toISOString() };
  const db = client.db(dbName);
  const collection = db.collection('notes');
  const findResult = await collection.insertOne(notes);
  res.send({ success: true, result: findResult });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
