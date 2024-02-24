const { DataTypes } = require('sequelize');
const mysequelize = require('../sequelize'); // Assumi che tu abbia configurato una connessione al database

const Country = mysequelize.sequelize.define('Country', {
  CountryCode: {
    type: DataTypes.STRING(2),
    allowNull: false,
    primaryKey: true,
  },
  TranslationKey: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CurrencyCode: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
}, {
  tableName: 'countries', // Specifica il nome corretto della tabella
  timestamps: true,
});
mysequelize.sequelize.sync();
module.exports = Country;
