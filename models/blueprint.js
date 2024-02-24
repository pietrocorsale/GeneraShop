// Importa i moduli Sequelize e DataTypes
const { DataTypes } = require('sequelize');
const mysequelize = require('../sequelize'); // Assicurati di avere una connessione al database configurata

// Definisci il modello Blueprint
const Blueprint = mysequelize.sequelize.define('Blueprint', {
  BlueprintID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  FullTitle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  FullTitleTranslationKey: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Label: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  LabelTranslationKey: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PrintifyBlueprintID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  PrintifyPrintProviderID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  PrintifyPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  StripeProductID: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DefaultPosition : {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'blueprints', // Specifica il nome corretto della tabella
  timestamps: true,
});

// Sincronizza il modello con il database
mysequelize.sequelize.sync();

// Esporta il modello Blueprint
module.exports = Blueprint;
