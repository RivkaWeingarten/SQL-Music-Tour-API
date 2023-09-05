'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bands', {
     band_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
           name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      genre: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      available_start_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_time: {
        type: Sequelize.DATE
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },// generated code not on assignment
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE//generated code
      //}
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bands');
  }
};