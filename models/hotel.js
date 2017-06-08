'use strict';
module.exports = function(sequelize, DataTypes) {
  let Hotel = sequelize.define('Hotels', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  });
  return Hotel;
};