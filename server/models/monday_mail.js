const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Monday_mail = sequelize.define('Monday_mail', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true
    },
    date: {
      type: Sequelize.DATEONLY,
      validate: {
        isDate: true
      },
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  Monday_mail.associate = (models) => {
    // Monday_mail.belongsTo(models.Region);
  };

  return Monday_mail;
};
