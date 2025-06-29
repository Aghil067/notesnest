const express = require('express')
const app = express()
const port = 3000
const dotenv = require('dotenv');
const dbName = 'notesApp';
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors())
app.use(bodyParser.json());
dotenv.config();

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

client.connect();
app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('notes');
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
})

app.post('/', async (req, res) => {
  const notes = req.body;
  const db = client.db(dbName);
  const collection = db.collection('notes');
  const findResult = await collection.insertOne(notes);
  res.send({success: true, result: findResult});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})