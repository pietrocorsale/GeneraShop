const { DataTypes } = require('sequelize');
const mysequelize = require('../sequelize'); // Assumi che tu abbia già configurato la connessione al database
const Blueprint = require('./blueprint');
const Variant = require('./variant');
const PrintArea = mysequelize.sequelize.define('PrintArea', {
  PrintAreaID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  VariantID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  BlueprintID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  TranslationKey: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'printareas', // Nome corretto della tabella nel database
  timestamps: true, // Aggiunge createdAt e updatedAt
});

// Definisci le relazioni con altre tabelle, se necessario
PrintArea.belongsTo(Blueprint, { foreignKey: 'BlueprintID' });
PrintArea.belongsTo(Variant, { foreignKey: 'VariantID' });
mysequelize.sequelize.sync();
module.exports = PrintArea;
