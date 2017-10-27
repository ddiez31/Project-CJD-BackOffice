const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Event_member = sequelize.define('Event_member', {
    is_coming: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  });

  Event_member.associate = (models) => {
    // Event_member.belongsTo(models.Event);
    // Event_member.belongsTo(models.User);
  };
  return Event_member;
};