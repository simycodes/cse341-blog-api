// IMPORTING PACKAGES-DEPENDENCIES FOR THE SERVER
const express = require('express');
const passport = require('passport');

// GET THE VALIDATION FUNCTIONS
// const { validateIncomingUserData } = require('../middleware/validate');

// CREATING-DEFINING THE ROUTER VARIABLE
const authRouter = express.Router();

const { googleOAuth } = require('../controllers/authControllers.js');

// AUTHENTICATION WITH GOOGLE AUTH
authRouter.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// GOOGLE AUTH CALLBACK
authRouter.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  googleOAuth
);

module.exports = authRouter;
