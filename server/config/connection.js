const mongoose = require('mongoose');
const express=require('express')

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);



module.exports = mongoose.connection;

