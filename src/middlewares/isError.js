const { CustomError } = require('../errors');

module.exports = (err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).send({ errors: err.serializeErrors() });
  } else {
    // CASE ERROR IS NOT HANDLED
    console.error('Middleware error', err);
    res
      .status(400)
      .send({ errors: [{ message: `Something when wrong: ${err}` }] });
  }
  next();
};
