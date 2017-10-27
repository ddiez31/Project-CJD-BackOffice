module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Section_members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      section_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sections',
          key: 'id'
        },
        allowNull: false 
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        allowNull: false 
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      member_type: {
        allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Section_members');
  }
};