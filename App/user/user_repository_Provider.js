"use strict";


const UserRepository = require('./user_Repository');


module.exports = function(req, res, next) {
    let userRepository = new UserRepository(req.app.mongodbConnection);
    req.app.userRepository = userRepository;
    next();
};