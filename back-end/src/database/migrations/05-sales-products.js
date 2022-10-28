'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SalesProducts', {
      saleId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'sale_id',
        references: {
          model: 'Sales',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      productId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'product_id',
        references: {
          model: 'Products',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('SalesProducts');
  }
};