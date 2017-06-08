'use strict';

module.exports = function(req, res, next) {
  if(!req.body.name.length || !req.body.price.length) {
    return res.sendStatus(400);
  }
  next();
}

