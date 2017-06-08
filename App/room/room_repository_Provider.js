"use strict";
const RoomRepository = require('./room_Repository');
const models         = require('../../models');

module.exports = function(req, res, next) {
    let roomRepository = new RoomRepository(models.Rooms);
    req.app.roomRepository = roomRepository;
    next();
};