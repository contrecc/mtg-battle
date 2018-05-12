const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const fetch = require('node-fetch');

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

const Card = mongoose.model('Card', cardSchema);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/cards', (req, res) => {
  fetch(`https://api.scryfall.com/cards?page=10`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let filteredData = data.data.filter(function(card) {
        return card.type_line && card.type_line.split(' ').includes('Creature');
      });

      filteredData.forEach(async function(item) {
        let card = new Card({
          name: item.name,
          image_uris: {
            art_crop: item.image_uris.art_crop,
            border_crop: item.image_uris.border_crop,
            large: item.image_uris.large,
            normal: item.image_uris.normal,
            png: item.image_uris.png,
            small: item.image_uris.small
          },
          power: item.power,
          toughness: item.toughness
        });

        await card.save(function(error, savedCard) {
          if (error) {
            console.log('Error saving to MongoDB', error);
          } else {
            console.log('Yay! ' + savedCard.name + ' was saved!');
          }
        });
      });
    })
    .catch(function(err) {
      console.log(err);
    });

  res.send('CREATURES STORED IN DB!');
});

app.get('/card', (req, res) => {
  // Get the count of all cards in database
  Card.count().exec(function(error, count) {
    // Get a random card
    let random = Math.floor(Math.random() * count);

    // Query all cards but only fetch one offset by our random number
    Card.findOne()
      .skip(random)
      .exec(function(error, result) {
        if (error) {
          console.log('Error finding a random card', error);
        } else {
          console.log('Found a new card!', result);
        }
      });
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
