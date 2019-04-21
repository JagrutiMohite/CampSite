module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        Text: DataTypes.STRING,
        UserFirstName: DataTypes.STRING
        })
    Comment.associate = function (models){
        Comment.belongsTo(models.User)
    }
    return Comment
  }
