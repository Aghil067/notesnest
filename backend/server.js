const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const url = process.env.MONGODB_CONNECT_URI;
const dbName = 'notesApp';
const PORT = process.env.PORT || 3001;

const client = new MongoClient(url);
app.use(cors());
app.use(bodyParser.json());

client.connect();

app.get('/api/notes', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('notes');
  const notes = await collection.find({}).toArray();
  res.json(notes);
});

app.post('/api/notes', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('notes');
  const note = { ...req.body, createdAt: new Date().toISOString() };
  const result = await collection.insertOne(note);
  res.send({ success: true, result });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
