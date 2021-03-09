const { NotAuthorizedError } = require('../errors');

module.exports = (req, res, next) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }
  next();
};
