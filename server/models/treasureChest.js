"use strict";

module.exports = function(sequelize, DataTypes) {
  let TreasureChest = sequelize.define("TreasureChest", {
    snapBudget: {
      type: DataTypes.FLOAT
    },
    cashBudget: {
      type: DataTypes.FLOAT
    },
    snapSpent: {
      type: DataTypes.FLOAT
    },
    cashSpent: {
      type: DataTypes.FLOAT
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