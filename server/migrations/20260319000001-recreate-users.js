'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // On recrée la table pour qu'elle corresponde au modèle Sequelize (nom/prenom).
    try {
      await queryInterface.dropTable({ schema: 'public', tableName: 'users' });
    } catch {
      // Si la table n'existe pas encore, on ignore.
    }

    await queryInterface.createTable({ schema: 'public', tableName: 'users' }, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false
      },
      prenom: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable({ schema: 'public', tableName: 'users' });
  }
};

