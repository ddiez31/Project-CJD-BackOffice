const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Contribution = sequelize.define('Contribution', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: true
      },
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  Contribution.associate = (models) => {
    // Contribution.hasMany(models.User, { foreignKey: 'contribution_id'});
  };
  return Contribution;
};