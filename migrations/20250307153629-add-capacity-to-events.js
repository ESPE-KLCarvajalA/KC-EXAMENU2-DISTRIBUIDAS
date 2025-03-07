'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Events', 'capacity', {
      type: Sequelize.INTEGER,
      allowNull: false,  // Si deseas que sea obligatorio, de lo contrario, ponlo en true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Events', 'capacity');
  }
};
