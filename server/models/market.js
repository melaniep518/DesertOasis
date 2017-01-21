"use strict";

module.exports = function(sequelize, DataTypes) {
  let Market = sequelize.define("Market", {
    name: {
      type: DataTypes.STRING
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