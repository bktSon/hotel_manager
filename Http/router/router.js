'use strict'
const express                   = require('express')
const router                    = express.Router()
const hotelController           = require('../controller/hotel_Controller.js')
const roomController            = require('../controller/room_Controller.js')
const userController            = require('../controller/user_Controller.js')
const hotelRequireMiddleWare    = require('../middleWare/hotelRequire.MiddleWare.js')
const roomRequireMiddleWare     = require('../middleWare/roomRequireMiddleWare')
const hotelNotExistedMiddleWare = require('../middleWare/hotelNotExistedMIddleWare')
const userNotExistedMiddleWare  = require('../middleWare/userNotExistedMiddleWare');

// router.post('/hotel', hotelRequireMiddleWare, hotelController.insert)
// router.post('/room/:hotelId', hotelNotExistedMiddleWare, roomRequireMiddleWare, hotelController.insertRoom)
// router.get('/rooms/:hotelId', hotelNotExistedMiddleWare, hotelController.getAllRoom)
// router.get('/lowestPrice/:hotelId', hotelNotExistedMiddleWare, hotelController.getLowestPrice)


// Hotel 
router.get('/hotels', hotelController.findAll);
router.get('/hotels/:id', hotelController.findById);

// Room
router.get('/rooms', roomController.findAll);

//User
router.post('/users', userController.insert);
router.get('/users', userController.findAll);
router.get('/users/:id', userNotExistedMiddleWare, userController.findById);
router.get('/users/delete/:id', userNotExistedMiddleWare, userController.destroy);
router.post('/users/update/:id', userNotExistedMiddleWare, userController.update);


module.exports = router;





