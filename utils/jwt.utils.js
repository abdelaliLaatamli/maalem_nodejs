const { jwtsecret } = require('../config');
const jwt = require('jsonwebtoken')

// max age of jwt token
const maxAge = 3 * 24 * 60 * 60;
// create json web token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtsecret , {
    expiresIn: maxAge
  });
};

module.exports = generateToken;