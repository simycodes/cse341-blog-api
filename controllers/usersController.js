// GET THE USER MODEL
const User = require('../models/User');

// GET AS SINGLE USER
const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ALL USERS
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

// CREATE A USER
const registerUser = async (req, res) => {
  // Create a new User
  const newUser = new User(req.body);
  try {
    // Save the new user
    const user = await newUser.save();
    res.status(201).json(user._id);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  getSingleUser,
  getAllUsers,
  registerUser
};
