const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

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

app.get('/', (req, res) => {
  res.send('hello world');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
