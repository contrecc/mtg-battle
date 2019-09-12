const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const fetch = require("node-fetch");
const random = require("mongoose-simple-random");
const path = require("path");

const app = express();

// Database configuration
const db = process.env.MONGO_URI;

// Connect to mongoose
mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  function(error) {
    if (error) {
      console.log("Error connecting to MongoDB", error);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

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

const Card = mongoose.model("Card", cardSchema);

// Route to fetch card data from Scryfall and add it to our MongoDB database.
// We only save creatures that have a numeric power and toughness.
// When developing locally, we must run this route on the server (localhost:5000/cardsfordatabase) to fetch more cards.
// We must specify which pages we want to crawl in the for loop. We have already crawled pages 1-99.
// ************************************************************************************************************
// Function used in "/cardsfordatabase" route to test if a card has a numeric power or toughness
// function hasOnlyDigits(value) {
//   return /^\d+$/.test(value);
// }
// ************************************************************************************************************
// app.get("/cardsfordatabase", (req, res) => {
//   for (let i = 90; i < 100; i++) {
//     fetch(`https://api.scryfall.com/cards?page=${i}`)
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(data) {
//         let filteredData = data.data.filter(function(card) {
//           isCreature =
//             card.type_line && card.type_line.split(" ").includes("Creature");

//           isSplitCard = card.name.includes("//");

//           hasPower = hasOnlyDigits(card.power);

//           hasToughness = hasOnlyDigits(card.toughness);

//           return isCreature && !isSplitCard && hasPower && hasToughness;
//         });

//         filteredData.forEach(async function(item) {
//           let card = new Card({
//             name: item.name,
//             image_uris: {
//               art_crop: item.image_uris.art_crop,
//               border_crop: item.image_uris.border_crop,
//               large: item.image_uris.large,
//               normal: item.image_uris.normal,
//               png: item.image_uris.png,
//               small: item.image_uris.small
//             },
//             power: item.power,
//             toughness: item.toughness
//           });

//           await card.save(function(error, savedCard) {
//             if (error) {
//               console.log("Error saving to MongoDB", error);
//             } else {
//               console.log(
//                 `Yay! ${savedCard.name} was saved! It is a ${savedCard.power} / ${savedCard.toughness} creature!`
//               );
//             }
//           });
//         });
//       })
//       .catch(function(err) {
//         console.log(err);
//       });
//   }

//   res.send("CREATURES STORED IN DB!");
// });

app.get("/cards", (req, res) => {
  Card.findRandom({}, {}, { limit: 2 }, function(error, cards) {
    if (error) {
      console.log("Error finding two cards", error);
    } else {
      return res.json(cards);
    }
  });
});

// Serve static assets if app is in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
