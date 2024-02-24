const {  DataTypes } = require('sequelize');
const mysequelize = require('./../sequelize'); // Assumi che hai già configurato una connessione al database

const User = require('./user'); // Assicurati di avere il modello User
const EventType = require('./event-type'); // Assicurati di avere il modello EventType
const UserSession = require('./user-session'); // Assicurati di avere il modello UserSession

const Event = mysequelize.sequelize.define('Event', {
  EventID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  UserID: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  EventTypeID: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  EventDate: {
    type: DataTypes.DATE,
    defaultValue: null,
  },
  SessionID: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  EventStatus: {
    type: DataTypes.ENUM('COMPLETED', 'STARTED', 'ABORTED'),
    allowNull: true,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'events',
  timestamps: true,
});

Event.belongsTo(User, { foreignKey: 'UserID' });
Event.belongsTo(EventType, { foreignKey: 'EventTypeID' });
Event.belongsTo(UserSession, { foreignKey: 'SessionID' });

mysequelize.sequelize.sync();

module.exports = Event;

