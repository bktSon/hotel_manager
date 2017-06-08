"use strict";


module.exports.findAll = function(req, res) {
    req.app.roomRepository.findAll().then((room) => {
        res.send(room);
    })
}