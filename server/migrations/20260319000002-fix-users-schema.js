'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Pour éviter toute incohérence (migration déjà appliquée avant),
    // on recrée la table dans le schéma attendu par le modèle User (nom/prenom).
    await queryInterface.dropTable({ schema: 'public', tableName: 'users' }).catch(() => undefined);

    await queryInterface.createTable({ schema: 'public', tableName: 'users' }, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      prenom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable({ schema: 'public', tableName: 'users' });
  },
};

