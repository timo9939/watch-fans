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
      match: [/@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    }
  });