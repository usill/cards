// const buttonRight = document.querySelector('.cards__next');
// const buttonLeft = document.querySelector('.cards__back');
// const wordsList = document.querySelector('.cards');
// const pageNumber = document.querySelector('.cards__number');

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/card.routes');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', router);

async function start() {
  try {
    await mongoose.connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  } catch(e) {
    console.log(e);
  }
}

start();

// const url = process.env.DB_URL;
// const { MongoClient } = require('mongodb');
// const mongoClient = new MongoClient(url);

// mongoClient.connect( (err, client) => {
//   const db = client.db('CardsDB');
//   const collection = db.collection('cards');
//   collection.find().toArray( (err, res) => {
//     console.log(res);
//   })
// })