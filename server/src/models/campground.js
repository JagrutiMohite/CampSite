module.exports = (sequelize, DataTypes) => {
    const CampGrounds = sequelize.define('CampGrounds', {
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
        FirstName: DataTypes.STRING,
        LastName: DataTypes.STRING,
    })
    return CampGrounds
  }
