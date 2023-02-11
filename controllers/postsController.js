// GET THE USER MODEL
const Post = require('../models/Post');
const ObjectId = require('mongodb').ObjectId;

// GET AS SINGLE POST
const getSinglePost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Please provide a valid post id to get the post wanted.');
  }
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
  const newPost = new Post(req.body);
  try {
    // Save the new post
    const post = await newPost.save();
    res.status(201).json(post._id);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// UPDATE A POST
const updatePost = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Use valid post id to update the post.');
  }
  // console.log("updating a post function accessed");
  try {
    // Get the id of the post to be updated
    const post = await Post.findById(req.params.id);

    // Verify that the user is actually updating his own post
    if (post.userId === req.body.userId) {
      // Now update the post with new given data
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        // res.status(200).json(updatedPost);
        res.status(204).send();
      } catch (error) {
        res.status(500).json('Failed to update the post.Try again later');
      }
    } else {
      res.status(401).json('Invalid Request');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE A POST
const deletePost = async (req, res) => {
  // console.log("deleting a post function accessed");
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Please provide a valid post id in order to delete it.');
  }
  try {
    // Get the id of the post to be deleted
    const post = await Post.findById(req.params.id);
    // Verify that the user is actually updating his own post
    if (post.userId === req.body.userId) {
      // Now delete the post
      try {
        await post.delete();
        // res.status(200).json('The post has been deleted');
        res.status(200).send();
      } catch (error) {
        res.status(500).json('Failed to delete the post.Try again later');
      }
    } else {
      res.status(401).json('Invalid Request');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getSinglePost,
  getAllPosts,
  createPost,
  updatePost,
  deletePost
};
