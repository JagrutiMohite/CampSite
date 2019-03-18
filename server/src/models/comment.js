module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        Text: DataTypes.STRING,
        FirstName: DataTypes.STRING,
        LastName: DataTypes.STRING,
    })
    return Comment
  }
