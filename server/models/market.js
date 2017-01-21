"use strict";

module.exports = function(sequelize, DataTypes) {
  let Market = sequelize.define("Market", {
    name: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        Market.belongsToMany(models.User, {through: "UserMarkets"})
      }
    }
  });
  return Market;
}