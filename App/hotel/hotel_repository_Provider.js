'use strict';

const HotelRepository = require('./hotel_Repository');
const HotelFactory    = require('./hotel_Factory');
const models          = require('../../models');


module.exports = function(req, res, next) {
    let hotelRepository = new HotelRepository(models.Hotels, new HotelFactory());
    req.app.hotelConnection = hotelRepository;
    next();
}

