'use strict'
const express    = require('express');
const app        = express();
const router     = require('./Http/router/router')
const bodyParser = require('body-parser');
const hotelRepositoryProvider = require('./App/hotel/hotel_repository_Provider');
const roomRepositoryProvider  = require('./App/room/room_repository_Provider') ;
const userRepositoryProvider  = require('./App/user/user_repository_Provider');
const mongodbConnection       = require('./Database/mongodb.provider.js');

app.use(bodyParser.json({type: 'application/json'}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(hotelRepositoryProvider);
app.use(roomRepositoryProvider);
app.use(mongodbConnection);
app.use(userRepositoryProvider);
app.use(router);



// app.listen(3000, function() {
//     console.log('App listen at port : 3001');
// })
module.exports = app;