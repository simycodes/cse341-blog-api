// IMPORTING PACKAGES-DEPENDENCIES FOR THE SERVER
const express = require('express');

// CREATING-DEFINING THE ROUTER VARIABLE
const postRouter = express.Router();

const { getSinglePost, getAllPosts, createPost } = require('../controllers/postsController.js');

// GET AS SINGLE POST
postRouter.get('/:id', getSinglePost);

// GET ALL POSTS
postRouter.get('/', getAllPosts);

// CREATE A POST
postRouter.post('/', createPost);

module.exports = postRouter;
