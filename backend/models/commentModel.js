var Sequelize= require('sequelize')

module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    comment: DataTypes.STRING
  }, {
    // classMethods: {
    //   associate: function(models) {
    //     Comment.belongsTo(models.User, {
    //       onDelete: "CASCADE",
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   }
    // }
  });

  return Comment;
};