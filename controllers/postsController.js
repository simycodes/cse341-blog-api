// GET THE USER MODEL
const Post = require('../models/Post');

// GET AS SINGLE POST
const getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ALL POSTS
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

// CREATE A POST
const createPost = async (req, res) => {
  // Create a new User
  const newPost = new Post(req.body);
  try {
    // Save the new post
    const post = await newPost.save();
    res.status(201).json(post._id);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getSinglePost,
  getAllPosts,
  createPost
};
