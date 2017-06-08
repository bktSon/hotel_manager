'use strict'

// Dependency
const express    = require('express')
const app        = express();
const router     = require('./Http/router/router')
const bodyParser = require('body-parser')
const morgan     = require('morgan')
const fs         = require('fs')
const path       = require('path')
const rfs        = require('rotating-file-stream')
const hotelRepositoryProvider = require('./App/hotel/hotel_repository_Provider');
const roomRepositoryProvider  = require('./App/room/room_repository_Provider') ;
const userRepositoryProvider  = require('./App/user/user_repository_Provider');
const mongodbConnection       = require('./Database/mongodb.provider.js');
const logDirectory            = path.join(__dirname, 'log')

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

let accessLogStream = rfs('application.log', {
  interval: '1d', // rotate daily
  path: logDirectory
})

// Boot Time
app.use(morgan('combined', {stream: accessLogStream}))
app.use(morgan(':method :url :response-time'))
app.use(bodyParser.json({type: 'application/json'}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(hotelRepositoryProvider);
app.use(roomRepositoryProvider);
app.use(mongodbConnection);
app.use(userRepositoryProvider);
app.use(router);


module.exports = app;