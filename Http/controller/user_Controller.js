"use strict";

const ObjectId = require('mongodb').ObjectId;

module.exports.insert = function(req, res, next) {
    req.app.userRepository.insert(req.body.name, req.body.age).then((newUser) => {
        res.send(newUser);
    }).catch((err) => {
        return reject(err);
    })
};

module.exports.findAll = function(req, res, next) {
    req.app.userRepository.findAll().then((user) => {
        res.send(user);
    })
};

module.exports.findById = function(req, res, next) {
    res.send(req.user);
};

module.exports.destroy = function(req, res, next) {
    req.app.userRepository.destroy(req.user._id).then((result) => {
        res.send(result);
    })
};

module.exports.update = function(req, res, next) {
    req.app.userRepository.update(req.user._id, req.body.name, req.body.age).then((result) => {
        res.send(result);
    });
}