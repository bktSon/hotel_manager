"use strict";


const RoomReposiory = require('../../App/room/room_Repository');  
const models        = require('../../models');
const assert        = require('assert');


describe('Room Repository', function() {
    
    before(function () {
        let roomRepository = new RoomReposiory(models.Rooms);
        
        describe('#findAll()', function() {
            it('should return without err', function(done) {
                
                roomRepository.findAll().then((rooms) => {
                    assert.deepEqual(rooms.length, 4);
                    done();
                })
            })
        });
        
        describe('#findById()', function() {
            it('should return room with id = 1 without err', function(done) {
                // let roomRepository = new RoomReposiory(models.Rooms);
                roomRepository.findById(1).then((room) => {
                    // console.log(room.dataValues);
                    assert.deepEqual(room.dataValues, { id: 1, name: 'vip1', price: '1000', hotel_id: '1' });
                    done();
                })
            })
        })
    });
    
  
})