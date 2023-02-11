// IMPORTING PACKAGES-DEPENDENCIES FOR THE SERVER
const express = require('express');
// GET THE VALIDATION FUNCTIONS
const { validateIncomingUserData } = require('../middleware/validate');

// CREATING-DEFINING THE ROUTER VARIABLE
const userRouter = express.Router();

const { getSingleUser, getAllUsers, registerUser } = require('../controllers/usersController.js');

// GET AS SINGLE USER
userRouter.get('/:id', getSingleUser);

// GET ALL USERS
userRouter.get('/', getAllUsers);

// CREATE A USE
userRouter.post('/', validateIncomingUserData, registerUser);

module.exports = userRouter;
