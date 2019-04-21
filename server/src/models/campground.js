module.exports = (sequelize, DataTypes) => {
    const CampGround = sequelize.define('CampGround', {
        CampName: {
            type: DataTypes.STRING,
            unique: true
        },
        Price: DataTypes.STRING,
        Image: DataTypes.STRING,
        Location: {
            type: DataTypes.STRING,
            unique: true
        },
        Description: DataTypes.STRING,
        YoutubeId: DataTypes.STRING,
        Comment: DataTypes.TEXT,
        FirstName: DataTypes.STRING,
        LastName: DataTypes.STRING,
    })
    CampGround.associate = function (models){
    }
    return CampGround
  }
