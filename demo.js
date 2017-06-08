'use strict'

//const HotelRepository = require('../../App/hotel/hotelRepository');
const models = require('../../models');

module.exports.insert = function (req, res) {
  models.Hotels
    .findOrCreate({where: {name: req.body.name, address: req.body.address}})
    .then((result) => {
      res.json(result)
    })
}

module.exports.insertRoom = function (req, res) {
    models.Rooms
      .create({name: req.body.name, price: req.body.price, hotel_id: req.params.id}).then((result) => {
      res.json(result)
  })
}

module.exports.getAllRoom = function (req, res) {
    models.Hotels
        .findOne({where: {id: req.params.hotelId}}).then((hotel) => {
            models.Rooms.findAll({where: {hotel_id: hotel.id}})
        .then((rooms) => {
                res.json(rooms)
            })
        })
}

module.exports.getLowestPrice = function (req, res) {
  models.Hotels
    .findOne({where: {id: req.params.hotelId}}).then((hotel) => {
    req.hotel = hotel
    models.Rooms
      .findOne({
        where     : {hotel_id: req.hotel.id},
        attributes: [
          [models.sequelize.fn('min', models.sequelize.col('price')), 'lowestPrice'],
        ]
      }).then((room) => {
      res.json(room)
    })
  })
}


module.exports.getAll = function(req, res) {
    res.send('Hello world')
}
req.app.mongodbConnection.collection('users')
    .insertOne({
        name: req.body.name,
        age: req.body.age
    }).then((user) => {
        res.send(user);
    }).catch((err) => {
        next(err);
    })

 // db.users.find()
