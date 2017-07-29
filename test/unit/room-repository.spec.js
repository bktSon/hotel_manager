"use strict";

const assert         = require('assert');
const RoomRepository = require('../../App/room/room_Repository')
const models         = require('../../models');


describe('Room Repository', function() {
    it('should find by id without err', function(done) {
        let roomRepository = new RoomRepository(models.Rooms)
        roomRepository.findAll().then((rooms) => {
            assert.equal(rooms.length, 4)
            done();
        })
    })
})
