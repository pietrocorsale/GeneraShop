const { DataTypes } = require('sequelize');
const mysequelize = require('./../sequelize'); // Assumi che hai già configurato una connessione al database

const EventType = mysequelize.sequelize.define('EventType', {
  EventTypeID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  EventEmailTemplateName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  EventDescription: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  EventTypeName: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  RequiredCredits: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
},
{
  tableName: 'eventtypes', // Specifica il nome corretto della tabella
  timestamps: true,
});
mysequelize.sequelize.sync();
module.exports = EventType;
