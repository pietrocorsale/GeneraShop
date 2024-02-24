const { DataTypes } = require('sequelize');
const mysequelize = require('../sequelize'); // Assumi che tu abbia già configurato una connessione al database
const User = require('./user');
const ScheduledJob = mysequelize.sequelize.define('ScheduledJob', {
  ScheduledJobsID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ScheduleType: {
    type: DataTypes.ENUM('OneTime', 'Recurring'),
    allowNull: false,
  },
  StartDateTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  EndDateTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  ExecutionDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  RecurrenceDaysOfWeek: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  RecurrenceTimeOfDay: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  ActionType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  IsActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  AlreadyScheduled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  UserID: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
}, {
  tableName: 'scheduledjobs', // Specifica il nome corretto della tabella
  timestamps: true, // Imposta i timestamps (createdAt e updatedAt)
});
ScheduledJob.belongsTo(User, { foreignKey: 'UserID' });
mysequelize.sequelize.sync();
module.exports = ScheduledJob;
