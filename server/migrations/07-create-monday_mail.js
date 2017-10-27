module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Monday_mails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      decription: {
        type: Sequelize.STRING,
        allowNull: false
      },
      region_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Regions',
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
    return queryInterface.dropTable('Monday_mails');
  }
};
