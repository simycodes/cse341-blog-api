// IMPORTING PACKAGES-DEPENDENCIES
const express = require('express');
// CREATING-DEFINING THE MAIN APP ROUTER VARIABLE
const router = express.Router();

// GETTING ALL DIFFERENT APP ROUTES
const homeRouter = require('./homeRoute.js');
const userRouter = require('./usersRoutes');
const postRouter = require('./postsRoutes');
const swaggerRouter = require('./swaggerConnectionRoutes');

// LINKING ALL DIFFERENT APP ROUTES TO SINGLE MAIN ROUTE
router.use('/', swaggerRouter);
router.use('/', homeRouter);
router.use('/users', userRouter);
router.use('/posts', postRouter);

// The app. use() method mounts or puts the specified middleware functions at the specified
// path. This middleware function will be executed only when the base of the requested path
// matches the defined path.

module.exports = router;
