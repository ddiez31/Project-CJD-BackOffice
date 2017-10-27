const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Group.associate = (models) => {
    Group.hasMany(models.Group_member, { foreignKey: 'group_id'});
    // Group.belongsTo(models.Section);
  };
  return Group;
};