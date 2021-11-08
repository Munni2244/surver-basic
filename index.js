const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT ||4000;
const { MongoClient } = require('mongodb');

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${ process.env.DB_USER}:${process.env.DB_PASS}@cluster0.crn6x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

import { MongoClient } from "mongodb";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db("sample_mflix");
    const movies = database.collection("movies");


  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send("Its maria's Parlour !")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})