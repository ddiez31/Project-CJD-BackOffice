const Sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Classifications', [
      {
        points_for_level: 100,
        title: 'newbie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        points_for_level: 200,
        title: 'super',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        points_for_level: 300,
        title: 'extra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        points_for_level: 400,
        title: 'power',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        points_for_level: 500,
        title: 'max',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Classifications', null, {});
  }
};
