const { DataTypes } = require('sequelize');
const mysequelize = require('./../sequelize'); // Assumi che hai già configurato una connessione al database
const User = require('./user');

const SupportMessage = mysequelize.sequelize.define('SupportMessage', {
  MessageID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Message: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  MessageDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'supportmessages', // Specifica il nome corretto della tabella
  timestamps: true,
});
SupportMessage.belongsTo(User, { foreignKey: 'UserID' });
mysequelize.sequelize.sync();
module.exports = SupportMessage;
