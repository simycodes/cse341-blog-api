// GET THE USER MODEL
// const User = require('../models/User');
// const ObjectId = require('mongodb').ObjectId;

// GET AS SINGLE USER
const googleOAuth = async (req, res) => {
  try {
    let firstName = req.user.firstName;
    let lastName = req.user.lastName;
    res.status(200).send(`You are now logged in as ${firstName} ${lastName}`);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  googleOAuth
};
