module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {})
    Comment.associate = function (models) {
        Comment.belongsTo(models.User)
        Comment.belongsTo(models.CampGround)  
    }
    return Comment
  }
