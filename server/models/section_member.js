const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Section_member = sequelize.define('Section_member', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    member_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Section_member.associate = (models) => {
    // Section_member.belongsTo(models.User);
    // Section_member.belongsTo(models.Section);
  };
  return Section_member;
};