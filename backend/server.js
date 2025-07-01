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

app.use(cors({
  origin: 'https://notesnest-gules.vercel.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(bodyParser.json());

const client = new MongoClient(url);
client.connect();

app.get('/api/notes', async (req, res) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection('notes');
    const notes = await collection.find({}).toArray();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching notes' });
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection('notes');
    const note = { ...req.body, createdAt: new Date().toISOString() };
    const result = await collection.insertOne(note);
    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ error: 'Error saving note' });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
