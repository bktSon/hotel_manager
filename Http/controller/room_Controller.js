"use strict";

const logger = require('../../logger');

module.exports.findAll = function(req, res) {
    req.app.roomRepository.findAll().then((rooms) => {
        // logger.info('List all room :', rooms)
        console.log(rooms);
        res.send(rooms);
    })
};

