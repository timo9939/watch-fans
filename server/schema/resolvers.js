const { Profile } = require('../models');
const { Product } = require('../models')
const { signToken } = require('../utils/auth.js');

const resolvers = {
  Query: {
    
    users: async () => {
      return await Profile.find()
    },
    login: async (_, { username, password }) => {
      const profile = await Profile.findOne({ username });

      if (!profile) {
        throw new Error('No profile with this username found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new Error('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    getAllProduct:async()=>{
      return await Product.find()
    }
  },

  //Adding the user username,email and password to the database
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const user = await Profile.create({
        username, email, password
      })
      const token = signToken(user);
      return { token }
    },
    login: () => {
      return {}
    }
  },
};

module.exports = resolvers;
