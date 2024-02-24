const { DataTypes } = require('sequelize');
const mysequelize = require('./../sequelize'); // Assumi che hai già configurato una connessione al database

const Style = mysequelize.sequelize.define('Style', {
  StyleID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  TranslationKey: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  IconName: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
},
{
    timestamps: true,
  tableName: 'styles', // Specifica il nome corretto della tabella
});

mysequelize.sequelize.sync(); // Questo crea o aggiorna la tabella nel database
module.exports = Style;
