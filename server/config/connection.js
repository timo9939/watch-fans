const mongoose = require('mongoose');
const express = require('express')

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/Project3',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);



module.exports = mongoose.connection;

