'use strict';

const models = require('../../models/index');

module.exports = function(req, res, next) {
  
    req.app.hotelRepository.findById(req.params.hotelId).then((hotel) => {
        if(hotel) {
            req.hotel = hotel;
            return next();
        }
        return res.send('Hotel not existed');
    });
    
}
