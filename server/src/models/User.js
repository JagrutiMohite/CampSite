module.exports = (sequelize, DataTypes) => 
  sequelize.define('User', {
      FirstName: DataTypes.STRING,
      LastName: DataTypes.STRING,
      Phone: DataTypes.STRING,
      email: {
          type: DataTypes.STRING,
          unique: true
      },
      password: DataTypes.STRING
  })
