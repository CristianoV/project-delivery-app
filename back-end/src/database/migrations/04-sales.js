'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
      userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'user_id',
          /* references: {
              model: 'users',
              key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE', */
        },
      sellerID: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'seller_id',
          /* references: {
              model: 'users',
              key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE', */
      },        
      totalPrice: {
        type: Sequelize.DOUBLE(9,2),
        allowNull: false,
        field: 'total_price',
      },
      deliveryAddress: {
        type: Sequelize.STRING(100),
        allowNull: false,
        field: 'delivery_address',
      },
      deliveryNumber: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: 'delivery_number',
      },
      saleDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'sale_date',
      },
      status: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => queryInterface.dropTable('sales'),
};