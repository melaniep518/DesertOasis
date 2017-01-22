"use strict";

module.exports = function(sequelize, DataTypes) {
  let TreasureChest = sequelize.define("TreasureChest", {
    snapBudget: {
      type: DataTypes.INTEGER
    },
    cashBudget: {
      type: DataTypes.INTEGER
    },
    snapSpent: {
      type: DataTypes.INTEGER
    },
    cashSpent: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: function(models) {
        TreasureChest.belongsTo(models.User)
      }
    }
  });
  return TreasureChest;
}