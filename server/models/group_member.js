const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Group_member = sequelize.define('Group_member', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    member_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Group_member.associate = (models) => {
    // Group_member.belongsTo(models.Group);
    // Group_member.belongsTo(models.User);
  };
  return Group_member;
};