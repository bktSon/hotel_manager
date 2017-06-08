'use strict';

const models = require('../../models/index');

module.exports = function(req, res, next) {
  
    models.Hotels.findOne({where: {id: req.params.hotelId}}).then((hotel) => {
        if( ! hotel) {
            return res.json('Hotel not existed');
        }
    });
    
    next();
}
