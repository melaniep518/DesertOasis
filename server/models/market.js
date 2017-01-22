"use strict";

module.exports = function(sequelize, DataTypes) {
  let Market = sequelize.define("Market", {
    name: {
      type: DataTypes.STRING
    },
    lat: {
      type: DataTypes.FLOAT 
    },
    lng: {
      type: DataTypes.FLOAT
    }
  }, {
    classMethods: {
      associate: function(models) {
        Market.belongsTo(models.User)
      }
    }
  });
  return Market;
}