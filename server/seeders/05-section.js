const Sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sections', [
      {
        region_id: 1,
        name: 'Colmar (68)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 1,
        name: 'Mulhouse (68)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 1,
        name: 'Strasbourg (67)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 2,
        name: 'Agen Lot-et-garonne (47)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 2,
        name: 'Bassin D\'arcachon (33)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 2,
        name: 'Bearn (64)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 2,
        name: 'Bordeaux (33)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 2,
        name: 'Brive-correze (19)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 2,
        name: 'Landes (40)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 2,
        name: 'Pays Basque (64)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 2,
        name: 'Perigord (24)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 2,
        name: 'Tarbes-bigorre (65)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 3,
        name: 'Clermont-ferrand (63)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 3,
        name: 'Montluçon (03)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 3,
        name: 'Thiers (63)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 3,
        name: 'Vichy (03)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 4,
        name: 'Auxerre - Yonne (89)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 4,
        name: 'Besancon (25)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 4,
        name: 'Dijon (21)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 4,
        name: 'Jura (39)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 4,
        name: 'Maconnais Val De Saone (71)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 4,
        name: 'Montbeliard - Belfort - Hericourt (25)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 5,
        name: 'Brest (29)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 5,
        name: 'Bretagne Centre (56)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 5,
        name: 'Cote D\'Emeraude (35)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 5,
        name: 'Cotes D\'Armor (22)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 5,
        name: 'Lorient (56)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 5,
        name: 'Quimper (29)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 5,
        name: 'Rennes (35)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 5,
        name: 'Vannes (56)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 6,
        name: 'Berry (18)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 6,
        name: 'Blois (41)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 6,
        name: 'Chartres (28)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 6,
        name: 'Essonne (91)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 6,
        name: 'La Defense (92)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 6,
        name: 'Meaux - Marne La Vallee (77)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 6,
        name: 'Montargis-gatinais (45)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 6,
        name: 'Orleans (45)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 6,
        name: 'Paris (75)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 6,
        name: 'Seine Saint Denis (93)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 6,
        name: 'Sud Seine Et Marne (77)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 6,
        name: 'Tours (37)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 6,
        name: 'Val D\'Oise (95)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 6,
        name: 'Val De Marne (94)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 6,
        name: 'Yvelines (78)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 7,
        name: 'Ardennes (08)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 7,
        name: 'Aube (10)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 7,
        name: 'Marne (51)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 8,
        name: 'Amiens (80)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 8,
        name: 'Artois (62)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 8,
        name: 'Audomarois (62)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 8,
        name: 'Compiegne (60)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 8,
        name: 'Cote D\'Opale (62)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 8,
        name: 'Dunkerque (59)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 8,
        name: 'Grand Beauvaisis (60)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 8,
        name: 'Hainaut-cambresis (59)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 8,
        name: 'Lille Metropole (59)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 8,
        name: 'Saint Quentin (02)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 8,
        name: 'Sud Oise (60)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 9,
        name: 'Ales-cevennes (30)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 9,
        name: 'Aude (11)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 9,
        name: 'Beziers (34)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 9,
        name: 'Lozere (48)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 9,
        name: 'Montpellier (34)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 9,
        name: 'Nimes Camargue (30)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 9,
        name: 'Perpignan (66)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 10,
        name: 'Bar Le Duc/saint Dizier (55)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 10,
        name: 'Epinal (88)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 10,
        name: 'Metz (57)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 10,
        name: 'Moselle Est (57)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 10,
        name: 'Nancy (54)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 10,
        name: 'Saint-dié-des-vosges (88)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 10,
        name: 'Trois Frontieres (57)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 11,
        name: 'Aveyron (12)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 11,
        name: 'Millau (12)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 11,
        name: 'Tarn (81)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 11,
        name: 'Tarn-et-garonne (82)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 11,
        name: 'Toulouse (31)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 12,
        name: 'Caen (14)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 12,
        name: 'Dieppe (76)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 12,
        name: 'Estuaire Du Havre (76)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 12,
        name: 'Eure-seine (27)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 12,
        name: 'Evreux (27)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 12,
        name: 'Rouen (76)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 13,
        name: 'La Reunion (97)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 13,
        name: 'Mayotte (97)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 14,
        name: 'Angers (49)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 14,
        name: 'Challans - Vendee Ocean (85)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 14,
        name: 'Cholet (49)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 14,
        name: 'La Mayenne (53)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 14,
        name: 'La Roche-sur-yon Vendee Littoral (85)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 14,
        name: 'Le Mans (72)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 14,
        name: 'Nantes (44)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 14,
        name: 'Nord Deux Sevres (79)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 14,
        name: 'Pays D’ancenis (44)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 14,
        name: 'Saint Nazaire (44)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 14,
        name: 'Sud Deux Sevres (79)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 14,
        name: 'Vendee Bocage (85)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 15,
        name: 'Angouleme (16)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 15,
        name: 'Cognac (16)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 15,
        name: 'La Rochelle Rochefort (17)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 15,
        name: 'Limoges (87)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 15,
        name: 'Poitiers (86)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 15,
        name: 'Saintes-royan (17)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 16,
        name: 'Cannes Sophia-antipolis (06)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 16,
        name: 'Manosque (04)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 16,
        name: 'Marseille (13)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 16,
        name: 'Nice (06)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 16,
        name: 'Pays D\'Aix-en-provence (13)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 16,
        name: 'Provence Etang De Berre (13)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 16,
        name: 'Toulon - Var (83)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 16,
        name: 'Vaucluse (84)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 17,
        name: 'Ain (01)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 17,
        name: 'Albertville (73)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 17,
        name: 'Annecy (74)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 17,
        name: 'Chambery (73)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 17,
        name: 'Drome Ardeche (26)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 17,
        name: 'Grenoble (38)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 17,
        name: 'Leman (74)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 17,
        name: 'Lyon (69)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 17,
        name: 'Mont-blanc (74)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 17,
        name: 'Roanne (42)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 17,
        name: 'Saint Etienne (42)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        region_id: 17,
        name: 'Villefranche Sur Saone (69)',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sections', null, {});
  }
};
