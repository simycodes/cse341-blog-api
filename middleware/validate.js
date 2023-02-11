const validator = require('../helpers/validate');

// FUNCTION TO VALIDATE INCOMING POST DATA
const validateIncomingPostData = (req, res, next) => {
  const validationRule = {
    title: 'required|string',
    description: 'required|string',
    postCategory: 'required|string',
    userId: 'required|string',
    userEmail: 'required|email'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

// FUNCTION TO VALIDATE INCOMING USER DATA
const validateIncomingUserData = (req, res, next) => {
  const validationRule = {
    firstName: 'required|string',
    lastName: 'required|string',
    userEmail: 'required|email',
    password: 'required|string',
    birthday: 'string',
    gender: 'string',
    favoriteQuote: 'string',
    country: 'string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  validateIncomingPostData,
  validateIncomingUserData
};
