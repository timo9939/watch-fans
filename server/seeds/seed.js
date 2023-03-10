const db = require('../config/connection');
const {Profile,Product } = require('../models');

const profileData = require('./profileData.json');
const productData=require('./productData.json')

db.once('open', async () => {
  await Profile.deleteMany({});
  await Product.deleteMany({})

  const profiles = await Profile.insertMany(profileData);
const products=await Product.insertMany(productData)


  console.log('Technologies seeded!');
  process.exit(0);
});
