const { DataTypes } = require('sequelize');
const mysequelize = require('../sequelize'); // Assumi che tu abbia già configurato una connessione al database

const Setting = mysequelize.sequelize.define('Setting', {
  SettingID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  SettingName: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  SettingValue: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'settings', // Specifica il nome corretto della tabella
  timestamps: true, 
});

module.exports = Setting;