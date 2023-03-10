const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    photo: {
      type: String,
      required: true,
      unique: true,
    },
  description:{
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    }
  });