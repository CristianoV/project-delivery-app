'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      price: {
        type: Sequelize.DOUBLE(4,2),
        allowNull: false,
      },
      urlImage: {
        type: Sequelize.STRING(200),
        allowNull: false,
        field: 'url_image',
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};