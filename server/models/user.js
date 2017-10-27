const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING,
      set(val) {
        this.setDataValue('last_name', val.toUpperCase());
      },
      allowNull: false
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      validate: {
        isEmail: true
      },
      set(val) {
        this.setDataValue('email', val.toLowerCase());
      },
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      set(val) {
        this.setDataValue('password', bcrypt.hashSync(val, bcrypt.genSaltSync(10)));
      },
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING,
      validate: {
        isNumeric: true,
        len: [10, 11]
      },
      allowNull: false
    },
    company_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    company_job: {
      type: Sequelize.STRING,
      allowNull: false
    },
    company_address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    company_business_revenue: {
      type: Sequelize.DECIMAL,
      validate: {
        isDecimal: true
      },
      allowNull: false
    },
    num_employee: {
      type: Sequelize.INTEGER,
      validate: {
        isInt: true
      },
      allowNull: false
    },
    other_function: {
      type: Sequelize.STRING,
      allowNull: true
    },
    points: {
      type: Sequelize.INTEGER,
      validate: {
        isInt: true,
        min: 0
      },
      allowNull: false
    },
    hobby: {
      type: Sequelize.STRING,
      allowNull: true
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Event_member, {foreignKey: 'user_id'});
    User.hasMany(models.Group_member, {foreignKey: 'user_id'});
    User.hasMany(models.Section_member, {foreignKey: 'user_id'});
    User.belongsTo(models.Type_user, {foreignKey: 'type_user_id'});
    User.belongsTo(models.Contribution, {foreignKey: 'contribution_id'});
  };
  return User;
};
