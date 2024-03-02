// Connection to MongoDB
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Post = require('../models/post'); 
const User = require('../models/user');
dotenv.config();

const MongoDB_URI = process.env.MongoDB_URI;
const port = process.env.PORT || 3000;



mongoose
  .connect(MongoDB_URI)
  .then(() => {
    console.log('Connected to MongoDB');

  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


module.exports = mongoose ;