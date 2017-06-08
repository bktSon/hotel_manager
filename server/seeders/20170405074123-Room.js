'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Rooms', [{
      name: 'Athena',
      price: '2000',
      hotel_id: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('Rooms', null, {});
  }
};
