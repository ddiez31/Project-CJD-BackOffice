const Sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Groups', [
      {
        section_id: 75,
        title: 'Millau - Groupe 1',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        section_id: 75,
        title: 'Millau - Groupe 2',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        section_id: 78,
        title: 'Toulouse - Groupe 1',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        section_id: 78,
        title: 'Toulouse - Groupe 2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Groups', null, {});
  }
};
