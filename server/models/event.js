const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true
    },
    date_time_start: {
      type: Sequelize.DATE,
      validate: {
        isDate: true
      },
      allowNull: false
    },
    date_time_end: {
      type: Sequelize.DATE,
      validate: {
        isDate: true
      },
      allowNull: false
    },
    speaker: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    latitude: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: true
      },
      allowNull: false
    },
    longitude: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: true
      },
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    num_places: {
      type: Sequelize.INTEGER,
      validate: {
        isInt: true,
        min: 1
      },
      allowNull: true
    },
    points: {
      type: Sequelize.INTEGER,
      validate: {
        isInt: true,
        min: 1
      },
      allowNull: true
    }
  });

  Event.associate = (models) => {
    Event.hasMany(models.Event_member, { foreignKey: 'event_id'});
    // Event.belongsTo(models.Region);
    // Event.belongsTo(models.Section);
    // Event.belongsTo(models.Group);
  };

  return Event;
};
