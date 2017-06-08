"use strict";


class RoomRepository {
  
    constructor(database) {
        this.roomConnection = database;
    };
    
    findAll() {
        return this.roomConnection.findAll();
    };
}



module.exports = RoomRepository;