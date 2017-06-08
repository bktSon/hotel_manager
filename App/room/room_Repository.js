"use strict";

const Promise = require('bluebird');


class RoomRepository {
  
    constructor(database) {
        this.roomConnection = database;
    };
    
    findAll() {
        // return this.roomConnection.findAll();
        let self = this;
        return new Promise(function(resolve, reject) {
            resolve(self.roomConnection.findAll());
        })
    };
    
    findById(id) {
        return this.roomConnection.findOne({where: {id : id}});
    }
}



module.exports = RoomRepository;