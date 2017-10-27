const Sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Regions', [
      {
        name: 'ALSACE',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'AQUITAINE',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'AUVERGNE',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'BOURGOGNE FRANCHE COMTE',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'BRETAGNE',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'CENTRE ILE DE FRANCE',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'CHAMPAGNE ARDENNE',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'HAUTS DE FRANCE',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'LANGUEDOC ROUSSILLON',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'LORRAINE',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'MIDI PYRENEES',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'NORMANDIE',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'OUTRE-MER',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'PAYS DE LOIRE',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'POITOU CHARENTES LIMOUSIN',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'PROVENCE COTE D\'AZUR',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'RHONE ALPES',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Regions', null, {});
  }
};