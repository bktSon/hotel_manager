'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Hotels', [{
      name: 'Achiliku',
      address: '1K8',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Hotels', null, {})
  }
};
