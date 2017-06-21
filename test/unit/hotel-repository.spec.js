"use strict";

const assert         = require('assert');
const HotelReposiory = require('../../App/hotel/hotel_Repository');  
const models         = require('../../models');
const HotelFactory   = require('../../App/hotel/hotel_Factory');

describe('Hotel Repository', function() {
  
    describe('#findById()', function() {
        it('shoud findById without err', function(done) {
            let hotelRepository = new HotelReposiory(models.Hotels, new HotelFactory());
            hotelRepository.findById(1).then((hotel) => {
                assert.deepEqual(hotel, {name: 'Athena', address: 1});
                done();
            })
        })
    })
    
    describe('#findAll()', function() {
        it('should findAll without err', function(done) {
            let hotelRepository = new HotelReposiory(models.Hotels, new HotelFactory());
            hotelRepository.findAll().then((hotels) => {
                assert.equal(hotels.length, 4);
                done();
            })
        })
    })
})


