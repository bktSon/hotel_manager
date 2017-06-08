"use strict";

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test';

module.exports = function(req, res, next) {
  	MongoClient.connect(url, function(err, connection) {
  		if (err) {
          return next(err);
  		}
      		req.app.mongodbConnection = connection;
      		next();
  	})
}
