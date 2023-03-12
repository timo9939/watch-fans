const db = require('../config/connection');
const {Profile,Product} = require('../models');

const profileData = require('./profileData.json');
const productData=require('./productData.json')

console.log("seed.js opened")
db.once('open', async () => {
  console.log("db function in seed is activated")
  await Profile.deleteMany({});
  await Product.deleteMany({})
  await Product.insertMany(productData)
  await Profile.insertMany(profileData)
   // await Product.create(productData)

// const profiles = await Profile.insertMany(profileData);
// const products=await Product.insertMany(productData)


  console.log('profile & products seeded!');
  process.exit(0);
});
