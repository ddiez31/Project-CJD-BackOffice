const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define('Region', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Region.associate = (models) => {
    // Region.hasMany(models.Section, { foreignKey: 'region_id'});
    Region.hasMany(models.Monday_mail, { foreignKey: 'region_id'});
    Region.hasMany(models.Event, { foreignKey: 'region_id'});

  };
  return Region;
};