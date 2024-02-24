const { DataTypes } = require('sequelize');
const mysequelize = require('../sequelize'); // Assumi che hai già configurato una connessione al database

const SupportLine = mysequelize.sequelize.define('SupportLine', {
  SupportLineId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  Title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  ServiceStartTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  ServiceEndTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  Contact_type: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  ContactValue: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  ServiceDays: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  Active :{
    type: DataTypes.BOOLEAN,
  },
}, {
  // Altre opzioni del modello
  tableName: 'supportlines',
  timestamps: true,
});
mysequelize.sequelize.sync();
module.exports = SupportLine;
