const db = require('../config/connection');
const {Profile,Product } = require('../models');

const profileData = require('./profileData.json');
const productData=require('./productData.json')

console.log("seed.js opened")
db.once('open', async () => {
  await Profile.deleteMany({});
  await Product.deleteMany({})
  await Product.create(productData)
  await Profile.create(profileData)
 

// const profiles = await Profile.insertMany(profileData);
// const products=await Product.insertMany(productData)


  console.log('profile & products seeded!');
  process.exit(0);
});
