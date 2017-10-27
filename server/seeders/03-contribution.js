const Sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contributions', [
      {
        title: 'Annuelle',
        price: 1000,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: 'Spéciale',
        price: 500,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contributions', null, {});
  }
};
