const TypedError = require("typed-error");

class BadRequestError extends TypedError {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports.BadRequestError = BadRequestError;

module.exports.wrapRequest = (handler, defaultError) => (req, res) =>
  handler(req, res)
    .then(response => {
      res.status(200).send(response || "");
    })
    .catch(err => {
      console.error(err, err.stack);
      res.status(500).send(err.message || defaultError);
    });
