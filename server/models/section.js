const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define('Section', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Section.associate = (models) => {
    Section.hasMany(models.Event, { foreignKey: 'section_id'});
    Section.hasMany(models.Group, { foreignKey: 'section_id'});
    Section.hasMany(models.Section_member, { foreignKey: 'section_id'});
    Section.belongsTo(models.Region, { foreignKey: 'region_id'});
  };
  return Section;
};