"use strict";

let Promise = require('bluebird');

class HotelReposiory {
  
    constructor(database, factory) {
        this.database = database;
        this.factory  = factory;
    }
    
    findAll() {
        return this.database.findAll().then((hotels) => {
            return this.factory.factoryList(hotels);
        });
        
        // let self = this;
        // return new Promise(function(resolve, reject) {
        //     return self.database.findAll().then((hotels) => {
        //         resolve(self.factory.factoryList(hotels));
        //     })
        // })
    } 
    
    findById(id) {
        // return this.database.findOne({where: {id: id}}).then((hotel) => {
        //     return this.factory.factory(hotel);
        // });
        // let hotel = this.database.findOne({where: {id: id}});
        let self = this;
        return new Promise(function(resolve, reject) {
            return self.database.findOne({where: {id: id}}).then((hotel) => {
                resolve(self.factory.factory(hotel));
            })
        })
    }
}


module.exports = HotelReposiory;