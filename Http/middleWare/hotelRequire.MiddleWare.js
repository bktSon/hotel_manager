'use strict'

module.exports = function (req, res, next) {
  if (!req.body.name.length || !req.body.address.length) {
    return res.json('Missing some field');
  }
  next();
}
