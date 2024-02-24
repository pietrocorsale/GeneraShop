const { DataTypes } = require('sequelize');
const mysequelize = require('../sequelize'); // Assumi che hai già configurato una connessione al database
const Blueprint = require('./blueprint');
const User = require('./user');
const BlueprintReview = mysequelize.sequelize.define('BlueprintReview', {
  ReviewID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  BlueprintID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Rating: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Comment: {
    type: DataTypes.TEXT,
    collate: 'utf8mb4_unicode_ci',
  },
  ReviewDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'blueprintreviews', // Specifica il nome corretto della tabella
  timestamps: true, // Aggiunge i campi createdAt e updatedAt
});
BlueprintReview.belongsTo(User, { foreignKey: 'UserID' });
BlueprintReview.belongsTo(Blueprint, { foreignKey: 'BlueprintID' });
mysequelize.sequelize.sync();
module.exports = BlueprintReview;
