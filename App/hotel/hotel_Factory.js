"use strict";

const _ = require('lodash');

class HotelFactory {
  
    factory(rawHotel) {
        return {
            // id : rawHotel.id,
            name: rawHotel.name,
            address: rawHotel.address
        };
    };
    
    factoryList(rawHotels) {
        let hotelList = [];
        _.forEach(rawHotels, function(hotel) {
            let data = {
                id  : hotel.id,
                name: hotel.name,
                address: hotel.address
            };
            hotelList.push(data);
        })
        return hotelList;
    };
    
};

module.exports = HotelFactory;