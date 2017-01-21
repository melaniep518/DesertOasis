"use strict";

module.exports = function(sequelize, DataTypes) {
  let Location = sequelize.define("Location", {
    location: {
      type: DataTypes.STRING
    },
    street: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    }, 
    state: {
      type: DataTypes.STRING
    }, 
    zip: {
      type: DataTypes.INTEGER
    },
    lng: {
      type: DataTypes.INTEGER
    },
    lat:{
      type:DataTypes.INTEGER
    }
  });
  return Location;
}