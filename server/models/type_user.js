const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Type_user = sequelize.define('Type_user', {
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Type_user.associate = (models) => {
    // Type_user.hasMany(models.User, { foreignKey: 'type_user_id'});
  };
  return Type_user;
};
