const { DataTypes } = require('sequelize');
const mysequelize = require('./../sequelize'); // Assumi che tu abbia già configurato una connessione al database
const User = require('./user');
const CreditsEvent = mysequelize.sequelize.define('CreditsEvent', {
  CreditID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  CreditAmount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  EventType: {
    type: DataTypes.ENUM('Added', 'Removed'),
    allowNull: true,
  },
  EventDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
},
{
  tableName: 'creditsevent', // Specifica il nome corretto della tabella
  timestamps: true, // Imposta a true se vuoi utilizzare i campi createdAt e updatedAt
});
CreditsEvent.belongsTo(User, { foreignKey: 'UserID' });
mysequelize.sequelize.sync(); // Sincronizza il modello con il database
module.exports = CreditsEvent;
