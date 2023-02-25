// IMPORTING PACKAGES-DEPENDENCIES FOR THE SERVER
const express = require('express');
const passport = require('passport');

// GET THE VALIDATION FUNCTIONS
const {
  validateIncomingUserDataForLoginUser,
  validateIncomingUserDataForUpdatingUser,
  validateIncomingUserDataForRegisteringUser
} = require('../middleware/validate');

// GET THE USER AUTHENTICATION FUNCTION
const { authenticateUser } = require('../middleware/authentication.js');
// CREATING-DEFINING THE ROUTER VARIABLE
const authRouter = express.Router();

const {
  googleOAuth,
  registerUser,
  login,
  updateUser
} = require('../controllers/authControllers.js');

// AUTHENTICATION WITH GOOGLE AUTH
authRouter.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// GOOGLE AUTH CALLBACK
authRouter.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  googleOAuth
);

// REGISTER A USER
authRouter.post('/registerUser', validateIncomingUserDataForRegisteringUser, registerUser);

// LOGIN A USER
authRouter.post('/login', validateIncomingUserDataForLoginUser, login);

// UPDATE A USER
authRouter.put(
  '/updateUser',
  authenticateUser,
  validateIncomingUserDataForUpdatingUser,
  updateUser
);

module.exports = authRouter;
