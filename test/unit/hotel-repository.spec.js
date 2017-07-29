"use strict";

const assert          = require('assert');
const HotelRepository = require('../../App/hotel/hotel_Repository');
const models          = require('../../models');
const HotelFactory    = require('../../App/hotel/hotel_Factory');

describe('Hotel Repository', function() {
  
    describe('#findById()', function() {
        it('should findById without err', function(done) {
            let hotelRepository = new HotelRepository(models.Hotels, new HotelFactory());
            hotelRepository.findById(1).then((hotel) => {
                assert.deepEqual(hotel, {name: 'Athena', address: 1});
                done();
            })
        })
    })
    
    describe('#findAll()', function() {
        it('should findAll without err', function(done) {
            let hotelRepository = new HotelRepository(models.Hotels, new HotelFactory());
            hotelRepository.findAll().then((hotels) => {
                assert.deepEqual(hotels[0], { id: 1, name: 'Athena', address: '1' });
                done();
            })
        })
    })
})


