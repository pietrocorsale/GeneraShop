const {  DataTypes } = require('sequelize');
const mysequelize = require('./../sequelize'); // Assumi che hai già configurato una connessione al database

const Language = mysequelize.sequelize.define('Language', {
  LanguageCode: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true,
  },
  NameTranslationKey: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  native_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'languages',
  timestamps: true, // Abilita i campi createdAt e updatedAt
});


mysequelize.sequelize.sync();

module.exports = Language;
