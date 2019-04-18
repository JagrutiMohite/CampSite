module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define('Rating', {})
    Rating.associate = function (models) {
        Rating.belongsTo(models.User)
        Rating.belongsTo(models.CampGround)  
    }
    return Rating
  }
