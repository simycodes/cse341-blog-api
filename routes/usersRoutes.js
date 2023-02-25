// IMPORTING PACKAGES-DEPENDENCIES FOR THE SERVER
const express = require('express');
// GET THE USER AUTHENTICATION FUNCTION
const { authenticateUser } = require('../middleware/authentication.js');
// CREATING-DEFINING THE ROUTER VARIABLE
const userRouter = express.Router();

const { getSingleUser, getAllUsers } = require('../controllers/usersController.js');

// GET AS SINGLE USER
userRouter.get('/:id', authenticateUser, getSingleUser);

// GET ALL USERS
userRouter.get('/', authenticateUser, getAllUsers);

// CREATE A USER
// userRouter.post('/', validateIncomingUserData, registerUser);

module.exports = userRouter;
