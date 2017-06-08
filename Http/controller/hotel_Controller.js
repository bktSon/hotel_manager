'use strict'

const logger = require('../../logger');

module.exports.findAll = function(req, res) {
    req.app.hotelRepository.findAll().then((hotels) => {
        logger.info('List all hotel : ', hotels);
        // console.log(hotels);
        res.send(hotels);
    })
}

module.exports.findById = function(req, res) {
    req.app.hotelRepository.findById(req.params.id).then((hotel) => {
        logger.info('Hotel detail :', hotel)
        res.send(hotel);
    })
}











