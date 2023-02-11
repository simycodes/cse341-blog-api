// IMPORTING PACKAGES-DEPENDENCIES FOR THE SERVER
const express = require('express');

// CREATING-DEFINING THE ROUTER VARIABLE
const postRouter = express.Router();
// GET THE VALIDATION FUNCTIONS
const { validateIncomingPostData } = require('../middleware/validate');

const {
  getSinglePost,
  getAllPosts,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/postsController.js');

// GET AS SINGLE POST
postRouter.get('/:id', getSinglePost);

// GET ALL POSTS
postRouter.get('/', getAllPosts);

// CREATE A POST
postRouter.post('/', validateIncomingPostData, createPost);

// UPDATE A POST
postRouter.put('/:id', validateIncomingPostData, updatePost);

// DELETE A POST
postRouter.delete('/:id', deletePost);

module.exports = postRouter;
