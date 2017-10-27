module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
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
        allowNull: false
      },
      num_employee: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      other_function: {
        type: Sequelize.STRING,
        allowNull: true
      },
      points: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      hobby: {
        type: Sequelize.STRING,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      type_user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Type_users',
          key: 'id'
        },
        allowNull: false
      },
      contribution_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Contributions',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
