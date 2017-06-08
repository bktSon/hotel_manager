"use strict";
const ObjectId = require('mongodb').ObjectId;

module.exports = function(req, res, next) {
    req.app.userRepository.findById(new ObjectId(req.params.id))
        .then((user) => {
            if(user) {
                req.user = user;
                return next();
            };
            
            return res.send('Error user Id not found');
        })
}