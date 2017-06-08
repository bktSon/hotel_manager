'use strict'

module.exports.findAll = function(req, res) {
    req.app.hotelConnection.findAll().then((result) => {
        res.send(result);
    })
}

module.exports.findById = function(req, res) {
    req.app.hotelConnection.findById(req.params.hotelId).then((hotel) => {
        res.send(hotel);
    })
}











