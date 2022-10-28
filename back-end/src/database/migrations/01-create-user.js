'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        // https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
        type: Sequelize.STRING,
        allowNull: false,
        // unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        // unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};