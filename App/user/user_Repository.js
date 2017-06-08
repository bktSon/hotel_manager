"use strict";
const ObjectId = require('mongodb').ObjectId;

class UserRepository {

    constructor(database) {
        this.database = database;
    };
    
    insert(name, age) {
        return this.database.collection('users').insertOne({
            name : name,
            age  : age
        })
    };
    
    findAll() {
        return this.database.collection('users').find().toArray()
    };
    
    findById(id) {
        return this.database.collection('users').findOne({
            _id: id
        })
    }
    
    destroy(id) {
        return this.database.collection('users').deleteOne({
            _id : id
        })
    }
    
    update(id, name, age) {
        return this.database.collection('users').updateOne({
            _id: id
        }, {
              $set: {
                name : name, 
                age : age
              },
        })
    }
}


module.exports = UserRepository;