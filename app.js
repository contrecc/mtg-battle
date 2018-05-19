const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const random = require('mongoose-simple-random');
const path = require('path');

const app = express();

// Database configuration
const db = process.env.MONGO_URI;

// Connect to mongoose
mongoose.connect(db, function(error) {
  if (error) {
    console.log('Error connecting to MongoDB', error);
  } else {
    console.log('Connected to MongoDB');
  }
});

const cardSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  image_uris: {
    art_crop: String,
    border_crop: String,
    large: String,
    normal: String,
    png: String,
    small: String
  },
  power: String,
  toughness: String
});

cardSchema.plugin(random);

const Card = mongoose.model('Card', cardSchema);

app.get('/cards', (req, res) => {
  Card.findRandom({}, {}, {limit: 2}, function(error, cards) {
    if(error) {
      console.log('Error finding two cards', error);
    } else {
      return res.json(cards);
    }
  });
});

// Serve static assets if app is in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
