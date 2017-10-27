const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Classification = sequelize.define('Classification', {
    points_for_level: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      },
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Classification.associate = (models) => {
  };
  return Classification;
};