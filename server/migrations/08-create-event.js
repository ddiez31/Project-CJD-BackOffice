module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
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
      date_time_start: {
        type: Sequelize.DATE,
        allowNull: false
      },
      date_time_end: {
        type: Sequelize.DATE,
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
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      longitude: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      num_places: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      points: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      region_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Regions',
          key: 'id'
        },
        allowNull: false 
      },
      section_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sections',
          key: 'id'
        },
        allowNull: false 
      },
      group_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Groups',
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
    return queryInterface.dropTable('Events');
  }
};
