'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50]
      }
    },
    user_name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50]
      }
    },
    e_mail: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50],
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50]
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.belongsToMany(models.Market, {through: "UserMarkets"});
        User.hasMany(models.Location, {as: "Locations"})
      }
    }
  });
  return User;
};